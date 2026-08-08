---
title: Text UI element options, styling, and examples.
---

# Text Element
The Text element renders styled text via the UI script `win` object using the shared element options detailed in [General Elements Options](/api/ui/ui-elements/general-options/general-elements-options) and [General Element Options](/api/ui/ui-elements/general-options/general-elements-options).

Use `ui.addText()` inside the UI script to create and configure a text element.

```js
ui.addText(options);
```

#### Table of Contents
[[toc]]

## Shared Options
- [General Element Options](/api/ui/ui-elements/general-options/general-elements-options) for layout, visibility, and interaction.
- [General Element Options](/api/ui/ui-elements/general-options/general-elements-options) for tooltip appearance and behavior.
- [General Element Options](/api/ui/ui-elements/general-options/general-elements-options) for mouse interaction and cursor settings.

## Text Element Options

<PropertyBox name="text" type="string" defaultValue='""'>

The `text` property specifies the content displayed by the text element.

It supports plain text, `\n` line breaks, and inline style markup for applying different styles to individual portions of the text. See the **Inline Styles** section for the complete list of supported tags.

The text can be changed at runtime using `ui.setElementProperties()`. Updating this property immediately redraws the element with the new content.

Example:

```js
 ui.addText({
     id: "label",
     text: "Hello, Novadesk!"
 });

 ui.addText({
     id: "status",
     text: "CPU: 45.2%"
 });

 ui.addText({
     id: "multiline",
     text: "Line 1\nLine 2\nLine 3"
 });

 ui.setElementProperties("label", {
     text: "Updated: " + value
 });
```

</PropertyBox>

<PropertyBox name="fontFace" type="string" defaultValue='"Arial"'>

The `fontFace` property specifies the font family used to render the text.

The value must be the name of an installed system font, or the family name of a custom font loaded using the `fontPath` property. If `fontPath` is provided, `fontFace` should match the font family contained within that font file.

Example:

```js
 ui.addText({
     id: "systemFont",
     fontFace: "Arial"
 });

 ui.addText({
     id: "uiFont",
     fontFace: "Segoe UI"
 });

 ui.addText({
     id: "monoFont",
     fontFace: "Consolas"
 });

 ui.addText({
     id: "customFont",
     fontFace: "Inter"
 });
```

</PropertyBox>

<PropertyBox name="fontSize" type="number" defaultValue="12">

The `fontSize` property specifies the size of the text in typographic points.

Larger values produce larger text, while smaller values produce more compact text. This property affects all text in the element except portions that override the size using inline style markup.

Example:

```js
 ui.addText({
     id: "body",
     fontSize: 12
 });

 ui.addText({
     id: "subheading",
     fontSize: 16
 });

 ui.addText({
     id: "heading",
     fontSize: 24
 });

 ui.addText({
     id: "display",
     fontSize: 48
 });
```

</PropertyBox>

<PropertyBox name="fontColor" type="string" defaultValue='"rgb(0, 0, 0)"'>

The `fontColor` property specifies the color or gradient used to render the text.

It supports all Novadesk color formats, including named CSS colors, hexadecimal colors, `rgb()`, `rgba()`, `linearGradient()`, and `radialGradient()`.

When a gradient is specified, it is automatically applied across the entire text layout bounds rather than each individual character.

Example:

```js
 ui.addText({
     id: "solid",
     fontColor: "#ffffff"
 });

 ui.addText({
     id: "transparent",
     fontColor: "rgba(255,255,255,0.85)"
 });

 ui.addText({
     id: "linear",
     fontColor: "linearGradient(0, #ff0080, #9966ff, #00b4ff)"
 });

 ui.addText({
     id: "radial",
     fontColor: "radialGradient(circle, #ffaa00, #ff3333)"
 });
```

</PropertyBox>

<PropertyBox name="fontWeight" type="number | string" defaultValue="400">

The `fontWeight` property specifies the thickness of the rendered text.

It accepts either a numeric weight (`100`–`900`) or one of several named weight strings. Named values are case-insensitive and are automatically converted to their corresponding numeric weight.

Valid named values:

