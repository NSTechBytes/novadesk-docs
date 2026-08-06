---
title: Timer functions available in Novadesk scripts.
---

# Timer Functions

Global timing helpers modelled after the browser and Node.js timer APIs. No import needed — all four functions are available directly.

::: info Availability
Timer functions are globals available in the [Main script](/guides/script-types.html#main-script-the-brain) only. They are **not** available in [UI scripts](/guides/script-types.html#ui-script-the-face).
:::

::: tip New to timers?
Use `setTimeout` for a one-shot delay and `setInterval` for repeating work. Always store the returned ID so you can cancel it with `clearTimeout` or `clearInterval` when the widget is no longer active.
:::

#### Table of Contents
[[toc]]

---

<MethodBox
  name="setTimeout(callback, delay [, ...args])"
  badge="timers"
  badgeType="core"
  returns="number"
  :parameters="[
    { name: 'callback', type: 'function', description: 'Function to execute after the delay.' },
    { name: 'delay', type: 'number', optional: true, description: 'Milliseconds to wait before executing. Defaults to 0. Negative values are clamped to 0.' },
    { name: '...args', type: 'any', optional: true, description: 'Extra arguments forwarded to the callback when it fires.' }
  ]"
>
<template #returns>A timer ID that can be passed to <code>clearTimeout()</code> to cancel the pending call.</template>

Schedules `callback` to run **once** after `delay` milliseconds. Returns a timer ID you can pass to `clearTimeout()` to cancel before it fires.

<template #example>

```javascript
// Basic usage
const id = setTimeout(() => {
  console.log("Fired after 3 seconds");
}, 3000);

// Pass extra arguments to the callback
setTimeout((greeting, name) => {
  console.log(greeting, name); // "Hello Novadesk"
}, 1000, "Hello", "Novadesk");

// Cancel before it fires
const cancelId = setTimeout(() => {
  console.log("This will not run");
}, 5000);
clearTimeout(cancelId);
```

</template>
</MethodBox>

---

<MethodBox
  name="setInterval(callback, interval [, ...args])"
  badge="timers"
  badgeType="core"
  returns="number"
  :parameters="[
    { name: 'callback', type: 'function', description: 'Function to execute on each tick.' },
    { name: 'interval', type: 'number', optional: true, description: 'Milliseconds between executions. Defaults to 0. Negative values are clamped to 0.' },
    { name: '...args', type: 'any', optional: true, description: 'Extra arguments forwarded to the callback on each tick.' }
  ]"
>
<template #returns>A timer ID that can be passed to <code>clearInterval()</code> to stop the repeating calls.</template>

Schedules `callback` to run **repeatedly** every `interval` milliseconds. Returns a timer ID you can pass to `clearInterval()` to stop the loop.

::: warning Always clear your intervals
Intervals keep running until explicitly stopped. Always call `clearInterval()` when the widget is done, or you will accumulate callbacks across widget reloads.
:::

<template #example>

```javascript
let tick = 0;
const id = setInterval(() => {
  tick += 1;
  console.log("tick", tick);
  if (tick >= 5) {
    clearInterval(id);
    console.log("Interval stopped");
  }
}, 1000);
```

</template>
</MethodBox>

---

<MethodBox
  name="clearTimeout(id)"
  badge="timers"
  badgeType="core"
  :parameters="[
    { name: 'id', type: 'number', description: 'Timer ID returned by setTimeout().' }
  ]"
>

Cancels a pending timeout. If the timer has already fired, or the ID is invalid, this is a no-op.

<template #example>

```javascript
const id = setTimeout(() => {
  console.log("This will not run");
}, 5000);

clearTimeout(id);
```

</template>
</MethodBox>

---

<MethodBox
  name="clearInterval(id)"
  badge="timers"
  badgeType="core"
  :parameters="[
    { name: 'id', type: 'number', description: 'Timer ID returned by setInterval().' }
  ]"
>

Stops a repeating interval. If the ID is invalid or already cleared, this is a no-op.

<template #example>

```javascript
const id = setInterval(() => {
  console.log("Repeating...");
}, 1000);

// Stop after 5 seconds
setTimeout(() => {
  clearInterval(id);
  console.log("Interval stopped after 5 seconds");
}, 5000);
```

</template>
</MethodBox>
