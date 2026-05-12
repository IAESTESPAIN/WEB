# Language Selector Implementation Guide

## Overview
This guide explains how the language selector has been implemented for the IAESTE Spain website.

## Files Added
1. **CSS**: `/wp-content/themes/astra/assets/css/language-switcher.css`
2. **JavaScript**: `/wp-content/themes/astra/assets/js/language-switcher.js`
3. **English Home**: `/en/index.html` (template example)

## What Changed

### 1. HTML Head Section
Add this line in the `<head>` section of each page (after the Astra theme CSS link):
```html
<link rel="stylesheet" href="./wp-content/themes/astra/assets/css/language-switcher.css">
```

**For pages in subdirectories**, adjust the path accordingly:
- For pages in `contacto/`, `empresas/`, etc.: `href="./../wp-content/themes/astra/assets/css/language-switcher.css"`
- For pages in `en/`: `href="./../wp-content/themes/astra/assets/css/language-switcher.css"`

### 2. Menu Item Replacement
Find the language switcher menu item (old TranslatePress code) and replace it with:

**For ROOT LEVEL files** (`index.html`, `estudiantes.html`, etc.):
```html
<li>
	<div class="language-switcher">
		<button class="language-toggle" onclick="toggleLanguageMenu(event)" aria-expanded="false">
			<img src="./wp-content/plugins/translatepress-multilingual/assets/images/flags/es_ES.png" alt="Español" class="flag-icon" loading="lazy">
			<span>Español</span>
			<span class="dropdown-arrow">▼</span>
		</button>
		<ul class="language-menu">
			<li><a href="./index.html"><img src="./wp-content/plugins/translatepress-multilingual/assets/images/flags/es_ES.png" alt="Español" loading="lazy"><span>Español</span></a></li>
			<li><a href="./en/index.html"><img src="./wp-content/plugins/translatepress-multilingual/assets/images/flags/en_US.png" alt="English" loading="lazy"><span>English</span></a></li>
		</ul>
	</div>
</li>
```

**For SUBFOLDER files** (e.g., `contacto/index.html`, `empresas/index.html`):
```html
<li>
	<div class="language-switcher">
		<button class="language-toggle" onclick="toggleLanguageMenu(event)" aria-expanded="false">
			<img src="./../wp-content/plugins/translatepress-multilingual/assets/images/flags/es_ES.png" alt="Español" class="flag-icon" loading="lazy">
			<span>Español</span>
			<span class="dropdown-arrow">▼</span>
		</button>
		<ul class="language-menu">
			<li><a href="./index.html"><img src="./../wp-content/plugins/translatepress-multilingual/assets/images/flags/es_ES.png" alt="Español" loading="lazy"><span>Español</span></a></li>
			<li><a href="./../en/[folder-name]/index.html"><img src="./../wp-content/plugins/translatepress-multilingual/assets/images/flags/en_US.png" alt="English" loading="lazy"><span>English</span></a></li>
		</ul>
	</div>
</li>
```

Replace `[folder-name]` with the actual folder name (e.g., `contacto`, `empresas`, etc.)

### 3. JavaScript Link
Add this line before the closing `</body>` tag:
```html
<script src="./wp-content/themes/astra/assets/js/language-switcher.js"></script>
```

For subfolder files, adjust the path:
```html
<script src="./../wp-content/themes/astra/assets/js/language-switcher.js"></script>
```

## Directory Structure
```
IAESTEesp/
├── en/
│   ├── index.html (DONE - English home page template)
│   ├── empresas/
│   │   └── index.html
│   ├── contacto/
│   │   └── index.html
│   ├── entidades-patrocinadoras/
│   │   └── index.html
│   ├── estudiantes/
│   │   └── index.html
│   ├── experiencias/
│   │   └── index.html
│   ├── faq/
│   │   └── index.html
│   ├── mision-y-valores/
│   │   └── index.html
│   ├── sobre-iaeste/
│   │   └── index.html
│   ├── sus-datos-seguros/
│   │   └── index.html
│   ├── unete-a-iaeste/
│   │   └── index.html
│   ├── union-entre-universidades-y-extranjero/
│   │   └── index.html
│   ├── universidades/
│   │   └── index.html
│   ├── politica-de-cookies/
│   │   └── index.html
│   └── politica-de-proteccion-de-datos/
│       └── index.html
└── [Spanish pages with updated language selector]
```

## Language Switcher Features
- **Dropdown Menu**: Click the language button to toggle the dropdown
- **Keyboard Support**: Press Escape to close the menu
- **Click Outside**: Clicking outside closes the menu automatically
- **Responsive**: Works on mobile and desktop devices
- **Accessible**: ARIA attributes for screen readers

## Testing
1. Open any page in the browser
2. Look for the language selector button in the header (right side)
3. Click it to see the dropdown with language options
4. Verify links go to correct pages
5. Test on mobile devices

## Notes
- English translations need to be added to all `en/` subdirectory pages
- Current English template uses English text; more detailed translations will be needed
- All flag images and assets are reused from the existing TranslatePress plugin installation
