# Installation

VoxLink runs on Android phones and PoC radios, and on Windows and Linux desktops.

## Android

### Requirements

- Android 8.0 (Oreo) or higher
- Internet connection (Wi-Fi or mobile data)
- Reflector connection details from your club or admin: hostname, port, talkgroup number, and auth key

### Install from Google Play

1. Open the [**VoxLink listing on Google Play**](https://play.google.com/store/apps/details?id=com.jcalado.voxlink).
2. Tap **Install**.

### Sideload the APK

If you received an APK file directly (e.g. from a beta release or your club), or downloaded one from the site:

1. Enable **Install unknown apps** for your file manager or browser: **Settings > Apps > Special app access > Install unknown apps**.
2. Open the APK file on your device and tap **Install**.

To install via ADB:

```bash
adb install VoxLink.apk
```

> Sideloaded builds don't receive Play Store updates — check with your source for new versions.

### Permissions

**Microphone** — Required for transmitting. Android prompts you on first launch — tap **Allow**.

If you accidentally denied it: **Settings > Apps > VoxLink > Permissions > Microphone > Allow**.

**Notifications** (Android 13+) — Allows VoxLink to show a persistent status notification while connected. On Hytera radios this permission also drives the [status LED](/docs/hardware-controls) — deny it and the LED stays dark.

**Bluetooth** (Android 12+) — Required when routing audio to a Bluetooth device. VoxLink prompts for this when you first select a Bluetooth output.

---

## Desktop

![VoxLink on the desktop](/docs/desktop-app.webp)

The desktop build is the same app with a navigation rail instead of a bottom bar. Everything that isn't specific to phone hardware works the same way — servers, talkgroups, PTT modes, recording, APRS, Car Mode.

Grab a build from the **Download** menu on the site.

### Windows

Run the installer (`VoxLink-<version>-setup.exe`) and follow the prompts. Windows SmartScreen may warn about an unrecognised publisher on first run — choose **More info > Run anyway**.

### Linux

Two formats are published:

| Format | Install |
|---|---|
| **AppImage** | `chmod +x VoxLink-<version>-x86_64.AppImage` then run it. No installation needed. |
| **.deb** | `sudo apt install ./voxlink_<version>_amd64.deb` on Debian/Ubuntu. |

The `.deb` depends on `libgtk-3-0` and `libayatana-appindicator3-1` (the latter provides the system tray icon); apt pulls both in automatically.

### System tray

On both desktop platforms VoxLink lives in the system tray while it runs, with a **Show / Disconnect / Quit** menu. Turn on **Settings > Connection > Close to system tray** and closing the window keeps VoxLink running and connected instead of quitting it.

### What's different on desktop

- **Audio settings** show only the **Volume** section. Routing, input source, Bluetooth audio mode, and extra loudness are Android concepts — on desktop your OS sound settings own them.
- **Car Mode** works, but only **Enter on startup** applies. Full brightness, the charger trigger, and the Bluetooth trigger are backed by Android hardware APIs.
- **Key bindings** work — bind a keyboard key to PTT, next/previous talkgroup, or the Car Mode toggle. Only **Bluetooth PTT accessories** are Android-only.
