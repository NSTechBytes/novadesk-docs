---
title: Retrieve screen and monitor metrics with the display-metrics module.
---

# display-metrics Module
Retrieve screen and monitor metrics in Novadesk using the display-metrics module.

The display-metrics module can be accessed using `require("display-metrics")`.

```javascript
const displayMetrics = require("display-metrics");
```

#### Table of Contents
[[toc]]

## `displayMetrics.getDisplayMetrics()`

Returns detailed information about screen dimensions, work areas, and connected monitors.

#### Return Value

- **Type**: `Object`
- **Description**: Structured display data with the following properties.

### `primary`

- **Type**: `Object`
- **Description**: Information about the primary monitor.
  - **`workArea`**: Usable desktop area (excluding taskbars/docks).
  - **`screenArea`**: Full screen resolution.

### `virtualScreen`

- **Type**: `Object`
- **Description**: Combined desktop space across all monitors.
  - **`x`**, **`y`**: Top-left coordinates.
  - **`width`**, **`height`**: Total dimensions in pixels.

### `monitors`

- **Type**: `Array`
- **Description**: Array of connected monitor objects.
Each monitor object contains:
  - **`id`**: Unique identifier.
  - **`workArea`**: Usable desktop area for the monitor.
  - **`screenArea`**: Full resolution of the monitor.

### Area Object Structure

- **`x`**, **`y`**: Top-left coordinates.
- **`width`**, **`height`**: Dimensions in pixels.

## Example

```javascript
const displayMetrics = require("display-metrics");
var report = displayMetrics.getDisplayMetrics();
console.log("Primary monitor:", report.primary);
console.log("Virtual desktop:", report.virtualScreen);
console.log("Monitors:", report.monitors);
```
