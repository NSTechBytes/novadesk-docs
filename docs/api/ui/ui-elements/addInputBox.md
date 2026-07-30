---
title: ui.addInputBox(options)
---

# `ui.addInputBox(options)`

The InputBox element is a fully interactive text input field rendered entirely with Direct2D/DirectWrite. It supports typing, cursor movement, text selection, clipboard operations, undo/redo, password masking, multi-line mode, and input type filtering.

```js
ui.addInputBox(options);
```

#### Table of Contents
[[toc]]

## Shared Options

- [General Element Options](/api/ui/ui-elements/general-options/general-elements-options) for layout, visibility, padding, grouping, and interaction.
- [General Tooltip Options](/api/ui/ui-elements/general-options/tooltip) for tooltip appearance and behavior.
- [General Mouse Options](/api/ui/ui-elements/general-options/general-mouse-options) for mouse callbacks.

## Options

<PropertyBox name="text" type="string" defaultValue='""'>

The `text` property specifies the current text content of the input box. It can be used to provide an initial value when the element is created or to replace the existing content programmatically.

When the `text` property is updated using `ui.setElementProperties()`, the current content is completely replaced. The caret is moved to the beginning of the text, any active selection is cleared, and the undo/redo history is reset.

The current value of the input box can be retrieved at any time using `ui.getElementProperty()`.

Example:

```js
 ui.addInputBox({
     id: "name",
     text: "John Doe"
 });

 // Read the current value
 var val = ui.getElementProperty("name", "text");

 // Replace the text programmatically
 ui.setElementProperties("name", {
     text: "Jane Smith"
 });
```

</PropertyBox>

<PropertyBox name="placeholder" type="string" defaultValue='""'>

The `placeholder` property specifies the text displayed when the input box is empty and does not have keyboard focus. It provides a hint about the expected input without becoming part of the field's actual value.

The placeholder text disappears automatically as soon as the user enters any text or the `text` property is no longer empty. It is rendered using `placeholderColor` instead of `fontColor`.

Example:

```js
 ui.addInputBox({
     id: "search",
     placeholder: "Type to search…",
     placeholderColor: "rgba(255,255,255,0.40)"
 });
```

</PropertyBox>

<PropertyBox name="fontFace" type="string" defaultValue='"Segoe UI"'>

The `fontFace` property specifies the font family used to render both the input text and the placeholder text. The value should be the name of an installed system font. To use a custom font, specify the font family here and provide the corresponding font file using the `fontPath` property.

If the specified font cannot be found, the system automatically falls back to an available font.

Example:

```js
 ui.addInputBox({
     id: "editor",
     fontFace: "Consolas"
 });

 ui.addInputBox({
     id: "search",
     fontFace: "Segoe UI"
 });

 ui.addInputBox({
     id: "custom",
     fontFace: "Inter",
     fontPath: "./fonts/Inter-Regular.ttf"
 });
```

</PropertyBox>

<PropertyBox name="fontSize" type="number" defaultValue="14">

The `fontSize` property specifies the size of the text displayed in the input box. The value is measured in typographic points and applies to both the input text and the placeholder text.

Larger values make the text easier to read, while smaller values allow more text to fit within the available space.

Example:

```js
 ui.addInputBox({
     id: "small",
     fontSize: 12
 });

 ui.addInputBox({
     id: "default",
     fontSize: 14
 });

 ui.addInputBox({
     id: "large",
     fontSize: 18
 });
```

</PropertyBox>

<PropertyBox name="fontColor / textColor" type="string" defaultValue='"rgb(240, 240, 240)"'>

The `fontColor` property defines the color or gradient used to render the text entered into the input box. The alias `textColor` is also supported. If both properties are specified, `fontColor` takes precedence.

It supports all color formats available in the Novadesk color system, including named CSS colors, hexadecimal colors (`#RRGGBB`, `#RRGGBBAA`), `rgb()`/`rgba()` notation, `linearGradient()`, and `radialGradient()`.

