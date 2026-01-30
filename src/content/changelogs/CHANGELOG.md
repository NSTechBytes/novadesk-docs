# Changelog

## [0.2.0.0-beta] - 2026-01-30
###### 📅 30th January, 2026 

### Added
- New JavaScript APIs on the `app` object: `getAppDataPath()`, `getSettingsFilePath()`, and `getLogPath()`.
- Dynamic product name retrieval from executable resources for consistent directory naming.

### Fixed
- **Single Instance Enforcement**: Resolved an issue where multiple instances could run if one was started as Administrator (by the installer) and another as a Standard User.
- **Changelog Sorting**: Standardized versioning to 3-part Semver to ensure "Latest" version labeling works correctly.

### Changed
- **Branding Consistency**: Refactored `GetAppTitle()` to use `PathUtils::GetProductName()`, ensuring the product name is consistently pulled from executable resources across the entire application (including the tray menu).
- Redirected `settings.json`, `config.json`, and `logs.log` to the user's `%APPDATA%` directory.
- Updated the installer and uninstaller to handle user data cleanup in AppData.
- Consolidated resource extraction logic across the codebase for improved performance (caching).

## [0.1.0.0-beta] - 2026-01-30  
###### 📅 30th January, 2026  

### Added
- Initial beta release...
