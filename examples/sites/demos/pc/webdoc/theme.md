## 主题配置

`TinyVue` 多主题采用的是 `css` 变量，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。

主题涉及到的变量，查看方式：

源码：[basic-var.less](https://github.com/opentiny/tiny-vue/blob/dev/packages/theme/src/base/basic-var.less)

基础样式变量 `npm` 仓库路径：`@opentiny/vue-theme/theme`

### 使用预定义主题和动态切换主题

目前官方提供 4 套主题：

- 默认主题
- 无限主题 `tinyInfinityTheme`
- 欧若拉主题 `tinyAuroraTheme`
- XDesign 主题 `tinySmbTheme`

#### 通过 alias 使用预定义主题【目前仅支持：欧若拉主题 和 XDesign 主题】

vue.config.js 定义

```js
chainWebpack: (config) => {
  // XDesign 主题
  config.resolve.alias.set('@opentiny/vue-theme', '@opentiny/vue-theme/smb-theme')
  // aurora 主题 则是将以上smb主题中的'smb'字符全替换成 'aurora'即可
}
```

vite.config.js 定义

```js
resolve: {
  alias: [
    // XDesign 主题
    {
      find: /\@opentiny\/vue-theme\/(?!(smb))/,
      replacement: '@opentiny/vue-theme/smb-theme/'
    }
  ]
}
```

#### 主题初始化和动态切换主题的具体使用方式如下文所示，在 main.ts 文件中增加以下代码。

```js
import TinyThemeTool from '@opentiny/vue-theme/theme-tool'

import { tinySmbTheme } from '@opentiny/vue-theme/theme'

// 导入主题

new TinyThemeTool(tinySmbTheme, 'tinyStyleSheetId') // 初始化主题
```

如果你需要动态切换主题，可以将主题实例对象 theme 挂载到 Vue 实例中，然后在需要切换主题的地方，调用 theme 对象的 changeTheme 方法。

在 main.ts 文件中增加以下代码：

```ts
const theme = new TinyThemeTool(tinySmbTheme, 'tinyStyleSheetId') // 初始化主题
app.config.globalProperties.theme = theme // 将 theme 对象挂到 vue 实例中
```

在需要切换主题的组件中调用 changeTheme 方法进行主题切换。

```ts
import { getCurrentInstance } from 'vue'
import { tinySmbTheme } from '@opentiny/vue-theme/theme'

const theme = getCurrentInstance().appContext.config.globalProperties.theme

const changeTheme = (value) => {
  theme.changeTheme(tinySmbTheme)
}
```

如果你需要自定义自己的主题，可以通过以下方式定义主题对象。

```ts
// 自定义主题数据格式要求
const tinyTestTheme = {
  id: 'tiny-test-theme', // 主题的唯一id，每个主题必须唯一
  name: 'testTheme', // 主题的英文名称
  cnName: '测试主题', // 主题的中文名称
  data: { 'ti-base-color': '#f2f2f3' } //  主题数据
}
```

初始化主题或者切换主题时都可以使用该主题对象。

```ts
// 初始化主题
new TinyThemeTool(tinyTestTheme, 'tinyStyleSheetId')

// 切换主题
theme.changeTheme(tinyTestTheme)
```

### 配置 Design Config

有部分组件在不同主题下的图标或者交互不同，需要配置相应的 Design Config。

在 App.vue 文件中增加以下代码：

```html
<script setup lang="ts">
  import { ConfigProvider } from '@opentiny/vue'
  import designSmbConfig from '@opentiny/vue-design-smb'
</script>

<template>
  <config-provider :design="designSmbConfig">
    <my-app></my-app>
  </config-provider>
</template>
```

### 主题定制高阶使用方法

在全局作用域下添加自定义 `css` 变量。

```css
:root {
  --ti-base-color-white: #fefefe;
}
```

出于性能原因，更推荐你在类名下添加自定义 `css` 变量，而不是在全局的 :root 下。

```css
.tiny-test-class {
  --ti-base-color-white: #fefefe;
}
```

如果你只想自定义一个特定的组件，只需为某些组件单独添加内联样式。

```js
<tiny-button style="--ti-base-color-white: #fefefe">Button</tiny-button>
```

如果您想要通过 `js` 控制 `css` 变量，可以这样做：

```js
const el = document.documentElement

// 获取 css 变量
getComputedStyle(el).getPropertyValue('--ti-base-color-white')
// 设置 css 变量
el.style.setProperty('--ti-base-color-white', '#fefefe')
```

### 主题变量规范化整改，主题配置变量实现新旧变量名替换

整改背景：由于 `tiny-vue` 要对接主题化配置系统，`tiny-vue` 组件库在 `3.5.0` 版本之后，自定义变量的名称发生了变化;

例如：`--ti-base-color-selected-font-color` 已整改为`--ti-base-color-selected-text-color`； `--ti-alert-radius` 已整改为 `--ti-alert-border-radius`;

如果项目中使用了旧的 `css` 变量来调整样式，那么升级为 `tiny-vue` 新版本可能会无法生效，所以给出以下批量替换变量名的方法，解决新旧变量替换问题；使用步骤如下：

以替换项目中`src`目录下所有的旧变量名为例： 实现新旧变量名的替换

步骤一、点击下载新旧变量的映射表`newVars.json`和替换脚本`replaceVar.js`

<script setup>
  import { pubUrl } from '@/tools'
</script>

<a :href="pubUrl('@demos/resource/newVars.json')" target="_blank" download="newVars.json">newVars.json 文件</a> 和 <a :href="pubUrl('@demos/resource/replaceVar.js')" target="_blank" download="replaceVar.js">replaceVar.js 文件</a>

步骤二、将 `newVars.json` 和 `replaceVar.js` 放到项目根目录下，与 src 目录同级；

<img :src="pubUrl('@demos/resource/theme-demo.png')" class="image" style="box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.14); width: 30vw" ><br><br>

步骤三、在项目根目录下，执行以下命令进行替换；

`node replaceVar.js`

特殊情况：需手动替换的情况，如何查看哪些变量需要手动替换，细心往下看；

`手动替换的背景：`在映射表 `newVars.json` 中，`key` 是旧变量，`value` 是新变量；如果使用了类似于`--ti-button-padding`的旧变量，比较特殊，称为`特殊变量`；因为其拆分成了两个或以上的新变量，所以对应的 `value` 是一个数组，这种情况脚本无法自动化替换，需要自己手动替换；如何替换？

步骤一、取消 replaceVar.js 文件第 20 行注释，再重复以上步骤三；即可知道哪些地方的变量需要手动替换（末尾有附上特殊变量表）

```js
// console.log('需要手动替换的文件路径是', statPath, '需要手动替换的变量是', key)
```

步骤二、根据打印的文件路径和变量，找到变量进行修改，大致有以下几种例子，可以覆盖所有需要手动替换的情况：

`普通情况`：

例 1：查特殊变量表可知：类似于`--ti-button-padding`的旧变量拆分成了`2`个新变量，`--ti-button-padding-vertical` 和 `--ti-button-padding-horizontal`，按字面意思，分别为`垂直方向`和`水平方向`的 padding

若项目原来的样式是：`padding: var(--ti-button-padding);`需手动替换成：`padding: var(--ti-button-padding-vertical) var(--ti-button-padding-horizontal);`

例 2：类似于`--ti-pager-primary-color`的旧变量拆分成了`3`个新变量，`--ti-pager-primary-bg-color`、`--ti-pager-primary-text-color`和`--ti-pager-primary-border-color` ，按字面意思，分别为`背景颜色`、`文本颜色`和`边框颜色`

若原来的样式是：`--ti-pager-primary-color：red;`需手动替换成：`--ti-pager-primary-bg-color： red; --ti-pager-primary-text-color: red; --ti-pager-primary-border-color: red;`

`特殊情况`：

例 3：查特殊变量表可知: 类似于：含有`border`字段的旧变量，如果拆分成的新变量分别包含：`border-weight（边框厚度）,border-style（边框样式）,border-color（边框颜色）`，比如`--ti-tabs-item-active-border`拆成`--ti-tabs-item-active-border-weight，--ti-tabs-item-active-border-style，--ti-tabs-item-active-border-color`;

若原来的样式是`--ti-tabs-item-active-border: 1px solid red;`需手动替换成：`--ti-tabs-item-active-border-weight: 1px; --ti-tabs-item-active-border-style: solid; --ti-tabs-item-active-border-color: red;`

例 4：类似于`--ti-radio-button-checked-hover-color`拆分成的变量中有包含`box-shadow`字段的，需要单独写`box-shadow`样式。

若原来的样式是：`--ti-radio-button-checked-hover-color：red`需手动替换成：`--ti-radio-button-checked-hover-bg-color：red; --ti-radio-button-checked-hover-border-color: red; --ti-radio-button-checked-hover-box-shadow: -1px 0 0 0 red`(box-shadow 的值像正常写样式一样，可以自定义)；

最后附上`特殊变量`的映射表，`newVars.json` 里的特殊变量共有 `48` 个，如下所示；

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
