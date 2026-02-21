---
title: Inter-process communication APIs.
---

# Inter-Process Communication (IPC)
The global `ipc` object lets the Main script and UI scripts exchange messages safely while preserving the strict separation of concerns.

#### Table of Contents
[[toc]]

## Usage Overview

- **Main script** listens via `ipc.on(...)` and can send data to UI scripts.
- **UI scripts** send requests with `ipc.send(...)` and listen for responses from the Main script.
- Channels are simple string identifiers; any serializable payload (`string`, `number`, `object`, etc.) can be shared.

Always register listeners before sending events to avoid missing messages.

## `ipc.on(channel, callback)`

Register a callback for a specific channel.

- **`channel`** (`string`): Channel name.
- **`callback`** (`function`): Receives the payload (`data`) from the sender.

Listeners stay active until removed via `ipc.removeListener(channel, callback)` or until the script context is destroyed.

### Example

```javascript
ipc.on("get-message-from-widget", function () {
  console.log("Main script received request");
  ipc.send("send-message-to-widget", "Hello from main script");
});
```

## `ipc.send(channel, data)`

Send data to the other script context.

- **`channel`** (`string`): Channel name.
- **`data`** (`any`): Serializable payload (string, object, etc.).

Scripts receiving the message should already have registered an `ipc.on(...)` handler for that channel.

## IPC Example

:::tabs
== index.js (Main Script)
```javascript
ipc.on("get-message-from-widget", function () {
  console.log("Call received from widget");
  ipc.send("send-message-to-widget", "Hello from main script");
});
```
== welcome.js (UI Script)
```javascript
ipc.send("get-message-from-widget");

ipc.on("send-message-to-widget", function (data) {
  console.log("Message from main script:", data);
});
```
:::

::: tip
IPC keeps UI scripting responsive by delegating long-running logic, system calls, and native interactions to the Main script while letting the UI script focus on visuals.
:::
