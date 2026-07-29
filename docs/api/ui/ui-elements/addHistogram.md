---
title: Histogram element options and example usage.
---

# Histogram Element
The Histogram element draws compact bar-by-bar graphs from one or two data arrays.

Create one with `ui.addHistogram()` and the shared [General Elements Options](/api/ui/ui-elements/general-options/general-elements-options), [General Tooltip Options](/api/ui/ui-elements/general-options/tooltip), and [Mouse Events Callback](/api/ui/ui-elements/general-options/general-mouse-options).

```js
ui.addHistogram(options);
```

#### Table of Contents
[[toc]]

## Histogram Options

<PropertyBox name="data" type="Array<number>" defaultValue="[]">

The `data` property contains the primary data series displayed by the histogram. Each element in the array represents a single bar. In vertical orientation, each value maps to one pixel-wide column. In horizontal orientation, each value maps to one pixel-high row.

The most recent value (`data[data.length - 1]`) is always drawn at the edge specified by `graphStart`, while older values extend toward the opposite edge.

Example:

```js
 ui.addHistogram({
     id: "hist",
     x: 20,
     y: 20,
     width: 300,
     height: 100,
     data: [10, 20, 45, 30, 60, 75, 50, 40, 80, 65],
     primaryColor: "#00ff88"
 });
```

</PropertyBox>

<PropertyBox name="data2" type="Array<number>" defaultValue="[]">

The `data2` property contains the secondary data series displayed by the histogram. When provided, the histogram enters dual-channel mode, comparing `data` and `data2` sample by sample to visualize the relationship between the two datasets.

Three colors are used to render the result:

* `bothColor` displays the overlapping portion of the two values (the smaller of the two).
* `primaryColor` displays the portion where `data` exceeds `data2`.
* `secondaryColor` displays the portion where `data2` exceeds `data`.

This dual-channel rendering is the primary feature of the Histogram element, making it suitable for comparing two related signals on the same graph.

When `data2` is an empty array, the histogram automatically falls back to single-channel mode and only `primaryColor` is used.

Example:

```js
 ui.addHistogram({
     id: "dual",
     x: 20,
     y: 20,
     width: 300,
     height: 100,
     data: cpuHistory,
     data2: memHistory,
     primaryColor: "#00ff88",     // CPU (green)
     secondaryColor: "#00b4ff",   // Memory (blue)
     bothColor: "#ffaa00"         // Overlap (amber)
 });
```

</PropertyBox>

<PropertyBox name="primaryColor" type="string" defaultValue='"rgb(0, 128, 0)"'>

The `primaryColor` property defines the color or gradient used for the portion of each bar that belongs only to the primary dataset. In dual-channel mode, it is applied where `data[i]` is greater than `data2[i]`. In single-channel mode, where `data2` is empty, `primaryColor` is used to render the entire bar.

It supports all color formats available in the Novadesk color system, including named CSS colors, hexadecimal colors (`#RRGGBB`, `#RRGGBBAA`), `rgb()`/`rgba()` notation, `linearGradient()`, and `radialGradient()`.

The gradient bounding box spans the entire element rectangle rather than an individual bar.

Example:

```js
 primaryColor: "#00ff88"
 primaryColor: "rgba(0, 255, 136, 0.8)"
 primaryColor: "linearGradient(90, #00ff88, #007744)"
```

</PropertyBox>

<PropertyBox name="secondaryColor" type="string" defaultValue='"rgb(255, 0, 0)"'>

The `secondaryColor` property defines the color or gradient used for the portion of each bar that belongs only to the secondary dataset. In dual-channel mode, it is applied where `data2[i]` is greater than `data[i]`.

This property is used only when `data2` contains one or more values. In single-channel mode, where `data2` is empty, `secondaryColor` is ignored.

It supports all color formats available in the Novadesk color system, including named CSS colors, hexadecimal colors (`#RRGGBB`, `#RRGGBBAA`), `rgb()`/`rgba()` notation, `linearGradient()`, and `radialGradient()`.

Example:

