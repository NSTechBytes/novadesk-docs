---
title: ui.addLayoutBox(options)
---

# `ui.addLayoutBox(options)`

Creates a `LayoutBox` container element and optionally adds nested child elements through `children`.

`LayoutBox` supports direct properties (no `style` wrapper required).

#### Table of Contents
[[toc]]

## Parameters

<PropertyBox name="id" type="string" required>

The `id` property specifies the unique identifier for the layout box.

Every layout box must have a unique `id`. All elements created through the `children` property automatically have their `container` property set to this `id`, causing them to be clipped to the layout box's bounds and grouped as part of the layout.

</PropertyBox>

<PropertyBox name="children" type="Array&lt;object&gt;" defaultValue="[]">

The `children` property defines the elements that are automatically created inside the layout box.

Each child object must include an `elementType` property that specifies which UI element to create. Child elements support all of their normal properties and are automatically assigned this layout box as their `container`, causing them to move, clip, and render together with the layout.

Supported `elementType` values:

| Value         | Creates        |
| ------------- | -------------- |
| `"text"`      | `addText`      |
| `"image"`     | `addImage`     |
| `"shape"`     | `addShape`     |
| `"button"`    | `addButton`    |
| `"inputbox"`  | `addInputBox`  |
| `"bitmap"`    | `addBitmap`    |
| `"rotator"`   | `addRotator`   |
| `"bar"`       | `addBar`       |
| `"line"`      | `addLine`      |
| `"histogram"` | `addHistogram` |
| `"roundline"` | `addRoundLine` |
| `"areagraph"` | `addAreaGraph` |

Example:

```js
 ui.addLayoutBox({
     id: "card",
     x: 20,
     y: 20,
     width: 300,
     height: 120,
     children: [
         {
             elementType: "text",
             id: "card-title",
             text: "CPU Usage",
             fontSize: 16,
             fontColor: "#ffffff"
         },
         {
             elementType: "bar",
             id: "card-bar",
             value: 0.65,
             barColor: "#00b4ff",
             height: 8
         }
     ]
 });
```

</PropertyBox>

<PropertyBox name="backgroundColor" type="string" defaultValue="none">

The `backgroundColor` property specifies the background fill drawn behind all child elements in the layout box.

It supports all Novadesk color formats, including named CSS colors, hexadecimal colors, `rgb()`, `rgba()`, `linearGradient()`, and `radialGradient()`. If omitted, the layout box background is transparent.

Example:

```js
 ui.addLayoutBox({
     id: "panel",
     backgroundColor: "rgba(30, 30, 40, 0.90)"
 });

 ui.addLayoutBox({
     id: "gradientPanel",
     backgroundColor: "linearGradient(90, #1a1a2e, #16213e)"
 });
```

</PropertyBox>

<PropertyBox name="fillColor" type="string" defaultValue="none">

The `fillColor` property specifies an additional fill drawn inside the layout box's border.

It behaves similarly to CSS `background-color` when a border is present and can be used together with `backgroundColor` to create layered visual effects.

Example:

```js
 ui.addLayoutBox({
     id: "panel",
     fillColor: "rgba(255,255,255,0.05)"
 });
```

</PropertyBox>

<PropertyBox name="borderColor" type="string" defaultValue="none">

The `borderColor` property specifies the color of the layout box border.

The border is rendered only when `borderWidth` is greater than `0`. This property accepts standard color values but does not support gradients.

Example:

```js
 ui.addLayoutBox({
     id: "panel",
     borderWidth: 1,
     borderColor: "rgba(255,255,255,0.20)"
 });

 ui.addLayoutBox({
     id: "darkPanel",
     borderWidth: 2,
     borderColor: "#444444"
 });
```

</PropertyBox>

<PropertyBox name="borderWidth" type="number" defaultValue="0">

The `borderWidth` property specifies the thickness of the layout box border in pixels.

Set the value to `0` to disable the border entirely.

Example:

