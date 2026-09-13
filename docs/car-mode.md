# Car Mode

Car Mode is a full-screen driving face: an **instrument panel**, not an app screen. Big type, fixed geometry, high contrast — everything readable at arm's length and nothing that moves around while you drive. The screen stays on the whole time.

![Car Mode](/docs/car-mode-panel.webp)

## Entering Car Mode

You can open Car Mode several ways:

- **From the PTT screen** — tap the **car icon** in the top bar.
- **From the navigation menu** — open the menu (☰) and choose **Car Mode**.
- **With a hardware key** — bind a key under **Settings > Hardware controls > Car Mode toggle key** to enter and exit instantly.
- **Automatically** — Car Mode can open on its own when you plug in a charger, when a chosen Bluetooth device connects, or when the app launches. See [Settings](#settings) below.

## Two faces, same instruments

Car Mode draws itself differently depending on how much room it has, but the instruments and their rules never change:

| | Phones, tablets, dash mounts | Compact radios (Hytera P50 class) |
|---|---|---|
| **Talkgroups** | A **channel bank** — every favourite drawn at once, one press each | A **rocker** — ‹ and › step through your presets |
| **Activity** | Its own log band, newest at the top | Folded into the hero, which shows the last station heard at rest |
| **Meters** | RX and MIC stacked, both visible at once | One strip that flips between RX and MIC |

In landscape, the large face splits into two columns — instruments on the left, controls on the right, the way a radio head has always been laid out.

## Reading the panel

### The legend rail

Across the top sits a fixed rail of legends — **NET**, **SCAN**, **VOX**, **APRS** — drawn whether they're running or not, exactly like the screen-printed markings on a radio. Unlit means "this radio has that function and it isn't on", which is information too.

| Legend | Lit when | Notes |
|---|---|---|
| **NET** | Connected to the reflector | Blinks while reconnecting, and turns **red** if the link drops — a lost reflector is a fault, not a quiet channel |
| **SCAN** | [Scan](/docs/auto-switch) is armed | Blinks while hunting for a talker |
| **VOX** | VOX is armed | Turns **red** while VOX is actually keying you |
| **APRS** | APRS beaconing is enabled | |

Only two colours carry meaning: **amber** for anything live, and **red** spent solely on transmitting and on link loss. Scan states are told apart by legend, blink and countdown rather than by colour — the way a scanning radio has always done it, and what survives a low-density panel in daylight.

### The status band

Directly below the rail, one line says what the radio is doing right now: **MONITORING**, **RECEIVING**, **ON AIR** (with an elapsed timer while you transmit), **Scanning**, **Hold**, or **VOX armed**.

### The hero

The largest element on the panel changes with state, so a stale callsign never sits at hero weight:

| State | Hero shows |
|---|---|
| At rest | **Channel** — the talkgroup number and its label |
| Receiving | **Caller** — who is transmitting now |
| Transmitting | **Transmitting on** — the talkgroup you're keyed up on |
| Scan hold | **Held on** — the talkgroup being held after a call |

On compact radios the hero also carries a dimmed **Last heard** line at rest, since there's no room for a log of its own.

### Meters

**RX** and **MIC** are segmented bar meters with a **PEAK** flag. PEAK lights when the limiter is actually working rather than on a guess — it trips at the same level the limiter does, so it means exactly one thing. While you transmit with a time-out timer set, the panel also counts down the time you have left.

## Transmitting

Transmit exactly as you would on the main screen — Car Mode honours your chosen [PTT mode](/docs/ptt-modes):

- **Latch** — tap the big button to start, tap again to stop.
- **Hold** — press and hold to transmit, release to stop.
- **VOX** — just speak; no button needed.
- **Hardware PTT** — a bound PTT key works here too.

If you've disabled the PTT button in your PTT settings, it stays hidden here too.

## Switching talkgroups

- On phones and tablets, press a tile in the **channel bank** to switch instantly. The active talkgroup is the lit one.
- On compact radios, use the ‹ and › **rocker** to step through your presets.

Talkgroup switching is disabled while you're transmitting (the controls dim).

## Scanning

When [scan](/docs/auto-switch) is armed, the status band doubles as the scan indicator — **Scanning** while hunting, **Hold** while it lingers after a call ends, with the hold countdown running. Tap it to stop scanning and stay on the current talkgroup.

Car Mode also honours [auto-switch](/docs/auto-switch): if a monitored talkgroup takes over, the hero and channel follow it.

## The compact face

![Car Mode on a compact radio](/docs/car-mode-compact.webp)

On a 240 × 320 radio there is no room for an app layout, so Car Mode becomes a panel proper. Every band reserves its height, so nothing reflows as calls start and stop — the number you are reading never jumps while you are looking at it.

## Exiting Car Mode

- Tap the **close (✕)** at the end of the legend rail.
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

The **Car Mode toggle key** is bound under **Settings > Hardware controls**, alongside the other key bindings.

> Pair **Enter on Bluetooth** with your car's stereo so VoxLink flips into Car Mode the moment you start the engine — and back out when you leave.
