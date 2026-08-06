---
title: Access Windows Recycle Bin APIs from the system module.
---

# recycleBin

Open, empty, and inspect the Windows Recycle Bin.

```javascript
import { recycleBin } from "system";
```

::: info Availability
Available in the [Main script](/guides/script-types.html#main-script-the-brain) only.
:::

#### Table of Contents
[[toc]]

---

<MethodBox
  name="recycleBin.openBin()"
  badge="recycleBin"
  badgeType="core"
  returns="boolean"
>
<template #returns><code>true</code> if the request was accepted by the shell, <code>false</code> otherwise.</template>

Opens the Windows Recycle Bin folder in Explorer.

<template #example>

```javascript
import { recycleBin } from "system";

recycleBin.openBin();
```

</template>
</MethodBox>

---

<MethodBox
  name="recycleBin.emptyBin()"
  badge="recycleBin"
  badgeType="core"
  returns="boolean"
>
<template #returns><code>true</code> on success, <code>false</code> otherwise.</template>

Empties the Recycle Bin using the normal shell behavior — shows the confirmation dialog and progress UI.

<template #example>

```javascript
import { recycleBin } from "system";

recycleBin.emptyBin();
```

</template>
</MethodBox>

---

<MethodBox
  name="recycleBin.emptyBinSilent()"
  badge="recycleBin"
  badgeType="core"
  returns="boolean"
>
<template #returns><code>true</code> on success, <code>false</code> otherwise.</template>

Empties the Recycle Bin silently — no confirmation dialog or progress UI is shown.

<template #example>

```javascript
import { recycleBin } from "system";

recycleBin.emptyBinSilent();
```

</template>
</MethodBox>

---

<MethodBox
  name="recycleBin.getStats()"
  badge="recycleBin"
  badgeType="core"
  returns="object | null"
>
<template #returns>An object with <code>itemCount</code> and <code>totalSizeBytes</code>, or <code>null</code> on failure.</template>

Returns the current item count and total size of the Recycle Bin contents.

The returned object has these properties:

| Property | Type | Description |
|---|---|---|
| `itemCount` | `number` | Number of items currently in the Recycle Bin. |
| `totalSizeBytes` | `number` | Total size of all items in bytes. |

<template #example>

```javascript
import { recycleBin } from "system";

const stats = recycleBin.getStats();
if (stats) {
  console.log("Items:", stats.itemCount);
  console.log("Size:", (stats.totalSizeBytes / 1048576).toFixed(1), "MB");
}
```

</template>
</MethodBox>
