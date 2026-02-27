---
title: Monitor network transfer rates with the network-monitor module.
---

# network-monitor Module
The network-monitor module allows you to track incoming and outgoing data transfer rates and totals.

The network-monitor module can be accessed using `require("network-monitor")`.

```javascript
const networkMonitor = require("network-monitor");
```

#### Table of Contents
[[toc]]

## `new networkMonitor.network()`

Creates a network monitor instance.

## `network.stats()`

Returns the current network statistics.

### Return Value

- **Type**: `Object`
- **Description**: Contains:
  - **`netIn`** (`number`): Incoming bytes per second.
  - **`netOut`** (`number`): Outgoing bytes per second.
  - **`totalIn`** (`number`): Total incoming bytes since creation.
  - **`totalOut`** (`number`): Total outgoing bytes since creation.

## `network.destroy()`

Destroys the network monitor and frees its native resources.

## Example

```javascript
// index.js
const networkMonitor = require("network-monitor");
var network = new networkMonitor.network();

var intervalId = setInterval(function () {
    var stats = network.stats();
    var netInKB = (stats.netIn / 1024).toFixed(2);
    var netOutKB = (stats.netOut / 1024).toFixed(2);
    var totalInMB = (stats.totalIn / (1024 * 1024)).toFixed(2);
    var totalOutMB = (stats.totalOut / (1024 * 1024)).toFixed(2);

    console.log("Network - In: " + netInKB + " KB/s, Out: " + netOutKB + " KB/s");
    console.log("Total - In: " + totalInMB + " MB, Out: " + totalOutMB + " MB");
}, 1000);

setTimeout(function () {
    clearInterval(intervalId);
    network.destroy();
    console.log("Network Monitor Destroyed");
}, 5000);
```
