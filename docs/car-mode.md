# Car Mode

Car Mode is a full-screen, glanceable driving interface. Big text, high contrast, and a large PTT target — everything you need to see at arm's length and nothing you don't. The screen stays on the whole time.

## Entering Car Mode

You can open Car Mode several ways:

- **From the PTT screen** — tap the **car icon** in the top bar.
- **From the navigation drawer** — open the menu (☰) and choose **Car Mode**.
- **With a hardware key** — bind a key under **Settings > Car Mode > Car Mode toggle key** to enter and exit instantly.
- **Automatically** — Car Mode can open on its own when you plug in a charger, when a chosen Bluetooth device connects, or when the app launches. See [Settings](#settings) below.

## The screen

Car Mode uses three fixed slots that never shift position, so the layout stays stable while you drive:

- **Status chip** — shows **ON AIR** with an elapsed timer while you transmit, **RECEIVING** while someone else is talking, or the scan status when [scanning](/docs/talkgroups-nodes) is active.
- **Callsign** — the large, dominant line. Shows who is transmitting now, or the last station heard. Reads **Listening…** until the first transmission comes in.
- **Detail line** — the talker's name or location (resolved from the node list) and, when idle, how long ago they were last heard (e.g. *12s ago*, *3m ago*).

The background flashes dark red while you transmit, giving you an unmistakable at-a-glance TX cue.

Below the hero you'll find the **large PTT button** and the talkgroup selector. If you've disabled the PTT button in your PTT settings, it stays hidden here too.

## Transmitting

Transmit exactly as you would on the main screen — Car Mode honours your chosen [PTT mode](/docs/ptt-modes):

- **Latch** — tap the big button to start, tap again to stop.
- **Hold** — press and hold to transmit, release to stop.
- **VOX** — just speak; no button needed.
- **Hardware PTT** — a bound PTT key works here too.

Your transmit time is shown in the **ON AIR** chip.

## Switching talkgroups

- On phones and tablets, tap a talkgroup in the **favourites rail** to switch instantly.
- On compact devices, use the up/down **cycler** to step through your presets.

Talkgroup switching is disabled while you're transmitting (the controls dim).

## Scanning

If [talkgroup scanning](/docs/talkgroups-nodes) is running, the status chip doubles as a scan badge — showing **Scanning**, **On** a talkgroup when parked on activity, or **Hold** while it lingers after a call ends. Tap the badge to stop scanning and stay on the current talkgroup.

## Exiting Car Mode

- Tap the **close (✕)** button in the top-left corner.
- Press your bound **Car Mode toggle key**, if configured.

Leaving Car Mode restores your normal screen brightness and wakelock settings.

## Settings

Car Mode options live under **Settings > Car Mode**.

| Setting | What it does |
|---|---|
| **Full brightness** | Forces maximum screen brightness in Car Mode for daylight visibility. |
| **Enter when charging** | Opens Car Mode automatically when a charger is plugged in. |
| **Enter on startup** | Opens Car Mode automatically when the app launches. |
| **Enter on Bluetooth** | Opens Car Mode when a chosen device connects (e.g. your car stereo). |
| **Trigger devices** | Pick which paired Bluetooth devices act as triggers for the option above. |
| **Car Mode toggle key** | Bind a hardware key to enter and exit Car Mode. |

> Pair **Enter on Bluetooth** with your car's stereo so VoxLink flips into Car Mode the moment you start the engine — and back out when you leave.
