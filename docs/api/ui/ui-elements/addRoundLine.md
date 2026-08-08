---
title: RoundLine element options and example usage.
---

# RoundLine Element
Rounded arc elements (RoundLine) visualize progress with configurable angles and stroke styles.

Create one with `ui.addRoundLine()` and the shared [General Elements Options](/api/ui/ui-elements/general-options/general-elements-options), [General Element Options](/api/ui/ui-elements/general-options/general-elements-options), and [General Element Options](/api/ui/ui-elements/general-options/general-elements-options).

```js
ui.addRoundLine(options);
```

#### Table of Contents
[[toc]]

## RoundLine Options

<PropertyBox name="value" type="number" defaultValue="0.0">

The `value` property specifies how much of the foreground arc is drawn.

The value is normalized between `0.0` and `1.0`, where `0.0` draws no foreground arc and `1.0` draws the full `totalAngle`. The background arc, if enabled, is always drawn independently of this value.

Example:

```js id="m8r4qx"
 ui.addRoundLine({
     id: "empty",
     value: 0
 });

 ui.addRoundLine({
     id: "partial",
     value: 0.75
 });

 ui.addRoundLine({
     id: "full",
     value: 1.0
 });

 ui.setElementProperties("partial", {
     value: cpu / 100
 });
```

</PropertyBox>

<PropertyBox name="radius" type="number" defaultValue="0">

The `radius` property specifies the radius of the arc's centerline in pixels.

When set to `0` or omitted, the engine automatically calculates the radius so the arc fills the available element size. Specify an explicit value to control the arc size independently of the element dimensions.

Example:

```js id="q7v2mk"
 ui.addRoundLine({
     id: "fixed",
     width: 200,
     height: 200,
     radius: 80
 });

 ui.addRoundLine({
     id: "auto",
     width: 160,
     height: 160,
     thickness: 8
 });
```

</PropertyBox>

<PropertyBox name="thickness" type="number" defaultValue="2">

The `thickness` property specifies the stroke width of both the foreground and background arcs.

The stroke is centered on the arc radius, extending equally inward and outward.

Example:

```js id="k3n8pw"
 ui.addRoundLine({
     id: "thin",
     thickness: 2
 });

 ui.addRoundLine({
     id: "medium",
     thickness: 8
 });

 ui.addRoundLine({
     id: "thick",
     thickness: 20
 });
```

</PropertyBox>

<PropertyBox name="endThickness" type="number" defaultValue="-1">

The `endThickness` property specifies the stroke thickness at the end of the arc.

When set to `-1`, the arc uses a uniform thickness equal to `thickness`. When a different value is provided, the arc becomes tapered from `thickness` at the start to `endThickness` at the end.

Example:

```js id="p5x9tv"
 ui.addRoundLine({
     id: "taperOut",
     thickness: 12,
     endThickness: 2
 });

 ui.addRoundLine({
     id: "taperIn",
     thickness: 2,
     endThickness: 12
 });

 ui.addRoundLine({
     id: "uniform",
     thickness: 8,
     endThickness: -1
 });
```

</PropertyBox>

<PropertyBox name="startAngle" type="number" defaultValue="0">

The `startAngle` property specifies the angle where the arc begins.