Example:

```js
 ui.addInputBox({
     id: "username",
     fontColor: "#ffffff"
 });

 ui.addInputBox({
     id: "email",
     fontColor: "rgba(220, 220, 220, 0.9)"
 });

 ui.addInputBox({
     id: "search",
     fontColor: "linearGradient(0, #00b4ff, #9966ff)"
 });
```

</PropertyBox>

<PropertyBox name="fontWeight" type="number" defaultValue="400">

The `fontWeight` property specifies the weight of the text displayed in the input box. It maps directly to DirectWrite font weight values and accepts values from `100` to `900`.

Higher values produce bolder text, while lower values produce lighter text. The property affects both the input text and the placeholder text.

Example:

```js
 ui.addInputBox({
     id: "light",
     fontWeight: 300
 });

 ui.addInputBox({
     id: "normal",
     fontWeight: 400
 });

 ui.addInputBox({
     id: "bold",
     fontWeight: 700
 });
```

</PropertyBox>

<PropertyBox name="italic" type="boolean" defaultValue="false">

The `italic` property controls whether the text is rendered using an italic font style.

When set to `true`, the input text and placeholder text are displayed in italics. When set to `false`, the text is rendered using the normal upright style.

Example:

```js
 ui.addInputBox({
     id: "notes",
     italic: true
 });
```

</PropertyBox>

<PropertyBox name="fontPath" type="string" defaultValue='""'>

The `fontPath` property specifies the path or URL of a custom font file to use with the input box. The value may be a relative or absolute file path, or an `http` or `https` URL.

When using a custom font, the `fontFace` property must match the font family name contained within the font file.

Remote fonts are downloaded asynchronously. Once the font has been cached, the input box is automatically redrawn using the new font.

Example:

```js
 ui.addInputBox({
     id: "custom",
     fontFace: "Inter",
     fontPath: "./fonts/Inter-Regular.ttf"
 });

 ui.addInputBox({
     id: "remote",
     fontFace: "Inter",
     fontPath: "https://example.com/fonts/Inter-Regular.ttf"
 });
```

</PropertyBox>

<PropertyBox name="align" type="string" defaultValue='"left"'>

The `align` property controls the horizontal alignment of text within the input box. Valid values are `"left"`, `"center"`, and `"right"`. The value is case-insensitive.

Example:

```js
 ui.addInputBox({
     id: "left",
     align: "left"
 });

 ui.addInputBox({
     id: "center",
     align: "center"
 });

 ui.addInputBox({
     id: "right",
     align: "right"
 });
```

</PropertyBox>

<PropertyBox name="placeholderColor" type="string" defaultValue='"rgb(150, 150, 150)"'>

The `placeholderColor` property defines the color or gradient used to render the placeholder text when the input box is empty.

It supports all color formats available in the Novadesk color system, including named CSS colors, hexadecimal colors (`#RRGGBB`, `#RRGGBBAA`), `rgb()`/`rgba()` notation, `linearGradient()`, and `radialGradient()`.

Example:

```js
 ui.addInputBox({
     id: "search",
     placeholder: "Type to search...",
     placeholderColor: "rgba(255,255,255,0.35)"
 });

 ui.addInputBox({
     id: "name",
     placeholderColor: "rgba(150,150,150,1)"
 });
```

</PropertyBox>

<PropertyBox name="caretColor" type="string" defaultValue='"rgb(255, 255, 255)"'>

The `caretColor` property defines the color or gradient of the blinking text cursor displayed while the input box has keyboard focus.

The caret blinks automatically at approximately 530 ms intervals and supports all color formats available in the Novadesk color system, including named CSS colors, hexadecimal colors (`#RRGGBB`, `#RRGGBBAA`), `rgb()`/`rgba()` notation, `linearGradient()`, and `radialGradient()`.

Example:

