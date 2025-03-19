# 深色模式

`TinyVue` 组件库从 `v3.22.0` 版本开始支持深色模式啦！！！

## 如何启用深色模式

### 方法一：HTML 类名切换

在入口文件 `main.js` 引入深色主题样式文件

```js
// 引入深色模式样式文件
import '@opentiny/vue-theme/dark-theme-index.css'
```

然后直接在 HTML 根元素添加 `dark` 类名

```html
<html class="dark">
  <head></head>
  <body></body>
</html>
```

如果您想动态切换，可以自己写 js 切换样式，示例如下：

```js
// 切换为深色模式
document.documentElement.classList.add('dark')

// 切换为亮色模式
document.documentElement.classList.remove('dark')
```

也可以使用业界现成的切换方案，建议使用 [useDark | VueUse](https://vueuse.org/core/useDark/)

### 方法二：使用 TinyThemeTool 切换

类似于主题切换功能，您可以使用 `TinyThemeTool` 类来管理深色模式：

```js
import TinyThemeTool, { tinyDarkTheme } from '@opentiny/vue-theme/theme-tool'

const themeTool = new TinyThemeTool(tinyDarkTheme)
```

## 自定义深色模式变量

您可以通过创建新的 CSS 文件来覆盖默认的深色模式变量：

```css
html.dark {
  /* 自定义深色模式背景色 */
  --tv-base-color: #1d1e1f;
}
```

然后在入口文件中导入：

```js
import '@opentiny/vue-theme/dark-theme-index.css'

// 导入自定义深色模式变量
import './styles/dark-theme.css'
```

这样，就可以在保留 TinyVue 组件库深色模式基础上，实现个性化的深色主题定制。
