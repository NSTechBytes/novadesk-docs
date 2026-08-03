---
title: Shape element types, properties, and examples.
---

# Shape Element
The Shape element draws 2D vector graphics using Direct2D. It supports six shape types, configurable fill and stroke, gradient colors, dashed borders, cap/join styles, and boolean geometry combine operations.

Create with

```js
ui.addShape(options);
```

#### Table of Contents
[[toc]]

## Shape Options

The shape element inherits all [General Elements Options](/api/ui/ui-elements/general-options/general-elements-options), [General Tooltip Options](/api/ui/ui-elements/general-options/tooltip), and [General Mouse Options](/api/ui/ui-elements/general-options/general-mouse-options).

<PropertyBox name="type" type="string" defaultValue='"rectangle"'>

The `type` property specifies which geometry the Shape element draws. All supported properties are parsed regardless of the selected type, but only those relevant to the chosen shape affect the final rendering.

The alias `shapeType` is also supported and behaves identically to `type`.

Valid values:

| Value         | Description                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------- |
| `"rectangle"` | Draws a filled and/or stroked rectangle. Rounded corners can be applied using `cornerRadius`. |
| `"ellipse"`   | Draws a filled and/or stroked ellipse or circle.                                              |
| `"line"`      | Draws a straight line from (`startX`, `startY`) to (`endX`, `endY`).                          |
| `"curve"`     | Draws a quadratic or cubic Bézier curve.                                                      |
| `"arc"`       | Draws an elliptical arc segment.                                                              |
| `"path"`      | Draws a custom SVG-style path defined by `pathData`.                                          |
| `"combine"`   | Draws the result of a boolean geometry operation between two existing shapes.                 |

Example:

```js
 ui.addShape({
     id: "rect",
     type: "rectangle"
 });

 ui.addShape({
     id: "circle",
     type: "ellipse"
 });

 ui.addShape({
     id: "line",
     type: "line"
 });
```

</PropertyBox>

<PropertyBox name="fillColor" type="string" defaultValue='"rgb(255, 255, 255)"'>

The `fillColor` property defines the color or gradient used to fill the interior of the shape.

It supports all color formats available in the Novadesk color system, including named CSS colors, hexadecimal colors (`#RRGGBB`, `#RRGGBBAA`), `rgb()`/`rgba()` notation, `linearGradient()`, and `radialGradient()`.

Setting the value to `"transparent"` or `"none"` disables the fill, allowing only the shape's outline to be rendered if a stroke is defined.

Example:

```js
 ui.addShape({
     id: "solid",
     fillColor: "#f00"
 });

 ui.addShape({
     id: "alpha",
     fillColor: "rgba(0, 100, 200, 0.5)"
 });

 ui.addShape({
     id: "gradient",
     fillColor: "linearGradient(45, #00f, #0ff)"
 });

 ui.addShape({
     id: "radial",
     fillColor: "radialGradient(circle, #fff, #000)"
 });

 ui.addShape({
     id: "outline",
     fillColor: "transparent"
 });
```

</PropertyBox>

<PropertyBox name="strokeColor" type="string" defaultValue='"rgb(0, 0, 0)"'>

The `strokeColor` property defines the color or gradient used to draw the outline of the shape.

The stroke is rendered only when `strokeWidth` is greater than `0`. It supports all color formats available in the Novadesk color system, including named CSS colors, hexadecimal colors (`#RRGGBB`, `#RRGGBBAA`), `rgb()`/`rgba()` notation, `linearGradient()`, and `radialGradient()`.

Example:

```js
 ui.addShape({
     id: "whiteBorder",
     strokeWidth: 2,
     strokeColor: "#ffffff"
 });

 ui.addShape({
     id: "gradientBorder",
     strokeWidth: 4,
     strokeColor: "linearGradient(0, #ff0000, #00ff00, #0000ff)"
 });

 ui.addShape({
     id: "radialBorder",
     strokeWidth: 3,
     strokeColor: "radialGradient(circle, #fff, #000)"
 });
```

</PropertyBox>

<PropertyBox name="strokeWidth" type="number" defaultValue="1.0">

