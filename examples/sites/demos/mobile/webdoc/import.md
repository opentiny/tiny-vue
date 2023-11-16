<!--anchor:on-->

## 引入组件

`TinyVue` 支持多组件引入、单组件引入以及完整引入三种方式。

### 多组件引入（推荐）

多组件引用即从依赖包 `@opentiny/vue` 中引用多个组件，参考示例如下（以 `Button` 和 `Alert` 组件为例）：

```vue
<template>
  <div>
    <tiny-button>TinyVue</tiny-button>
    <tiny-alert description="TinyVue"></tiny-alert>
  </div>
</template>

<script>
import { Button, Alert } from '@opentiny/vue';

export default {
  components: {
    TinyButton: Button,
    TinyAlert: Alert,
  },
};
</script>
```

### 单组件引入

`TinyVue` 每个组件都可以独立安装、独立使用，即只安装单个组件的依赖并单独引用该组件。

以 `Button` 和 `Alert` 组件为例，执行以下命令安装：

```bash
yarn add @opentiny/vue-button @opentiny/vue-alert
# 或者
npm install @opentiny/vue-button @opentiny/vue-alert
```

在页面中的使用 `Button` 和 `Alert` 组件的示例如下：

```vue
<template>
  <div>
    <tiny-button>TinyVue</tiny-button>
    <tiny-alert description="TinyVue"></tiny-alert>
  </div>
</template>

<script>
import Button from '@opentiny/vue-button';
import Alert from '@opentiny/vue-alert';

export default {
  components: {
    TinyButton: Button,
    TinyAlert: Alert,
  },
};
</script>
```

### 完整引入（不推荐）

完整引入组件后，就不需每个页面都 import 组件和局部注册，只需在 `main.js` 中全局注册，但因此会失去 `tree-shaking` 的能力，打包后会有冗余代码。

`Vue 3.0` 版本完整引入的示例如下：

```js
import { createApp } from 'vue';
import TinyVue from '@opentiny/vue';

const app = createApp(App);
app.use(TinyVue);
```

`Vue 2.0` 版本完整引入的示例如下：

```js
import Vue from 'vue';
import TinyVue from '@opentiny/vue';

Vue.use(TinyVue);
```
