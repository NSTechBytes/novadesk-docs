
title: Shared UI element options.

# General Element Options

Options shared by every UI element. These apply to all `ui.add*()` calls — `addText`, `addImage`, `addButton`, `addBitmap`, `addBar`, `addLine`, `addAreaGraph`, `addHistogram`, `addRotator`, `addRoundLine`, `addShape`, `addInputBox`, and `addLayoutBox`.

For shared image-processing fields (`imageAlpha`, `imageTint`, `imageFlip`, `colorMatrix`, etc.) see [General Image Options](/api/ui/ui-elements/general-options/general-image-options).

```js
ui.addText({
    id: "example",
    x: 10,
    y: 10,
    width: 200,
    height: 40
});
```

#### Table of Contents
[[toc]]


## Layout & Positioning

<PropertyBox name="id" type="string">

Unique identifier for the element. Required on every element. Creating an element with an existing `id` replaces the previous element.

</PropertyBox>

<PropertyBox name="x" type="number" defaultValue="0">

Horizontal position in pixels, relative to the top-left corner of the widget window.

</PropertyBox>

<PropertyBox name="y" type="number" defaultValue="0">

Vertical position in pixels, relative to the top-left corner of the widget window.

</PropertyBox>

<PropertyBox name="width" type="number" defaultValue="auto">

Element width in pixels. When omitted, the engine calculates a width based on the element content.

</PropertyBox>

<PropertyBox name="height" type="number" defaultValue="auto">

Element height in pixels. When omitted, the engine calculates a height based on the element content.

</PropertyBox>

<PropertyBox name="padding" type="number | number[]" defaultValue="0">

Inner spacing between the element's bounds and its content.

Accepted forms:
- `padding: 10` — all sides
- `padding: [horizontal, vertical]`
- `padding: [left, top, right, bottom]`

```js
padding: [5, 10, 5, 10]
```

</PropertyBox>

<PropertyBox name="rotate" type="number" defaultValue="0">

Rotation angle in degrees, applied around the element center.

</PropertyBox>

<PropertyBox name="transformMatrix" type="number[]" defaultValue="[]">

Affine transformation matrix `[m11, m12, m21, m22, dx, dy]` for translation, scaling, rotation, and shearing. Overrides `rotate` when both are set.

```js
transformMatrix: [1, 0.5, 0, 1, 0, 0]
```

</PropertyBox>


## Grouping & Containers

<PropertyBox name="container" type="string" defaultValue='""'>

ID of an existing container element. Child elements are clipped to the container's bounds and move with it.

::: info
- The container must already exist when the child is created.
- Containers cannot be nested inside other containers.
- An element cannot be its own container.
:::

</PropertyBox>

<PropertyBox name="group" type="string" defaultValue='""'>

Logical group name used for batch `ui.setElementPropertiesByGroup()` and `ui.removeElementsByGroup()` calls. Independent from `container` — grouping is organizational only and does not affect rendering or clipping.

</PropertyBox>


## Appearance

<PropertyBox name="backgroundColor" type="string" defaultValue='""'>

Background fill color or gradient drawn behind the element content. Supports all Novadesk color formats including `rgb()`, `rgba()`, hex, `linearGradient()`, and `radialGradient()`.

</PropertyBox>

<PropertyBox name="backgroundColorRadius" type="number" defaultValue="0">

Corner radius in pixels for the background fill.

</PropertyBox>

<PropertyBox name="show" type="boolean" defaultValue="true">

Controls element visibility. `false` hides the element without removing it — it can be shown again by setting `show: true`.

</PropertyBox>

<PropertyBox name="antiAlias" type="boolean" defaultValue="true">

Enables anti-aliased rendering for smoother edges. Disable only when rendering pixel-perfect bitmaps where sub-pixel smoothing would cause blurring.

</PropertyBox>

<PropertyBox name="pixelHitTest" type="boolean" defaultValue="false">

Selects the hit-testing mode used for mouse interactions.

- `false` — bounds/geometry hit testing (faster, broader hit area).
- `true` — pixel-aware hit testing that follows the visible shape of the element.

</PropertyBox>

<PropertyBox name="bevelType" type="string" defaultValue='"none"'>

Draws a decorative bezel around the element. Valid values:

| Value | Description |
|
| `"none"` | No bevel (default). |
| `"raised"` | Raised button appearance. |
| `"sunken"` | Sunken/pressed appearance. |
| `"emboss"` | Embossed border. |
| `"pillow"` | Pillow/cushion border. |

