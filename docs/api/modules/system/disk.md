---
title: Read disk usage metrics with the disk module.
---

# disk Module

Read disk space, usage percentages, and I/O speeds.

```javascript
import { disk } from "system";
```

::: info Availability
Available in the [Main script](/guides/script-types.html#main-script-the-brain) only.
:::

::: info Path argument
For the space functions, `path` can be a drive root like `"C:\\"` or any path on the target volume. If omitted, the current working drive is used.
:::

#### Table of Contents
[[toc]]

---

<MethodBox
  name="disk.totalBytes([path])"
  badge="disk"
  badgeType="core"
  returns="number"
  :parameters="[
    { name: 'path', type: 'string', optional: true, description: 'File or drive path to query (e.g. C:\\). Defaults to the current working drive.' }
  ]"
>
<template #returns>Total capacity of the volume in bytes. Returns <code>0</code> if unavailable.</template>

Returns the total storage capacity of the volume containing the given path.

<template #example>

```javascript
import { disk } from "system";

const total = disk.totalBytes("C:\\");
console.log("Total:", total, "bytes");
```

</template>
</MethodBox>

---

<MethodBox
  name="disk.availableBytes([path])"
  badge="disk"
  badgeType="core"
  returns="number"
  :parameters="[
    { name: 'path', type: 'string', optional: true, description: 'File or drive path to query. Defaults to the current working drive.' }
  ]"
>
<template #returns>Available bytes for the current user on the target volume. Returns <code>0</code> if unavailable.</template>

Returns the bytes available to the current user on the target volume.

<template #example>

```javascript
import { disk } from "system";

const free = disk.availableBytes("C:\\");
console.log("Free:", free, "bytes");
```

</template>
</MethodBox>

---

<MethodBox
  name="disk.usedBytes([path])"
  badge="disk"
  badgeType="core"
  returns="number"
  :parameters="[
    { name: 'path', type: 'string', optional: true, description: 'File or drive path to query. Defaults to the current working drive.' }
  ]"
>
<template #returns>Used bytes on the target volume. Returns <code>0</code> if unavailable.</template>

Returns the used storage bytes on the target volume.

<template #example>

```javascript
import { disk } from "system";

const used = disk.usedBytes("C:\\");
console.log("Used:", used, "bytes");
```

</template>
</MethodBox>

---

<MethodBox
  name="disk.usagePercent([path])"
  badge="disk"
  badgeType="core"
  returns="number"
  :parameters="[
    { name: 'path', type: 'string', optional: true, description: 'File or drive path to query. Defaults to the current working drive.' }
  ]"
>
<template #returns>Usage percentage in the range <code>0–100</code>. Returns <code>0</code> if unavailable.</template>

Returns the disk usage percentage for the target volume.

<template #example>

```javascript
import { disk } from "system";

const pct = disk.usagePercent("C:\\");
console.log("Usage:", pct + "%");
```

</template>
</MethodBox>

---

<MethodBox
  name="disk.readSpeed()"
  badge="disk"
  badgeType="core"
  returns="number"
>
<template #returns>Current disk read throughput in bytes per second. Returns <code>0</code> if unavailable.</template>

Returns the current disk read speed sampled from PDH `PhysicalDisk(_Total)` counters.

<template #example>

```javascript
import { disk } from "system";

const readBps = disk.readSpeed();
console.log("Read:", readBps, "bytes/sec");
```

</template>
</MethodBox>

---

<MethodBox
  name="disk.writeSpeed()"
  badge="disk"
  badgeType="core"
  returns="number"
>
<template #returns>Current disk write throughput in bytes per second. Returns <code>0</code> if unavailable.</template>

Returns the current disk write speed sampled from PDH `PhysicalDisk(_Total)` counters.

<template #example>

```javascript
import { disk } from "system";

const writeBps = disk.writeSpeed();
console.log("Write:", writeBps, "bytes/sec");
```

</template>
</MethodBox>

---

## Full Example

```javascript
import { disk } from "system";

const drive = "C:\\";

console.log("Total:",     disk.totalBytes(drive));
console.log("Available:", disk.availableBytes(drive));
console.log("Used:",      disk.usedBytes(drive));
console.log("Usage %:",   disk.usagePercent(drive));
console.log("Read B/s:",  disk.readSpeed());
console.log("Write B/s:", disk.writeSpeed());
```
