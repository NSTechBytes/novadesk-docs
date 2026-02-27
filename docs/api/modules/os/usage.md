---
title: os module usage
---

# os Usage

The `os` module is imported directly from QuickJS runtime:

```javascript
import * as os from "os";
```

This is different from Novadesk system modules, which are imported from:

```javascript
import { cpu, memory } from "system";
```

## Quick Start

```javascript
import * as os from "os";

console.log("platform:", os.platform);
console.log("exe path:", os.exePath());
console.log("cwd:", os.getcwd());
console.log("now:", os.now());
```

## Typical Use

- Use `os` for low-level runtime/OS operations (fd I/O, process control, signals, timers).
- Use `system` for Novadesk widget-friendly APIs (audio, cpu, memory, network, etc.).
