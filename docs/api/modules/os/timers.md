---
title: os timers and time APIs (Windows)
---

# os Timers and Time (Windows)

Import:

```javascript
import * as os from "os";
```

#### Table of Contents
[[toc]]

## `os.now()`

Returns current high-resolution runtime time in milliseconds.

### Return Value

- **Type**: `number`

## `os.sleep(ms)`

Blocks the current thread for `ms` milliseconds.

### Parameters

- **`ms`** (`number`): Sleep duration in milliseconds.

### Return Value

- **Type**: `number`
- **Description**: `0` on success, negative value on error.

## `os.sleepAsync(ms)`

Asynchronous sleep helper.

### Parameters

- **`ms`** (`number`): Delay in milliseconds.

### Return Value

- **Type**: `Promise<void>`

## `os.setTimeout(callback, delayMs)`

Schedules a one-time callback.

### Parameters

- **`callback`** (`function`)
- **`delayMs`** (`number`)

### Return Value

- **Type**: `number`
- **Description**: Timer ID.

## `os.setInterval(callback, delayMs)`

Schedules a repeating callback.

### Parameters

- **`callback`** (`function`)
- **`delayMs`** (`number`)

### Return Value

- **Type**: `number`
- **Description**: Interval ID.

## `os.clearTimeout(id)`

Cancels a timer/interval ID.

### Parameters

- **`id`** (`number`)

### Return Value

- **Type**: `void`

## `os.clearInterval(id)`

Cancels a timer/interval ID.

### Parameters

- **`id`** (`number`)

### Return Value

- **Type**: `void`

## Example

```javascript
import * as os from "os";

console.log("now:", os.now());

const id = os.setInterval(() => {
    console.log("tick");
}, 1000);

os.setTimeout(() => {
    os.clearInterval(id);
}, 3500);
```

## Windows Scope

These timer/time APIs are available in the Windows build of QuickJS used by Novadesk.
