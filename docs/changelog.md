# Changelog

## 1.7.0

### New

- **Light theme** — VoxLink now comes in Light as well as Dark, or it can follow your device's own setting (**Settings > Interface**).
- **Auto-switch** — let VoxLink follow the traffic. Drag your talkgroups into a priority order and it moves to the busiest one that matters most to you. **Pin** a talkgroup when you want to stay put, and whenever it does switch, a banner tells you — with **Stay** and **Undo** right there.
- **A launcher-style menu on compact radios** — the navigation menu is now a grid of icons rather than a slide-out panel, easier to hit with a D-pad or a thumb, and it opens with the cursor already on the screen you're on.
- **An instrument-panel face for Car Mode** — big, glanceable and made to be read at arm's length, on phones, dash mounts and compact radios alike.
- **Mute button on the PTT screen** — optional, right in the header.
- **Hytera P50** — the radio's status LED now works with VoxLink, with an optional green heartbeat while you're connected. Incoming calls show up on the radio's home-screen call card, and the channel knob steps talkgroups up and down.

### Changed

- Settings that make you pick one option now open as a full-screen list instead of a cramped dropdown — including **VOX hang time** and the APRS options.
- Colourful icon chips on the settings landing, and a new **Interface** section.
- Scanning and auto-switch now behave as one feature instead of fighting each other.
- The manual talkgroup pickers get out of the way while auto-switch is running.
- The PTT screen drops the redundant "Monitoring:" line under the active talkgroup.
- Car Mode's activity log lines up in columns instead of wrapping into a mess.
- The VOX sensitivity slider finally gets the full width it needs.

### Fixed

- Car Mode's **PEAK** lamp now lights on real audio peaks, so it means something again.
- Reconnects back off gracefully instead of hammering the server, and no longer give up over a hiccup — only when the server actually rejects your login.
- Flapping Wi-Fi / mobile handovers no longer trigger a storm of reconnects.
- Bad network now fades to silence instead of stretching audio into a robotic smear.
- Server names no longer change depending on which talkgroup you're on.

## 1.6.0

### New

- **VoxLink comes to the desktop** — this is the **first release for Windows and Linux**! Download a Windows installer (MSIX) or a Linux **AppImage** or **.deb**.
- **Car Mode** — a full-screen, glanceable driving screen: a big callsign, **ON AIR** / **RECEIVING** status, a favourites talkgroup rail (or a simple up/down cycler on compact radios), and a scan badge. Open it from the car icon on the PTT screen, the navigation drawer, a bound hardware key, or automatically when you plug in a charger, connect a chosen Bluetooth device, or launch the app. Keeps the screen on, with optional full brightness.
- **Bluetooth PTT buttons** — transmit and cycle talkgroups straight from a supported Bluetooth PTT accessory (**Settings > Hardware controls**).
- **Extra loudness** — an optional speaker boost (**Settings > Audio**) that pushes RX volume past the normal ceiling for noisy environments.
- **System tray** on desktop, with a Show / Disconnect / Quit menu and an optional **Close to system tray** that keeps you connected when you close the window.
- **`voxlink://` links** now open the desktop app.

### Changed

- Desktop **keeps your machine awake** while connected, so it no longer drops the reflector or APRS when the computer goes idle.
- Only one copy of the desktop app runs at a time — launching again brings the existing window to the front.
- **Instant click-and-hold PTT** with the mouse on desktop, and the PTT button is focused on launch so Space/Enter transmit right away.
- Settings hide the rows that don't apply on desktop.
- Compact radios: settings sliders now sit on their own row, and the PTT screen has a cleaner talkgroup readout and a bigger menu tap target.

### Fixed

- APRS-IS now disconnects cleanly when you quit the app.
- Tapping **Disconnect** in the notification fully ends the session.
- Closing the desktop window now tears down voice and APRS connections before exiting.

## 1.5.0

### New

- **Reworked talkgroup picker** — one merged, searchable list (presets + monitored + scanned). Type a number to switch to it or save it as a talkgroup. Per-row **Save / Remove**, **Monitor**, and **Add to scan** in a tidy menu; search is a toggle; full-screen with D-pad navigation on compact radios.
- **Talkgroups in the server form** — add, edit, and reorder a server's talkgroups right where you create or edit it; the separate "Talkgroup" field and the old presets screen are gone.
- **Follow server QSY** — optionally follow server-initiated talkgroup moves, with an on-screen notice and a per-server toggle.
- **Quit** from the navigation drawer.
- **Hytera P50** — auto-binds the talkgroup dial.
- **Hide the on-screen PTT button** — for VOX or external-PTT users.
- **Linux desktop** support.

### Changed

- Full-screen dialogs and a tighter, edge-aligned layout on compact radios.
- **Hardware controls** are always on now — the redundant on/off switch was removed; just bind a key.

### Fixed

- Editing a server no longer clears its scanned talkgroups.
- Hardware-key / D-pad text entry: the delete (Back) key now erases characters and stays in the field until it's empty.

## 1.3.1

### New

- **TX / time-out timer row** on the PTT screen (optional) — glanceable countdown while transmitting
- **Quit** item in the PTT-screen connection menu (optional) — close the app without diving into settings
- **Bluetooth audio mode** picker — choose between voice-call and media routing for your BT headset
- APRS tocall switched to the officially-assigned **APVOXL**

### Fixed

- More reliable background operation — APRS, audio, and location keep working when the app isn't in the foreground
- Cleaner audio at the end of transmissions, and fewer dropouts after long idle periods
- Monitor and scan settings now persist across restarts, and you no longer hear traffic from a talkgroup you've switched away from
- Smarter APRS beaconing when GPS speed readings are unreliable
- Various smaller stability fixes

