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

<PropertyBox name="maxPoints" type="number" defaultValue="0">

  The `maxPoints` property controls the maximum number of data points that the area graph stores and displays at any time. When the number of data points exceeds this limit, only the most recent values are retained, while the oldest values are silently discarded from the beginning of the data array.

When set to `0`, no limit is applied, allowing all data points to be stored and rendered.

</PropertyBox>

<PropertyBox name="gridVisible" type="boolean" defaultValue="true">

  The `gridVisible` property acts as the master switch for grid line rendering in the area graph. When set to `true`, horizontal and vertical grid lines are drawn behind the graph data according to the `gridX`, `gridY`, and `gridColor` settings, including their configured alpha values.

When set to `false`, no grid lines are rendered, regardless of the values of any other grid-related properties.

</PropertyBox>

<PropertyBox name="gridColor" type="string" defaultValue='"rgba(100, 100, 100, 0.39)"'>

  The `gridColor` property defines the color or gradient applied to all grid lines in the area graph, including both vertical grid lines controlled by `gridX` and horizontal grid lines controlled by `gridY`.

It supports the same color formats as `lineColor` and `fillColor`, including named CSS colors, hexadecimal colors, `rgb()`/`rgba()` notation, linear gradients, and radial gradients.

Any alpha (transparency) value specified in the color string is extracted and stored separately as `gridAlpha`. This alpha value acts as a secondary visibility check: if `gridAlpha` evaluates to `0`, grid lines are not rendered even when `gridVisible` is `true`.

</PropertyBox>


<PropertyBox name="gridX" type="number" defaultValue="20">

  The `gridX` property defines the spacing, in pixels, between vertical grid lines in the area graph. Vertical grid lines run from the top to the bottom of the graph, dividing it into columns. For example, setting `gridX` to `40` draws one vertical grid line every 40 pixels across the graph's width.

Setting `gridX` to `0` or a negative value disables vertical grid lines entirely. Horizontal grid lines controlled by `gridY` are unaffected.

</PropertyBox>

<PropertyBox name="gridY" type="number" defaultValue="20">

  The `gridY` property defines the spacing, in pixels, between horizontal grid lines in the area graph. Horizontal grid lines run from the left to the right edge of the graph, dividing it into rows. For example, setting `gridY` to `50` draws one horizontal grid line every 50 pixels across the graph's height.

Setting `gridY` to `0` or a negative value disables horizontal grid lines entirely. Vertical grid lines controlled by `gridX` are unaffected.

</PropertyBox>


<PropertyBox name="graphStart" type="string" defaultValue='"right"'>
  
  The `graphStart` property controls which horizontal edge of the graph the newest data point is anchored to. It determines the direction in which data flows as new points are added, causing the graph to fill from right to left or from left to right.

This property does not determine where the graph begins drawing visually. Instead, it controls the position of the most recent data point. Older data points are always pushed toward the opposite edge.

Valid values:

| Value     | Behavior                                              |
| --------- | ----------------------------------------------------- |
| `"right"` | The newest data point appears on the right (default). |
| `"left"`  | The newest data point appears on the left.            |

</PropertyBox>


<PropertyBox name="flip" type="boolean" defaultValue="false">

  The `flip` property inverts the vertical axis of the area graph. When set to `false`, high values are positioned toward the top of the graph and low values toward the bottom, following the standard chart convention. When set to `true`, this behavior is reversed: high values are positioned toward the bottom and low values toward the top.

The fill area always follows the data line. When `flip` is `true`, the data line is inverted vertically, and the enclosed fill area is adjusted accordingly so that it remains correctly filled between the data line and the appropriate graph boundary.

</PropertyBox>
