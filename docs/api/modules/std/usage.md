---
title: std module usage (Windows)
---

# std Usage (Windows)

#### Table of Contents
[[toc]]

Use runtime import:

```javascript
import * as std from "std";
```

This is different from Novadesk APIs:

```javascript
import { cpu, memory } from "system";
```

## When To Use `std`

- Use `std` for runtime-level utilities:
  - script loading/evaluation
  - low-level file handles (`std.File`)
  - environment variables
  - formatted terminal output
- Use `system` for Novadesk system integrations (cpu/memory/audio/etc.).

## Quick Example

```javascript
import * as std from "std";

std.printf("Hello from std\n");
const txt = std.loadFile("D:/tmp/a.txt");
std.printf("len=%d\n", txt ? txt.length : 0);
```

## Common Pattern

```javascript
import * as std from "std";

function fail(msg) {
    std.printf("Error: %s\n", msg);
    std.exit(1);
}

const conf = std.loadFile("D:/tmp/config.json");
if (conf === null) fail("config file not found");

const obj = JSON.parse(conf);
std.printf("Loaded name=%s\n", obj.name);
```
