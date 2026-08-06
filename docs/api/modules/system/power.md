---
title: Read power and battery status with the power module.
---

# power Module

Read system power and battery status.

```javascript
import { power } from "system";
```

::: info Availability
Available in the [Main script](/guides/script-types.html#main-script-the-brain) only.
:::

#### Table of Contents
[[toc]]

---

<MethodBox
  name="power.getStatus()"
  badge="power"
  badgeType="core"
  returns="object | null"
>
<template #returns>A power status object, or <code>null</code> if the status cannot be read.</template>

Returns the current system power and battery status.

The returned object has these properties:

| Property | Type | Description |
|---|---|---|
| `acline` | `number` | `1` when connected to AC power, `0` on battery. |
| `status` | `number` | Battery status code (Win32 `BATTERY_FLAG_*`). |
| `status2` | `number` | Additional battery status code. |
| `lifetime` | `number` | Estimated remaining battery life in seconds. |
| `percent` | `number` | Battery charge percentage (`0–100`). |
| `mhz` | `number` | Current CPU clock speed in MHz. |
| `hz` | `number` | Current CPU clock speed in Hz. |

<template #example>

```javascript
import { power } from "system";

const s = power.getStatus();
if (s) {
  console.log("AC power:", s.acline === 1);
  console.log("Battery:", s.percent + "%");
  console.log("CPU MHz:", s.mhz);
}
```

</template>
</MethodBox>