The `strokeWidth` property specifies the thickness of the shape's outline in pixels.

A value of `0` disables the stroke entirely, regardless of the `strokeColor` setting. Larger values produce thicker outlines.

Example:

```js
 ui.addShape({
     id: "noStroke",
     strokeWidth: 0
 });

 ui.addShape({
     id: "thin",
     strokeWidth: 1
 });

 ui.addShape({
     id: "standard",
     strokeWidth: 4
 });

 ui.addShape({
     id: "thick",
     strokeWidth: 12
 });
```

</PropertyBox>

<PropertyBox name="radius / radiusX / radiusY" type="number" defaultValue="0">

The `radius`, `radiusX`, and `radiusY` properties control corner rounding for rectangles and define the horizontal and vertical radii of ellipses and arcs.

The `radius` property is a shorthand that assigns the same value to both `radiusX` and `radiusY`. If `radiusX` or `radiusY` are specified explicitly, they override the value provided by `radius`.

For rectangle shapes, these properties determine the corner radius. For ellipse and arc shapes, they define the horizontal (`radiusX`) and vertical (`radiusY`) radii. If no radii are specified for an ellipse, they are calculated automatically from the element's `width` and `height`.

Example:

```js
 ui.addShape({
     id: "roundedRect",
     type: "rectangle",
     radius: 12
 });

 ui.addShape({
     id: "asymmetricRect",
     type: "rectangle",
     radiusX: 20,
     radiusY: 8
 });

 ui.addShape({
     id: "ellipseAuto",
     type: "ellipse",
     width: 200,
     height: 100
 });

 ui.addShape({
     id: "ellipseCustom",
     type: "ellipse",
     radiusX: 100,
     radiusY: 50
 });
```

</PropertyBox>

<PropertyBox name="curveType" type="string" defaultValue='"quadratic"'>

The `curveType` property selects the Bézier curve algorithm used when `type` is set to `"curve"`.

Valid values are `"quadratic"` and `"cubic"`. The value is case-insensitive.

A quadratic Bézier curve uses a single control point (`controlX` and `controlY`) to define the curve. A cubic Bézier curve uses two control points (`controlX`/`controlY` and `control2X`/`control2Y`), allowing more complex shapes such as S-curves.

This property is ignored for all other shape types.

Example:

```js
 ui.addShape({
     type: "curve",
     curveType: "quadratic",
     startX: 20,
     startY: 100,
     controlX: 150,
     controlY: 0,
     endX: 280,
     endY: 100,
     strokeColor: "#00b4ff",
     strokeWidth: 4
 });

 ui.addShape({
     type: "curve",
     curveType: "cubic",
     startX: 20,
     startY: 100,
     controlX: 80,
     controlY: 0,
     control2X: 200,
     control2Y: 200,
     endX: 280,
     endY: 100,
     strokeColor: "#ff6600",
     strokeWidth: 4
 });
```

</PropertyBox>

<PropertyBox name="controlX, controlY, control2X, control2Y" type="number" defaultValue="0">

The `controlX`, `controlY`, `control2X`, and `control2Y` properties define the control points used to shape Bézier curves when `type` is set to `"curve"`.

The `controlX` and `controlY` properties specify the single control point for quadratic Bézier curves, and the first control point for cubic Bézier curves. The `control2X` and `control2Y` properties define the second control point and are used only when `curveType` is `"cubic"`.

Control points influence the direction and curvature of the line without the curve passing through them. These properties are ignored for all other shape types.

Example:

```js
 ui.addShape({
     type: "curve",
     curveType: "quadratic",
     startX: 20,
     startY: 100,
     controlX: 150,
     controlY: 0,
     endX: 280,
     endY: 100
 });

 ui.addShape({
     type: "curve",
     curveType: "cubic",
     startX: 20,
     startY: 100,
     controlX: 80,
     controlY: 0,
     control2X: 200,
     control2Y: 200,
     endX: 280,
     endY: 100
 });
```

</PropertyBox>

<PropertyBox name="startAngle, endAngle" type="number" defaultValue="startAngle: 0, endAngle: 90">

