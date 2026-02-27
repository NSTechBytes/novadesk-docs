---
title: QuickJS std module index
---

# std Module

The `std` module is a QuickJS runtime module that provides utilities for:

- script loading/evaluation
- environment variables
- file and stream I/O
- formatting and output helpers
- errno-style constants and helpers

```javascript
import * as std from "std";
```

#### Table of Contents
[[toc]]

## How To Use In JS

`std` is imported directly from runtime (not from `system`):

```javascript
import * as std from "std";
```

## Windows-only Docs

- [Usage](./std/usage.md)
- [Utility APIs](./std/utility.md)
- [Core APIs](./std/core.md)
- [Environment APIs](./std/environment.md)
- [File APIs](./std/file.md)
- [std.File Methods](./std/file-methods.md)
- [Constants and Error](./std/constants.md)

## Notes

- These pages are focused on Windows builds used by Novadesk.
- Some behavior depends on QuickJS build options.