The value is measured in degrees using a clock-style coordinate system, where `0°` points to the top (12 o'clock) and positive values rotate clockwise.

Example:

```js id="h6q4zn"
 ui.addRoundLine({
     id: "top",
     startAngle: 0
 });

 ui.addRoundLine({
     id: "right",
     startAngle: 90
 });

 ui.addRoundLine({
     id: "gauge",
     startAngle: -135
 });
```

</PropertyBox>

<PropertyBox name="totalAngle" type="number" defaultValue="360">

The `totalAngle` property specifies the total angular sweep of the arc in degrees.

The background arc always spans the full `totalAngle`, while the foreground arc spans `value × totalAngle`.

Example:

```js id="w2m7kr"
 ui.addRoundLine({
     id: "circle",
     totalAngle: 360
 });

 ui.addRoundLine({
     id: "gauge",
     startAngle: -135,
     totalAngle: 270
 });

 ui.addRoundLine({
     id: "semi",
     totalAngle: 180
 });
```

</PropertyBox>

<PropertyBox name="clockwise" type="boolean" defaultValue="true">

The `clockwise` property controls the sweep direction of both the foreground and background arcs.

When `true`, the arcs sweep clockwise. When `false`, they sweep counter-clockwise.

Example:

```js id="n9p3xm"
 ui.addRoundLine({
     id: "normal",
     clockwise: true
 });

 ui.addRoundLine({
     id: "reverse",
     clockwise: false
 });
```

</PropertyBox>

<PropertyBox name="lineColor" type="string" defaultValue='"rgb(0, 255, 0)"'>

The `lineColor` property specifies the color or gradient of the foreground arc.

It supports all Novadesk color formats, including named colors, hexadecimal colors, `rgb()`, `rgba()`, `linearGradient()`, and `radialGradient()`. Gradients are applied across the entire element bounds.

Example:

```js id="b8v5qt"
 ui.addRoundLine({
     id: "solid",
     lineColor: "#00b4ff"
 });

 ui.addRoundLine({
     id: "alpha",
     lineColor: "rgba(0, 180, 255, 0.9)"
 });

 ui.addRoundLine({
     id: "gradient",
     lineColor: "linearGradient(0, #ff0080, #9966ff, #00b4ff)"
 });
```

</PropertyBox>

<PropertyBox name="lineColorBg" type="string" defaultValue="none">

The `lineColorBg` property specifies the color or gradient of the background arc.

The background arc always spans the full `totalAngle` and is drawn behind the foreground arc. If this property is omitted, no background arc is rendered.

Example:

```js id="c4r8vp"
 ui.addRoundLine({
     id: "subtle",
     lineColorBg: "rgba(255, 255, 255, 0.12)"
 });

 ui.addRoundLine({
     id: "tinted",
     lineColorBg: "rgba(0, 180, 255, 0.20)"
 });
```

</PropertyBox>

<PropertyBox name="capType" type="string" defaultValue='"flat"'>

The `capType` property specifies the cap style used for both ends of the foreground arc.

It acts as a shorthand for setting both `startCap` and `endCap`. Individual cap properties override this value.

Valid values:

| Value     | Description        |
| --------- | ------------------ |
| `"flat"`  | Flat line caps.    |
| `"round"` | Rounded line caps. |

Example:

```js id="x7k2qm"
 ui.addRoundLine({
     id: "flat",
     capType: "flat"
 });

 ui.addRoundLine({
     id: "round",
     capType: "round"
 });
```

</PropertyBox>

<PropertyBox name="startCap" type="string" defaultValue='"flat"'>

The `startCap` property specifies the cap style used at the beginning of the foreground arc.

When specified, it overrides the start cap defined by `capType`.

Valid values:

| Value     | Description       |
| --------- | ----------------- |
| `"flat"`  | Flat line cap.    |
| `"round"` | Rounded line cap. |

Example:

```js id="r5m9kw"
 ui.addRoundLine({
     id: "roundedStart",
     startCap: "round"
 });
```

</PropertyBox>

<PropertyBox name="endCap" type="string" defaultValue='"flat"'>

The `endCap` property specifies the cap style used at the end of the foreground arc.

When specified, it overrides the end cap defined by `capType`.

Valid values:

| Value     | Description       |
| --------- | ----------------- |
| `"flat"`  | Flat line cap.    |
| `"round"` | Rounded line cap. |

Example:

```js id="t6q8ph"
 ui.addRoundLine({
     id: "roundedEnd",
     endCap: "round"
 });

 ui.addRoundLine({
     id: "mixed",
     startCap: "flat",
     endCap: "round"
 });
```

</PropertyBox>

<PropertyBox name="dashArray" type="array<number>" defaultValue="[]">
  The `dashArray` property defines the dash pattern for the foreground arc stroke. The array alternates between dash lengths and gap lengths (in pixels), following the Direct2D stroke style dash array convention.

  ```javascript
  dashArray: [4, 4]         // 4px dash, 4px gap (equal dashes)
  dashArray: [8, 4]         // 8px dash, 4px gap
  dashArray: [2, 2, 8, 2]   // short-short-long pattern
  dashArray: []             // solid line (default)
  ```

  `dashArray` only affects the foreground arc. The background arc is always rendered as a solid line.

</PropertyBox>

<PropertyBox name="ticks" type="number" defaultValue="0">
  The `ticks` property specifies the number of evenly spaced radial tick marks drawn around the arc. Tick marks are distributed across the entire `totalAngle`.

  When `ticks` is set to `N`, the engine draws `N + 1` tick marks at positions `0`, `1/N`, `2/N`, ..., `N/N` of the `totalAngle`.

  ```javascript
  ticks: 0     // no tick marks (default)
  ticks: 10    // 11 marks at 0%, 10%, 20%, ..., 100%
  ticks: 4     // 5 marks at 0%, 25%, 50%, 75%, 100%
  ```

  Tick marks use `lineColor` for their color, are drawn with a fixed width of `2px`, extend to `thickness × 1.5` in total length (centered on the radius), and are rendered after both arcs so they appear on top.

</PropertyBox>