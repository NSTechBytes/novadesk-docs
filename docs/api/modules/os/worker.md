---
title: os Worker API (Windows)
---

# os Worker (Windows)

`os.Worker` is available when QuickJS is built with worker support (`USE_WORKER`).

Import:

```javascript
import * as os from "os";
```

#### Table of Contents
[[toc]]

## `new os.Worker(modulePath)`

Creates a worker thread and loads a module script.

### Parameters

- **`modulePath`** (`string`): Path to worker module.

### Return Value

- **Type**: `Worker`

## `worker.postMessage(value)`

Sends a message to the worker.

### Parameters

- **`value`** (`any`): Structured-clone-compatible data.

### Return Value

- **Type**: `void`

## `worker.onmessage`

Message handler property on worker instance.

### Type

- **Type**: `(event: { data: any }) => void`

## `os.Worker.parent`

Parent worker endpoint available inside worker context (when provided by runtime).

## Example

```javascript
import * as os from "os";

if (typeof os.Worker === "function") {
    const w = new os.Worker("./worker.js");
    w.onmessage = (ev) => {
        console.log("from worker:", ev.data);
    };
    w.postMessage({ hello: "worker" });
}
```

## Worker-side Example

```javascript
import * as os from "os";

if (os.Worker && os.Worker.parent) {
    os.Worker.parent.onmessage = (ev) => {
        os.Worker.parent.postMessage({ received: ev.data });
    };
}
```

## Windows Scope

This page documents Windows usage of QuickJS `os.Worker`. Availability depends on build flag `USE_WORKER`.
