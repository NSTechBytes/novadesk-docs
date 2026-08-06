---
title: Load and manage native C++ addons with the addon module.
---

# addon

Load and manage native C++ addon DLLs at runtime to extend Novadesk with platform-specific or performance-critical native code.

```javascript
import { addon } from 'novadesk';
```

::: info Availability
Available in the [Main script](/guides/script-types.html#main-script-the-brain) only.
:::

#### Table of Contents
[[toc]]

---

<MethodBox
  name="addon.load(path)"
  badge="addon"
  badgeType="core"
  returns="object | number | null"
  :parameters="[
    { name: 'path', type: 'string', description: 'Path to the .dll file. Relative paths resolve from the entry script directory.' }
  ]"
>
<template #returns>The addon exports object on first load, the numeric addon ID if already loaded in another context, or <code>null</code> on failure.</template>

Loads a native addon DLL into the Novadesk runtime. The DLL must export a `NovadeskAddonInit` function. An optional `NovadeskAddonUnload` export is called during cleanup.

Novadesk injects two helpers onto the returned exports object:
- `__novadesk_addon_id` — the numeric ID assigned to this addon
- `unload()` — convenience method to unload the addon

If the addon is already loaded in the same script context, the existing exports object is returned. If loaded in another context, the numeric ID is returned instead.

::: tip Building addons?
See the [Addon SDK Developer Guide](/developers/api/addon-api) to learn how to create native addons.
:::

<template #example>

```javascript
import { addon } from 'novadesk';

const handle = addon.load("./addons/my_addon.dll");

if (handle && typeof handle === "object") {
  console.log("Addon ID:", handle.__novadesk_addon_id);
  // Call addon-registered functions
  // handle.myFunction();
}
```

</template>
</MethodBox>

---

<MethodBox
  name="addon.unload(target)"
  badge="addon"
  badgeType="core"
  returns="boolean"
  :parameters="[
    { name: 'target', type: 'object | number', optional: true, description: 'The exports handle returned by addon.load(), or the numeric addon ID. Can be omitted when called as handle.unload().' }
  ]"
>
<template #returns><code>true</code> if the addon was found and unloaded, <code>false</code> if no addon with that handle or ID exists.</template>

Unloads a previously loaded native addon. Calls the addon's `NovadeskAddonUnload` export if present, removes all registered functions, releases the exports object, and frees the DLL.

<template #example>

```javascript
import { addon } from 'novadesk';

const handle = addon.load("./addons/my_addon.dll");

// Option 1: use the injected helper
handle.unload();

// Option 2: unload via module with the handle
addon.unload(handle);

// Option 3: unload via module with the numeric ID
addon.unload(handle.__novadesk_addon_id);
```

</template>
</MethodBox>
