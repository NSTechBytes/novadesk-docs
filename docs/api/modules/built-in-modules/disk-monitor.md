---
title: Monitor disk usage via the disk-monitor module.
---

# disk-monitor Module
Monitor disk usage for specific drives or all drives on the system through the disk-monitor module.

The disk-monitor module can be accessed using `require("disk-monitor")`.

```javascript
const diskMonitor = require("disk-monitor");
```

#### Table of Contents
[[toc]]

## `new diskMonitor.disk([options])`

Instantiates a disk monitor.

#### Parameters

- **`options`**
  - **Type**: `Object`
  - **Required**: No
  - **Description**: Configuration options for the disk monitor.

- **`drive`**
  - **Type**: `string`
  - **Default**: All drives
  - **Description**: Drive letter to monitor (e.g., `"C:"`, `"D:"`).

## `disk.stats()`

Returns the current disk statistics.

#### Return Value

- **Type**: `Object | Array`
- **Description**: For a single-drive monitor, returns an object containing:
  - **`drive`** (`string`): Drive letter.
  - **`total`** (`number`): Total disk space in bytes.
  - **`free`** (`number`): Free disk space in bytes.
  - **`used`** (`number`): Used disk space in bytes.
  - **`percent`** (`number`): Usage percentage (`0-100`).
  
For an all-drives monitor the method returns an array of objects for each drive with the same properties.

## `disk.destroy()`

Destroys the disk monitor and frees its resources.

## Example

```javascript
// index.js
const diskMonitor = require("disk-monitor");
var cDrive = new diskMonitor.disk({ drive: "C:" });
var allDisks = new diskMonitor.disk();

// Update every 1 second (disk info doesn't change as frequently)
var intervalId = setInterval(function () {
    var cStats = cDrive.stats();

    var cTotalGB = (cStats.total / (1024 * 1024 * 1024)).toFixed(2);
    var cUsedGB = (cStats.used / (1024 * 1024 * 1024)).toFixed(2);
    var cFreeGB = (cStats.free / (1024 * 1024 * 1024)).toFixed(2);

    console.log("C: Drive - Total: " + cTotalGB + "GB, Used: " + cUsedGB + "GB, Free: " + cFreeGB + "GB (" + cStats.percent + "%)");

    var allStats = allDisks.stats();
    for (var i = 0; i < allStats.length; i++) {
        var drive = allStats[i];
        var totalGB = (drive.total / (1024 * 1024 * 1024)).toFixed(2);
        var usedGB = (drive.used / (1024 * 1024 * 1024)).toFixed(2);
        var freeGB = (drive.free / (1024 * 1024 * 1024)).toFixed(2);

        console.log(drive.drive + " Drive - Total: " + totalGB + "GB, Used: " + usedGB + "GB, Free: " + freeGB + "GB (" + drive.percent + "%)");
    }
}, 1000);

setTimeout(function () {
    clearInterval(intervalId);
    cDrive.destroy();
    allDisks.destroy();
    console.log("Disk Monitor Destroyed");
}, 30000);
```
