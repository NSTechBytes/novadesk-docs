---
title: Control the Novadesk application via the app object
---

# app

Control the Novadesk runtime — reload scripts, manage settings, query paths, and persist widget state.

```javascript
import { app } from 'novadesk';
```

::: info Availability
Available in the [Main script](/guides/script-types.html#main-script-the-brain) only.
:::

#### Table of Contents
[[toc]]

---

## Lifecycle

<MethodBox
  name="app.reload()"
  badge="app"
  badgeType="core"
>

Reloads all active widget scripts. Equivalent to `app.refresh()`.

<template #example>

```javascript
app.reload();
```

</template>
</MethodBox>

---

<MethodBox
  name="app.refresh()"
  badge="app"
  badgeType="core"
>

Alias of `app.reload()`. Reloads all active widget scripts.

<template #example>

```javascript
app.refresh();
```

</template>
</MethodBox>

---

<MethodBox
  name="app.exit()"
  badge="app"
  badgeType="core"
>

Exits the Novadesk application gracefully.

<template #example>

```javascript
app.exit();
```

</template>
</MethodBox>

---

<MethodBox
  name="app.requestSingleInstanceLock()"
  badge="app"
  badgeType="core"
  returns="boolean"
>
<template #returns><code>true</code> if the single-instance lock was acquired, <code>false</code> if another instance already holds it.</template>

Requests ownership of the global single-instance mutex. Use this when building standalone launcher widgets.

<template #example>

```javascript
const hasLock = app.requestSingleInstanceLock();
if (!hasLock) {
  console.log("Another instance is running");
  app.exit();
}
```

</template>
</MethodBox>

---

<MethodBox
  name="app.releaseSingleInstanceLock()"
  badge="app"
  badgeType="core"
  returns="boolean"
>
<template #returns><code>true</code> after the release is requested.</template>

Releases the single-instance lock acquired by `app.requestSingleInstanceLock()`.

<template #example>

```javascript
app.releaseSingleInstanceLock();
```

</template>
</MethodBox>

---

<MethodBox
  name="app.isFirstRun()"
  badge="app"
  badgeType="core"
  returns="boolean"
>
<template #returns><code>true</code> on the first launch when no settings file exists, <code>false</code> on subsequent launches.</template>

Returns whether this is the first time Novadesk has been launched (i.e. the settings file is missing or empty). Useful for showing onboarding UI.

<template #example>

```javascript
if (app.isFirstRun()) {
  console.log("Welcome! First launch detected.");
}
```

</template>
</MethodBox>

---

## Settings

<MethodBox
  name="app.saveLogToFile(enable)"
  badge="app"
  badgeType="core"
  :parameters="[
    { name: 'enable', type: 'boolean', description: 'true to write logs to logs.log in the AppData directory, false to disable.' }
  ]"
>

Enables or disables persistent log file output. Logs are written to `app.getLogPath()`.

<template #example>

```javascript
app.saveLogToFile(true);
```

</template>
</MethodBox>

---

<MethodBox
  name="app.enableDebugging(enable)"
  badge="app"
  badgeType="core"
  :parameters="[
    { name: 'enable', type: 'boolean', description: 'true to enable debug-level logging, false to revert to standard logging.' }
  ]"
>

Sets the global log level. When enabled, `console.debug()` output becomes visible in the log and console.

<template #example>

```javascript
app.enableDebugging(true);
console.debug("Detailed diagnostic info");
```

</template>
</MethodBox>

---

<MethodBox
  name="app.disableLogging(disable)"
  badge="app"
  badgeType="core"
  :parameters="[
    { name: 'disable', type: 'boolean', description: 'true to silence all log output, false to resume logging.' }
  ]"
>

Completely suppresses all logging output (both console and file). Use in production builds to avoid performance overhead.

<template #example>

```javascript
app.disableLogging(true);
```

</template>
</MethodBox>

---

<MethodBox
  name="app.useHardwareAcceleration(enable)"
  badge="app"
  badgeType="core"
  :parameters="[
    { name: 'enable', type: 'boolean', description: 'true to use Direct2D hardware rendering (default), false to use software rendering.' }
  ]"
>

Enables or disables Direct2D hardware acceleration.

::: warning Requires restart
This setting is saved immediately but only takes effect after restarting Novadesk.
:::

<template #example>

```javascript
app.useHardwareAcceleration(false); // switch to software rendering
```

</template>
</MethodBox>

---

## Utils

<MethodBox
  name="app.isPortable()"
  badge="app"
  badgeType="core"
  returns="boolean"
>
<template #returns><code>true</code> when running in portable mode, <code>false</code> otherwise.</template>