```js
 secondaryColor: "#00b4ff"
 secondaryColor: "rgba(0, 180, 255, 0.8)"
 secondaryColor: "linearGradient(90, #00b4ff, #005588)"
```

</PropertyBox>

<PropertyBox name="bothColor" type="string" defaultValue='"rgb(255, 255, 0)"'>

The `bothColor` property defines the color or gradient used for the overlapping region of the primary and secondary datasets. This region extends from `0` up to `min(data[i], data2[i])`, representing the portion where both datasets are simultaneously present.

The overlap is always drawn at the base of each bar, with the remaining portion rendered using either `primaryColor` or `secondaryColor`, depending on which dataset has the larger value.

This property is used only when both `data` and `data2` contain one or more values.

It supports all color formats available in the Novadesk color system, including named CSS colors, hexadecimal colors (`#RRGGBB`, `#RRGGBBAA`), `rgb()`/`rgba()` notation, `linearGradient()`, and `radialGradient()`.

Example:

```js
 bothColor: "#ffaa00"
 bothColor: "rgba(255, 170, 0, 0.9)"
 bothColor: "linearGradient(90, #ffaa00, #ff6600)"
```

</PropertyBox>

<PropertyBox name="autoRange" type="boolean" defaultValue="false">

The `autoRange` property controls how the histogram determines the value range used to scale the bars.

When set to `false` (default), the histogram uses a fixed range of `0` to `100`. Values greater than `100` are clamped to the maximum bar height, while values below `0` are clamped to zero.

When set to `true`, the engine scans both `data` and `data2` (when provided) to find the actual minimum and maximum values. This calculated range is then used to scale the histogram, allowing the bars to automatically fill the available height or width based on the current data.

Example:

```js
 // Fixed 0–100 scale
 autoRange: false

 // Scale to the actual data range
 autoRange: true
```

</PropertyBox>

<PropertyBox name="graphStart" type="string" defaultValue='"right"'>

The `graphStart` property controls which horizontal edge of the histogram displays the newest data point. Valid values are `"left"` and `"right"`, and the value is case-insensitive.

When set to `"right"` (default), the newest value is drawn at the right edge of the histogram, while older values extend toward the left. When set to `"left"`, the newest value is drawn at the left edge, with older values extending toward the right.

Since each data point occupies one pixel, the maximum number of visible samples is equal to the width of the element in pixels.

Example:

```js
 // Most recent data on the right (default)
 graphStart: "right"

 // Most recent data on the left
 graphStart: "left"
```

</PropertyBox>

<PropertyBox name="graphOrientation" type="string" defaultValue='"vertical"'>

The `graphOrientation` property controls the axis along which histogram data is displayed. Valid values are `"vertical"` and `"horizontal"`, and the value is case-insensitive.

When set to `"vertical"` (default), each data point is rendered as a vertical bar that is one pixel wide and fills from the bottom toward the top. The data index maps to the X-axis, so the element's width determines how many data points are visible, while its height determines the maximum bar height.

When set to `"horizontal"`, each data point is rendered as a horizontal bar that is one pixel high and fills from the left toward the right. The data index maps to the Y-axis, so the element's height determines how many data points are visible, while its width determines the maximum bar length.

Example:

```js
 // Standard vertical histogram
 graphOrientation: "vertical"

 // Horizontal histogram
 graphOrientation: "horizontal"
```

</PropertyBox>

<PropertyBox name="flip" type="boolean" defaultValue="false">

The `flip` property controls the direction in which histogram bars are filled.

In vertical orientation, when `flip` is `false`, bars fill from the bottom toward the top, so higher values produce taller columns. When `flip` is `true`, bars fill from the top toward the bottom, causing higher values to extend downward.

In horizontal orientation, when `flip` is `false`, bars fill from the right edge (when `graphStart` is `"right"`). When `flip` is `true`, the fill direction is inverted and bars grow from the left edge.

Example:

```js
 // Inverted audio spectrum — peaks hang from the top
 ui.addHistogram({
     id: "inverted",
     data: audioData,
     flip: true,
     primaryColor: "#9966ff"
 });
```

</PropertyBox>
