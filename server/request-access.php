<?php
declare(strict_types=1);

// ---------------------------------------------------------------------------
// hamtetra-CT reflector access request handler
//
// Deploy outside the web root if possible, or under a path that is NOT served
// publicly. Uploads MUST be stored outside the web-accessible directory.
//
// Required server config:
//   - PHP 8.1+
//   - upload_max_filesize = 6M, post_max_size = 8M
//   - mail() configured, or replace send_notification() with SMTP/curl call
// ---------------------------------------------------------------------------

const ALLOWED_ORIGIN     = 'https://voxlink.jcalado.com';
const UPLOAD_DIR         = '/var/lib/hamtetra/access-requests';  // NOT under web root
const NOTIFY_EMAIL       = 'signup@hamtetra.pt';
const MAX_FILE_BYTES     = 5 * 1024 * 1024;
const ALLOWED_MIME       = ['application/pdf', 'image/jpeg', 'image/png'];
const ALLOWED_EXT        = ['pdf', 'jpg', 'jpeg', 'png'];
const RATE_LIMIT_DIR     = '/var/lib/hamtetra/rate-limit';
const RATE_LIMIT_WINDOW  = 3600; // seconds
const RATE_LIMIT_MAX     = 5;    // submissions per IP per window

// ---- CORS (only allow the marketing site origin) --------------------------
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin === ALLOWED_ORIGIN) {
    header('Access-Control-Allow-Origin: ' . ALLOWED_ORIGIN);
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    http_response_code(204);
    exit;
}
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    fail(405, 'Method not allowed');
}
if ($origin !== '' && $origin !== ALLOWED_ORIGIN) {
    fail(403, 'Origin not allowed');
}

// ---- Rate limit per IP ----------------------------------------------------
$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
if (!enforce_rate_limit($ip)) {
    fail(429, 'Too many requests. Try again later.');
}

// ---- Validate fields ------------------------------------------------------
$callsign = strtoupper(trim((string)($_POST['callsign'] ?? '')));
$email    = trim((string)($_POST['email'] ?? ''));
$notes    = trim((string)($_POST['notes'] ?? ''));
$consent  = isset($_POST['consent']);

if (!preg_match('/^[A-Z0-9]{3,7}(\/[A-Z0-9]{1,4})?$/', $callsign)) {
    fail(400, 'Invalid callsign.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    fail(400, 'Invalid email.');
}
if (strlen($notes) > 500) {
    fail(400, 'Notes too long.');
}
if (!$consent) {
    fail(400, 'Consent required.');
}

// ---- Validate file --------------------------------------------------------
if (!isset($_FILES['license']) || $_FILES['license']['error'] !== UPLOAD_ERR_OK) {
    fail(400, 'License file missing or upload error.');
}
$file = $_FILES['license'];
if ($file['size'] <= 0 || $file['size'] > MAX_FILE_BYTES) {
    fail(400, 'File too large or empty.');
}

// Detect real MIME by content, not by client-provided type
$finfo = new finfo(FILEINFO_MIME_TYPE);
$mime  = $finfo->file($file['tmp_name']) ?: '';
if (!in_array($mime, ALLOWED_MIME, true)) {
    fail(400, 'Unsupported file type.');
}
$ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
if (!in_array($ext, ALLOWED_EXT, true)) {
    fail(400, 'Unsupported file extension.');
}

// ---- Store ----------------------------------------------------------------
if (!is_dir(UPLOAD_DIR) && !mkdir(UPLOAD_DIR, 0750, true)) {
    fail(500, 'Server storage unavailable.');
}

$id        = date('Ymd-His') . '-' . bin2hex(random_bytes(4));
$safeCall  = preg_replace('/[^A-Z0-9]/', '_', $callsign);
$fileBase  = "{$id}_{$safeCall}";
$destFile  = UPLOAD_DIR . "/{$fileBase}.{$ext}";
$destMeta  = UPLOAD_DIR . "/{$fileBase}.json";

if (!move_uploaded_file($file['tmp_name'], $destFile)) {
    fail(500, 'Could not store upload.');
}
@chmod($destFile, 0640);

$meta = [
    'id'        => $id,
    'callsign'  => $callsign,
    'email'     => $email,
    'notes'     => $notes,
    'file'      => basename($destFile),
    'mime'      => $mime,
    'size'      => $file['size'],
    'ip'        => $ip,
    'ua'        => substr((string)($_SERVER['HTTP_USER_AGENT'] ?? ''), 0, 200),
    'received'  => gmdate('c'),
];
file_put_contents($destMeta, json_encode($meta, JSON_PRETTY_PRINT));
@chmod($destMeta, 0640);

send_notification($meta);

http_response_code(200);
header('Content-Type: application/json');
echo json_encode(['ok' => true, 'id' => $id]);
exit;

// ---------------------------------------------------------------------------

function fail(int $code, string $msg): void {
    http_response_code($code);
    header('Content-Type: application/json');
    echo json_encode(['ok' => false, 'error' => $msg]);
    exit;
}

function enforce_rate_limit(string $ip): bool {
    if (!is_dir(RATE_LIMIT_DIR) && !mkdir(RATE_LIMIT_DIR, 0750, true)) {
        return true; // fail open rather than block legitimate users
    }
    $key  = hash('sha256', $ip);
    $path = RATE_LIMIT_DIR . "/{$key}";
    $now  = time();
    $hits = [];
    if (is_file($path)) {
        $hits = array_filter(
            (array)json_decode((string)file_get_contents($path), true),
            fn($t) => is_int($t) && ($now - $t) < RATE_LIMIT_WINDOW
        );
    }
    if (count($hits) >= RATE_LIMIT_MAX) return false;
    $hits[] = $now;
    file_put_contents($path, json_encode(array_values($hits)));
    return true;
}

function send_notification(array $meta): void {
    $subject = "[hamtetra-CT] Access request: {$meta['callsign']}";
    $body    = "New reflector access request\n\n"
             . "Callsign: {$meta['callsign']}\n"
             . "Email:    {$meta['email']}\n"
             . "Notes:    {$meta['notes']}\n"
             . "File:     {$meta['file']} ({$meta['mime']}, {$meta['size']} bytes)\n"
             . "IP:       {$meta['ip']}\n"
             . "Received: {$meta['received']}\n\n"
             . "Review at: " . UPLOAD_DIR . "/{$meta['file']}\n";
    @mail(NOTIFY_EMAIL, $subject, $body, "From: noreply@hamtetra.pt\r\n");
}