```js
 ui.addInputBox({
     id: "editor",
     caretColor: "#00b4ff"
 });
```

</PropertyBox>

<PropertyBox name="selectionColor" type="string" defaultValue='"rgba(135, 206, 235, 0.5)"'>

The `selectionColor` property defines the background color or gradient used to highlight selected text. The highlight is rendered behind the text so the selected characters remain visible.

It supports all color formats available in the Novadesk color system.

Example:

```js
 ui.addInputBox({
     id: "editor",
     selectionColor: "rgba(0, 120, 215, 0.45)"
 });

 ui.addInputBox({
     id: "notes",
     selectionColor: "rgba(153, 102, 255, 0.50)"
 });
```

</PropertyBox>

<PropertyBox name="fillColor" type="string" defaultValue='"rgb(30, 30, 34)"'>

The `fillColor` property defines the background color or gradient of the input box.

Setting the value to `"transparent"` or `"none"` disables the background fill, allowing the widget background to show through. When `borderRadius` is greater than `0`, the background is clipped to the rounded corners.

It supports all color formats available in the Novadesk color system.

Example:

```js
 ui.addInputBox({
     id: "default",
     fillColor: "rgb(30, 30, 34)"
 });

 ui.addInputBox({
     id: "glass",
     fillColor: "rgba(255,255,255,0.10)"
 });

 ui.addInputBox({
     id: "gradient",
     fillColor: "linearGradient(90, rgba(30,30,40,1), rgba(20,20,30,1))"
 });

 ui.addInputBox({
     id: "transparent",
     fillColor: "transparent"
 });
```

</PropertyBox>

<PropertyBox name="borderWidth" type="number" defaultValue="0">

The `borderWidth` property specifies the thickness of the border drawn around the input box. The value is measured in pixels.

A value of `0` disables the border completely.

Example:

```js
 ui.addInputBox({
     id: "thin",
     borderWidth: 1
 });

 ui.addInputBox({
     id: "standard",
     borderWidth: 2
 });

 ui.addInputBox({
     id: "thick",
     borderWidth: 3
 });
```

</PropertyBox>

<PropertyBox name="borderRadius" type="number" defaultValue="0">

The `borderRadius` property specifies the corner radius, in pixels, applied to both the background fill and the border.

Larger values produce more rounded corners. Setting the radius to approximately half the element's height creates a pill-shaped input box.

Example:

```js
 ui.addInputBox({
     id: "square",
     borderRadius: 0
 });

 ui.addInputBox({
     id: "rounded",
     borderRadius: 8
 });

 ui.addInputBox({
     id: "pill",
     borderRadius: 20
 });
```

</PropertyBox>

<PropertyBox name="borderColor" type="string" defaultValue='"rgb(0, 0, 0)"'>

The `borderColor` property defines the color or gradient of the border when the input box is not focused. It is visible only when `borderWidth` is greater than `0`.

It supports all color formats available in the Novadesk color system.

Example:

```js
 ui.addInputBox({
     id: "default",
     borderWidth: 1,
     borderColor: "rgba(255,255,255,0.20)"
 });

 ui.addInputBox({
     id: "gradient",
     borderWidth: 2,
     borderColor: "linearGradient(0, #9966ff, #00b4ff)"
 });
```

</PropertyBox>

<PropertyBox name="borderFocusColor" type="string" defaultValue="Uses borderColor">

The `borderFocusColor` property defines the color or gradient of the border while the input box has keyboard focus.

If this property is not specified, the control uses `borderColor` when focused. Setting the value to `"transparent"` or `"none"` removes the focus border.

It supports all color formats available in the Novadesk color system.

Example:

```js
 ui.addInputBox({
     id: "search",
     borderFocusColor: "#00b4ff"
 });

 ui.addInputBox({
     id: "disabledFocus",
     borderFocusColor: "none"
 });
```

</PropertyBox>

