# Auto-switch

Auto-switch lets VoxLink follow the traffic for you. You stay on your home talkgroup, and when one of your [monitored talkgroups](/docs/talkgroups-nodes) comes alive, the app moves you there — then brings you back when the conversation ends.

You never have to accept the move: every automatic switch shows a banner with **Stay** and **Undo**.

![Auto-switch settings](/docs/auto-switch-settings.webp)

## Turning it on

Auto-switch options live under **Settings > Auto-switch**. Start with **Auto-switch mode**:

| Mode | What it does |
|---|---|
| **Off** | VoxLink never moves you. Activity on a monitored talkgroup only raises a banner (with a **Switch** button) or a notification. |
| **Auto-switch** | Moves you to a live monitored talkgroup, but only while your current talkgroup is silent. A conversation you're listening to is never cut short. |
| **Priority auto-switch** | The same, plus a ranked order — higher-priority talkgroups win, and the ones you place above the **interrupt line** may break into a live conversation. |

Only talkgroups you monitor are candidates. Mark a preset as monitored (the headphones icon) and it joins the pool — see [Talkgroups & Nodes](/docs/talkgroups-nodes).

## Priority order

In **Priority auto-switch** mode, a **Priority order** row appears. It opens your talkgroup list, where the single drag order does double duty: it's the order your presets cycle in on the PTT screen *and* the auto-switch priority. Top of the list wins.

Two controls shape how aggressive the list is:

- **The interrupt line** — a draggable divider. Talkgroups **above** the line carry a **⚡** and may take you off a talkgroup even while somebody is mid-conversation. Talkgroups below it only fill silence. Drag the line to the very top and nothing interrupts.
- **Pin** — tap the pin icon on a preset (or use its menu). While a pinned talkgroup is the active one, VoxLink will never auto-leave it. This is the net-control setting: park on the net, and let everything else wait.

Each row shows what it's set to at a glance: **⚡** above the interrupt line, **🎧** monitored, **📡** in the scan set, **📌** pinned.

![Priority order](/docs/priority-order.webp)

> Priority only decides who wins when two monitored talkgroups are live at once, and who is allowed to interrupt. In plain **Auto-switch** mode the order is ignored — the first talkgroup to come alive during silence gets you.

## The switch banner

When VoxLink moves you, a banner appears on the PTT screen: **Switched to TG 91 (ARES)**, with two actions.

- **Stay** — keep the new talkgroup and make it your home. The session ends, nothing will drag you back, and a reconnect lands you here.
- **Undo** — go straight back to where the session started.

Leaving the banner alone is also an answer: the talkgroup you were moved onto is never saved. If you disconnect, restart the app, or let the return timer run out, you end up back on your real home talkgroup. **Only Stay commits.**

If you're transmitting when you tap **Undo**, VoxLink doesn't yank the talkgroup out from under you — it just ends the session and leaves you where you are.

## Coming back

**Return to home talkgroup after** sets how long VoxLink sits on a talkgroup it moved you onto before drifting back. The countdown starts when the talker stops, not when you arrive, so it's a measure of silence rather than a stopwatch on the whole conversation.

| Setting | Behaviour |
|---|---|
| **Never** | Stay put once moved; only **Undo**, a manual switch, or a disconnect brings you back. |
| **10 / 20 / 30 / 60 s** | Return home after that much quiet. |

At the moment the timer expires VoxLink re-checks the air. If another monitored talkgroup is still live, it follows that one instead of going home — the session stays open, so a later quiet moment can still return you.

Home is captured once, on the **first** hop of a session. Chain three switches together and **Undo** still lands you on the talkgroup you actually started from, never an intermediate stop.

## Switch delay

**Switch delay** (the dwell) is how long a talkgroup has to stay keyed before it counts. A brief kerchunk or a dropped syllable doesn't drag you across the reflector; a real over does.

Options run from **0 ms** (switch on the first packet) to **1000 ms**. The default, **400 ms**, filters out most accidental keyups. If a talker stops before the delay expires, the pending switch is dropped.

## Rules that always apply

Whatever mode you're in, and however you've ranked things, three guards hold:

1. **Never mid-transmission.** A switch that comes due while you're holding PTT is deferred, then applied the moment you let go.
2. **Never off a pinned talkgroup.** A pin outranks priority, the interrupt line, and scan.
3. **A manual switch ends the session.** Pick a talkgroup yourself and VoxLink stops trying to bring you home — your choice stands until you change it.

## Auto-switch and scan

Scan is the momentary version of the same idea. Both run on one engine, so they no longer fight:

| | Auto-switch | Scan |
|---|---|---|
| **How it starts** | A standing setting | Armed by hand, per session |
| **Pool** | Monitored talkgroups | Talkgroups flagged **scan** |
| **Ranking** | Priority order | None — first live talker wins |
| **Interrupts a live QSO** | Only above the interrupt line | Always |
| **Delay before switching** | Switch delay | None — instant hops |
| **Banner** | Stay / Undo on every switch | None; the orange LED and the Car Mode badge carry it |
| **Return delay** | **Return to home talkgroup after** | **Settings > Scan hang time** |

While scan is armed, its hang time governs the whole session — one timer, one notion of home. Arming scan also gets you the safety guards above, even with auto-switch set to **Off**.

### Arming scan

1. **Choose what to scan.** Open the talkgroup selector on the PTT screen and toggle the **radar** icon next to any preset, or use a preset's menu and pick **Add to scan**. A preset can also be set to **Scan by default** so it's always in the set.
2. **Arm it.** Tap the **radar** icon in the talkgroup selector's header. It lights up in your accent colour while scan is running.
3. **Watch it work.** The PTT screen shows a **Scanning:** line listing the talkgroups being swept. Tap the radar icon again to disarm.

Scan never survives a disconnect — reconnecting comes back with scan off and your monitored talkgroups intact.

In [Car Mode](/docs/car-mode), the status chip doubles as the scan badge: **Scanning** while hunting, **On** a talkgroup while parked on activity, **Hold** while the return timer runs.

## When auto-switch is off

With the mode set to **Off**, monitored talkgroups still get your attention — they just don't move you:

- A banner on the PTT screen names the live talkgroup (or *3 monitored TGs active*) with a **Switch** button for a one-tap manual move.
- If the app is in the background, an OS notification announces the activity and the callsign; tapping it switches you and **saves** the talkgroup, because tapping it is an explicit choice. Turn these off under **Settings > Notifications > Monitored talkgroups**.

## Settings summary

| Setting | Where | What it does |
|---|---|---|
| **Auto-switch mode** | Settings > Auto-switch | Off, Auto-switch, or Priority auto-switch. |
| **Priority order** | Settings > Auto-switch | Rank monitored talkgroups, place the interrupt line, and pin talkgroups. |
| **Return to home talkgroup after** | Settings > Auto-switch | Quiet time before drifting home. Never, 10–60 s. |
| **Switch delay** | Settings > Auto-switch | Dwell before a switch commits. 0–1000 ms. |
| **Scan hang time** | Settings > Scan | Return delay used instead while scan is armed. |
| **Monitored talkgroups** | Settings > Notifications | Background notifications for monitored activity. |

> A good starting point: monitor your local nets, set **Priority auto-switch**, drag the emergency or ARES talkgroup to the top with the interrupt line just below it, and leave the return at **30 s**. You'll hear everything worth hearing and still end up back home.
