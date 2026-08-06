---
title: Read and write Windows Registry values with the registry module.
---

# registry Module

Read and write Windows Registry values.

```javascript
import { registry } from "system";
```

::: info Availability
Available in the [Main script](/guides/script-types.html#main-script-the-brain) only.
:::

#### Table of Contents
[[toc]]

---

<MethodBox
  name="registry.readData(path, valueName)"
  badge="registry"
  badgeType="core"
  returns="string | number | null"
  :parameters="[
    { name: 'path', type: 'string', description: 'Full registry key path including the hive (e.g. HKEY_CURRENT_USER\\Software\\MyApp).' },
    { name: 'valueName', type: 'string', description: 'Name of the registry value to read.' }
  ]"
>
<template #returns>A <code>string</code> for string values, a <code>number</code> for numeric values, or <code>null</code> if the value cannot be read or the type is unsupported.</template>

Reads a value from the Windows Registry. Supports string (`REG_SZ`, `REG_EXPAND_SZ`) and numeric (`REG_DWORD`, `REG_QWORD`) types.

<template #example>

```javascript
import { registry } from "system";

const value = registry.readData(
  "HKEY_CURRENT_USER\\Software\\NovadeskDemo",
  "Theme"
);
console.log("Theme:", value); // "dark" or null
```

</template>
</MethodBox>

---

<MethodBox
  name="registry.writeData(path, valueName, value)"
  badge="registry"
  badgeType="core"
  returns="boolean"
  :parameters="[
    { name: 'path', type: 'string', description: 'Full registry key path including the hive.' },
    { name: 'valueName', type: 'string', description: 'Name of the registry value to write.' },
    { name: 'value', type: 'string | number', description: 'Value to write. Strings are written as REG_SZ; numbers are written as numeric type.' }
  ]"
>
<template #returns><code>true</code> if the write succeeded, <code>false</code> otherwise.</template>

Writes a value to the Windows Registry. Creates the key if it does not exist.

<template #example>

```javascript
import { registry } from "system";

// Write a string value
registry.writeData(
  "HKEY_CURRENT_USER\\Software\\NovadeskDemo",
  "Theme",
  "dark"
);

// Write a numeric value
registry.writeData(
  "HKEY_CURRENT_USER\\Software\\NovadeskDemo",
  "Opacity",
  85
);

// Read back
const theme = registry.readData(
  "HKEY_CURRENT_USER\\Software\\NovadeskDemo",
  "Theme"
);
console.log("Theme:", theme); // "dark"
```

</template>
</MethodBox>
