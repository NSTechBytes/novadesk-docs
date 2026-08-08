---
title: Line element options and example usage.
---

# Line Element
The Line element draws one or more graph lines using `ui.addLine()` inside a UI script.

Use it for sparkline-style charts, trends, or compact mini graphs.

Create one with `ui.addLine()` and the shared [General Elements Options](/api/ui/ui-elements/general-options/general-elements-options), [General Element Options](/api/ui/ui-elements/general-options/general-elements-options), and [General Element Options](/api/ui/ui-elements/general-options/general-elements-options).

```js
ui.addLine(options);
```

#### Table of Contents
[[toc]]

## Line Options

<PropertyBox name="lineCount" type="number" defaultValue="1">

  The `lineCount` property controls the number of lines drawn inside the element simultaneously. Each line has its own data array, color, and scale multiplier. For example, the first line uses `data`, `lineColor`, and `lineScale`, while the second line uses `data2`, `lineColor2`, and `lineScale2`.

All lines share the same `lineWidth`, `rangeMin`, `rangeMax`, `graphStart`, `graphOrientation`, `flip`, and `maxPoints` settings.

The minimum value is `1`. Values below `1` are automatically clamped to `1`.

Example:

```js
 // Single line (default)
 ui.addLine({
     id: "l",
     lineCount: 1,
     data: [...],
     lineColor: "#00b4ff"
 });

 // Two overlapping lines — CPU and Memory on one graph
 ui.addLine({
     id: "dual",
     lineCount: 2,
     data:       cpuHistory,     // line 1
     data2:      memHistory,     // line 2
     lineColor:  "#00b4ff",      // line 1 color
     lineColor2: "#00ff88",      // line 2 color
     rangeMin: 0,
     rangeMax: 100
 });
```

</PropertyBox>

<PropertyBox name="data, data2, data3 … dataN" type="Array<number>" defaultValue="[]">

  Each property stores the data points for one line. The property name follows a sequential pattern: the first line uses `data`, the second uses `data2`, the third uses `data3`, and so on.

The array index determines the position of each data point along the graph's axis. Values are plotted in the order they appear in the array, with index `0` representing the oldest data point and the last index representing the newest.

Example:

```js
 ui.addLine({
     id: "triple",
     lineCount: 3,
     data:  [10, 20, 30, 40],   // line 1
     data2: [40, 35, 25, 15],   // line 2
     data3: [20, 20, 20, 20],   // line 3
 });
```

</PropertyBox>

<PropertyBox name="lineColor, lineColor2, lineColor3 … lineColorN" type="string" defaultValue='"rgb(255, 255, 255)"'>

  Each property defines the color or gradient used for the stroke of one line. The property name follows a sequential pattern: the first line uses `lineColor`, the second uses `lineColor2`, the third uses `lineColor3`, and so on.

It supports all color formats available in the Novadesk color system, including named CSS colors, hexadecimal colors (`#RRGGBB`, `#RRGGBBAA`), `rgb()`/`rgba()` notation, `linearGradient()`, and `radialGradient()`.

The gradient bounding box is the full element rectangle. The gradient does not compress or adjust to the shape of the individual line path.

Example:

```js
 lineColor:  "#00b4ff",
 lineColor2: "linearGradient(0, #ff0080, #9966ff)",
 lineColor3: "rgba(0, 255, 136, 0.6)",
```

</PropertyBox>

<PropertyBox name="lineWidth" type="number" defaultValue="1.0">

  The `lineWidth` property controls the thickness, in pixels, of all line strokes. The same width is applied uniformly to every line, and individual lines cannot have separate widths.

Values below `1.0` are automatically clamped to `1.0` during parsing.

Example:

```js
 lineWidth: 1    // thin, precise (default)
 lineWidth: 2    // standard visible stroke
 lineWidth: 4    // bold, prominent
```

</PropertyBox>

