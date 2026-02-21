---
title: Monitor CPU usage with the cpu-monitor module.
---

# cpu-monitor Module
Monitor CPU usage in Novadesk. The CPU monitor class lets you observe overall system usage or specific processor cores.

The cpu-monitor module can be accessed using `require("cpu-monitor")`.

```javascript
const cpuMonitor = require("cpu-monitor");
```

#### Table of Contents
[[toc]]

## `new cpuMonitor.cpu([options])`

Creates a new CPU monitor instance.

#### Parameters

- **`options`**
  - **Type**: `Object`
  - **Required**: No
  - **Description**: Configuration options for the CPU monitor.

- **`processor`**
  - **Type**: `number`
  - **Default**: `0` (all processors)
  - **Description**: Processor index to monitor (`0` for all, `1+` for a specific core).

## `cpu.usage()`

Returns the current CPU usage percentage.

#### Return Value

- **Type**: `number`
- **Description**: CPU usage percentage (`0-100`).

## `cpu.destroy()`

Destroys the CPU monitor and frees its native resources.

## Example

```javascript
// index.js
const cpuMonitor = require("cpu-monitor");
// Create CPU monitors
var overallCPU = new cpuMonitor.cpu();
var core1CPU = new cpuMonitor.cpu({ processor: 1 });

// Store the interval ID
var intervalId = setInterval(function () {
    var overallUsage = overallCPU.usage();
    var core1Usage = core1CPU.usage();
    console.log("Overall CPU: " + overallUsage + "%");
    console.log("Core 1 CPU: " + core1Usage + "%");
}, 1000);

// Destroy monitors and clean up the interval when done
setTimeout(function () {
    clearInterval(intervalId);
    overallCPU.destroy();
    core1CPU.destroy();
    console.log("CPU Monitors Destroyed");
}, 5000);
```
