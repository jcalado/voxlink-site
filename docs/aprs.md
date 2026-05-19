# APRS

VoxLink includes a full APRS-IS client. Track stations on a live map, exchange APRS messages, and beacon your own position — all alongside normal reflector operation.

APRS is gated behind a master toggle. Turn it on in **Settings > APRS > Enable APRS**.

## Getting Connected

APRS-IS requires your callsign and a passcode (a number derived from your callsign — search "APRS passcode generator" if you don't have one yet).

In **Settings > APRS**:

1. Enter your **Callsign** and pick an **SSID** (e.g. `-7` for a portable, `-9` for mobile, `-5` for a phone app — or leave blank).
2. Enter your **Passcode**. Leaving it at `-1` puts you in receive-only mode.
3. Pick a **Server** — the global rotate, a regional pool (Europe, North America, Asia, etc.), or a custom host.

Once enabled and configured, VoxLink connects automatically and stays connected in the background.

## Map & Stations List

The APRS screen has three tabs:

- **Map** — OpenStreetMap with markers for each station. Tap a marker to open the station sheet. Common APRS symbols are rendered with Material icons.
- **Stations** — a sortable list (by **distance** or **last heard**). Tap any row for the same station sheet, showing path, status text, course / speed / altitude, and last position.
- **Messages** — your APRS conversations (see below).

The reception filter range is configurable in **Settings > APRS > Reception**.

## Messaging

VoxLink sends and receives APRS messages with acknowledgements.

- Open the **Messages** tab to see your conversations.
- Tap a station on the map or in the list to start a new conversation.
- Outgoing messages show a delivery state (sent / acked / failed).
- Incoming messages arrive in the background and surface as notifications when the app isn't open.

## Beaconing

Send your own position out over APRS-IS. Enable in **Settings > APRS > Beacon**.

VoxLink offers three **positioning modes**:

| Mode | What it does | Use when |
|---|---|---|
| **Smart** | Sends position based on movement, speed, and turn angle (SmartBeaconing) | Mobile / portable operation |
| **Auto** | Fixed-interval beacons from GPS | You want predictable timing |
| **Manual** | Sends a fixed position you set once | Home / fixed station |

### Smart beaconing

Tune **moving** and **stationary** intervals — VoxLink rate-limits based on actual movement. When GPS speed isn't reliable (low-quality fixes, brief stops), it falls back to distance-over-time to keep beacons sensible.

### Auto

Pick an interval, a minimum distance between beacons, and a GPS accuracy class (**High**, **Medium**, **Low**, or **Balanced**). Higher accuracy means more battery use.

### Manual

Choose your position one of three ways:

- **Coordinates** — type latitude / longitude directly
- **Map pick** — drop a pin on the map
- **Last GPS** — capture your current location once

Useful for shacks, club stations, or anywhere you don't want GPS running.

### Symbol & comment

Set your APRS **symbol** (house, car, bicycle, etc.) and an optional **comment** that goes out with each beacon. Tap **Beacon now** to send a one-off position immediately.

> VoxLink beacons using the officially-assigned tocall **APVOXL**, so your traffic is identifiable on the APRS network as coming from this app.

## Background Operation

When APRS is enabled, VoxLink keeps the connection, position updates, and incoming-message handling running while the app is in the background. See [Background Operation](/docs/background-operation) for the underlying foreground-service behavior.

## What's Parsed

VoxLink decodes the common APRS packet types:

- Standard and **compressed** positions
- **Mic-E** encoded positions
- Course, speed, altitude
- **Objects** and **items**
- Status messages
- Text messages (with ack handling)

## Tips

- Receive-only is fine — leave the passcode at `-1` and you'll still see the full map and stations list, you just won't transmit.
- A reasonable **filter range** keeps the stations list manageable and saves battery. Start around 100 km and adjust.
- If your beacons aren't appearing on aprs.fi, double-check the passcode and that **Enable APRS** + the beacon toggle are both on.
