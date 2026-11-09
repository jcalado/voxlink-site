# Desktop & macOS

VoxLink makes use of the room a big window gives it, and on a Mac it behaves like a Mac app.

## PTT console

Give the PTT screen a window at least 880 pixels wide and it becomes a console: the on-air stage and transmit controls on one side, and a column with your channels, recently heard stations and the nodes on the reflector on the other.

The layout follows the window's width, not the platform. Narrow a desktop window and you're back to the phone layout. Android tablets and unfolded foldables get the console too.

With a keyboard:

| Key | Action |
|---|---|
| **Space** | Hold to transmit, from anywhere on the console |
| **1–9** | Jump to that channel |

## Servers on wide windows

On macOS, Windows and Linux, a wide window splits **Servers** into a list and a detail pane, and you can edit a server's talkgroups in place.

On macOS, servers open as form sheets, and you can drag a whole row to reorder it.

## VoxLink on macOS

The Mac build has its own native window, sidebar and toolbar. System colours replace the Material palette, so VoxLink follows your Mac's accent colour and appearance, and Settings is laid out like System Settings.

The toolbar on the PTT window carries the talkgroup — the arrows step through channels and clicking the title opens the picker — along with **Scan**, **Record**, **Mute** and **Inspector** buttons. The inspector is the channels, activity and nodes column; hide it from the toolbar or the **View** menu. Right-click a channel to monitor it, add it to scan, pin it, move it, copy its number, edit it or remove it.

### Menu bar shortcuts

Everything else lives in the menu bar, and most of it has a shortcut:

| Action | Shortcut | Menu |
|---|---|---|
| Settings | ⌘, | VoxLink |
| Add server | ⌘N | File |
| Import / export configuration | ⌘O / ⇧⌘E | File |
| Connect / disconnect | ⌘K | Radio |
| Mute / unmute | ⇧⌘M | Radio |
| Start / stop recording | ⌘R | Radio |
| Recordings | ⇧⌘R | Radio |
| Car Mode | ⌃⌘C | Radio |
| Switch to channel 1–9 | ⌃1–⌃9 | Channel |
| Previous / next channel | ⌘[ / ⌘] | Channel |
| Go to talkgroup | ⌘T | Channel |
| Monitor this channel | ⌃⌘M | Channel |
| Start / stop scan | ⇧⌘S | Channel |
| Switch page | ⌘1, ⌘2… | View |
| Show / hide inspector | ⌥⌘I | View |
| APRS messages | ⌥⌘M | View |

The recording items appear when [recording](/docs/recording) is enabled, and APRS messages when [APRS](/docs/aprs) is enabled.

### Menu bar icon

VoxLink keeps an icon in the Mac menu bar instead of a tray icon. It turns orange while receiving and red while you're on air.

- **Left-click** opens a small console with the talkgroup, who's on air, a level meter, a hold-to-talk button and your channels.
- **Right-click** gives you **Show**, **Disconnect** and **Quit**.

### Dock

The Dock icon shows a **TX** badge while you transmit, otherwise the number of unread APRS messages, and a status dot while receiving.

### Push to talk from any app

Turn on **Settings > PTT screen controls > Push to talk from any app**, then hold **⌥Space** to transmit while another app is in front. It doesn't need the Accessibility permission.

> Monitored-talkgroup notifications on macOS can switch you or mute that talkgroup for an hour, right from the alert. See [Auto-switch](/docs/auto-switch#when-auto-switch-is-off).
