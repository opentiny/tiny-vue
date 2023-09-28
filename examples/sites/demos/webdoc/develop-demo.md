<!--anchor:on-->

## 开发示例

本文以 [Vite](https://cn.vitejs.dev/) 工程为例，展示如何使用 `TinyVue` 组件。

### 搭建 Vite 项目

使用以下命令创建 `Vite` 工程：

```bash
yarn create vite
# 或者
npm init vite@latest
```

创建完 `Vite` 工程之后进入到工程目录，执行以下命令下载依赖和启动工程：

```bash
yarn
# 或者
npm install

yarn dev
# 或者
npm run dev
```

启动后浏览器如果显示以下界面，则表示 `Vite` 工程启动成功。

<img src="@demos/resource/vite-vue.png" class="image" style="box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.14)" ><br><br>

### 安装并使用 `TinyVue` 组件

执行以下命令安装 `Vue 3.0` 版本的 `TinyVue` 组件库 ：

```bash
yarn add @opentiny/vue@3
# 或者
npm install @opentiny/vue@3
```

然后修改项目的 `vite.config.js` ，添加以下代码突出显示的部分：

```js {8-10}
// vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': { ...process.env }
  }
})
```

安装完成后，请按 `Ctrl + C` 中断关闭当前服务，然后执行 `yarn dev # npm run dev` 重启服务；

接下来修改工程中的 `App.vue` 文件， 添加以下代码突出显示的部分（以 `Button` 组件为例）：

```js {5,11}
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import { Button as TinyButton } from '@opentiny/vue'
</script>

<template>
  <img alt="Vue logo" src="@demos/resource/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <TinyButton type="success">按钮</TinyButton>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

以上写法中`<script setup>` 是在单文件组件 `SFC` 中使用组合式 `API` 的编译时语法糖，具体用法可以参考 [Vue 官网](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)。

如果对上述语法不熟悉，也可以使用标准的 `SFC` 格式：

```js
<template>
  <TinyButton type="success">按钮</TinyButton>
</template>

<script>
import { Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  }
}
</script>
```

另外，也可以使用单组件引入的方式使用 `TinyVue` 组件：

```js
<template>
  <TinyButton type="success">按钮</TinyButton>
</template>

<script>
import Button from '@opentiny/vue-button'

export default {
  components: {
    TinyButton: Button
  }
}
</script>
```

此时浏览器界面上应该出现如下所示的绿色按钮，表明 `TinyVue` 组件已经引入并生效。

<img src="@demos/resource/tiny-vue.png" class="image" style="box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.14)" ><br><br>
