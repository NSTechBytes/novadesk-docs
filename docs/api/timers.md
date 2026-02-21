---
title: Timer helpers available in the Main script.
---

# Timer Functions
Timing helpers (similar to browsers/Node.js) are available only in the Main script. UI scripts should request timing logic via the Main script through [IPC](/api/win/widget-api/win-object#inter-process-communication-ipc).

#### Table of Contents
[[toc]]

::: warning
Timer functions run exclusively in the Main script.
:::

## `setTimeout(callback, delay)`

Executes `callback` after the specified delay.

### Parameters

- **`callback`** (`function`): Function to run after the delay.
- **`delay`** (`number`): Milliseconds to wait before executing.

### Return Value

- **Type**: `number`
- **Description**: Timer ID for `clearTimeout`.

### Example

```javascript
var timerId = setTimeout(function () {
  console.log("This runs after 3 seconds");
}, 3000);

clearTimeout(timerId);
```

## `setInterval(callback, interval)`

Executes `callback` repeatedly.

### Parameters

- **`callback`** (`function`)
- **`interval`** (`number`): Milliseconds between executions.

### Return Value

- **Type**: `number`
- **Description**: Timer ID for `clearInterval`.

### Example

```javascript
var intervalId = setInterval(function () {
  console.log("This runs every 2 seconds");
}, 2000);

setTimeout(function () {
  clearInterval(intervalId);
  console.log("Interval stopped");
}, 10000);
```

## `clearTimeout(id)`

Cancels a timeout created with `setTimeout`.

### Parameters

- **`id`** (`number`): Timer ID.

### Example

```javascript
var timerId = setTimeout(function () {
  console.log("This will not run");
}, 5000);

clearTimeout(timerId);
```

## `clearInterval(id)`

Cancels an interval created with `setInterval`.

### Parameters

- **`id`** (`number`): Interval ID.

### Example

```javascript
var intervalId = setInterval(function () {
  console.log("This runs repeatedly");
}, 1000);

setTimeout(function () {
  clearInterval(intervalId);
  console.log("Interval stopped");
}, 5000);
```

## `setImmediate(callback)`

Runs the callback as soon as the current execution stack clears.

### Parameters

- **`callback`** (`function`): Function executed on the next tick.

### Return Value

- **Type**: `number`
- **Description**: ID usable to cancel via `clearImmediate` (if supported).

### Example

```javascript
console.log("First");

setImmediate(function () {
  console.log("This runs after current execution completes");
});

console.log("Second");
```
