# Dark Mode

The `TinyVue` component library has supported dark mode since version `v3.22.0`.

## Usage

Import the dark theme style file in the entry file `main.js` (if you're using Method 3 `theme-tool`, you don't need to import `dark-theme.css`)

```js
// Import dark mode style file
import '@opentiny/vue-theme/base/dark-theme.css'
```

## How to Enable Dark Mode

### Method 1: HTML Class Toggle

Add the `dark` class directly to the HTML root element

```html
<html class="dark">
  <head></head>
  <body></body>
</html>
```

If you want to switch dynamically, we recommend using [useDark | VueUse](https://vueuse.org/core/useDark/)

### Method 2: JavaScript Dynamic Switching

```js
// Switch to dark mode
document.documentElement.classList.add('dark')

// Switch to light mode
document.documentElement.classList.remove('dark')
```

### Method 3: Use TinyThemeTool for Switching

Similar to the theme switching feature, you can use the `TinyThemeTool` class to manage dark mode:

```js
import TinyThemeTool, { tinyDarkTheme } from '@opentiny/vue-theme/theme-tool'

const themeTool = new TinyThemeTool(tinyDarkTheme)
```

## Customize Dark Mode Variables

You can override the default dark mode variables by creating a new CSS file:

```css
html.dark {
  /* Customize dark mode background color */
  --tv-base-color: #1d1e1f;
}
```

Then import it in your entry file:

```js
import '@opentiny/vue-theme/base/dark-theme.css'

// Import custom dark mode variables
import './styles/dark-theme.css'
```

This way, you can implement personalized dark theme customization while preserving the basic dark mode of the TinyVue component library.