<PropertyBox name="lineScale, lineScale2, lineScale3 … lineScaleN" type="number" defaultValue="1.0">

  Each property defines a per-line multiplier that is applied to every data value before the Y-axis scaling formula is applied. The property name follows a sequential pattern: the first line uses `lineScale`, the second uses `lineScale2`, the third uses `lineScale3`, and so on.

This allows data from different units or scales to be displayed on the same graph without requiring the data to be normalized externally.

Example:

```js
 // CPU in percent (0–100), temperature in degrees (0–100)
 // Both fit the same 0–100 scale
 lineScale:  1.0,    // CPU: no scaling
 lineScale2: 1.0,    // Temperature: same range

 // Bytes/sec vs KB/sec on the same graph
 rangeMin: 0,
 rangeMax: 1000,
 lineScale:  0.001,  // Bytes → kilobytes (divide by 1000)
 lineScale2: 1.0,    // Already in KB
```

</PropertyBox>

<PropertyBox name="maxPoints" type="number" defaultValue="0">

  The `maxPoints` property controls the maximum number of data points stored and displayed for each line. When the number of incoming data points exceeds this limit, only the most recent `maxPoints` values are retained, while older values are discarded.

The property also acts as the layout capacity of the graph. Point spacing is calculated using the configured number of `maxPoints` slots, preventing the graph from reflowing as new data points are added.

Values below `0` are automatically clamped to `0`. A value of `0` means unlimited, allowing all data points to be stored and displayed.

Example:

```js
 maxPoints: 60    // Rolling 60-second window at 1 sample/sec
 maxPoints: 0     // Unlimited — spacing shrinks as data is added
```

</PropertyBox>

<PropertyBox name="rangeMin" type="number" defaultValue="0.0">

  The `rangeMin` property defines the fixed minimum value of the Y-axis scale when `autoRange` is `false`. A data value equal to `rangeMin` is positioned at the bottom of the graph, or at the left edge when using horizontal orientation.

If `rangeMax` is less than `rangeMin` after parsing, the two values are automatically swapped. If both values are equal, `rangeMax` is set to `rangeMin + 1.0` to create a valid range.

Example:

```js
 rangeMin: 0,     rangeMax: 100    // Percentage scale
 rangeMin: -50,   rangeMax: 50     // Symmetric around zero
 rangeMin: 980,   rangeMax: 1050   // Atmospheric pressure (mbar)
```

</PropertyBox>

<PropertyBox name="rangeMax" type="number" defaultValue="100.0">

  The `rangeMax` property defines the fixed maximum value of the Y-axis scale when `autoRange` is `false`. A data value equal to `rangeMax` is positioned at the top of the graph, or at the right edge when using horizontal orientation.

Example:

```js
 rangeMin: 0,    rangeMax: 100     // Common for percentages
 rangeMin: 0,    rangeMax: 8000    // RPM gauge
```

</PropertyBox>

<PropertyBox name="autoRange" type="boolean" defaultValue="false">
  The `autoRange` property controls whether the Y-axis range is calculated automatically from the data or determined by the manually specified `rangeMin` and `rangeMax` values.

When set to `true`, `rangeMin` and `rangeMax` are ignored. The engine calculates the actual minimum and maximum values across all lines and their current data points after applying each line's `lineScale` multiplier, then uses these values as the Y-axis bounds.

If all data points have the same value and the difference between the calculated maximum and minimum is less than `0.000001`, the range is padded by `±0.5` around the flat value to prevent division by zero.

When set to `false` (default), the graph uses `rangeMin` and `rangeMax` exactly.

Example:

```js 
 autoRange: true     // rangeMin / rangeMax are ignored
 autoRange: false    // Uses rangeMin and rangeMax
```

</PropertyBox>

<PropertyBox name="graphOrientation" type="string" defaultValue='"vertical"'>

  The `graphOrientation` property controls the axis along which the line scrolls. Valid values are `"vertical"` and `"horizontal"`, and the value is case-insensitive.

