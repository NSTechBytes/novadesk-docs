---
title: Logging helpers exposed via the console object.
---

# Logging
Novadesk exposes the familiar `console` logging helpers, writing output to both the console and the log file.

#### Table of Contents
[[toc]]

## `console.log(...args)`

Logs informational messages.

### Parameters

- **`...args`** (`any`): Values to log.

### Example

```javascript
console.log("Application started");
console.log("User:", "John Doe", "Version:", "1.0.0");
```

## `console.warn(...args)`

Logs warning messages.

### Parameters

- **`...args`** (`any`): Values to log as a warning.

### Example

```javascript
console.warn("Deprecated function used");
console.warn("Low memory warning:", 1024, "MB remaining");
```

## `console.error(...args)`

Logs error messages.

### Parameters

- **`...args`** (`any`): Values to log as an error.

### Example

```javascript
console.error("Failed to load configuration file");
console.error("Error code:", 404, "Message:", "File not found");
```

## `console.debug(...args)`

Logs debug-level details; output respects the current log level.

::: warning
Debug messages are visible only when debug logging is enabled via the [app settings](~docs/api/app-object/settings) (see `app.enableDebugging`).
:::

### Parameters

- **`...args`** (`any`): Values to log as debug information.

### Example

```javascript
console.debug("Debug: Entering function calculatePosition");
console.debug("Debug: Current widget position:", x, y);
```