The `startAngle` and `endAngle` properties define the beginning and ending angles of an arc when `type` is set to `"arc"`.

Both values are specified in **degrees**, not radians. An angle of `0°` points to the right (the 3 o'clock position), and positive angles increase clockwise around the ellipse.

These properties determine the visible portion of the ellipse or circle. They are ignored for all other shape types.

Example:

```js
 ui.addShape({
     type: "arc",
     x: 20,
     y: 20,
     width: 200,
     height: 200,
     radius: 90,
     startAngle: 0,
     endAngle: 270,
     clockwise: true,
     strokeColor: "#00b4ff",
     strokeWidth: 8,
     fillColor: "rgba(0,180,255,0.15)"
 });
```

</PropertyBox>

<PropertyBox name="clockwise" type="boolean" defaultValue="true">

The `clockwise` property controls the direction in which an arc is drawn when `type` is set to `"arc"`.

When set to `true`, the arc is drawn clockwise from `startAngle` to `endAngle`. When set to `false`, the arc is drawn in the opposite (counter-clockwise) direction.

This property affects only the direction of the arc sweep and is ignored for all other shape types.

Example:

```js
 ui.addShape({
     type: "arc",
     startAngle: 0,
     endAngle: 180,
     clockwise: true
 });

 ui.addShape({
     type: "arc",
     startAngle: 0,
     endAngle: 180,
     clockwise: false
 });
```

</PropertyBox>

<PropertyBox name="pathData" type="string" defaultValue='""'>

The `pathData` property defines the geometry of a custom shape when `type` is set to `"path"`.

The value is an SVG-style path string that describes one or more connected lines, curves, and arcs. Path coordinates are interpreted in the element's local coordinate system, relative to the element's `x` and `y` position.

The following SVG path commands are supported:

| Command                           | Description                                                           |
| --------------------------------- | --------------------------------------------------------------------- |
| `M x y`                           | Move to (`x`, `y`) and begin a new subpath                            |
| `L x y`                           | Draw a line to (`x`, `y`)                                             |
| `H x`                             | Draw a horizontal line to `x`                                         |
| `V y`                             | Draw a vertical line to `y`                                           |
| `C x1 y1 x2 y2 x y`               | Draw a cubic Bézier curve to (`x`, `y`)                               |
| `Q x1 y1 x y`                     | Draw a quadratic Bézier curve to (`x`, `y`)                           |
| `A rx ry rot large-arc sweep x y` | Draw an elliptical arc to (`x`, `y`)                                  |
| `Z`                               | Close the current path by drawing a line back to the last `M` command |

This property is ignored unless `type` is `"path"`.

Example:

```js
 ui.addShape({
     id: "star",
     type: "path",
     pathData: "M50 5 L61 39 L98 39 L68 59 L79 93 L50 72 L21 93 L32 59 L2 39 L39 39 Z"
 });

 ui.addShape({
     id: "triangle",
     type: "path",
     pathData: "M100 10 L190 190 L10 190 Z"
 });

 ui.addShape({
     id: "zigzag",
     type: "path",
     pathData: "M20 0 L70 40 L120 0 L170 40 L220 0"
 });
```

</PropertyBox>

<PropertyBox name="strokeStartCap, strokeEndCap" type="string" defaultValue='"Flat"'>

The `strokeStartCap` and `strokeEndCap` properties control the shape of the stroke at the beginning and end of open paths. They affect lines, curves, open paths, and arcs with a visible stroke.

Valid values are `"Flat"`, `"Round"`, `"Square"`, and `"Triangle"`. The values are case-insensitive.

A `"Flat"` cap ends the stroke exactly at the endpoint. A `"Round"` cap extends the stroke by half of its width with a semicircular end. A `"Square"` cap extends the stroke by half of its width with a square end. A `"Triangle"` cap produces a pointed, arrow-like end.

These properties have no effect on closed shapes such as rectangles, ellipses, or closed paths.

Valid values:

| Value        | Description                                                                  |
| ------------ | ---------------------------------------------------------------------------- |
| `"Flat"`     | Ends the stroke exactly at the endpoint without extending it.                |
| `"Round"`    | Adds a semicircular cap extending half the stroke width beyond the endpoint. |
| `"Square"`   | Adds a square cap extending half the stroke width beyond the endpoint.       |
| `"Triangle"` | Adds a triangular cap extending beyond the endpoint.                         |

Example:

```js
 ui.addShape({
     type: "line",
     strokeWidth: 8,
     strokeStartCap: "Triangle",
     strokeEndCap: "Triangle"
 });

 ui.addShape({
     type: "curve",
     strokeWidth: 10,
     strokeStartCap: "Round",
     strokeEndCap: "Round"
 });
```

</PropertyBox>

<PropertyBox name="strokeDashCap" type="string" defaultValue='"Flat"'>

The `strokeDashCap` property controls the cap style applied to each individual dash in a dashed stroke. It takes effect only when `strokeDashes` is specified.

Valid values are `"Flat"`, `"Round"`, `"Square"`, and `"Triangle"`. The values are case-insensitive.

A `"Flat"` cap ends each dash exactly at its endpoints. `"Round"` and `"Square"` extend each dash by half the stroke width, while `"Triangle"` gives each dash a pointed, arrow-like appearance.

This property has no effect on solid strokes.

Valid values:

| Value        | Description                                              |
| ------------ | -------------------------------------------------------- |
| `"Flat"`     | Ends each dash exactly at its endpoints.                 |
| `"Round"`    | Adds a semicircular cap to both ends of each dash.       |
| `"Square"`   | Adds a square cap extending beyond each end of the dash. |
| `"Triangle"` | Adds triangular caps to each end of the dash.            |

Example:

```js
 ui.addShape({
     type: "line",
     strokeWidth: 6,
     strokeDashes: [12, 6],
     strokeDashCap: "Round"
 });
```

</PropertyBox>

<PropertyBox name="strokeLineJoin" type="string" defaultValue='"Miter"'>

The `strokeLineJoin` property controls how the stroke is rendered at corners where two path segments meet.

Valid values are `"Miter"`, `"Bevel"`, `"Round"`, and `"MiterOrBevel"`. The values are case-insensitive.

A `"Miter"` join creates a sharp corner by extending the outer edges of the stroke until they intersect. A `"Bevel"` join cuts the corner off with a straight edge. A `"Round"` join connects the segments with a circular arc. `"MiterOrBevel"` uses a miter join when the corner angle is small enough, automatically switching to a bevel join for sharper angles to prevent excessively long spikes.

This property affects stroked paths, lines, curves, and other geometries containing corners. Rounded shapes such as circles and ellipses are generally unaffected.

Valid values:

| Value            | Description                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------- |
| `"Miter"`        | Creates a sharp, pointed corner where segments meet.                                        |
| `"Bevel"`        | Cuts the corner off with a straight edge.                                                   |
| `"Round"`        | Connects the segments with a smooth circular arc.                                           |
| `"MiterOrBevel"` | Uses a miter join when possible, otherwise falls back to a bevel join to avoid long spikes. |

Example:

```js
 ui.addShape({
     type: "path",
     strokeWidth: 8,
     strokeLineJoin: "Round"
 });

 ui.addShape({
     type: "path",
     strokeWidth: 8,
     strokeLineJoin: "Bevel"
 });
```

</PropertyBox>

<PropertyBox name="strokeDashes" type="Array&lt;number&gt;" defaultValue="[]">

The `strokeDashes` property defines a repeating dash pattern for the shape's stroke. The array contains alternating dash lengths and gap lengths, with each value measured in pixels.

The pattern repeats continuously along the entire stroke. An empty array draws a solid, uninterrupted stroke. This property affects only stroked shapes and has no effect when `strokeWidth` is `0`.

The appearance of individual dashes can be further customized using the `strokeDashCap` property.

Example:

```js
 ui.addShape({
     type: "line",
     strokeWidth: 3,
     strokeDashes: [10, 5]
 });

 ui.addShape({
     type: "line",
     strokeWidth: 3,
     strokeDashes: [4, 2]
 });

 ui.addShape({
     type: "line",
     strokeWidth: 3,
     strokeDashes: [20, 5, 5, 5]
 });

 ui.addShape({
     type: "line",
     strokeWidth: 3,
     strokeDashes: []
 });
```

</PropertyBox>

<PropertyBox name="strokeDashOffset" type="number" defaultValue="0">

The `strokeDashOffset` property shifts the starting position of the dash pattern along the stroke path.

The offset is measured in pixels and is applied before the dash pattern begins repeating. This is useful for aligning dashed strokes or creating animated dash effects by changing the offset over time.

This property has an effect only when `strokeDashes` contains a dash pattern. It is ignored for solid strokes.

Example:

```js
 ui.addShape({
     type: "line",
     strokeWidth: 4,
     strokeDashes: [12, 6],
     strokeDashOffset: 6
 });
```

</PropertyBox>

### Combine Shape

<PropertyBox name="base" type="string" defaultValue='""'>

The `base` property specifies the ID of the shape whose geometry is used as the starting point for a `combine` operation.

It must reference an existing shape element. The geometry of the shape identified by `base` becomes the first operand in the boolean operation, while the shape specified by `target` is used as the second operand. The final geometry is determined by the selected `combineMode`.

This property is used only when `type` is set to `"combine"`.

Example:

```js
 ui.addShape({
     id: "combined",
     type: "combine",
     base: "circle",
     target: "rectangle",
     combineMode: "union"
 });
```

</PropertyBox>

<PropertyBox name="ops" type="Array&lt;{ id, mode, consume }&gt;" defaultValue="[]">

The `ops` property defines the sequence of boolean geometry operations applied to the shape specified by `base`.

Each entry in the array references an existing shape by its `id` and specifies how it should be combined with the current geometry. Operations are processed in the order they appear, with the result of one operation becoming the input for the next.

The optional `consume` field controls whether the source shape is hidden after it has been used in the combine operation.

Each operation object contains the following fields:

| Field     | Type      | Description                                                           |
| --------- | --------- | --------------------------------------------------------------------- |
| `id`      | `string`  | ID of an existing shape element to combine with the current geometry. |
| `mode`    | `string`  | Boolean operation to perform.                                         |
| `consume` | `boolean` | When `true`, hides the source shape after the operation.              |

Valid `mode` values:

| Value         | Result                                               |
| ------------- | ---------------------------------------------------- |
| `"union"`     | Merges both shapes into a single geometry.           |
| `"intersect"` | Keeps only the overlapping region.                   |
| `"xor"`       | Keeps the non-overlapping portions of both shapes.   |
| `"exclude"`   | Subtracts the other shape from the current geometry. |

This property is used only when `type` is set to `"combine"`.

Example:

```js
 ui.addShape({
     id: "combined",
     type: "combine",
     base: "circle",
     ops: [
         {
             id: "rectangle",
             mode: "union",
             consume: true
         },
         {
             id: "triangle",
             mode: "exclude",
             consume: false
         }
     ]
 });
```

</PropertyBox>

<PropertyBox name="consume" type="boolean" defaultValue="false">

The `consume` property controls whether the base shape remains visible after it has been incorporated into a `combine` operation.

When set to `true`, the original base shape is hidden after its geometry has been used to create the combined result. When `false`, the base shape continues to be rendered alongside the combined geometry.

This property affects only the `base` shape. To hide shapes referenced in the `ops` array, set their individual `consume` property to `true`.

This property is used only when `type` is set to `"combine"`.

Example:

```js
 ui.addShape({
     id: "circle",
     type: "ellipse",
     x: 40,
     y: 40,
     width: 140,
     height: 140,
     fillColor: "#4a90e2"
 });

 ui.addShape({
     id: "rect",
     type: "rectangle",
     x: 90,
     y: 20,
     width: 120,
     height: 120,
     fillColor: "#8bc34a"
 });

 ui.addShape({
     id: "combined",
     type: "combine",
     base: "circle",
     consume: true,
     ops: [
         {
             id: "rect",
             mode: "xor",
             consume: true
         }
     ],
     fillColor: "#ffcf33",
     strokeColor: "#333",
     strokeWidth: 2
 });
```

</PropertyBox>
