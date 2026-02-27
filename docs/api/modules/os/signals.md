---
title: os signal APIs (Windows)
---

# os Signals (Windows)

Import:

```javascript
import * as os from "os";
```

#### Table of Contents
[[toc]]

## `os.signal(signalNumber, handler)`

Registers or clears a signal handler.

### Parameters

- **`signalNumber`** (`number`): Signal constant (for example `os.SIGINT`, `os.SIGTERM`).
- **`handler`** (`function | null`): Callback to invoke when signal arrives, or `null` to clear handler.

### Return Value

- **Type**: `number`
- **Description**: `0` on success, negative value on error.

### Notes

- Signal handlers can only be set in the main thread.

## Common Signal Constants (Windows)

- **`os.SIGINT`**: Interrupt signal (commonly Ctrl+C in console apps).
- **`os.SIGTERM`**: Termination request signal.
- **`os.SIGABRT`**: Abort signal (abnormal termination request).
- **`os.SIGSEGV`**: Invalid memory access signal (segmentation violation).
- **`os.SIGFPE`**: Arithmetic error signal (for example invalid floating-point operation).
- **`os.SIGILL`**: Illegal instruction signal.

### Using Constants with `os.signal`

Pass one of these constants as the first argument to `os.signal(...)`:

```javascript
import * as os from "os";

os.signal(os.SIGTERM, () => {
    console.log("SIGTERM received, cleaning up...");
});
```

## Example

```javascript
import * as os from "os";

if (typeof os.signal === "function" && typeof os.SIGINT !== "undefined") {
    os.signal(os.SIGINT, () => {
        console.log("SIGINT received");
    });
}
```

## Windows Scope

This page documents the Windows-available signal APIs/constants exposed by the QuickJS `os` module in Novadesk.
