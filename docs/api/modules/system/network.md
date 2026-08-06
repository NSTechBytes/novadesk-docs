---
title: Read network throughput and totals with the network module.
---

# network Module

Read network receive/transmit speeds and cumulative traffic totals.

```javascript
import { network } from "system";
```

::: info Availability
Available in the [Main script](/guides/script-types.html#main-script-the-brain) only.
:::

::: info Sampling
Values are sampled and cached internally for approximately 400ms. Very frequent calls may return the same sample.
:::

#### Table of Contents
[[toc]]

---

<MethodBox
  name="network.rxSpeed()"
  badge="network"
  badgeType="core"
  returns="number"
>
<template #returns>Current receive speed in bytes per second across all operational interfaces. Returns <code>0</code> if unavailable.</template>

Returns the current network receive throughput.

<template #example>

```javascript
import { network } from "system";

const rx = network.rxSpeed();
console.log("Download:", (rx / 1024).toFixed(1), "KB/s");
```

</template>
</MethodBox>

---

<MethodBox
  name="network.txSpeed()"
  badge="network"
  badgeType="core"
  returns="number"
>
<template #returns>Current transmit speed in bytes per second across all operational interfaces. Returns <code>0</code> if unavailable.</template>

Returns the current network transmit throughput.

<template #example>

```javascript
import { network } from "system";

const tx = network.txSpeed();
console.log("Upload:", (tx / 1024).toFixed(1), "KB/s");
```

</template>
</MethodBox>

---

<MethodBox
  name="network.bytesReceived()"
  badge="network"
  badgeType="core"
  returns="number"
>
<template #returns>Total bytes received since the last system boot across all operational interfaces. Returns <code>0</code> if unavailable.</template>

Returns the cumulative bytes received since boot.

<template #example>

```javascript
import { network } from "system";

const total = network.bytesReceived();
console.log("Total received:", (total / 1073741824).toFixed(2), "GB");
```

</template>
</MethodBox>

---

<MethodBox
  name="network.bytesSent()"
  badge="network"
  badgeType="core"
  returns="number"
>
<template #returns>Total bytes sent since the last system boot across all operational interfaces. Returns <code>0</code> if unavailable.</template>

Returns the cumulative bytes sent since boot.

<template #example>

```javascript
import { network } from "system";

const total = network.bytesSent();
console.log("Total sent:", (total / 1073741824).toFixed(2), "GB");
```

</template>
</MethodBox>