## 1.3.0

### New

- **APRS-IS support** — VoxLink is now an APRS client. Connect with your callsign and passcode and get:
    - Live map (OpenStreetMap) with station markers, callsign labels, and Material icons for common APRS symbols
    - Stations list sortable by distance and last-heard, with a station detail sheet showing path, status, course/speed/altitude
    - **APRS messaging** — send and receive APRS messages
    - Beaconing with two **positioning modes**: automatic from GPS (with tunable accuracy) or a manual map picker for fixed locations, each with its own settings
    - Background operation via the foreground service so beacons keep going out and incoming traffic keeps flowing
    - Parsing for compressed positions, Mic-E, course/speed/altitude, objects, and items
    - Master toggle to gate the whole feature; localized in EN/PT
- **Accessibility** section with:
    - **Outdoors mode** — larger PTT button with a glanceable outer ring
    - **Huge talker display** — 56px callsign, 22px subtitle
    - **Green screen flash** on RX talker start
    - **Reduce motion** — disables pulsing connection indicator and other ambient animation
    - **Haptic strength** — Off / Subtle / Strong, scales all vibration durations
    - **TX start/stop vibration** cues
    - High-contrast PTT and talker state colors
- **Monitor activity** — banner on the PTT screen when a monitored TG goes active (tap to switch), plus OS notifications for talker activity and connection drops, with toggles in Notifications settings. 5s idle-coalesce window keeps the banner stable through bursts of short transmissions.
- **48 kHz Opus** — encoder and decoder upgraded for improved audio quality
- **Bluetooth audio routing** properly handles the comm-device session lifecycle, resolving long-standing routing issues with BT headsets
- **Settings reorganized** into focused sub-screens (Transmission, Audio, External PTT, Notifications, PTT screen, Accessibility, Connection, APRS) with grouped cards and consistent chevron navigation
- **Keep screen on** toggle (wired to wakelock)
- **Server export/import** via the share sheet, with a visible warning about secrets
- **Scan** across talkgroups
- **Nodes** screen splits the list by activity on the selected talkgroup
- Playback grew: playlist-based playback with a strip UI, pause/resume that preserves absolute file offset, manual-PTT interrupt cleanly stops the file

### Changed

- First server is auto-activated on add and on load, so the PTT picker always has presets to show
- Polished active-server hero card and servers dashboard
- "Auth Key" renamed to "Password" in the server form
- Nodes screen: localized relative-time pills (EN + PT); improved Portuguese translations ("estações", "Ativas", "atividade")

### Fixed

- Recordings: swipe-to-delete Undo now actually restores the file
- VOX mic leak, decoder-error teardown, and start/stop races
- AudioTrack underruns from the jitter buffer on drain
- PTT picker reflects preset monitor defaults
- Pause/resume preserves playback offset (was reporting relative position)
- Various smaller stability and translation fixes

## 1.2.0

### New

- **Audio file playback** — transmit a pre-recorded audio file over the air from the PTT screen. Tap the file-playback button next to the PTT button to pick a file; a progress card shows playback while it streams. Disabled in VOX mode and while another station is talking. Local monitoring plays the file on the speaker as you transmit.
- **Talkgroups** entry in the active server's menu — jump straight to preset management without opening the edit form
- Optional onboarding to set up talkgroup presets right after adding a new server
- Step through presets directly on the PTT screen with new ‹ / › chevron buttons (when the server has two or more presets)
- Monitor an arbitrary talkgroup from the picker via **Monitor another TG…**, no preset required
- Per-preset **Monitor by default** flag in the talkgroup presets screen — pin specific talkgroups to always be monitored when connecting
- `voxlink://` deep links / QR codes that prefill the new-server form (`voxlink://host:port/?name=&user=&pass=&tg=`)
- Live audio-output picker in Settings that lists the actual devices currently available (built-in speaker, wired headset, paired Bluetooth headset, etc.) instead of a fixed enum
- Auto-rerouting: when **Audio output** is set to **Auto**, plugging in or removing a headset / Bluetooth device switches the route on the fly and shows a toast if the chosen device disappears

### Changed

- PTT screen header now shows the server **name** (with host as fallback) instead of the raw hostname
- Audio output and audio input rows in Settings stack the device/source name below the label so long names don't wrap awkwardly

### Fixed

- Snackbars on the Servers and Recordings screens now auto-dismiss when an Android accessibility service is active (previously they stayed on screen forever, and recordings deleted via the snackbar were never cleaned from disk)
- "Connection timed out" warning no longer lingers on the PTT screen after a successful auto-reconnect
- Reflector no longer reconnects in a loop after a protocol-level error such as **Access denied**

## 1.1.0

### New

- Welcome screen to help you get started on first launch
- Auto-connect now works — automatically connects to your last server when opening the app
- Option to fully close the app when pressing back (Settings > Connection > Quit on exit)
- Extra vibration warning when transmission timeout reaches 5 seconds

### Fixed

- Crash when dismissing the server import dialog
- Color picker menu was cut off on smaller screens
- Improved Portuguese translations
- Screen titles now align consistently across all tabs

## 1.0.0 — First release!

A push-to-talk client for SvxLink amateur radio reflectors.

- Push-to-talk with hold, latch, and VOX modes
- High-quality Opus audio with adaptive jitter buffer
- Multiple server profiles with JSON import/export
- Live node list with callsign, name, and location
- Talkgroup selection and monitoring
- TX/RX audio level metering
- Configurable time-out timer with vibration warning
- Conversation recording and playback