Returns whether Novadesk is running in portable mode. Portable mode is detected at runtime based on whether a `settings.json` exists next to the executable.

<template #example>

```javascript
if (app.isPortable()) {
  console.log("Running portable");
}
```

</template>
</MethodBox>

---

<MethodBox
  name="app.getProductVersion()"
  badge="app"
  badgeType="core"
  returns="string"
>
<template #returns>The product version string from the executable metadata.</template>

Returns the product version. For widgets packaged with `nwm`, this reports the version from `meta.json`.

<template #example>

```javascript
console.log("Version:", app.getProductVersion()); // e.g. "1.2.0.0"
```

</template>
</MethodBox>

---

<MethodBox
  name="app.getFileVersion()"
  badge="app"
  badgeType="core"
  returns="string"
>
<template #returns>The file version string from the executable metadata.</template>

Returns the file version from the executable. For `nwm`-packaged widgets, this reports the value from `meta.json`.

<template #example>

```javascript
console.log("File version:", app.getFileVersion());
```

</template>
</MethodBox>

---

<MethodBox
  name="app.getNovadeskVersion()"
  badge="app"
  badgeType="core"
  returns="string"
>
<template #returns>The hardcoded Novadesk engine version string, regardless of packaging.</template>

Returns the Novadesk engine version. This is always the engine version, even inside `nwm`-packaged widgets.

<template #example>

```javascript
console.log("Engine:", app.getNovadeskVersion()); // e.g. "0.9.9.0"
```

</template>
</MethodBox>

---

<MethodBox
  name="app.getAppDataPath()"
  badge="app"
  badgeType="core"
  returns="string"
>
<template #returns>Absolute path to the Novadesk AppData directory (<code>%APPDATA%\Novadesk\</code>).</template>

Returns the path to the Novadesk AppData folder used for settings, logs, and persistent storage.

<template #example>

```javascript
console.log("AppData:", app.getAppDataPath());
```

</template>
</MethodBox>

---

<MethodBox
  name="app.getSettingsFilePath()"
  badge="app"
  badgeType="core"
  returns="string"
>
<template #returns>Absolute path to the active <code>settings.json</code> file.</template>

Returns the path to the Novadesk settings file.

<template #example>

```javascript
console.log("Settings:", app.getSettingsFilePath());
```

</template>
</MethodBox>

---

<MethodBox
  name="app.getLogPath()"
  badge="app"
  badgeType="core"
  returns="string"
>
<template #returns>Absolute path to the current <code>logs.log</code> file.</template>

Returns the path to the current log file.

<template #example>

```javascript
console.log("Log file:", app.getLogPath());
```

</template>
</MethodBox>

---

## Storage

`app.storage` is a simple persistent key/value store. Values are JSON-serialized and saved to `app.getAppDataPath() + "storage.json"`. Keys are strings; values can be any JSON-serializable type.

<MethodBox
  name="app.storage.get(key [, defaultValue])"
  badge="storage"
  badgeType="core"
  returns="any"
  :parameters="[
    { name: 'key', type: 'string', description: 'Storage key to read.' },
    { name: 'defaultValue', type: 'any', optional: true, description: 'Returned when the key is missing. Defaults to undefined.' }
  ]"
>
<template #returns>The stored value if the key exists, otherwise <code>defaultValue</code> or <code>undefined</code>.</template>

Reads a value from persistent app storage.

<template #example>

```javascript
const theme = app.storage.get("ui.theme", "dark");
const count = app.storage.get("session.count", 0);
```

</template>
</MethodBox>

---

<MethodBox
  name="app.storage.set(key, value)"
  badge="storage"
  badgeType="core"
  returns="boolean"
  :parameters="[
    { name: 'key', type: 'string', description: 'Storage key to write.' },
    { name: 'value', type: 'any', description: 'JSON-serializable value to store.' }
  ]"
>
<template #returns><code>true</code> if the value was saved successfully.</template>

Writes a value to persistent app storage. Overwrites any existing value at that key.

<template #example>

```javascript
app.storage.set("ui.theme", "dark");
app.storage.set("profile", { name: "Nasir", pro: true });
app.storage.set("session.count", 3);
```

</template>
</MethodBox>

---

<MethodBox
  name="app.storage.remove(key)"
  badge="storage"
  badgeType="core"
  returns="boolean"
  :parameters="[
    { name: 'key', type: 'string', description: 'Storage key to delete.' }
  ]"
>
<template #returns><code>true</code> if the key existed and was removed, <code>false</code> if the key was not found.</template>

Deletes a key from persistent app storage.

<template #example>

```javascript
app.storage.remove("session.count");
```

</template>
</MethodBox>
