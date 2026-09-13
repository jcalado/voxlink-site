# Hardware Controls & Radios

VoxLink is built to be driven by real buttons, not just a touchscreen. Bind a key to PTT, step talkgroups with a channel knob, and on supported radios light the hardware status LED.

![Hardware controls](/docs/hardware-controls.webp)

## Key bindings

Bindings live under **Settings > Hardware controls**.

| Binding | What it does |
|---|---|
| **PTT** | Transmit while the key is held (or latched, per your [PTT mode](/docs/ptt-modes)) |
| **Next talkgroup** | Step forward through your presets |
| **Previous talkgroup** | Step back through your presets |
| **Car Mode toggle key** | Enter and leave [Car Mode](/docs/car-mode) |

To bind one, tap the row and **press the key you want to use**. VoxLink names what it saw — *PTT button*, *Knob right*, *Volume up*, *Headset button*, *Play/Pause* and so on — so you can confirm it caught the right one. Tap the **✕** on a row to clear that binding.

On a PoC radio this is what turns VoxLink into a radio: the orange PTT under your thumb keys up, and the channel knob steps talkgroups.

Key bindings work on desktop too — bind a keyboard key and use VoxLink without the mouse.

## Bluetooth PTT accessories

**Settings > Hardware controls > Bluetooth PTT button** enables paired accessories — the little handlebar and lapel PTT buttons — to transmit and change talkgroups. Turn it on, and the accessory's buttons work like bound keys.

> This is an Android feature. Pair the accessory in Android's own Bluetooth settings first.

## Hytera radios

On Hytera PoC radios (the reference device is the **P50**), VoxLink drives the radio's own hardware rather than just drawing on its screen.

### Status LED

![Status LED settings](/docs/status-led.webp)

The LED above the display can mirror what VoxLink is doing. Options live under **Settings > Notifications > Status LED**:

| Setting | LED |
|---|---|
| **Red while transmitting** | Solid red the whole time you're keyed up |
| **Green while receiving** | Solid green while someone is talking |
| **Orange blink while scanning** | Blinks orange while [scan](/docs/auto-switch) is armed |
| **Green pulse while connected** | Three blinks every 10 seconds — a heartbeat that says the link is alive |

> The LED is physically driven by a notification, so it shares the notification permission. If notifications are turned off for VoxLink, the settings screen says so and the LED stays dark.

### Home-screen call card

**Settings > Notifications > Home screen > Call card** puts the talkgroup, caller and call timer on the radio's launcher home screen, so an incoming call is readable without opening the app.

### Channel knob

The knob is just another key binding — bind **Next talkgroup** to *Knob right* and **Previous talkgroup** to *Knob left* and the knob steps through your presets exactly as it would step channels on a commercial radio.

## Compact radios

![The menu on a compact radio](/docs/compact-menu.webp)

On radios with small screens (240 × 320 and similar), VoxLink swaps the slide-out drawer for a **launcher-style grid**: each destination is a large tile you can hit with a thumb or step onto with the D-pad. It opens with the cursor already on the screen you're on, so one press of **OK** takes you back where you were.

The ring around a tile carries the state — which screen you're on, and where the D-pad focus is.

You can choose which destinations appear under **Settings > Interface > Menu items**.

[Car Mode](/docs/car-mode) has a compact face built for these screens too.