```js
 ui.addLayoutBox({
     id: "thinBorder",
     borderWidth: 1
 });

 ui.addLayoutBox({
     id: "standardBorder",
     borderWidth: 2
 });
```

</PropertyBox>

<PropertyBox name="borderRadius" type="number" defaultValue="0">

The `borderRadius` property specifies the corner radius of the layout box.

The radius is applied uniformly to all four corners of both the background and the border. Larger values produce more rounded corners.

Example:

```js
 ui.addLayoutBox({
     id: "square",
     borderRadius: 0
 });

 ui.addLayoutBox({
     id: "rounded",
     borderRadius: 8
 });

 ui.addLayoutBox({
     id: "pill",
     borderRadius: 16
 });
```

</PropertyBox>

<PropertyBox name="borderStyle" type="string | Array&lt;string&gt;" defaultValue='"solid"'>

The `borderStyle` property controls the appearance of the layout box border.

It can be specified as a single value applied to all four sides or as an array following CSS border shorthand rules. When an array is used, values are assigned in the order **top**, **right**, **bottom**, **left**.

Valid values:

* `"solid"`
* `"none"`
* `"hidden"`
* `"dashed"`
* `"dotted"`
* `"double"`
* `"inset"`
* `"outset"`
* `"groove"`
* `"ridge"`

Array shorthand rules:

| Values | Applied to               |
| ------ | ------------------------ |
| 1      | All sides                |
| 2      | Top/Bottom, Left/Right   |
| 3      | Top, Left/Right, Bottom  |
| 4      | Top, Right, Bottom, Left |

Example:

```js
 ui.addLayoutBox({
     id: "solid",
     borderStyle: "solid"
 });

 ui.addLayoutBox({
     id: "dashed",
     borderStyle: "dashed"
 });

 ui.addLayoutBox({
     id: "mixed1",
     borderStyle: ["solid", "none"]
 });

 ui.addLayoutBox({
     id: "mixed2",
     borderStyle: ["solid", "dashed", "none", "solid"]
 });
```

</PropertyBox>

<PropertyBox name="opacity" type="number" defaultValue="1.0">

The `opacity` property controls the overall transparency of the layout box.

It is applied to the entire element, including the background, border, shadows, and all child elements. Values between `0.0` and `1.0` are interpreted as a fractional opacity, while values greater than `1.0` are interpreted as an integer alpha value between `0` and `255`.

Example:

```js
 ui.addLayoutBox({
     id: "semiTransparent",
     opacity: 0.8
 });

 ui.addLayoutBox({
     id: "hidden",
     opacity: 0.0
 });

 ui.addLayoutBox({
     id: "alphaValue",
     opacity: 204
 });
```

</PropertyBox>

<PropertyBox name="boxShadow" type="object | Array&lt;object&gt;" defaultValue="none">

The `boxShadow` property adds one or more drop shadows behind the layout box.

A shadow may be specified as a single object or an array of objects. Shadows are rendered in the order they appear, allowing layered shadow effects. String syntax is not supported.

Each shadow object supports the following properties:

| Property | Type      |        Default | Description                               |
| -------- | --------- | -------------: | ----------------------------------------- |
| `x`      | `number`  |            `0` | Horizontal offset in pixels.              |
| `y`      | `number`  |            `0` | Vertical offset in pixels.                |
| `blur`   | `number`  |            `0` | Blur radius in pixels.                    |
| `spread` | `number`  |            `0` | Expansion radius in pixels.               |
| `color`  | `string`  | `"rgb(0,0,0)"` | Shadow color.                             |
| `inset`  | `boolean` |        `false` | Reserved for future inner-shadow support. |

Example:

```js
 ui.addLayoutBox({
     id: "shadow",
     boxShadow: {
         x: 0,
         y: 4,
         blur: 12,
         spread: 0,
         color: "rgba(0,0,0,0.50)"
     }
 });

 ui.addLayoutBox({
     id: "multiShadow",
     boxShadow: [
         {
             x: 0,
             y: 2,
             blur: 4,
             spread: 0,
             color: "rgba(0,0,0,0.30)"
         },
         {
             x: 0,
             y: 8,
             blur: 20,
             spread: 0,
             color: "rgba(0,0,0,0.20)"
         }
     ]
 });
```