</PropertyBox>

<PropertyBox name="bevelWidth" type="number" defaultValue="1">

Thickness of the bevel in pixels.

</PropertyBox>

<PropertyBox name="bevelColor" type="string" defaultValue='"255,255,255,200"'>

Highlight color for the bevel effect (top/left edges when raised).

</PropertyBox>

<PropertyBox name="bevelColor2" type="string" defaultValue='"0,0,0,150"'>

Shadow color for the bevel effect (bottom/right edges when raised).

</PropertyBox>


## Tooltip

<PropertyBox name="tooltipText" type="string" defaultValue='""'>

Tooltip body text shown on hover. An empty string disables the tooltip.

```js
ui.addText({
    id: "cpu",
    text: "72%",
    tooltipText: "CPU usage over the last second"
});
```

</PropertyBox>

<PropertyBox name="tooltipTitle" type="string" defaultValue='""'>

Bold title shown above the tooltip text.

</PropertyBox>

<PropertyBox name="tooltipIcon" type="string" defaultValue='"none"'>

Icon displayed next to the tooltip title. Valid values: `"none"`, `"info"`, `"warning"`, `"error"`.

</PropertyBox>

<PropertyBox name="tooltipBalloon" type="boolean" defaultValue="false">

When `true`, renders the tooltip in a cartoon balloon style instead of the standard flat style.

</PropertyBox>

<PropertyBox name="tooltipMaxWidth" type="number" defaultValue="1000">

Maximum tooltip width in pixels. Text wraps beyond this limit.

</PropertyBox>

<PropertyBox name="tooltipMaxHeight" type="number" defaultValue="1000">

Maximum tooltip height hint in pixels.

</PropertyBox>

<PropertyBox name="tooltipDisabled" type="boolean" defaultValue="false">

Disables tooltip display for this element even when `tooltipText` or `tooltipTitle` are set.

</PropertyBox>


## Cursor

<PropertyBox name="mouseEventCursor" type="boolean" defaultValue="true">

Enables the custom cursor defined by `mouseEventCursorName` when the element has mouse callbacks registered.

::: info
Cursor options only take effect when at least one mouse callback (e.g. `onLeftMouseUp`) is registered on the element.
:::

</PropertyBox>

<PropertyBox name="mouseEventCursorName" type="string" defaultValue='""'>

Cursor shown when hovering over an interactive element. Defaults to the hand cursor when callbacks are registered.

Built-in cursor names: `hand`, `text`, `help`, `busy`, `cross`, `pen`, `no`, `size_all`, `size_nesw`, `size_ns`, `size_nwse`, `size_we`, `uparrow`, `wait`.

</PropertyBox>

<PropertyBox name="cursorsDir" type="string" defaultValue='""'>

Directory path containing custom cursor files (`.cur` or `.ani`). When set, `mouseEventCursorName` is resolved from this folder.

</PropertyBox>


## Mouse Events

<CallbackBox
  name="onLeftMouseUp"
  signature="onLeftMouseUp(event): void"
  :optional="true"
>

Fired when the left mouse button is released over the element.

```js
ui.addText({
    id: "btn",
    text: "Click me",
    onLeftMouseUp: function () { console.log("clicked"); }
});
```

</CallbackBox>

<CallbackBox
  name="onLeftMouseDown"
  signature="onLeftMouseDown(event): void"
  :optional="true"
>

Fired when the left mouse button is pressed down over the element.

</CallbackBox>

<CallbackBox
  name="onLeftDoubleClick"
  signature="onLeftDoubleClick(event): void"
  :optional="true"
>

Fired on a left-button double-click over the element.

</CallbackBox>

<CallbackBox
  name="onRightMouseUp"
  signature="onRightMouseUp(event): void"
  :optional="true"
>

Fired when the right mouse button is released over the element.

```js
onRightMouseUp: function () { console.log("right clicked"); }
```

</CallbackBox>

<CallbackBox
  name="onRightMouseDown"
  signature="onRightMouseDown(event): void"
  :optional="true"
>

Fired when the right mouse button is pressed down over the element.

</CallbackBox>

<CallbackBox
  name="onRightDoubleClick"
  signature="onRightDoubleClick(event): void"
  :optional="true"
>

Fired on a right-button double-click over the element.

</CallbackBox>

<CallbackBox
  name="onMiddleMouseUp"
  signature="onMiddleMouseUp(event): void"
  :optional="true"