| Value                           | Numeric Weight |
| ------------------------------- | -------------: |
| `"thin"`                        |          `100` |
| `"extralight"` / `"ultralight"` |          `200` |
| `"light"`                       |          `300` |
| `"normal"` / `"regular"`        |          `400` |
| `"medium"`                      |          `500` |
| `"semibold"` / `"demibold"`     |          `600` |
| `"bold"`                        |          `700` |
| `"extrabold"` / `"ultrabold"`   |          `800` |
| `"black"` / `"heavy"`           |          `900` |

Example:

```js
 ui.addText({
     id: "regular",
     fontWeight: 400
 });

 ui.addText({
     id: "bold",
     fontWeight: 700
 });

 ui.addText({
     id: "namedBold",
     fontWeight: "bold"
 });

 ui.addText({
     id: "semiBold",
     fontWeight: "semibold"
 });
```

</PropertyBox>

<PropertyBox name="italic" type="boolean" defaultValue="false">

The `italic` property controls whether the text is rendered in italic style.

When set to `true`, the text is displayed using the italic variant of the selected font, if available. This property is equivalent to setting `fontStyle` to `"italic"`.

Example:

```js
 ui.addText({
     id: "italicText",
     italic: true
 });

 ui.addText({
     id: "italicAlias",
     fontStyle: "italic"
 });
```

</PropertyBox>

<PropertyBox name="fontPath" type="string" defaultValue='""'>

The `fontPath` property specifies the location of a custom font file used to render the text.

The value can be a path to a local font file (`.ttf` or `.otf`) relative to the script directory, or an HTTP/HTTPS URL. When using a custom font, the `fontFace` property must match the font family name embedded in the font file.

Fonts loaded from URLs are downloaded asynchronously. Once the font has been cached, the text element automatically re-renders using the new font.

Example:

```js
 ui.addText({
     id: "customFont",
     fontPath: "./fonts/Inter-Regular.ttf",
     fontFace: "Inter"
 });

 ui.addText({
     id: "webFont",
     fontPath: "https://example.com/fonts/Inter-Regular.ttf",
     fontFace: "Inter"
 });
```

</PropertyBox>

<PropertyBox name="textAlign" type="string" defaultValue='"left"'>

The `textAlign` property controls the horizontal and vertical alignment of text within the element's bounding box.

It accepts either the full `"horizontal-vertical"` format or one of several shorthand aliases. The `align` property is also accepted as an alias. All values are case-insensitive.

Valid values:

| Value                          | Horizontal | Vertical |
| ------------------------------ | ---------- | -------- |
| `"left"` / `"left-top"`        | Left       | Top      |
| `"center"` / `"center-top"`    | Center     | Top      |
| `"right"` / `"right-top"`      | Right      | Top      |
| `"left-center"`                | Left       | Center   |
| `"center-center"` / `"middle"` | Center     | Center   |
| `"right-center"`               | Right      | Center   |
| `"left-bottom"`                | Left       | Bottom   |
| `"center-bottom"`              | Center     | Bottom   |
| `"right-bottom"`               | Right      | Bottom   |

Example:

```js
 ui.addText({
     id: "topLeft",
     textAlign: "left"
 });

 ui.addText({
     id: "topCenter",
     textAlign: "center"
 });

 ui.addText({
     id: "centered",
     textAlign: "center-center"
 });

 ui.addText({
     id: "bottomRight",
     textAlign: "right-bottom"
 });
```

</PropertyBox>

<PropertyBox name="textClip" type="string" defaultValue='"none"'>

The `textClip` property controls how text is rendered when it exceeds the element's `width` or `height`.

It supports disabling clipping, clipping at the element boundary, displaying an ellipsis (`…`) for truncated text, or wrapping text onto multiple lines. Values are case-insensitive.

Valid values:

| Value             | Behavior                                                                    |
| ----------------- | --------------------------------------------------------------------------- |
| `"none"`          | Text is rendered normally and may extend beyond the element bounds.         |
| `"clip"` / `"on"` | Text is clipped at the element boundary without modification.               |
| `"ellipsis"`      | Text is clipped and an ellipsis (`…`) is displayed at the truncation point. |
| `"wrap"`          | Text wraps onto additional lines within the element width.                  |

Example:

```js
 ui.addText({
     id: "overflow",
     textClip: "none"
 });

 ui.addText({
     id: "clipped",
     textClip: "clip"
 });

 ui.addText({
     id: "ellipsis",
     textClip: "ellipsis"
 });

 ui.addText({
     id: "wrapped",
     textClip: "wrap"
 });
```

</PropertyBox>

<PropertyBox name="letterSpacing" type="number" defaultValue="0.0">

The `letterSpacing` property specifies the additional horizontal spacing between adjacent characters.

The value is measured in device-independent pixels (DIPs). Positive values increase the spacing between characters, while negative values reduce it, allowing for tighter text layouts.

Example:

```js
 ui.addText({
     id: "normal",
     letterSpacing: 0
 });

 ui.addText({
     id: "wide",
     letterSpacing: 2
 });

 ui.addText({
     id: "headline",
     letterSpacing: 8
 });

 ui.addText({
     id: "tight",
     letterSpacing: -1
 });
```

</PropertyBox>

<PropertyBox name="underLine" type="boolean" defaultValue="false">

The `underLine` property controls whether an underline is drawn beneath the text.

When set to `true`, the underline spans the rendered text. It affects the entire text unless overridden by inline style markup.

Example:

```js
 ui.addText({
     id: "link",
     underLine: true
 });

 ui.addText({
     id: "plain",
     underLine: false
 });
```

</PropertyBox>

<PropertyBox name="strikeThrough" type="boolean" defaultValue="false">

The `strikeThrough` property controls whether a horizontal line is drawn through the middle of the text.

When set to `true`, the strikethrough spans the rendered text. It affects the entire text unless overridden by inline style markup.

Example:

```js
 ui.addText({
     id: "completed",
     strikeThrough: true
 });

 ui.addText({
     id: "normal",
     strikeThrough: false
 });
```

</PropertyBox>

<PropertyBox name="case" type="string" defaultValue='"normal"'>

The `case` property controls how the displayed text is transformed without modifying the underlying `text` value.

The transformation affects rendering only. Reading the `text` property always returns the original, unmodified string. Values are case-insensitive.

Valid values:

| Value          | Effect                                         |
| -------------- | ---------------------------------------------- |
| `"normal"`     | Displays the text exactly as provided.         |
| `"upper"`      | Converts all characters to uppercase.          |
| `"lower"`      | Converts all characters to lowercase.          |
| `"capitalize"` | Capitalizes the first letter of each word.     |
| `"sentence"`   | Capitalizes the first letter of each sentence. |

Example:

```js
 ui.addText({
     id: "upper",
     case: "upper"
 });

 ui.addText({
     id: "capitalize",
     case: "capitalize"
 });

 ui.addText({
     id: "sentence",
     case: "sentence"
 });
```

</PropertyBox>

<PropertyBox name="fontShadow" type="object | Array<object>" defaultValue="none">

The `fontShadow` property adds one or more drop shadows behind the rendered text.

A single shadow can be specified as an object, or multiple shadows can be provided as an array. Shadows are rendered in the order they appear, allowing layered glow and outline effects.

Each shadow object supports the following properties:

| Property | Type     |        Default | Description                  |
| -------- | -------- | -------------: | ---------------------------- |
| `x`      | `number` |            `0` | Horizontal offset in pixels. |
| `y`      | `number` |            `0` | Vertical offset in pixels.   |
| `blur`   | `number` |            `0` | Blur radius in pixels.       |
| `color`  | `string` | `"rgb(0,0,0)"` | Shadow color.                |

Example:

```js
 ui.addText({
     id: "singleShadow",
     fontShadow: {
         x: 0,
         y: 2,
         blur: 4,
         color: "rgba(0,0,0,0.50)"
     }
 });

 ui.addText({
     id: "glow",
     fontShadow: [
         {
             x: 0,
             y: 1,
             blur: 2,
             color: "rgba(0,0,0,0.60)"
         },
         {
             x: 0,
             y: 0,
             blur: 10,
             color: "rgba(0,180,255,0.40)"
         }
     ]
 });
```

</PropertyBox>

<PropertyBox name="textSelection" type="boolean" defaultValue="false">

The `textSelection` property controls whether the user can select text within the element.

When set to `true`, the user can click and drag to select text, copy the selected text to the clipboard using standard keyboard shortcuts, and see the selection highlighted using `selectionBackgroundColor`. When `false`, the text behaves as a non-selectable label.