</PropertyBox>

<PropertyBox name="flexDirection" type="string" defaultValue='"row"'>

The `flexDirection` property determines the main axis used to lay out child elements.

It controls whether children are arranged horizontally or vertically, and whether the order is normal or reversed. Values are case-insensitive.

Valid values:

| Value             | Description                               |
| ----------------- | ----------------------------------------- |
| `"row"`           | Children are laid out from left to right. |
| `"column"`        | Children are stacked from top to bottom.  |
| `"rowreverse"`    | Children are laid out from right to left. |
| `"columnreverse"` | Children are stacked from bottom to top.  |

Example:

```js
 ui.addLayoutBox({
     id: "horizontal",
     flexDirection: "row"
 });

 ui.addLayoutBox({
     id: "vertical",
     flexDirection: "column"
 });
```

</PropertyBox>

<PropertyBox name="direction" type="string" defaultValue='"ltr"'>

The `direction` property controls the layout direction used by the layout box.

It determines whether horizontal layouts flow from left to right or from right to left. This primarily affects layouts using `flexDirection: "row"`.

Valid values:

| Value   | Description                     |
| ------- | ------------------------------- |
| `"ltr"` | Left-to-right layout (default). |
| `"rtl"` | Right-to-left layout.           |

Example:

```js
 ui.addLayoutBox({
     id: "leftToRight",
     direction: "ltr"
 });

 ui.addLayoutBox({
     id: "rightToLeft",
     direction: "rtl"
 });
```

</PropertyBox>

<PropertyBox name="gap" type="number" defaultValue="0">

The `gap` property specifies the spacing between adjacent child elements along the main layout axis.

The value is measured in pixels and is applied automatically between neighboring children without affecting the layout box's outer size.

Example:

```js
 ui.addLayoutBox({
     id: "compact",
     gap: 0
 });

 ui.addLayoutBox({
     id: "spaced",
     gap: 8
 });

 ui.addLayoutBox({
     id: "wideSpacing",
     gap: 16
 });
```

</PropertyBox>

<PropertyBox name="align / alignItems" type="string" defaultValue='"stretch"'>

The `align` property controls how child elements are positioned along the cross axis.

The `alignItems` property is accepted as an alias. Values are case-insensitive.

Valid values:

| Value                      | Description                                              |
| -------------------------- | -------------------------------------------------------- |
| `"start"` / `"flex-start"` | Align children to the start of the cross axis.           |
| `"center"`                 | Center children along the cross axis.                    |
| `"end"` / `"flex-end"`     | Align children to the end of the cross axis.             |
| `"stretch"`                | Stretch children to fill the available cross-axis space. |

Example:

```js
 ui.addLayoutBox({
     id: "centered",
     align: "center"
 });

 ui.addLayoutBox({
     id: "start",
     align: "start"
 });

 ui.addLayoutBox({
     id: "end",
     alignItems: "end"
 });
```

</PropertyBox>

<PropertyBox name="justify / justifyContent" type="string" defaultValue='"flex-start"'>

The `justify` property controls how child elements are distributed along the main axis.

The `justifyContent` property is accepted as an alias. Values are case-insensitive.

Valid values:

| Value                      | Description                                                    |
| -------------------------- | -------------------------------------------------------------- |
| `"start"` / `"flex-start"` | Place children at the beginning of the main axis.              |
| `"center"`                 | Center children along the main axis.                           |
| `"end"` / `"flex-end"`     | Place children at the end of the main axis.                    |
| `"space-between"`          | Evenly distribute children with equal space between them.      |
| `"space-around"`           | Evenly distribute children with equal space around each child. |

Example:

```js
 ui.addLayoutBox({
     id: "centered",
     justify: "center"
 });

 ui.addLayoutBox({
     id: "spread",
     justify: "space-between"
 });

 ui.addLayoutBox({
     id: "end",
     justifyContent: "end"
 });
```

