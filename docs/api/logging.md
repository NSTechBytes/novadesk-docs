---
title: Logging and the print helper
---

# Logging

The global logging system writes messages to the Novadesk log. All `console.*` methods and the `print` shorthand are available without any import.

::: info Availability
All logging functions are globals available in both the [Main script](/guides/script-types.html#main-script-the-brain) and the [UI script](/guides/script-types.html#ui-script-the-face). No import needed.
:::

#### Table of Contents
[[toc]]

---

<MethodBox
  name="console.log(...args)"
  badge="console"
  badgeType="core"
  :parameters="[
    { name: '...args', type: 'any', description: 'Values to log. Objects are serialized to JSON automatically.' }
  ]"
>

Writes a general log message to the Novadesk log.

<template #example>

```javascript
console.log("Widget ready");
console.log("State:", { loaded: true, count: 3 });
```

**Output**
```text
[TimeStamp] [Novadesk] [LOG] Widget ready
[TimeStamp] [Novadesk] [LOG] State: {"loaded":true,"count":3}
```

</template>
</MethodBox>

---

<MethodBox
  name="console.info(...args)"
  badge="console"
  badgeType="core"
  :parameters="[
    { name: '...args', type: 'any', description: 'Values to log.' }
  ]"
>

Writes an informational message to the Novadesk log.

<template #example>

```javascript
console.info("Widget loaded successfully");
```

**Output**
```text
[TimeStamp] [Novadesk] [INFO] Widget loaded successfully
```

</template>
</MethodBox>

---

<MethodBox
  name="console.warn(...args)"
  badge="console"
  badgeType="core"
  :parameters="[
    { name: '...args', type: 'any', description: 'Values to log.' }
  ]"
>

Writes a warning message to the Novadesk log. Use this for non-fatal issues that should be visible without enabling debug mode.

<template #example>

```javascript
console.warn("Config missing, using defaults");
```

**Output**
```text
[TimeStamp] [Novadesk] [WARN] Config missing, using defaults
```

</template>
</MethodBox>

---

<MethodBox
  name="console.error(...args)"
  badge="console"
  badgeType="core"
  :parameters="[
    { name: '...args', type: 'any', description: 'Values to log.' }
  ]"
>

Writes an error message to the Novadesk log. Use this for failures that need immediate attention.

<template #example>

```javascript
console.error("Failed to load config:", err.message);
```

**Output**
```text
[TimeStamp] [Novadesk] [ERROR] Failed to load config: file not found
```

</template>
</MethodBox>

---

<MethodBox
  name="console.debug(...args)"
  badge="console"
  badgeType="core"
  :parameters="[
    { name: '...args', type: 'any', description: 'Values to log.' }
  ]"
>

Writes a debug message. These messages are **only visible when debugging is enabled** — they are silently dropped at runtime otherwise.

::: warning Requires debugging enabled
`console.debug` output only appears when debugging is turned on. See [`app.enableDebugging()`](/api/modules/novadesk/app.html#appenabledebuggingbool) to enable it from code, or toggle it from the Manage window settings panel.
:::

<template #example>

```javascript
console.debug("tick", { frame: 42, elapsed: 16.7 });
```

**Output** (only when debugging is enabled)
```text
[TimeStamp] [Novadesk] [DEBUG] tick {"frame":42,"elapsed":16.7}
```

</template>
</MethodBox>

---

<MethodBox
  name="print(...args)"
  badge="global"
  badgeType="ui"
  :parameters="[
    { name: '...args', type: 'any', description: 'Values to log.' }
  ]"
>

Shorthand alias for `console.log()`. Useful for quick one-liners during development.

<template #example>

```javascript
print("Hello from Novadesk");
// same as: console.log("Hello from Novadesk")
```

**Output**
```text
[TimeStamp] [Novadesk] [LOG] Hello from Novadesk
```

</template>
</MethodBox>
