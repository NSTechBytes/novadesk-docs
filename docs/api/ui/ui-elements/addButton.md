---
title: Button element options and example usage.
---

# Button Element
The Button element draws an image-based button and triggers actions on click.

Create one with `ui.addButton()` and the shared [General Elements Options](/api/ui/ui-elements/general-options/general-elements-options), [General Element Options](/api/ui/ui-elements/general-options/general-elements-options), and [General Element Options](/api/ui/ui-elements/general-options/general-elements-options).

```js
ui.addButton(options);
```

#### Table of Contents
[[toc]]

## Button Options

<PropertyBox name="buttonImageName" type="string" required>
  The `buttonImageName` property specifies the sprite sheet image that contains the three button states. Relative paths are resolved from the script directory, while HTTP and HTTPS URLs are loaded asynchronously.

  ```javascript
  buttonImageName: "./assets/button.png"
  buttonImageName: "./assets/close-btn.png"
  buttonImageName: "https://example.com/assets/btn.png"
  ```

  The button image can also be changed at runtime.

  ```javascript
  ui.setElementProperties("my-btn", {
      buttonImageName: "./assets/button-alt.png"
  });
  ```

</PropertyBox>

<PropertyBox name="buttonAction" type="function">
  The `buttonAction` property specifies a callback function that is invoked when the button is clicked. It is the primary callback for button click events.

  Internally, `buttonAction` is mapped directly to `onLeftMouseUp`, making both properties functionally identical. You can use either one interchangeably.

  ```javascript
  ui.addButton({
      id: "close-btn",
      buttonImageName: "./assets/close.png",

      // buttonAction and onLeftMouseUp are identical
      buttonAction: function () {
          console.log("Button clicked via buttonAction");
      },
  });
  ```

  The following definitions are equivalent:

  ```javascript
  buttonAction: function () {
      doSomething();
  }

  onLeftMouseUp: function () {
      doSomething();
  }
  ```

</PropertyBox>

