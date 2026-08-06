---
title: Inter-Process Communication (IPC) between Main and UI scripts.
---

# IPC

Novadesk widgets have two script layers. The **Main script** (`index.js`) runs widget logic and data, while each **UI script** (`ui.js`) handles rendering. The IPC API lets these two layers exchange messages over named channels — similar to Electron's `ipcMain` / `ipcRenderer`.

::: info Availability
| Global | Available in |
|---|---|
| `ipcMain` | Main script only |
| `ipcRenderer` | UI script only |

Both are injected as globals — no import needed.
:::

#### Table of Contents
[[toc]]

---

## IPC Message Object

Every `on` listener and `handle` handler receives an **event object** as its first argument:

| Property | Type | Description |
|---|---|---|
| `type` | `string` | The channel name (same as the channel argument). |
| `payload` | `any` | The data that was sent. |
| `from` | `string` | Origin — `"main"` or `"ui"`. |
| `to` | `string` | Destination — `"main"` or `"ui"`. |
| `channel` | `string` | The channel the message was dispatched on. |

---

## `ipcMain`

Available in the **Main script**. Used to receive messages from UI scripts and send messages back.

<MethodBox
  name="ipcMain.on(channel, listener)"
  badge="ipcMain"
  badgeType="core"
  :parameters="[
    { name: 'channel', type: 'string', description: 'Non-empty channel name to listen on.' },
    { name: 'listener', type: 'function', description: 'Callback invoked as listener(event, payload) when a message arrives on this channel.' }
  ]"
>

Registers a listener for messages sent from a UI script via `ipcRenderer.send()`. Multiple listeners on the same channel are all called.

<template #example>

```javascript
ipcMain.on("ui-ready", (event, payload) => {
  console.log("UI is ready:", JSON.stringify(payload));
});
```

</template>
</MethodBox>

---

<MethodBox
  name="ipcMain.handle(channel, handler)"
  badge="ipcMain"
  badgeType="core"
  :parameters="[
    { name: 'channel', type: 'string', description: 'Non-empty channel name.' },
    { name: 'handler', type: 'function', description: 'Callback invoked as handler(event, payload). Its return value is sent back to the invoking UI script.' }
  ]"
>

Registers a request handler for `ipcRenderer.invoke()` calls. Only **one handler per channel** is active at a time — registering again replaces the previous handler.

::: tip
Use `handle` + `invoke` when the UI needs data from the Main script synchronously. Use `on` + `send` for fire-and-forget messages.
:::

<template #example>

```javascript
ipcMain.handle("get-config", (event, payload) => {
  return { theme: "dark", version: 2 };
});
```

</template>
</MethodBox>

---

<MethodBox
  name="ipcMain.send(channel, payload)"
  badge="ipcMain"
  badgeType="core"
  :parameters="[
    { name: 'channel', type: 'string', description: 'Channel name to send on.' },
    { name: 'payload', type: 'any', optional: true, description: 'Data to send. Can be any serializable value.' }
  ]"
>

Sends a message from the Main script to all UI listeners registered on the given channel via `ipcRenderer.on()`.

<template #example>

```javascript
ipcMain.send("main-ready", { ts: Date.now(), note: "hello from main" });
```

</template>
</MethodBox>

---

## `ipcRenderer`

Available in **UI scripts**. Used to send messages to the Main script and receive responses.

<MethodBox
  name="ipcRenderer.on(channel, listener)"
  badge="ipcRenderer"
  badgeType="ui"
  :parameters="[
    { name: 'channel', type: 'string', description: 'Non-empty channel name to listen on.' },
    { name: 'listener', type: 'function', description: 'Callback invoked as listener(event, payload) when a message arrives on this channel.' }
  ]"
>

Registers a listener for messages sent from the Main script via `ipcMain.send()`. Multiple listeners on the same channel are all called.

<template #example>

```javascript
ipcRenderer.on("main-ready", (event, payload) => {
  console.log("Main says:", JSON.stringify(payload));
  ui.setElementProperties("status", { text: "main-ready" });
});
```

</template>
</MethodBox>

---

<MethodBox
  name="ipcRenderer.send(channel, payload)"
  badge="ipcRenderer"
  badgeType="ui"
  :parameters="[
    { name: 'channel', type: 'string', description: 'Channel name to send on.' },
    { name: 'payload', type: 'any', optional: true, description: 'Data to send. Can be any serializable value.' }
  ]"
>

Sends a message from the UI script to all Main listeners registered on the given channel via `ipcMain.on()`.

<template #example>

```javascript
ipcRenderer.send("ui-ready", { ts: Date.now() });
```

</template>
</MethodBox>

---

<MethodBox
  name="ipcRenderer.invoke(channel, payload)"
  badge="ipcRenderer"
  badgeType="ui"
  returns="any"
  :parameters="[
    { name: 'channel', type: 'string', description: 'Non-empty channel name. A handler must be registered on ipcMain for this channel.' },
    { name: 'payload', type: 'any', optional: true, description: 'Data to send to the handler.' }
  ]"
>
<template #returns>The value returned by the matching <code>ipcMain.handle()</code> handler.</template>

Sends a request to the Main script and **returns the handler's return value synchronously**. The Main script must have a matching `ipcMain.handle()` registered — otherwise a `ReferenceError` is thrown.

::: warning
`invoke` is synchronous. If no handler is registered for the channel, a `ReferenceError` is thrown at the call site.
:::

<template #example>

:::tabs
== index.js
```javascript
ipcMain.handle("get-config", (event, payload) => {
  return { theme: "dark", version: 1 };
});
```
== ui.js
```javascript
const config = ipcRenderer.invoke("get-config");
console.log(config.theme); // "dark"
```
:::

</template>
</MethodBox>

---

## Full Example

A complete widget that demonstrates all IPC patterns — `on`, `handle`, `send`, and `invoke` — working together.

:::tabs
== index.js
```javascript
import { widgetWindow } from 'novadesk';

// Listen for messages from the UI
ipcMain.on("ui-ready", (event, payload) => {
  console.log("[main] UI ready:", JSON.stringify(payload));
});

ipcMain.on("ui-ping", (event, payload) => {
  console.log("[main] ping from UI");
  ipcMain.send("main-pong", { ts: Date.now(), echo: payload });
});

// Handle synchronous requests from the UI
ipcMain.handle("get-config", () => {
  return { theme: "dark", version: 1 };
});

const win = new widgetWindow({
  id: "demo",
  width: 400,
  height: 400,
  script: "ui.js",
  backgroundColor: "rgb(10,10,10)"
});

// Broadcast to any listening UI scripts
ipcMain.send("main-ready", { ts: Date.now() });
```
== ui.js
```javascript
ui.beginUpdate();

ui.addText({
  id: "status",
  text: "waiting...",
  x: 16, y: 14,
  width: 260, height: 28,
  fontSize: 16,
  fontColor: "rgb(230,230,230)"
});

ui.endUpdate();

// Listen for messages from the Main script
ipcRenderer.on("main-ready", (event, payload) => {
  ui.setElementProperties("status", { text: "main-ready" });
});

ipcRenderer.on("main-pong", (event, payload) => {
  console.log("[ui] pong:", JSON.stringify(payload));
});

// Synchronous request to Main
const config = ipcRenderer.invoke("get-config");
console.log("[ui] config:", JSON.stringify(config));

// Notify Main that the UI is ready
ipcRenderer.send("ui-ready", { ts: Date.now() });
```
:::
