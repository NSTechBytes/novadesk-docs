---
title: Read system memory metrics with the memory module.
---

# memory Module

Read physical RAM statistics.

```javascript
import { memory } from "system";
```

::: info Availability
Available in the [Main script](/guides/script-types.html#main-script-the-brain) only.
:::

#### Table of Contents
[[toc]]

---

<MethodBox
  name="memory.totalBytes()"
  badge="memory"
  badgeType="core"
  returns="number"
>
<template #returns>Total physical RAM in bytes. Returns <code>0</code> if unavailable.</template>

Returns the total installed physical memory.

<template #example>

```javascript
import { memory } from "system";

const total = memory.totalBytes();
console.log("Total RAM:", (total / 1073741824).toFixed(1), "GB");
```

</template>
</MethodBox>

---

<MethodBox
  name="memory.availableBytes()"
  badge="memory"
  badgeType="core"
  returns="number"
>
<template #returns>Available physical RAM in bytes. Returns <code>0</code> if unavailable.</template>

Returns the currently available (free) physical memory.

<template #example>

```javascript
import { memory } from "system";

const free = memory.availableBytes();
console.log("Free RAM:", (free / 1073741824).toFixed(1), "GB");
```

</template>
</MethodBox>

---

<MethodBox
  name="memory.usedBytes()"
  badge="memory"
  badgeType="core"
  returns="number"
>
<template #returns>Used physical RAM in bytes. Returns <code>0</code> if unavailable.</template>

Returns the currently used physical memory.

<template #example>

```javascript
import { memory } from "system";

const used = memory.usedBytes();
console.log("Used RAM:", (used / 1073741824).toFixed(1), "GB");
```

</template>
</MethodBox>

---

<MethodBox
  name="memory.usagePercent()"
  badge="memory"
  badgeType="core"
  returns="number"
>
<template #returns>Memory usage as a percentage in the range <code>0–100</code>. Returns <code>0</code> if unavailable.</template>

Returns current memory usage as a percentage of total RAM.

<template #example>

```javascript
import { memory } from "system";

const pct = memory.usagePercent();
console.log("RAM usage:", pct + "%");
```

</template>
</MethodBox>

---

## Full Example

```javascript
import { memory } from "system";

const GB = 1073741824;

console.log("Total:",     (memory.totalBytes()     / GB).toFixed(1), "GB");
console.log("Available:", (memory.availableBytes() / GB).toFixed(1), "GB");
console.log("Used:",      (memory.usedBytes()      / GB).toFixed(1), "GB");
console.log("Usage %:",   memory.usagePercent() + "%");
```
