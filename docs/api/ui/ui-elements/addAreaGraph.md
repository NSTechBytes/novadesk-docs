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

</PropertyBox>

<PropertyBox name="maxValue" type="number" defaultValue="1.0">

  The `maxValue` property defines the maximum value of the Y-axis scale for the area graph. It represents the upper bound of the graph's vertical range and determines how data points are mapped to pixel positions on the graph.

When `autoRange` is `false`, `maxValue` works together with `minValue` to establish a fixed Y-axis scale. All data values are normalized within this range to determine their vertical positions on the graph.

</PropertyBox>

<PropertyBox name="autoRange" type="boolean" defaultValue="false">

  The `autoRange` property controls whether the area graph automatically calculates the Y-axis range from the data or uses manually specified values.

When `autoRange` is `true`, the graph automatically determines the minimum and maximum values from the `data` array. When `autoRange` is `false`, the graph uses the values specified by `minValue` and `maxValue` to define a fixed Y-axis scale.

</PropertyBox>

<PropertyBox name="lineColor" type="string" defaultValue='"rgb(0, 180, 255)"'>
  
  The `lineColor` property defines the color or gradient applied to the top edge of the area graph. It controls the appearance of the stroke that connects each data point, forming the upper boundary of the filled area.

The property supports multiple CSS color formats, including solid colors and gradients.
</PropertyBox>

<PropertyBox name="lineWidth" type="number" defaultValue="1.0">
  
  The `lineWidth` property controls the thickness of the stroke drawn along the top edge of the area graph. This line is rendered as a separate path above the filled area, connecting each data point in sequence.

A thinner line provides a clean, precise appearance, while a thicker line creates a bolder and more prominent look that is easier to distinguish.
</PropertyBox>

<PropertyBox name="fillColor" type="string" defaultValue='"rgba(0, 180, 255, 0.196)"'>
  
  The `fillColor` property defines the color or gradient used to fill the area beneath the graph line down to the bottom edge of the graph. Since it covers the largest visible portion of the graph, it has the greatest impact on its overall appearance.

Internally, the fill is rendered as a closed polygon that begins at the bottom-left of the graph, follows the line through each data point, extends to the bottom-right, and then closes back to the starting point. The entire enclosed area is filled using `fillColor`.

The property supports the same color formats as `lineColor`, including named CSS colors, hexadecimal colors, `rgb()`/`rgba()` notation, linear gradients, and radial gradients.

</PropertyBox>


<PropertyBox name="lineWidth" type="number" defaultValue="1.0">
  
  The `lineWidth` property controls the thickness, in pixels, of the stroke drawn along the top edge of the area graph. This stroke connects all data points to form the graph's outline.

It accepts any positive floating-point value. Values below `0.1` are automatically clamped to `0.1`.

When `pixelHitTest` is enabled, the `lineWidth` value also affects the hit-test tolerance, making thicker lines easier to interact with.

</PropertyBox>


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
