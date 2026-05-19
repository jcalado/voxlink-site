# Background Operation

How VoxLink stays connected when your screen is off or you're in another app.

![Connection settings](/docs/settings-connection.webp)

## Persistent Notification

While connected, VoxLink shows a notification in the status bar. This keeps the app running in the background — Android requires it and it can't be dismissed. Tap the notification to return to VoxLink.

## Battery Optimization

Android's battery optimization can kill background apps and break your connection. To prevent this:

1. Go to **Android Settings > Apps > VoxLink > Battery**.
2. Set battery usage to **Unrestricted** (may also be called **No restrictions** or **Don't optimize**).

On some devices you can reach this from VoxLink: **Settings > Background > Disable Battery Optimization**.

> This is the most common fix for connections dropping when the screen is off — especially on Huawei, Xiaomi, Samsung, and OnePlus devices, which apply aggressive background limits.

## Auto-Reconnect

If the connection drops, VoxLink reconnects automatically after a 2-second delay. The notification shows **Reconnecting…** during this time.

To reconnect manually instead, disable this in **Settings > Connection > Auto-Reconnect**.

## Auto-Connect on Launch

Enable **Settings > Connection > Auto-Connect** to reconnect to your last server automatically when VoxLink starts. Off by default.

## Keep Screen On

Enable **Settings > Connection > Keep Screen On** to prevent the display from turning off while connected. Useful for hands-free monitoring. Off by default.

## Quitting the App

Because the persistent notification keeps VoxLink running, swiping the app away or pressing back doesn't actually close it. Two settings change that:

- **Settings > Connection > Quit on exit** — pressing back from the main screen fully closes the app instead of leaving it running in the background.
- **Settings > PTT screen controls > Show quit option** — turns the connection indicator at the top of the PTT screen into a menu with Connect / Disconnect and a **Quit** item that disconnects and exits the app in one tap.

The PTT-screen Quit menu is handy when you're in the middle of operating and want to fully shut down without navigating to Android's recents.

## Connection Health

VoxLink sends a heartbeat to the server every 5 seconds. If no response arrives within 15 seconds, the connection is considered lost and auto-reconnect kicks in.