When set to `"vertical"` (default), data values are mapped to the Y-axis (height), while the time or data index is mapped to the X-axis (width). This creates the standard time-series graph, where data scrolls horizontally.

When set to `"horizontal"`, data values are mapped to the X-axis (width), while the time or data index is mapped to the Y-axis (height). The line scrolls vertically, with new data appearing at the top or bottom depending on the `graphStart` setting.

Example:

```js 
 ui.addLine({
     id: "vscroll",
     graphOrientation: "horizontal",
     width: 30,
     height: 200,
     data: [],
     rangeMin: 0,
     rangeMax: 100
 });
```

</PropertyBox>

<PropertyBox name="flip" type="boolean" defaultValue="false">

  The `flip` property inverts the value axis of the graph.

In vertical orientation, when `flip` is `false`, high values appear at the top and low values at the bottom. When `flip` is `true`, this is reversed, causing high values to appear at the bottom.

In horizontal orientation, when `flip` is `false`, high values appear on the right and low values on the left. When `flip` is `true`, high values appear on the left and low values on the right.

Example:

```js
 flip: false    // Normal — high values at the top or right (default)
 flip: true     // Inverted — high values at the bottom or left
```

</PropertyBox>

<PropertyBox name="horizontalLines" type="boolean" defaultValue="false">

  The `horizontalLines` property controls whether four horizontal reference lines are drawn across the element. When set to `true`, the lines are evenly spaced across the element's height and are rendered behind all data lines.

The lines are positioned at `height * (i / 5)` for `i = 1, 2, 3, 4`, dividing the element's vertical space into five equal zones. They are positioned based on the element's dimensions and are not automatically aligned with data values. To align them with meaningful values, use `rangeMin`, `rangeMax`, and the element's height together.

The number of horizontal lines is fixed at four and cannot be changed.

Example:

```js
 ui.addLine({
     height: 200,
     rangeMin: 0,
     rangeMax: 100,
     horizontalLines: true,
     horizontalLineColor: "rgba(255,255,255,0.15)"
 });
```

With a height of `200px`, the lines appear at `y = 40`, `80`, `120`, and `160`.

</PropertyBox>

<PropertyBox name="horizontalLineColor" type="string" defaultValue='"rgb(0, 0, 0)"'>

  The `horizontalLineColor` property defines the color or gradient applied to the four horizontal reference lines drawn when `horizontalLines` is set to `true`.

It supports the same color formats as `lineColor`, including named CSS colors, hexadecimal colors, `rgb()`/`rgba()` notation, linear gradients, and radial gradients.

The reference lines are always rendered with a thickness of `1px`. Their thickness cannot be changed.

Example:

```js
 horizontalLineColor: "rgba(255, 255, 255, 0.15)"   // Subtle white
 horizontalLineColor: "linearGradient(0, rgba(255,255,255,0.3), rgba(255,255,255,0))"
```

</PropertyBox>

<PropertyBox name="transformStroke" type="string" defaultValue='"normal"'>

  The `transformStroke` property controls how the stroke width behaves when the element is scaled or rotated using `transformMatrix` or global DPI scaling.

When set to `"normal"`, the stroke width scales together with the element transform. When set to `"fixed"`, the stroke width remains at its exact pixel value regardless of the applied transform.

Valid values:

| Value      | Behavior                                                               |
| ---------- | ---------------------------------------------------------------------- |
| `"normal"` | The stroke width scales with the element transform (default).          |
| `"fixed"`  | The stroke width remains constant regardless of the element transform. |

Internally, these values map to Direct2D's `D2D1_STROKE_TRANSFORM_TYPE_NORMAL` and `D2D1_STROKE_TRANSFORM_TYPE_FIXED` stroke transform types.

Example:

```js
 ui.addLine({
     lineWidth: 1,
     transformStroke: "fixed",   // Always 1px regardless of matrix scale
     transformMatrix: [2, 0, 0, 2, 0, 0]   // 2× scale — without "fixed", the line would be 2px
 });
```

</PropertyBox>
