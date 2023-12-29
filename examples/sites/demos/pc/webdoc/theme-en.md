## Theme Configuration

The `TinyVue` multi-topic uses `css` variables and defines a series of global/component style variables that you can adjust according to your requirements.

Variables involved in the topic. To view the variables, perform the following steps:

Source code: [basic-var.less](https://github.com/opentiny/tiny-vue-theme/blob/main/src/base/basic-var.less)

Design website: [Administrative side specification design variable] (https://rnd-think.huawei.com/think-home/designAnnotation)

Basic style variable `npm` Repository path: `@opentiny/vue-theme/theme`

### Using predefined themes and dynamically switching themes

Currently, the official offers 4 sets of themes:

-Default Theme
-Infinity Theme ` tinyInfinityTheme`
-Aurora Theme ` tinyAuroraTheme`
-XDesign Theme ` tinySmbTheme`

#### Using predefined themes through alias [Currently only supported: Eurora theme and XDesign theme]

vue.config.js define

```js
chainWebpack: (config) => {
  // XDesign Theme
  config.resolve.alias.set('@opentiny/vue-theme', '@opentiny/vue-theme/smb-theme')
  // Aurora Theme : The aurora theme is to replace all the 'smb' characters in the above SMB themes with 'aurora'
}
```

vite.config.js define

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

#### The specific usage of theme initialization and dynamic theme switching is shown below, and the following code is added to the main.ts file.

```js
import TinyThemeTool from' @opentiny/vue-theme/theme-tool.js'

// Infinite theme
import {tinyInfinityTheme} from'@opentiny/vue-theme/theme'

// Initialize the infinite theme.
const theme = new TinyThemeTool(tinyInfinityTheme,'tinyStyleSheetId') 

// Customize the theme data format.
const tinyTestTheme = {
id: 'tiny-test-theme', // Unique ID of a topic. Each topic must be unique.
name: 'testTheme', // English name of the theme
cnName:'Test Topic', // Chinese name of the topic
data: {'ti-base-color':'#f2f2f3'} // Subject data
}

// Dynamic theme switching

theme.changeTheme(tinyTestTheme)
```

### Advanced Usage of Theme Customization

Add a custom `css` variable under the global scope.

```css
:root {
  --ti-base-color-white: #fefefe;
}
```

For performance reasons, it is more recommended that you add custom `css` variables under the class name rather than under the global :root.

```css
.tiny-test-class {
  --ti-base-color-white: #fefefe;
}
```

If you only want to customize a specific component, simply add inline styles for certain components separately.

```js
<tiny-button style="--ti-base-color-white: #fefefe">Button</tiny-button>
```

If you want to control the `css` variable through `js`, you can do this:

```js
const el = document.documentElement

// Obtain the CSS variable.
getComputedStyle(el).getPropertyValue('--ti-base-color-white')

// Set the CSS variable.
el.style.setProperty('--ti-base-color-white', '#fefefe')
```

### Theme variables are standardized and replaced with old and new variable names.

Background: Because the `tiny-vue` needs to connect to the theme-based configuration system, the `tiny-vue` component library is later than the `3.5. 0` version, and the name of the customized variable is changed.

For example, `--ti-base-color-selected-font-color` has been changed to `--ti-base-color-selected-text-color` . `--ti-alert-radius` has been changed to `--ti-alert-border-radius`.

If the old `css` variable is used to adjust the style in a project, the upgrade to the new version `tiny-vue` may not take effect. Therefore, the following method of replacing variable names in batches is provided to solve the problem of replacing old and new variables. The procedure is as follows:

Replace all the old variable names in the `src` directory in the project as an example: Replace the old and new variable names.

Step 1: Click to download the mapping table `newVars.json` and the replacement script `replaceVar.js`.

<script setup>
  import { pubUrl } from '@/tools'
</script>

<a :href="pubUrl('@demos/resource/newVars.json')" target="_blank" download="newVars.json">newVars.json files</a> and <a :href="pubUrl('@demos/resource/replaceVar.js')" target="_blank" download="replaceVar.js">replaceVar.js files</a>

Step 2: Place `newVars.json` and `replaceVar.js` in the root directory of the project, which is at the same level as the src directory.

<img :src="pubUrl('@demos/resource/theme-demo.png')" class="image" style="box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.14); width: 30vw" ><br><br>

Step 3: Run the following command in the root directory of the project:

`node replaceVar.js`

Special cases: If manual replacement is required, how to check which variables need to be manually replaced?

Background of manual replacement: In the mapping table `newVars.json`, `key` is the old variable and `value` is the new variable. If an old variable similar to `--ti-button-padding` is used, it is called `special variable`. Because the variable is split into two or more new variables, the corresponding `value` is an array. In this case, the script cannot automatically replace the variable. You need to manually replace the variable. How to replace the variable?

Step 1 Uncomment line 20 in the replaceVar.js file and repeat step 3. You can know where variables need to be manually replaced (the special variable table is attached at the end).

```js
// console.log ('The file path to be manually replaced is',statPath,'The variable to be manually replaced is',key)
```

Step 2: Find and modify the variables based on the printed file path and variables. The following are examples to cover all cases that need to be manually replaced:

`General case`:

Example 1: The special variable table shows that the old variable similar to `--ti-button-padding` is split into `2` new variables, `--ti-button-padding-vertical`and`--ti-button-padding-horizontal`, literally. Padding for `vertical` and `horizontal`, respectively

If the original project style is `padding: var(--ti-button-padding);`, manually replace it with `padding: var(--ti-button-padding-vertical) var(--ti-button-padding-horizontal);`.

Example 2: The old variable similar to `--ti-pager-primary-color` is split into `3 `new variables, `--ti-pager-primary-bg-color`, `--ti-pager-primary-text-color`, and `--ti-pager-primary-border-color`. Literally `Background Color`, `Text Color`, and `Border Color`

If the original format is `--ti-pager-primary-color:red;`, manually replace it with `--ti-pager-primary-bg-color: red; --ti-pager-primary-text-color: red; --ti-pager-primary-border-color: red;`.

`Special circumstances`:

Example 3: Query the special variable table. It is similar to a variable that contains the `border` field. If the new variable to be split contains `border-weight (border thickness), border-style (border style), and border-color (border color)`, For example, `--ti-tabs-item-active-border`is split into`--ti-tabs-item-active-border-weight，--ti-tabs-item-active-border-style, --ti-tabs-item-active-border-color`;

If the original style is `--ti-tabs-item-active-border: 1px solid red;`, manually replace it with `--ti-tabs-item-active-border-weight: 1px; --ti-tabs-item-active-border-style: solid; --ti-tabs-item-active-border-color: red;`.

Example 4: If the variable split from `--ti-radio-button-checked-hover-color` contains the `box-shadow` field, you need to write the `box-shadow` style separately.

If the original format is `--ti-radio-button-checked-hover-color: red`, manually replace it with `--ti-radio-button-checked-hover-bg-color: red; --ti-radio-button-checked-hover-border-color: red; --ti-radio-button-checked-hover-box-shadow: -1px 0 0 0 red` . (The value of box-shadow is the same as that of normal writing and can be customized.)

The mapping table of special variables is attached. There are 48 special variables in the newVars.json file, as shown in the following figure.

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
  "--ti-tabs-item-active-border": [
    "--ti-tabs-item-active-border-weight",
    "--ti-tabs-item-active-border-style",
    "--ti-tabs-item-active-border-color"
  ],
  "--ti-tabs-item-border-bottom": [
    "--ti-tabs-item-bottom-border-weight",
    "--ti-tabs-item-bottom-border-style",
    "--ti-tabs-item-bottom-border-color"
  ],
  "--ti-tabs-icon-close-margin": [
    "--ti-tabs-icon-close-margin-vertical",
    "--ti-tabs-icon-close-margin-right",
    "--ti-tabs-icon-close-margin-left"
  ],
  "--ti-tooltip-padding": ["--ti-tooltip-padding-vertical", "--ti-tooltip-padding-horizontal"],
  "--ti-upload-list-picture-card-item-bgcolor": [
    "--ti-upload-list-picture-card-item-bg-color",
    "--ti-upload-list-picture-card-item-text-color"
  ],
  "--ti-user-account-padding": ["--ti-user-account-padding-vertical", "--ti-user-account-padding-horizontal"]
}
```
