---
title: Read monitor and virtual desktop metrics with the displayMetrics module.
---

# displayMetrics Module

Get virtual desktop bounds and connected monitor information.

```javascript
import { displayMetrics } from "system";
```

::: info Availability
Available in the [Main script](/guides/script-types.html#main-script-the-brain) only.
:::

#### Table of Contents
[[toc]]

---

<MethodBox
  name="displayMetrics.getMetrics()"
  badge="displayMetrics"
  badgeType="core"
  returns="object"
>
<template #returns>An object with virtual desktop bounds, primary monitor index, and a <code>monitors</code> array.</template>

Returns the full display configuration — virtual desktop bounds and an entry for each connected monitor.

The returned object has these properties:

| Property | Type | Description |
|---|---|---|
| `virtualLeft` | `number` | Virtual desktop left coordinate. |
| `virtualTop` | `number` | Virtual desktop top coordinate. |
| `virtualWidth` | `number` | Virtual desktop total width. |
| `virtualHeight` | `number` | Virtual desktop total height. |
| `primaryIndex` | `number` | Index of the primary monitor in `monitors`. |
| `count` | `number` | Total number of monitors. |
| `monitors` | `object[]` | Array of monitor entries (see below). |

Each entry in `monitors`:

| Property | Type | Description |
|---|---|---|
| `active` | `boolean` | Whether the monitor is currently active. |
| `deviceName` | `string` | System device name (e.g. `\\.\DISPLAY1`). |
| `monitorName` | `string` | Human-readable monitor name. |
| `screen` | `object` | Bounds with `left`, `top`, `right`, `bottom`. |
| `work` | `object` | Work area bounds (excludes taskbar) with `left`, `top`, `right`, `bottom`. |

<template #example>

```javascript
import { displayMetrics } from "system";

const m = displayMetrics.getMetrics();

console.log("Virtual:", m.virtualWidth, "x", m.virtualHeight);
console.log("Primary index:", m.primaryIndex);
console.log("Monitor count:", m.count);

for (const mon of m.monitors) {
  console.log(mon.monitorName, mon.screen);
}
```

</template>
</MethodBox>

---

<MethodBox
  name="displayMetrics.get()"
  badge="displayMetrics"
  badgeType="core"
  returns="object"
>
<template #returns>Same as <code>displayMetrics.getMetrics()</code>.</template>

Alias of `displayMetrics.getMetrics()`.

<template #example>

```javascript
import { displayMetrics } from "system";

const m = displayMetrics.get();
console.log("Monitors:", m.count);
```

</template>
</MethodBox>
