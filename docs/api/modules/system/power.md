---
title: Read power and battery status with the power module.
---

# power Module
Access system power and battery status in Novadesk.

The power module can be accessed using `require("power")`.

```javascript
const power = require("power");
```

#### Table of Contents
[[toc]]

## `power.getStatus()`

Retrieves current power and battery information.

### Return Value

- **Type**: `object | null`
- **Description**: Returns an object with the following properties, or `null` if the information is unavailable.

### Properties

- **`acline`** (`number`): `1` if plugged in (AC), `0` if on battery.
- **`status`** (`number`): Mapped battery status (`0`: No battery, `1`: Charging, `2`: Critical, `3`: Low, `4`: High/Full).
- **`status2`** (`number`): Raw `BatteryFlag` value from Windows.
- **`lifetime`** (`number`): Estimated battery life remaining in seconds (`-1` if unknown).
- **`percent`** (`number`): Battery charge percentage (`0-100`).
- **`mhz`** (`number`): Current CPU frequency in MHz.
- **`hz`** (`number`): Current CPU frequency in Hz.

## Example

```javascript
const power = require("power");
var status = power.getStatus();
if (status) {
    console.log("Power Source:", status.acline ? "AC" : "Battery");
    console.log("Battery:", status.percent + "%", "Status Code:", status.status);
    console.log("CPU Frequency:", status.mhz + " MHz");
} else {
    console.log("Power information unavailable.");
}
```
