# Changelog

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
