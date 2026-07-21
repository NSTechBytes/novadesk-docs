---
title: Area Graph element options and example usage.
---

# Area Graph Element
The Area Graph element draws a filled line graph from numeric data points.

Create one with `ui.addAreaGraph()` and the shared [General Element Options](/api/ui/ui-elements/general-options/general-elements-options), [General Tooltip Options](/api/ui/ui-elements/general-options/tooltip), and [Mouse Events Callback](/api/ui/ui-elements/general-options/general-mouse-options).

```js
ui.addAreaGraph(options);
```

#### Table of Contents
[[toc]]

## Area Graph Options

<PropertyBox name="data" type="Array<number>" defaultValue="[] (empty array)">
  The data property contains an array of numeric values representing the data points to be plotted on the area graph. Each value corresponds to a point on the graph, with values plotted sequentially from the graph's starting edge (left or right, depending on the graphStart setting).

Data Format

```js
 data: [value1, value2, value3, ..., valueN]
```

* Each element must be a number (integer or floating-point value).
* The array can initially be empty.
* Values are plotted sequentially in the order they appear in the array.
* The visual height of each point is determined by its value relative to minValue and maxValue, or to the automatically calculated range when autoRange: true.

</PropertyBox>

<PropertyBox name="minValue" type="number" defaultValue="0.0">
  The `minValue` property defines the minimum value of the Y-axis scale for the area graph. It represents the lower bound of the graph's vertical range and determines how data points are mapped to pixel positions on the graph.

When `autoRange` is `false`, `minValue` works together with `maxValue` to establish a fixed Y-axis scale. All data values are normalized within this range to determine their vertical positions on the graph.

* Defines the lower bound of the graph's Y-axis.
* Used only when `autoRange` is `false`.
* Works together with `maxValue` to create a fixed value range.
* Values below `minValue` are displayed at the bottom of the graph.
* The default value is `0.0`.

</PropertyBox>

<PropertyBox name="maxValue" type="number" defaultValue="1.0">

  The `maxValue` property defines the maximum value of the Y-axis scale for the area graph. It represents the upper bound of the graph's vertical range and determines how data points are mapped to pixel positions on the graph.

When `autoRange` is `false`, `maxValue` works together with `minValue` to establish a fixed Y-axis scale. All data values are normalized within this range to determine their vertical positions on the graph.

* Defines the upper bound of the graph's Y-axis.
* Used only when `autoRange` is `false`.
* Works together with `minValue` to create a fixed value range.
* Values above `maxValue` are displayed at the top of the graph.
* The default value is `1.0`.

</PropertyBox>

### `autoRange`

- **Type**: `boolean`
- **Default**: `false`
- **Description**: Uses min/max from `data` automatically.

### `lineColor`

- **Type**: `string`
- **Default**: `"rgb(0, 180, 255)"`
- **Description**: Stroke color or gradient for the top line.

### `lineWidth`

- **Type**: `number`
- **Default**: `1.0`
- **Description**: Top line thickness.

### `fillColor`

- **Type**: `string`
- **Default**: `"rgba(0, 180, 255, 0.2)"` (approx.)
- **Description**: Fill color or gradient for the area below the line.

### `maxPoints`

- **Type**: `number`
- **Default**: `0`
- **Description**: Trims stored data to the latest N points when greater than `0`.

### `gridVisible`

- **Type**: `boolean`
- **Default**: `true`
- **Description**: Shows or hides graph grid lines.

::: info
When `gridVisible` is `false`, no grid lines are drawn even if `gridColor`, `gridX`, and `gridY` are set.
:::

### `gridColor`

- **Type**: `string`
- **Default**: `"rgba(100, 100, 100, 0.39)"` (approx.)
- **Description**: Grid line color or gradient.

### `gridX`, `gridY`

- **Type**: `number`
- **Defaults**: `20` and `20`
- **Description**: Horizontal and vertical grid spacing in pixels.

::: info
Values less than or equal to `0` disable that axis grid direction.
:::

### `graphStart`

- **Type**: `string`
- **Default**: `"right"`
- **Description**: Side where newest samples appear.

#### Valid values

- `"left"`
- `"right"`

### `flip`

- **Type**: `boolean`
- **Default**: `false`
- **Description**: Flips graph vertically.

## Runtime Notes

- Area Graph supports improved shape-aware hit testing. Enable `pixelHitTest: true` to use pixel-aware checks instead of only bounds.

## Example

```javascript
ui.addAreaGraph({
    id: "cpu-graph",
    x: 20,
    y: 60,
    width: 560,
    height: 200,
    data: [],
    minValue: 0,
    maxValue: 100,
    autoRange: false,
    lineColor: "#00b4ff",
    lineWidth: 2,
    fillColor: "rgba(0, 179, 255, 0.28)",
    gridVisible: true,
    gridColor: "rgba(255,255,255,0.16)",
    gridX: 30,
    gridY: 20,
    maxPoints: 120,
    graphStart: "right"
});
```
