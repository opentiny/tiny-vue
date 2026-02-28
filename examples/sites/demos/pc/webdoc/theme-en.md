# Theme configuration

<div class="tip custom-block">
  <div class="custom-block-content">
    This section of the document only supports theme customization after <code> @opentiny/vue@3.19.0 </code>. For historical theme configuration, see <a href='# Historical version of the theme configuration '> Archive information </a> at the bottom of the current document.
  </div>
</div>

A comprehensive set of global CSS variables is defined in the TinyVue component library to unify theme styles, including fonts, colors, spacing, and rounding values. Additionally, component-level CSS variables are defined within each individual component. Starting from version <code>@opentiny/vue@3.19.0</code>, the component library's overall style has been updated to the new 'Opentiny Design' style, which is specifically tailored for enterprise-class applications and backend management systems. If you prefer to use the legacy theme style, you can continue using the historical version or refer to the <a href='#old-theme-configuration'>OLD Theme Configuration</a> section in this document.

- Global CSS variables are located in the 'base' directory of the theme package: [base/vars.less](https://github.com/opentiny/tiny-vue/blob/dev/packages/theme/src/base/vars.less)

- Component-level CSS variables are defined in the theme root directory of each component, such as [button/vars.less](https://github.com/opentiny/tiny-vue/blob/dev/packages/theme/src/button/vars.less)

By examining the source code above, you can identify which component library styles can be customized.

## Custom Theme

In your project, if you need to customize the theme style or override specific component styles, you can configure the project theme using the 'TinyThemeTool' class provided by the component library. We will continue to provide additional theme options for you to choose from in the future.

'ThemeData' is a custom theme data format that allows users to pass overridden global CSS variables through the 'data' property and valid CSS rule blocks through the 'css' property.

```ts
interface ThemeData {
  /** Theme ID */
  id?: string
  /** Theme Name */
  name?: string
  /** Theme Chinese Name */
  cnName?: string
  /**
   * The object to which the global css variable needs to be appended.
   * eg. { 'tv-base-color-brand' : '#1476ff' } will append to  :root { --tv-base....... }
   * */
  data?: Record<string, string>
  /**
   * Additional style rules are required to override or extend the style of the component.
   * eg.  .tiny-button { border:none;  }
   * */
  css?: string
}
```

You can customize your theme as follows:

```ts
import TinyThemeTool from '@opentiny/vue-theme/theme-tool'

const themeTool = new TinyThemeTool()

themeTool.changeTheme({
  name: 'my-app-custom-styles',
  data: {
    'tv-base-color-brand': '#1476ff',
    'tv-font-size-md': '12px',
    'tv-font-size-lg': '16px',
    'tv-font-size-xxl': '20px'
  },
  css: `
    .tiny-button {
      --tv-Button-border-radius: 6px;

      min-width: 80px;
      border:none;
      padding : 2px 20px;
    }
    .tiny-button.tiny-button--primary{
      background-color: #508de3;
    }
  `
})
```

<div class="info custom-block">
  <div class="custom-block-content">
    In many historical projects, many developers will write component styles by <code>important</code> and <code>:deep()</code> to override certain component library styles. These styles are scattered throughout the components. When later versions of the component library are upgraded, the component structure or class name may be adjusted, resulting in an override failure. <br><br>
    You are advised to use <code>TinyThemeTool</code> to override component styles. In this way, modified CSS rules are centralized to facilitate subsequent maintenance. Users can also introduce 'CSS files' to override styles, but make sure that the styles in them take precedence over the component library.
    </div>
</div>

## Micro Frontends Scenario

By default, the 'themeTool.changeTheme' method mounts custom styles to the current 'document'. However, in micro frontend frameworks, there is typically a style isolation mechanism in place. For instance, an unbounded micro frontend may encapsulate child applications within a 'Web Component'. When customizing themes in such scenarios, you must mount the styles to the 'ShadowRoot' of the sub-application.

```ts
import TinyThemeTool from '@opentiny/vue-theme/theme-tool'

const wujieDom = document.querySelector('wujie-app[data-wujie-id]') //
const target = wujieDom.shadowRoot

const themeTool = new TinyThemeTool()

themeTool.changeTheme(
  {
    name: 'my-app-custom-styles',
    data: {
      // ....
    },
    css: `....`
  },
  target // ----- mount point
)
```

## OLD Theme Configuration

We do not recommend that users continue using the old theme. However, for legacy projects, we provide a set of old theme 'CSS variables' that users need to adapt in their projects.

```ts
import TinyThemeTool, { OldTheme } from '@opentiny/vue-theme/theme-tool'

const themeTool = new TinyThemeTool(OldTheme)

// themeTool.changeTheme(OldTheme)  // Same effect as above
```

<div class="warning custom-block">
  The old theme cannot 100% replicate all details of historical versions. If users experience significant impacts after upgrading, they can provide feedback to us. Alternatively, you can roll back to version <code>@opentiny/vue@3.18.0</code>, which we will continue to maintain for some time.
</div>

## Historical Version Theme Configuration

<div class="danger custom-block">
  This section of the documentation only supports theme customization for versions prior to <code>@opentiny/vue@3.18.0</code>
</div>

The `TinyVue` component library utilizes `css` variables and defines a series of global/component style variables that you can adjust according to your specific requirements.

To view the theme-related variables, follow these steps:

Source code: [basic-var.less](https://github.com/opentiny/tiny-vue-theme/blob/main/src/base/basic-var.less)

Design documentation: [Administrative interface specification design variables](https://rnd-think.huawei.com/think-home/designAnnotation)

Basic style variable `npm` repository path: `@opentiny/vue-theme/theme`

### Using Predefined Themes and Dynamic Theme Switching

The official distribution currently offers 4 theme sets:

- Default Theme
- Infinity Theme `tinyInfinityTheme`
- Aurora Theme `tinyAuroraTheme`
- XDesign Theme `tinySmbTheme`

#### Using Predefined Themes Through Alias [Currently supporting: Aurora theme and XDesign theme]

**vue.config.js configuration:**

```js
chainWebpack: (config) => {
  // XDesign Theme
  config.resolve.alias.set('@opentiny/vue-theme', '@opentiny/vue-theme/smb-theme')
  // Aurora Theme: Replace all 'smb' characters in the above SMB theme with 'aurora'
}
```

**vite.config.js configuration:**

```js
resolve: {
  alias: [
    // XDesign Theme
    {
      find: /\@opentiny\/vue-theme\/(?!(smb))/,
      replacement: '@opentiny/vue-theme/smb-theme/'
    }
  ]
}
```

#### Theme Initialization and Dynamic Switching Implementation

Add the following code to your main.ts file:

```js
import TinyThemeTool from '@opentiny/vue-theme/theme-tool'

// Import Infinity theme
import { tinyInfinityTheme } from '@opentiny/vue-theme/theme'

// Initialize the infinity theme
const theme = new TinyThemeTool(tinyInfinityTheme, 'tinyStyleSheetId')

// Custom theme data format
const tinyTestTheme = {
  id: 'tiny-test-theme', // Unique theme identifier - each theme must have a unique ID
  name: 'testTheme', // English theme name
  cnName: 'Test Theme', // Chinese theme name
  data: { 'ti-base-color': '#f2f2f3' } // Theme data
}

// Dynamic theme switching
theme.changeTheme(tinyTestTheme)
```

### Advanced Theme Customization Techniques

Define custom CSS variables at the global scope:

```css
:root {
  --ti-base-color-white: #fefefe;
}
```

For better performance, it's recommended to define custom CSS variables under specific class names rather than at the global :root level:

```css
.tiny-test-class {
  --ti-base-color-white: #fefefe;
}
```

To customize a specific component, you can apply inline styles directly:

```html
<tiny-button style="--ti-base-color-white: #fefefe">Button</tiny-button>
```

To control CSS variables through JavaScript:

```js
const el = document.documentElement

// Retrieve CSS variable value
getComputedStyle(el).getPropertyValue('--ti-base-color-white')

// Set CSS variable value
el.style.setProperty('--ti-base-color-white', '#fefefe')
```

### Standardizing Theme Variables: Old vs New Variable Names

**Background**: As `tiny-vue` integrates with theme-based configuration systems, component library versions later than `3.5.0` have undergone variable name changes to standardize the naming convention.

For example:

- `--ti-base-color-selected-font-color` has been renamed to `--ti-base-color-selected-text-color`
- `--ti-alert-radius` has been renamed to `--ti-alert-border-radius`

When upgrading projects that use old CSS variables for styling, the new `tiny-vue` version may not recognize these variables. To address this, we provide a batch variable name replacement method. The process is as follows:

**Step 1**: Download the mapping table `newVars.json` and replacement script `replaceVar.js`.

[Download newVars.json](newVars.json) and [Download replaceVar.js](replaceVar.js)

**Step 2**: Place both `newVars.json` and `replaceVar.js` in your project's root directory (at the same level as the src directory).

**Step 3**: Execute the following command in your project's root directory:

```bash
node replaceVar.js
```

**Handling Special Cases**: Manual replacement may be required for certain variables.

**Manual Replacement Background**: In the `newVars.json` mapping table, each `key` represents an old variable name and its corresponding `value` represents the new variable name. Some old variables like `--ti-button-padding` are classified as "special variables" because they are split into two or more new variables, making their `value` an array. In such cases, the script cannot perform automatic replacement, requiring manual intervention.

**Manual Replacement Process**:

1. Uncomment line 20 in the replaceVar.js file and re-run step 3. This will identify which variables require manual replacement (refer to the special variables table at the end of this document).

```js
console.log('Files requiring manual replacement:', statPath, 'Variables to replace:', key)
```

2. Based on the output file paths and variables, locate and modify the variables accordingly. The following examples cover all scenarios requiring manual replacement:

**General Cases**:

**Example 1**: The special variables table shows that the old variable `--ti-button-padding` is split into 2 new variables: `--ti-button-padding-vertical` and `--ti-button-padding-horizontal`, representing vertical and horizontal padding respectively.

Original style: `padding: var(--ti-button-padding);`
Manual replacement: `padding: var(--ti-button-padding-vertical) var(--ti-button-padding-horizontal);`

**Example 2**: The old variable `--ti-pager-primary-color` is split into 3 new variables: `--ti-pager-primary-bg-color`, `--ti-pager-primary-text-color`, and `--ti-pager-primary-border-color`, representing background color, text color, and border color respectively.

Original format: `--ti-pager-primary-color: red;`
Manual replacement: `--ti-pager-primary-bg-color: red; --ti-pager-primary-text-color: red; --ti-pager-primary-border-color: red;`

**Special Circumstances**:

**Example 3**: Variables containing the `border` field require special handling. When split, they contain `border-weight` (border thickness), `border-style` (border style), and `border-color` (border color). For instance, `--tv-Tabs-item-active-border` splits into `--tv-Tabs-item-active-border-weight`, `--tv-Tabs-item-active-border-style`, and `--tv-Tabs-item-active-border-color`.

Original style: `--tv-Tabs-item-active-border: 1px solid red;`
Manual replacement: `--tv-Tabs-item-active-border-weight: 1px; --tv-Tabs-item-active-border-style: solid; --tv-Tabs-item-active-border-color: red;`

**Example 4**: When a variable split from `--ti-radio-button-checked-hover-color` contains the `box-shadow` field, the `box-shadow` style must be written separately.

Original format: `--ti-radio-button-checked-hover-color: red`
Manual replacement: `--ti-radio-button-checked-hover-bg-color: red; --ti-radio-button-checked-hover-border-color: red; --ti-radio-button-checked-hover-box-shadow: -1px 0 0 0 red;` (The box-shadow value follows standard CSS syntax and can be customized.)

The complete mapping table of special variables is provided below. The newVars.json file contains 48 special variables as shown in the following structure.

```json
{
  "--ti-button-padding": ["--ti-button-padding-vertical", "--ti-button-padding-horizontal"],
  "--ti-carousel-indicator-padding": [
    "--ti-carousel-indicator-padding-vertical",
    "--ti-carousel-indicator-padding-horizontal"
  ],
  "--ti-cascader-menu-list-padding": [
    "--ti-cascader-menu-list-padding-vertical",
    "--ti-cascader-menu-list-padding-horizontal"
  ],
  "--ti-cascader-node-disabled-color": [
    "--ti-cascader-node-disabled-text-color",
    "--ti-cascader-node-disabled-bg-color"
  ],
  "--ti-cascader-node-label-padding": [
    "--ti-cascader-node-label-padding-vertical",
    "--ti-cascader-node-label-padding-horizontal"
  ],
  "--ti-cascader-panel-node-label-padding": [
    "--ti-cascader-panel-node-label-padding-vertical",
    "--ti-cascader-panel-node-label-padding-right",
    "--ti-cascader-panel-node-label-padding-vertical",
    "--ti-cascader-panel-node-label-padding-left"
  ],
  "--ti-collapse-item-header-padding": [
    "--ti-collapse-item-header-padding-vertical",
    "--ti-collapse-item-header-padding-horizontal"
  ],
  "--ti-dialogbox-head-padding": [
    "--ti-dialogbox-head-padding-top",
    "--ti-dialogbox-head-padding-horizontal",
    "--ti-dialogbox-head-padding-bottom"
  ],
  "--ti-dialogbox-box-body-padding": [
    "--ti-dialogbox-box-body-padding-vertical",
    "--ti-dialogbox-box-body-padding-horizontal"
  ],
  "--ti-dropdown-menu-item-padding": [
    "--ti-dropdown-menu-item-padding-vertical",
    "--ti-dropdown-menu-item-padding-horizontal"
  ],
  "--ti-dropdown-menu-padding": ["--ti-dropdown-menu-padding-vertical", "--ti-dropdown-menu-padding-horizontal"],
  "--ti-fallmenu-slot-color": ["--ti-fallmenu-slot-text-color", "--ti-fallmenu-slot-bg-color"],
  "--ti-form-item-error-color": ["--ti-form-item-error-text-color", "--ti-form-item-error-border-color"],
  "--ti-table-td-padding": ["--ti-table-td-padding-vertical", "--ti-table-td-padding-horizontal"],
  "--ti-milestone-color": ["--ti-milestone-text-color", "--ti-milestone-bg-color"],
  "--ti-modal-header-padding": [
    "--ti-modal-header-padding-top",
    "--ti-modal-header-padding-horizontal",
    "--ti-modal-header-padding-bottom"
  ],
  "--ti-modal-body-padding": [
    "--ti-modal-body-padding-top",
    "--ti-modal-body-padding-horizontal",
    "--ti-modal-body-padding-bottom"
  ],
  "--ti-modal-footer-padding": [
    "--ti-modal-footer-padding-top",
    "--ti-modal-footer-padding-horizontal",
    "--ti-modal-footer-padding-bottom"
  ],
  "--ti-notify-info-background": ["--ti-notify-info-bg-color", "--ti-notify-bg-color"],
  "--ti-notify-title-margin": [
    "--ti-notify-title-margin-top",
    "--ti-notify-title-margin-horizontal",
    "--ti-notify-title-margin-bottom"
  ],
  "--ti-notify-message-margin": [
    "--ti-notify-message-margin-vertical",
    "--ti-notify-message-margin-right",
    "--ti-notify-message-margin-vertical",
    "--ti-notify-message-margin-left"
  ],
  "--ti-pager-primary-color": [
    "--ti-pager-primary-bg-color",
    "--ti-pager-primary-text-color",
    "--ti-pager-primary-border-color"
  ],
  "--ti-pager-list-padding": ["--ti-pager-poplist-item-padding-vertical", "--ti-pager-poplist-item-padding-horizontal"],
  "--ti-date-table-td-padding": ["--ti-date-table-td-padding-vertical", "--ti-date-table-td-padding-horizontal"],
  "--ti-time-panel-btn-padding": ["--ti-time-panel-btn-padding-vertical", "--ti-time-panel-btn-padding-horizontal"],
  "--ti-popover-placement-margin": [
    "--ti-popover-placement-margin-vertical",
    "--ti-popover-placement-margin-horizontal"
  ],
  "--ti-popover-padding": ["--ti-popover-padding-vertical", "--ti-popover-padding-horizontal"],
  "--ti-radio-input-checked-disabled-color": [
    "--ti-radio-input-checked-disabled-bg-color",
    "--ti-radio-input-checked-disabled-border-color"
  ],
  "--ti-radio-button-checked-normal-color": [
    "--ti-radio-button-checked-normal-bg-color",
    "--ti-radio-button-checked-normal-border-color",
    "--ti-radio-button-checked-normal-box-shadow"
  ],
  "--ti-radio-button-checked-hover-color": [
    "--ti-radio-button-checked-hover-bg-color",
    "--ti-radio-button-checked-hover-border-color",
    "--ti-radio-button-checked-hover-box-shadow"
  ],
  "--ti-search-inputinner-height": ["--ti-search-input-btn-width", "--ti-search-input-btn-line-height"],
  "--ti-select-dropdown-list-padding": [
    "--ti-select-dropdown-list-padding-top",
    "--ti-select-dropdown-list-padding-horizontal",
    "--ti-select-dropdown-list-padding-bottom"
  ],
  "--ti-select-dropdown-item-padding": [
    "--ti-select-dropdown-item-padding-vertical",
    "--ti-select-dropdown-item-padding-horizontal"
  ],
  "--ti-select-dropdown-line-margin": [
    "--ti-select-dropdown-line-margin-vertical",
    "--ti-select-dropdown-line-margin-horizontal"
  ],
  "--ti-slider-progress-box-middleline-normal": [
    "--ti-slider-progress-box-middleline-border-color",
    "--ti-slider-progress-box-middleline-icon-color"
  ],
  "--ti-slider-handle-color-hover": ["--ti-slider-handle-text-color-hover", "--ti-slider-handle-border-color-hover"],
  "--ti-slider-handle-margin": [
    "--ti-slider-handle-margin-top",
    "--ti-slider-handle-margin-horizontal",
    "--ti-slider-handle-margin-bottom"
  ],
  "--ti-slider-tips-bgcolor": ["--ti-slider-tips-bg-color", "--ti-slider-tips-border-color"],
  "--ti-slider-vertical-margin": [
    "--ti-slider-margin-vertical",
    "--ti-slider-margin-right",
    "--ti-slider-margin-vertical",
    "--ti-slider-margin-left"
  ],
  "--ti-split-trigger-size": [
    "--ti-split-trigger-size",
    "--ti-split-trigger-bar-margin-left",
    "--ti-split-trigger-bar-margin-top"
  ],
  "--ti-switch-checked-disabled-bgcolor": [
    "--ti-switch-checked-disabled-bg-color",
    "--ti-switch-checked-disabled-border-color"
  ],
  "--ti-switch-dot-size": ["--ti-switch-dot-size-height-width", "--ti-switch-dot-position-left"],
  "--tv-Tabs-item-active-border": [
    "--tv-Tabs-item-active-border-weight",
    "--tv-Tabs-item-active-border-style",
    "--tv-Tabs-item-active-border-color"
  ],
  "--tv-Tabs-item-border-bottom": [
    "--tv-Tabs-item-bottom-border-weight",
    "--tv-Tabs-item-bottom-border-style",
    "--tv-Tabs-item-bottom-border-color"
  ],
  "--tv-Tabs-icon-close-margin": [
    "--tv-Tabs-icon-close-margin-vertical",
    "--tv-Tabs-icon-close-margin-right",
    "--tv-Tabs-icon-close-margin-left"
  ],
  "--ti-tooltip-padding": ["--ti-tooltip-padding-vertical", "--ti-tooltip-padding-horizontal"],
  "--ti-upload-list-picture-card-item-bgcolor": [
    "--ti-upload-list-picture-card-item-bg-color",
    "--ti-upload-list-picture-card-item-text-color"
  ],
  "--ti-user-account-padding": ["--ti-user-account-padding-vertical", "--ti-user-account-padding-horizontal"]
}
```
