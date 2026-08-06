---
title: Read CPU usage with the cpu module.
---

# cpu Module

Read current CPU usage and system uptime.

```javascript
import { cpu } from "system";
```

::: info Availability
Available in the [Main script](/guides/script-types.html#main-script-the-brain) only.
:::

#### Table of Contents
[[toc]]

---

<MethodBox
  name="cpu.usage()"
  badge="cpu"
  badgeType="core"
  returns="number"
>
<template #returns>CPU usage percentage in the range <code>0–100</code>. Returns <code>0</code> if stats are unavailable.</template>

Returns the current total CPU usage across all cores as a percentage.

<template #example>

```javascript
import { cpu } from "system";

const usage = cpu.usage();
console.log("CPU:", usage + "%");
```

</template>
</MethodBox>

---

<MethodBox
  name="cpu.getUpTime([format])"
  badge="cpu"
  badgeType="core"
  returns="number | string"
  :parameters="[
    { name: 'format', type: 'string', optional: true, description: 'Format string for a human-readable duration. If omitted, returns raw seconds as a number.' }
  ]"
>
<template #returns>Total uptime in seconds as a <code>number</code> when no format is given, or a formatted <code>string</code> when a format is provided.</template>

Returns the total system uptime since the last boot.

**Format tokens:**

| Token | Description |
|---|---|
| `%d` | Days |
| `%h` | Hours within the day |
| `%m` | Minutes within the hour |
| `%s` | Seconds within the minute |
| `%H` | Padded hours (e.g. `05`) |
| `%M` | Padded minutes (e.g. `09`) |
| `%S` | Padded seconds (e.g. `01`) |

<template #example>

```javascript
import { cpu } from "system";

// Raw seconds
const seconds = cpu.getUpTime();
console.log("Uptime seconds:", seconds);

// Formatted string
const uptime = cpu.getUpTime("%d days, %H:%M:%S");
console.log("Uptime:", uptime); // e.g. "3 days, 04:22:11"
```

</template>
</MethodBox>
