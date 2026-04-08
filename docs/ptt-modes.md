# PTT Modes

VoxLink supports three PTT modes. Change the active mode in **Settings > PTT > Mode**.

---

## Latch (Default)

Tap the **PTT** button once to start transmitting. Tap again to stop. This is the default mode — useful for longer overs where you don't want to keep a finger on the screen.

---

## Hold

Press and hold the **PTT** button to transmit. Release to stop. Mirrors traditional radio behaviour — transmission ends the moment you lift your finger.

---

## VOX (Voice-Activated)

Transmission starts automatically when your microphone picks up audio above the sensitivity threshold and stops after a configurable hang time of silence.

Two settings control VOX behaviour:

| Setting | Path | Default | Range |
|---|---|---|---|
| **VOX Threshold** | **Settings → Push to Talk → VOX Threshold** | -30 dB | -50 to -10 dB |
| **VOX Delay** | **Settings → Push to Talk → VOX Delay** | 1000 ms | 500–3000 ms |

**VOX Threshold** sets how loud audio must be to trigger TX — raise it (towards -10 dB) to avoid false triggers from background noise. **VOX Delay** (hang time) is how long VoxLink keeps transmitting after speech stops before dropping TX.

> In noisy environments, raise the threshold and shorten the delay to avoid accidentally keying up. In quiet environments, lower the threshold for easier triggering.

---

## Timeout Timer (TOT)

TOT prevents excessively long transmissions. Configure it at **Settings → Push to Talk → Timeout Timer**.

- **Duration** — maximum continuous TX time. Default is **3 minutes** (180 seconds).
- **Warning** — fires **15 seconds** before timeout by default; configurable from **5–30 seconds** via **Settings → Push to Talk → TOT Warning**. Can be toggled on/off entirely.
- A countdown is displayed on the **PTT** screen during the final seconds.
- When the timer expires, TX is cut and you must release and re-press **PTT** to transmit again.

> TOT is useful on nets that have transmit-time limits, and helps prevent accidental locked transmissions in Latch mode.