>

Fired when the middle mouse button is released over the element.

</CallbackBox>

<CallbackBox
  name="onMiddleMouseDown"
  signature="onMiddleMouseDown(event): void"
  :optional="true"
>

Fired when the middle mouse button is pressed down over the element.

</CallbackBox>

<CallbackBox
  name="onMiddleDoubleClick"
  signature="onMiddleDoubleClick(event): void"
  :optional="true"
>

Fired on a middle-button double-click over the element.

</CallbackBox>

<CallbackBox
  name="onX1MouseUp / onX1MouseDown / onX1DoubleClick"
  signature="onX1MouseUp(event): void"
  :optional="true"
>

Events for the X1 (Back) mouse button.

```js
onX1MouseUp: function () { console.log("back button"); }
```

</CallbackBox>

<CallbackBox
  name="onX2MouseUp / onX2MouseDown / onX2DoubleClick"
  signature="onX2MouseUp(event): void"
  :optional="true"
>

Events for the X2 (Forward) mouse button.

</CallbackBox>

<CallbackBox
  name="onMouseOver"
  signature="onMouseOver(event): void"
  :optional="true"
>

Fired when the cursor enters the element bounds.

```js
onMouseOver: function () {
    ui.setElementProperties("btn", { backgroundColor: "rgba(255,255,255,0.1)" });
}
```

</CallbackBox>

<CallbackBox
  name="onMouseLeave"
  signature="onMouseLeave(event): void"
  :optional="true"
>

Fired when the cursor leaves the element bounds.

</CallbackBox>

<CallbackBox
  name="onScrollUp"
  signature="onScrollUp(event): void"
  :optional="true"
>

Fired when the mouse wheel is scrolled up over the element.

</CallbackBox>

<CallbackBox
  name="onScrollDown"
  signature="onScrollDown(event): void"
  :optional="true"
>

Fired when the mouse wheel is scrolled down over the element.

</CallbackBox>

<CallbackBox
  name="onScrollLeft"
  signature="onScrollLeft(event): void"
  :optional="true"
>

Fired on horizontal scroll left over the element.

</CallbackBox>

<CallbackBox
  name="onScrollRight"
  signature="onScrollRight(event): void"
  :optional="true"
>

Fired on horizontal scroll right over the element.

</CallbackBox>


## Drag Events

Drag callbacks fire when the user clicks and holds on the element then moves the mouse. Use them for slider-like interactions.

The event object passed to all drag callbacks has these properties:

| Property | Type | Description |
|
| `offsetX` | `number` | Mouse X relative to the element in pixels. |
| `offsetY` | `number` | Mouse Y relative to the element in pixels. |
| `offsetXPercent` | `number` | X position as a fraction of element width (`0.0–1.0`). |
| `offsetYPercent` | `number` | Y position as a fraction of element height (`0.0–1.0`). |

<CallbackBox
  name="onDragStart"
  signature="onDragStart(event): void"
  :optional="true"
>

Fired once when the drag begins (mouse button pressed and mouse moves).

```js
onDragStart: function (e) {
    console.log("Drag started at", e.offsetX, e.offsetY);
}
```

</CallbackBox>

<CallbackBox
  name="onDrag"
  signature="onDrag(event): void"
  :optional="true"
>

Fired continuously while the user drags over or beyond the element.

```js
onDrag: function (e) {
    const pct = (e.offsetXPercent * 100).toFixed(1);
    ui.setElementProperty("volume-bar", "value", e.offsetXPercent);
    console.log("Position:", pct + "%");
}
```

</CallbackBox>

<CallbackBox
  name="onDragEnd"
  signature="onDragEnd(event): void"
  :optional="true"
>

Fired once when the mouse button is released after a drag.

```js
onDragEnd: function (e) {
    console.log("Final position:", e.offsetXPercent);
}
```

</CallbackBox>


## Drag Slider Example

```js
ui.addImage({
    id: "slider",
    x: 10, y: 10,
    width: 200, height: 20,
    path: "./assets/slider-track.png",
    tooltipText: "Drag to adjust volume",
    onDragStart: function (e) {
        console.log("Drag started");
    },
    onDrag: function (e) {
        const vol = Math.max(0, Math.min(1, e.offsetXPercent));
        ipc.sendToMain("set-volume", vol);
    },
    onDragEnd: function () {
        console.log("Drag ended");
    }
});
```