</PropertyBox>

<PropertyBox name="padding" type="number | Array&lt;number&gt;" defaultValue="0">

The `padding` property specifies the inner spacing between the layout box edges and its child elements.

It does not affect the rendered outer size of the layout box. A single value applies to every side, while arrays follow CSS-style shorthand rules.

Valid formats:

| Value                   | Applied to               |
| ----------------------- | ------------------------ |
| `padding: 12`           | All sides                |
| `padding: [16, 8]`      | Horizontal, Vertical     |
| `padding: [8, 4, 8, 4]` | Left, Top, Right, Bottom |

The padding values can also be provided through the `style` object using `padding`, `paddingX`, and `paddingY`.

Example:

```js
 ui.addLayoutBox({
     id: "uniform",
     padding: 12
 });

 ui.addLayoutBox({
     id: "horizontalVertical",
     padding: [16, 8]
 });

 ui.addLayoutBox({
     id: "individual",
     padding: [8, 4, 8, 4]
 });

 ui.addLayoutBox({
     id: "stylePadding",
     style: {
         padding: 12,
         paddingX: 16,
         paddingY: 8
     }
 });
```

</PropertyBox>

<PropertyBox name="display" type="string" defaultValue='"flex"'>

The `display` property controls how the layout box is rendered.

It can behave as a normal flex container, be hidden entirely, or display as a list item with a marker. Values are case-insensitive.

Valid values:

| Value         | Description                                                    |
| ------------- | -------------------------------------------------------------- |
| `"flex"`      | Displays the layout box as a standard flex container.          |
| `"none"`      | Hides the layout box. Equivalent to setting `show: false`.     |
| `"list-item"` | Displays the layout box with a list marker before its content. |

Example:

```js
 ui.addLayoutBox({
     id: "normal",
     display: "flex"
 });

 ui.addLayoutBox({
     id: "hidden",
     display: "none"
 });

 ui.addLayoutBox({
     id: "listItem",
     display: "list-item"
 });
```

</PropertyBox>

<PropertyBox name="listStyleType" type="string" defaultValue='"disc"'>

The `listStyleType` property specifies the marker style used when `display` is set to `"list-item"`.

Values are case-insensitive.

Valid values:

| Value           | Marker          |
| --------------- | --------------- |
| `"disc"`        | ● Filled circle |
| `"circle"`      | ○ Hollow circle |
| `"square"`      | ■ Filled square |
| `"decimal"`     | 1, 2, 3, ...    |
| `"lower-alpha"` | a, b, c, ...    |
| `"upper-alpha"` | A, B, C, ...    |
| `"lower-roman"` | i, ii, iii, ... |
| `"upper-roman"` | I, II, III, ... |
| `"none"`        | No marker       |

Example:

```js
 ui.addLayoutBox({
     id: "bullet",
     display: "list-item",
     listStyleType: "disc"
 });

 ui.addLayoutBox({
     id: "numbered",
     display: "list-item",
     listStyleType: "decimal"
 });

 ui.addLayoutBox({
     id: "roman",
     display: "list-item",
     listStyleType: "upper-roman"
 });
```

</PropertyBox>

<PropertyBox name="style" type="object">

The `style` property provides an alternative way to specify layout-related properties using a nested object.

Properties defined inside `style` are treated the same as their top-level equivalents. This can make layout definitions easier to organize, especially when several layout properties are used together.

The following properties are supported inside the `style` object:

* `direction`
* `flexDirection`
* `gap`
* `align` / `alignItems`
* `justify` / `justifyContent`
* `padding`
* `paddingX`
* `paddingY`
* `display`
* `listStyleType`

Example:

```js
 ui.addLayoutBox({
     id: "box",
     style: {
         flexDirection: "column",
         gap: 12,
         alignItems: "center",
         padding: 16
     },
     children: [
         {
             elementType: "text",
             id: "title",
             text: "Novadesk"
         }
     ]
 });
```

</PropertyBox>
