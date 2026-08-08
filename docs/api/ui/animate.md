---
title: ui.animate(options)
---

# `ui.animate()`

Animate supported properties of an existing element using tweening (`to`/`from`) or a multi-stop keyframe timeline.

```javascript
ui.animate(options);
```

::: info Availability
Available in [UI scripts](/guides/script-types.html#ui-script-the-face) only.
:::

#### Table of Contents
[[toc]]

---

<MethodBox
  name="ui.animate(options)"
  badge="ui"
  badgeType="ui"
  :parameters="[
    { name: 'id', type: 'string', description: 'ID of the element to animate. Required.' },
    { name: 'duration', type: 'number', optional: true, description: 'Total animation duration in milliseconds. Defaults to 250.' },
    { name: 'easing', type: 'string', optional: true, description: 'Global easing function name. Defaults to linear. See supported easing names below.' },
    { name: 'iterationCount', type: 'number | string', optional: true, description: 'Number of times to play. Pass infinite to loop forever. Defaults to 1.' },
    { name: 'to', type: 'object', optional: true, description: 'Target property values for tween mode. Required if keyframes is not set.' },
    { name: 'from', type: 'object', optional: true, description: 'Starting property values for tween mode. Omit to start from the current element state.' },
    { name: 'keyframes', type: 'array | object', optional: true, description: 'Keyframe stops for keyframe mode. Required if to is not set. Cannot be combined with to/from.' }
  ]"
>

Animates one or more properties of an existing element. Use either **tween mode** (`to`/`from`) for simple A→B transitions, or **keyframe mode** (`keyframes`) for multi-stop timelines.

---

### Tween mode

Tween mode uses `to` and optionally `from` to transition between two states. Only transform properties are supported:

| Property | Type | Description |
|---|---|---|
| `x` | `number` | Horizontal position. |
| `y` | `number` | Vertical position. |
| `width` | `number` | Element width. |
| `height` | `number` | Element height. |
| `rotate` | `number` | Rotation in degrees. |

---

### Keyframe mode

Keyframe mode uses an array or object of stops for complex multi-step animations.

**Array syntax** — each item is a keyframe object:

```javascript
{ offset: 0.0, x: 20, easing: "easeOutBack" }
{ at: "50%",  x: 120, fontColor: "#33ff33"  }
{ offset: 1.0, x: 20 }
```

**Object syntax** — keys are percentage strings or decimals:

```javascript
{
  "0%":   { rotate: 0, width: 100 },
  "50%":  { rotate: 180, width: 150 },
  "100%": { rotate: 360, width: 100 }
}
```

**Additional properties supported in keyframe mode** (text elements only):

| Property | Type | Description |
|---|---|---|
| `fontSize` | `number` | Font size in points. |
| `fontWeight` | `number` | Font weight (e.g. 400, 700). |
| `letterSpacing` | `number` | Letter spacing in pixels. |
| `fontColor` | `string` | Text color (RGB/RGBA/hex). |

::: warning
Animating typography properties on non-text elements throws an error.
:::

<template #example>

```javascript
// Tween — slide in from off-screen
ui.animate({
  id: "box",
  duration: 500,
  easing: "easeOutCubic",
  from: { x: -200 },
  to:   { x: 20 }
});

// Tween — loop forever
ui.animate({
  id: "pulse",
  duration: 800,
  iterationCount: "infinite",
  from: { width: 80, height: 80 },
  to:   { width: 100, height: 100 }
});

// Keyframe array — color + position animation
ui.animate({
  id: "welcomeText",
  duration: 1200,
  iterationCount: "infinite",
  keyframes: [
    { offset: 0.0, x: 20,  fontColor: "#ff3333", fontSize: 16 },
    { offset: 0.5, x: 120, fontColor: "#33ff33", fontSize: 24, easing: "easeOutBack" },
    { offset: 1.0, x: 20,  fontColor: "#3333ff", fontSize: 16, easing: "easeInQuad" }
  ]
});

// Keyframe object — rotation
ui.animate({
  id: "spinner",
  duration: 800,
  keyframes: {
    "0%":   { rotate: 0 },
    "100%": { rotate: 360 }
  }
});
```

</template>
</MethodBox>

---

## Supported Easing Names

| Family | Variants |
|---|---|
| Linear | `linear` |
| Quad | `easeInQuad`, `easeOutQuad`, `easeInOutQuad` |
| Cubic | `easeInCubic`, `easeOutCubic`, `easeInOutCubic` |
| Quart | `easeInQuart`, `easeOutQuart`, `easeInOutQuart` |
| Quint | `easeInQuint`, `easeOutQuint`, `easeInOutQuint` |
| Sine | `easeInSine`, `easeOutSine`, `easeInOutSine` |
| Expo | `easeInExpo`, `easeOutExpo`, `easeInOutExpo` |
| Circ | `easeInCirc`, `easeOutCirc`, `easeInOutCirc` |
| Back | `easeInBack`, `easeOutBack`, `easeInOutBack` |
| Elastic | `easeInElastic`, `easeOutElastic`, `easeInOutElastic` |
| Bounce | `easeInBounce`, `easeOutBounce`, `easeInOutBounce` |

---

::: tip Batch setup tip
When creating many elements before starting animations, wrap the creation calls with `ui.beginUpdate()` / `ui.endUpdate()` to prevent intermediate redraws.
:::
