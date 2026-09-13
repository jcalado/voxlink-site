# Audio Settings

Configure audio in **Settings > Audio**.

> On Windows and Linux, VoxLink shows only the **Volume** section — mic gain and RX volume. Audio routing, Bluetooth audio mode, input source, and extra loudness are Android concepts, so the desktop app leaves those to your operating system's own sound settings.

![Audio settings](/docs/settings-screen.webp)

## Mic Gain

**Settings > Audio > Mic Gain** — **0% to 200%**, default **100%**.

Increase if other stations report your audio is too quiet. Decrease if you're overdriving. A built-in limiter (−1 dB ceiling, 10:1 ratio) prevents clipping regardless of gain.

## RX Volume

**Settings > Audio > RX Volume** — **0% to 200%**, default **70%**.

Controls received audio volume independently of Android system volume.

## Extra Loudness

**Settings > Audio > Loudness > Extra loudness** — off by default.

Pushes speaker volume past the normal ceiling for noisy environments — a vehicle, a hamfest field, an engine room. It works on top of RX Volume rather than replacing it, and may reduce audio quality, so leave it off until you actually need the headroom.

## Level Metering

The PTT screen shows two real-time meters:

- **TX** — your mic level while transmitting. Aim for peaks between −10 dB and −6 dB.
- **RX** — incoming audio level while receiving.

## Audio Output

Choose where you hear audio in **Settings > Audio > Audio Output**:

| Option | Use case |
|---|---|
| **Auto (prefer headset)** | Follows whatever you plug in or connect. The sensible default. |
| **Phone speaker** | Hands-free, loudspeaker |
| **Earpiece** | Private listening |
| **Wired headset** | 3.5 mm or USB-C headsets |
| **USB headset** | USB audio interfaces |
| **Bluetooth** | Wireless headsets |

### Bluetooth audio mode

When you're on a Bluetooth headset, **Settings > Audio > Bluetooth audio mode** decides how Android treats the link:

| Mode | Behaviour |
|---|---|
| **Voice call** | Full duplex with the headset's own mic. The system treats VoxLink as a phone call. |
| **Media** | A2DP playback only — no "in call" UI, and TX uses the phone's mic. |

> **Voice call** is what you want for a headset you'll transmit from. Pick **Media** when you only listen through the headset and would rather keep the phone's mic and avoid the in-call banner.

## Input Source

Choose your mic source in **Settings > Audio > Input**:

| Option | Notes |
|---|---|
| **Default (Voice Call)** | Recommended — includes echo cancellation and noise suppression |
| **Microphone** | Raw input, no processing |
| **Voice Recognition** | Raw high-quality input |
| **Unprocessed (Raw)** | No platform processing at all |
| **Voice Performance (Low Latency)** | Lowest-latency capture path |

> Stick with **Default (Voice Call)** unless you have a reason to change it. Android's built-in noise suppression makes a big difference on mobile.

## Codec

VoxLink uses Opus at 16 kHz mono, 20 ms frames, 20 kbps VBR. These settings are fixed — no adjustment needed.

## Under the Hood

These are handled automatically and can't be adjusted:

- **Resampler** — converts between your device's sample rate and the 16 kHz codec rate
- **Jitter buffer** — 24-frame capacity behind a 400 ms pre-buffer at the head of each over, which absorbs the burst of backlogged packets you get when a Wi-Fi radio wakes out of power-save
- **Packet loss concealment** — fills in missing frames for up to **200 ms**, then fades to silence rather than stretching the last good frame into a robotic smear. Audio resumes cleanly when real packets arrive.
- **Limiter** — −1 dB ceiling, 10:1 ratio, 50 ms release, applied before encoding. It trips at the same level that lights the **PEAK** lamp, so the lamp means precisely "the limiter is working".