Example:

```js
 ui.addText({
     id: "selectable",
     textSelection: true
 });

 ui.addText({
     id: "label",
     textSelection: false
 });
```

</PropertyBox>

<PropertyBox name="selectionBackgroundColor" type="string" defaultValue='"rgba(51, 144, 255, 0.47)"'>

The `selectionBackgroundColor` property specifies the background color used to highlight selected text.

It is applied only when `textSelection` is enabled and the user has an active text selection. This property accepts standard color values but does not support gradients.

Example:

```js
 ui.addText({
     id: "windowsStyle",
     textSelection: true,
     selectionBackgroundColor: "rgba(0, 120, 215, 0.40)"
 });

 ui.addText({
     id: "greenHighlight",
     textSelection: true,
     selectionBackgroundColor: "rgba(0, 255, 136, 0.35)"
 });
```

</PropertyBox>

<PropertyBox name="selectionTextColor" type="string" defaultValue='"rgb(255, 255, 255)"'>

The `selectionTextColor` property specifies the color used to render selected text.

It is applied only when `textSelection` is enabled and text is actively selected. If this property is not specified, the selected text continues to use its original `fontColor`.

Example:

```js
 ui.addText({
     id: "whiteSelection",
     textSelection: true,
     selectionTextColor: "#ffffff"
 });

 ui.addText({
     id: "blackSelection",
     textSelection: true,
     selectionTextColor: "#000000"
 });
```

</PropertyBox>


## Inline Styling

Text supports HTML-like tags inside the `text` property.

### Supported tags

- `<b>`: bold
- `<i>`: italic
- `<u>`: underlined
- `<s>`: strikethrough
- `<color=value>`: color or gradient (e.g., `<color=#f00>Red</color>`)
- `<size=value>`: font size in pixels
- `<font=name>`: font face
- `<case=value>`: casing (`upper`, `lower`, `capitalize`, `sentence`, `normal`)

### Usage example

```javascript
ui.addText({
    text: "This is <b>Bold</b> and <color=#00ff00>Green</color> text.",
    fontSize: 18
});
```

## Example

:::tabs
== index.js (Main Script)
```javascript
import { widgetWindow } from "novadesk";

var sysWidget = new widgetWindow({
    id: "sysWidget",
    width: 450,
    height: 180,
    backgroundColor: "rgba(30, 30, 40, 0.9)",
    zPos: "ontop",
    draggable: true,
    script: "script.ui.js"
});
```
== script.ui.js (UI Script)
```javascript
ui.addText({
    id: "simpleText",
    text: "SimpleText",
    x: 10,
    y: 20,
    fontSize: 20,
    fontColor: "rgb(255, 255, 255)",
    fontFace: "consolas",
    fontWeight: "bold"
});
ui.addText({
    id: "SolidColorText",
    text: "Solid Color",
    x: 135,
    y: 15,
    width: 140,
    height: 30,
    fontSize: 20,
    fontColor: "rgb(255, 255, 255)",
    solidColor: "rgb(27, 213, 67)",
    textAlign: "centercenter"
});
ui.addText({
    id: "RoundSolidColor",
    text: "Round",
    x: 300,
    y: 15,
    width: 120,
    height: 30,
    fontSize: 20,
    fontColor: "rgb(255, 255, 255)",
    solidColor: "rgb(27, 117, 213)",
    solidColorRadius: 8,
    textAlign: "centercenter"
});
ui.addText({
    id: "RotateText",
    text: "Rotate 45",
    x: 10,
    y: 100,
    fontSize: 20,
    fontColor: "rgb(255, 255, 255)",
    rotate: 45,
    fontStyle: "italic"
});
ui.addText({
    id: "SelectableText",
    text: "Drag over this text, then press Ctrl+C.",
    x: 10,
    y: 140,
    width: 360,
    height: 30,
    fontSize: 14,
    fontColor: "#ffffff",
    textSelection: true,
    selectionBackgroundColor: "rgba(51, 144, 255, 0.45)",
    selectionTextColor: "#ffffff"
});
```
:::

## Preview

![Widget Preview](https://github.com/Official-Novadesk/novadesk-assets/blob/master/docs/textPreview.png?raw=true)

