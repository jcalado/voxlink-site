#!/usr/bin/env bash
#
# Delete hamtetra-CT access request uploads older than RETENTION_DAYS.
# Run from cron, e.g. daily at 03:30:
#
#   30 3 * * *  /usr/local/sbin/cleanup-old-requests.sh >> /var/log/hamtetra-cleanup.log 2>&1
#
# A license document only needs to live long enough to be verified. Once
# the operator is whitelisted, the document should be deleted — both for
# GDPR minimisation and to limit blast radius if the server is compromised.

set -euo pipefail

UPLOAD_DIR="${UPLOAD_DIR:-/var/lib/hamtetra/access-requests}"
RATE_LIMIT_DIR="${RATE_LIMIT_DIR:-/var/lib/hamtetra/rate-limit}"
RETENTION_DAYS="${RETENTION_DAYS:-14}"
RATE_LIMIT_RETENTION_DAYS="${RATE_LIMIT_RETENTION_DAYS:-2}"

timestamp() { date -u +"%Y-%m-%dT%H:%M:%SZ"; }

if [[ ! -d "$UPLOAD_DIR" ]]; then
    echo "[$(timestamp)] upload dir missing: $UPLOAD_DIR" >&2
    exit 1
fi

deleted=0
while IFS= read -r -d '' file; do
    rm -f -- "$file"
    deleted=$((deleted + 1))
done < <(find "$UPLOAD_DIR" -maxdepth 1 -type f \
            \( -name '*.pdf' -o -name '*.jpg' -o -name '*.jpeg' -o -name '*.png' -o -name '*.json' \) \
            -mtime "+${RETENTION_DAYS}" -print0)

rate_deleted=0
if [[ -d "$RATE_LIMIT_DIR" ]]; then
    while IFS= read -r -d '' file; do
        rm -f -- "$file"
        rate_deleted=$((rate_deleted + 1))
    done < <(find "$RATE_LIMIT_DIR" -maxdepth 1 -type f \
                -mtime "+${RATE_LIMIT_RETENTION_DAYS}" -print0)
fi

echo "[$(timestamp)] removed ${deleted} request file(s) older than ${RETENTION_DAYS}d, ${rate_deleted} rate-limit file(s) older than ${RATE_LIMIT_RETENTION_DAYS}d"
