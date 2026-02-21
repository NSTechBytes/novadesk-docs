---
title: Monitor system memory with the memory-monitor module.
---

# memory-monitor Module
The memory-monitor module allows you to monitor system memory usage, including total, available, used memory, and load percentage.

The memory-monitor module can be accessed using `require("memory-monitor")`.

```javascript
const memoryMonitor = require("memory-monitor");
```

#### Table of Contents
[[toc]]

## `new memoryMonitor.memory()`

Creates a memory monitor instance.

## `memory.stats()`

Returns the current memory statistics.

### Return Value

- **Type**: `Object`
- **Description**: Contains:
  - **`total`** (`number`): Total physical memory in bytes.
  - **`available`** (`number`): Available physical memory in bytes.
  - **`used`** (`number`): Used physical memory in bytes.
  - **`percent`** (`number`): Memory load percentage (`0-100`).

## `memory.destroy()`

Destroys the memory monitor and frees its native resources.

## Example

```javascript
// index.js
const memoryMonitor = require("memory-monitor");
var memory = new memoryMonitor.memory();

var intervalId = setInterval(function () {
    var stats = memory.stats();
    var totalGB = (stats.total / (1024 * 1024 * 1024)).toFixed(2);
    var usedGB = (stats.used / (1024 * 1024 * 1024)).toFixed(2);
    var availableGB = (stats.available / (1024 * 1024 * 1024)).toFixed(2);

    console.log("Memory - Total: " + totalGB + "GB, Used: " + usedGB + "GB, Available: " + availableGB + "GB");
    console.log("Memory Load: " + stats.percent + "%");
}, 1000);

setTimeout(function () {
    clearInterval(intervalId);
    memory.destroy();
    console.log("Memory Monitor Destroyed");
}, 5000);
```
