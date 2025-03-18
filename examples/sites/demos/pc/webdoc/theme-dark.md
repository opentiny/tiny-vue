# 暗黑模式

`TinyVue` 组件库从 `v3.22.0` 版本开始支持暗黑模式啦！！！

## 使用方式

在入口文件 `main.js` 引入暗色主题样式文件（如果使用方法三 `theme-tool` 方式可以不引入 `dark-theme.css` ）

```js
// 引入暗黑模式样式文件
import '@opentiny/vue-theme/base/dark-theme.css'
```

## 如何启用暗黑模式

### 方法一：HTML 类名切换

直接在 HTML 根元素添加 `dark` 类名

```html
<html class="dark">
  <head></head>
  <body></body>
</html>
```

如果您想动态切换，建议使用 [useDark | VueUse](https://vueuse.org/core/useDark/)

### 方法二：JavaScript 动态切换

```js
// 切换为暗黑模式
document.documentElement.classList.add('dark')

// 切换为亮色模式
document.documentElement.classList.remove('dark')
```

### 方法三：使用 TinyThemeTool 切换

类似于主题切换功能，您可以使用 `TinyThemeTool` 类来管理暗黑模式：

```js
import TinyThemeTool, { tinyDarkTheme } from '@opentiny/vue-theme/theme-tool'

const themeTool = new TinyThemeTool(tinyDarkTheme)
```

## 自定义暗黑模式变量

您可以通过创建新的 CSS 文件来覆盖默认的暗黑模式变量：

```css
html.dark {
  /* 自定义暗黑模式背景色 */
  --tv-base-color: #1d1e1f;
}
```

然后在入口文件中导入：

```js
import '@opentiny/vue-theme/base/dark-theme.css'

// 导入自定义暗黑模式变量
import './styles/dark-theme.css'
```

这样，就可以在保留 TinyVue 组件库暗黑模式基础上，实现个性化的暗黑主题定制。