<PropertyBox name="password" type="boolean" defaultValue="false">

The `password` property controls whether the input box displays the entered text as password characters.

When set to `true`, every typed character is displayed as a bullet (`•`) while the actual text remains unchanged internally. The original value can still be retrieved using `ui.getElementProperty(id, "text")`.

When set to `false`, the input is displayed as plain text.

Example:

```js
 ui.addInputBox({
     id: "password",
     password: true
 });

 var password = ui.getElementProperty("password", "text");
```

</PropertyBox>

<PropertyBox name="maxLength" type="number" defaultValue="0">

The `maxLength` property specifies the maximum number of characters the input box accepts.

A value of `0` removes the limit. When the maximum length is reached, additional keyboard input is ignored, and pasted text is automatically truncated to fit within the allowed length.

Example:

```js
 ui.addInputBox({
     id: "unlimited",
     maxLength: 0
 });

 ui.addInputBox({
     id: "username",
     maxLength: 16
 });

 ui.addInputBox({
     id: "pin",
     maxLength: 8
 });
```

</PropertyBox>

<PropertyBox name="multiline" type="boolean" defaultValue="false">

The `multiline` property controls whether the input box accepts multiple lines of text.

When set to `true`, pressing the <kbd>Enter</kbd> key inserts a new line instead of triggering the `onEnter` event. Text automatically wraps to fit the element's width, and vertical scrolling is enabled when the content exceeds the element's height.

When set to `false` (default), the input box behaves as a single-line field. Pressing <kbd>Enter</kbd> triggers the `onEnter` event, and horizontal scrolling is used when the text exceeds the available width.

In multiline mode, the default text alignment changes from `"left-center"` to `"left-top"` so that text begins at the top of the input box.

Example:

```js
 ui.addInputBox({
     id: "username",
     multiline: false
 });

 ui.addInputBox({
     id: "notes",
     multiline: true
 });
```

</PropertyBox>

<PropertyBox name="inputType" type="string" defaultValue='"any"'>

The `inputType` property restricts which characters the user can type into the input box. The filter is applied only to keyboard input—text assigned programmatically through the `text` property is not validated.

When the user attempts to enter a character that is not allowed, the character is rejected and the `onInvalidInput` event is triggered.

Valid values:

| Value            | Aliases                 | Allowed Characters                                                |
| ---------------- | ----------------------- | ----------------------------------------------------------------- |
| `"any"`          | —                       | All characters (default)                                          |
| `"integer"`      | `"int"`                 | Digits (`0–9`) and an optional leading `-`                        |
| `"float"`        | `"number"`, `"decimal"` | Digits, an optional leading `-`, and a single decimal point (`.`) |
| `"letters"`      | `"alpha"`               | Unicode alphabetic characters only                                |
| `"alphanumeric"` | `"alnum"`               | Letters and digits                                                |
| `"hex"`          | `"hexadecimal"`         | `0–9`, `A–F`, `a–f`                                               |
| `"email"`        | —                       | Letters, digits, `@`, `.`, `-`, `_`, and `+`                      |
| `"custom"`       | —                       | Characters specified by `allowedChars`                            |

The value is case-insensitive, so `"INTEGER"`, `"Integer"`, and `"integer"` are treated the same.

Example:

```js
 ui.addInputBox({
     id: "age",
     inputType: "integer"
 });

 ui.addInputBox({
     id: "price",
     inputType: "float"
 });

 ui.addInputBox({
     id: "email",
     inputType: "email"
 });

 ui.addInputBox({
     id: "answer",
     inputType: "custom",
     allowedChars: "YyNn"
 });
```

</PropertyBox>

<PropertyBox name="allowedChars" type="string" defaultValue='""'>

The `allowedChars` property specifies the exact set of characters that may be entered when `inputType` is set to `"custom"`.

Each character in the string is treated as a valid input character. If `allowedChars` is empty while `inputType` is `"custom"`, all keyboard input is blocked.

