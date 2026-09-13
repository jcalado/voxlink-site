# PTT Modes

VoxLink has three push-to-talk modes. Switch between them in **Settings > PTT > Mode**.

![PTT screen](/docs/ptt-screen.webp)

## Latch (Default)

Tap the **PTT** button to start transmitting, tap again to stop. Good for longer overs where holding the button isn't practical.

## Hold

Press and hold **PTT** to transmit, release to stop. Works like a traditional radio handset.

## VOX (Voice-Activated)

Transmits automatically when you speak above a set threshold. Stops after a period of silence (hang time).

| Setting | Path | Default | Range |
|---|---|---|---|
| **Threshold** | **Settings > PTT > VOX Threshold** | −30 dB | −50 to −10 dB |
| **Delay** | **Settings > PTT > VOX Delay** | 1000 ms | 500–3000 ms |

**Threshold** controls how loud you need to speak to trigger TX. Raise it in noisy environments to avoid false triggers. **Delay** is how long VoxLink holds TX open after you stop speaking.

> In noisy environments, raise the threshold and shorten the delay. In quiet settings, lower the threshold for easier triggering.

## Timeout Timer (TOT)

Automatically ends your transmission after a set duration. Configure in **Settings > PTT > Timeout Timer**.

- **Duration** — default **3 minutes**. When the timer runs out, TX stops and a countdown shows during the final seconds.
- **Warning** — vibrates **15 seconds** before timeout (configurable from **5–30 s** in **Settings > PTT > TOT Warning**, or toggle off entirely).

> TOT helps prevent accidental locked transmissions in Latch mode and is useful on nets with transmit-time limits.

## PTT Screen Controls

What appears on the PTT screen is yours to choose, under **Settings > PTT screen controls**.

| Setting | What it does |
|---|---|
| **Recording** | Capture audio locally while connected — see [Recording](/docs/recording) |
| **File playback** | Transmit an audio file to a talkgroup |
| **Show quit option** | Adds a **Quit** item to the PTT screen's connection menu |
| **Show mute button** | Puts a **mute** button in the header |
| **Show timers** | TX elapsed and TOT countdown on the PTT screen |
| **Hide PTT button** | Removes the on-screen button — only takes effect when an external PTT key is bound or VOX is active |

### Mute

**Show mute button** adds a speaker icon to the PTT screen header. Tap it to silence incoming audio without touching your volume — useful when someone walks into the room mid-net and you'd rather not lose your volume setting to get quiet. Tap again to unmute.

Muting silences the speaker and nothing else. Metering and recording run from the audio before it's zeroed, so the RX bar still shows that someone is talking and a recording in progress still captures them — muting is about not hearing a call, not about pretending it didn't happen. You can still transmit while muted.

Mute is deliberately not remembered across restarts. It's an operational action — you silence the radio for a meeting, not for good — and a radio that came back from a restart still silent would be broken in the worst way. The **RX Volume** slider in [Audio Settings](/docs/audio-settings) is the persistent control.