This property is ignored unless `inputType` is `"custom"`.

Example:

```js
 ui.addInputBox({
     id: "calculator",
     inputType: "custom",
     allowedChars: "0123456789+-*/()."
 });

 ui.addInputBox({
     id: "uppercase",
     inputType: "custom",
     allowedChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 });
```

</PropertyBox>

## Event Callbacks

<CallbackBox name="onChange" signature="onChange(): void" :optional="true">

Fired whenever the text in the input box changes. This includes user typing, deleting text, pasting content, or programmatic updates made through `ui.setElementProperties()`. The alias `onTextChange` is also supported.

```js
ui.addInputBox({
  id: "my-input",

  onChange: function () {
    var val = ui.getElementProperty("my-input", "text");
    console.log("Changed to:", val);
  }
});
```

</CallbackBox>

<CallbackBox name="onEnter" signature="onEnter(): void" :optional="true">

Fired when the user presses the <kbd>Enter</kbd> key in a single-line input box. In multiline mode, pressing <kbd>Enter</kbd> inserts a new line instead, so this callback is not invoked.

```js
ui.addInputBox({
  id: "search-box",

  onEnter: function () {
    var query = ui.getElementProperty("search-box", "text");
    doSearch(query);
  }
});
```

</CallbackBox>

<CallbackBox name="onFocus" signature="onFocus(): void" :optional="true">

Fired once when the input box gains keyboard focus. At this point the caret becomes visible, starts blinking, and the user can begin typing.

```js
ui.addInputBox({
  id: "search-box",

  onFocus: function () {
    ui.setElementProperties("search-box", {
      borderColor: "#00b4ff"
    });
  }
});
```

</CallbackBox>

<CallbackBox name="onBlur" signature="onBlur(): void" :optional="true">

Fired once when the input box loses keyboard focus, such as when the user clicks elsewhere or tabs to another control.

```js
ui.addInputBox({
  id: "search-box",

  onBlur: function () {
    var val = ui.getElementProperty("search-box", "text");
    validateInput(val);
  }
});
```

</CallbackBox>

<CallbackBox name="onInvalidInput" signature="onInvalidInput(): void" :optional="true">

Fired when the user attempts to enter a character that is rejected by the current `inputType` filter. This callback is useful for displaying validation feedback such as changing the border color, playing a sound, or showing an error message.

```js
ui.addInputBox({
  id: "num-input",
  inputType: "integer",

  onInvalidInput: function () {
    ui.setElementProperties("num-input", {
      borderColor: "#ff3333"
    });

    setTimeout(function () {
      ui.setElementProperties("num-input", {
        borderColor: "#444"
      });
    }, 300);
  }
});
```

</CallbackBox>

## Keyboard Shortcuts (Built-in)

The InputBox handles these keyboard operations automatically:

| **Key**                            | **Action**                                                |
| ---------------------------------- | --------------------------------------------------------- |
| `←` / `→`                          | Move caret left/right                                     |
| `Home` / `End`                     | Jump to start/end of line                                 |
| `↑` / `↓`                          | Move up/down a line (multiline only)                      |
| `Shift + ←` / `→` / `Home` / `End` | Extend selection                                          |
| `Backspace`                        | Delete character before caret                             |
| `Delete`                           | Delete character after caret                              |
| `Ctrl + A`                         | Select all text                                           |
| `Ctrl + C`                         | Copy selection to clipboard                               |
| `Ctrl + X`                         | Cut selection to clipboard                                |
| `Ctrl + V`                         | Paste from clipboard                                      |
| `Ctrl + Z`                         | Undo                                                      |
| `Ctrl + Y` / `Ctrl + Shift + Z`    | Redo                                                      |
| `Enter`                            | Fire `onEnter` (single-line) / Insert newline (multiline) |
| `Tab`                              | Insert 4 spaces                                           |
