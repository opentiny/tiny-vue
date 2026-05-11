# TinyVue 组件开发规范

## 核心原则

在 `packages/vue/src` 目录中，每个组件有一个独立的文件夹进行隔离。

每一个组件的结构为：

1.  index.ts: 整个组件的对外导出对象
2.  src/index.ts: 整合 pc/mobile-first 模板为一个统一的组件。通常要把pc/mobile-first模板的全量属性定义在这里并导出给2个模板使用
3.  src/pc.vue: pc 浏览器下的模板，需要引入外部的css样式文件。
4.  src/mobile-first.vue: 移动优先的浏览器模板， 使用tailwind进行内联类名。

## 详细解释每个文件的编写规范

1. index.ts

该文件是整个组件的对外导出对象，负责给组件添加install方法和veresion属性。 示例如下：

```typescript
import Alert from './src/index'
import { version } from './package.json'

Alert.install = function (Vue) {
  Vue.component(Alert.name, Alert)
}

Alert.version = version

if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Alert.install(window.Vue)
  }
}

export default Alert
```

2. src/index.ts

整合 pc/mobile-first 模板为一个统一的组件。示例如下：

```typescript
import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

export const alertProps = {
  // ......
}

export default defineComponent({
  name: $prefix + 'Alert',
  props: alertProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
```

同时引入2个模板的语法为 `import template from 'virtual-template?pc|mobile-first'` ， 它是非标准的TS用法，有专门的`vite`插件会将其编译为两个模板的引入。 `template`是一个函数，它需要传入 `$setup`函数。

3. src/pc.vue 和 src/mobile-first.vue 的模板共同规范

这2个文件是组件的**视图模板**，

- 负责 UI 渲染和用户交互
- 通过适配层的 `setup` 调用 renderless 层的函数
- 可以包含2个跨端模板（如 `mobile-first.vue`、`pc.vue`）
- 禁止内联样式，需要从外部引入。比如：import '@opentiny/vue-theme/alert/index.less'
- 必须引入类型定义文件。 比如： import type { IAlertApi } from '@opentiny/vue-renderless/types/alert.type'

一个标准的模板文件写法如下：

```vue
<template>
  <!-- 模板内容 -->
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/alert/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import type { IAlertApi } from '@opentiny/vue-renderless/types/alert.type'
import '@opentiny/vue-theme/alert/index.less'

export default defineComponent({
  props: [...props /** 其它属性名 */],
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IAlertApi
  }
})
</script>
```

**适配层 setup** 函数作用：

1. 纽带作用

我们从 '@opentiny/vue-common' 引入 `setup`函数， 它是联系`无渲染逻辑层` 和 `模板`的纽带。 将`无渲染逻辑层`的组件逻辑函数传入`setup`后，
setup内部会调用该函数，并传入组件实例的 porps, vue官方包对象，以及适配层构造的vm上下文对象，这样`无渲染逻辑层`的组件逻辑函数就会获得组件的所有令牌。 最后它会返回一个 {state,api} 对象，以便模板的绑定。

2. 处理模板选择

如果组件是跨端组件，那么它本质上是一个双层组件，父组件是用来选择使用 pc.vue ,mobile-first.vue 哪个模板， 子组件就是真实的组件。 `setup`函数内部负责向父组件同步状态和属性。此时 setup可选择性传入 `mono:false` 的属性，来告诉setup函数来同步这个状态和属性。

如果组件是一个单一组件，没有通用 `$setup` 来选择模板，那么在调用setup时， 必须传入 `mono:true` 来指示，它是一个单一组件。示例如下：

```typescript
  setup(props, context) {
    return setup({ props, context, renderless, api, mono:true }) as unknown as IAlertApi
  }
```

3. 向`无渲染逻辑层`的组件逻辑函数传入额外的数据

`无渲染逻辑层`的设计上，它不能依赖第三方的库，如果之它需要引入其它对象，需要在 `模板层` 引入它们，并通过`setup` 的`extendOptions`属性 传入 `无渲染逻辑层`的组件逻辑函数中，示例如下：

```typescript
  import FluentEditor from '@opentiny/fluent-editor'

  setup(props, context) {
    return setup({ props, context, renderless, api,
      extendOptions: {
        FluentEditor
      }})
  }
```

## 模板规范

1. 必须使用 vue2, vue3同时兼容的模板语法。
2. 必须是单根节点
3. 不允许 v-if / v-for在同一个节点上， 建议使用 <template> 来使用 v-if / v-for
4. 不允许使用 `id` 等属性
5. 允许使用 Teleport 组件， 但必须从 '@opentiny/vue-common' 包中导入。
6. 模板中可以使用 `a函数`，比如： ` v-bind="a($attrs, ['class', 'style', 'title', 'id'], true)"` ， `a 函数`的意思是从$attrs上过滤出一些属性绑定到元素上。 最后一个参数为true的话，表示这些属性要保留下来，如果为false，则表示这些属性要过滤掉，其它的属性才保留下来。
7. 模板中可以使用 `t函数`, 它是用来加载国际化内容。 比如： `{{ t('ui.base.cancel') }}`
8. 模板中建议增加 `aria-*`的 无障碍信息，尤其是表单元素和图标元素等。

### mobile-first.vue的规范

1. 它使用 `tailwind css`进行模板开发，不依赖外部的样式库。
2. 如果模板中的类名过长，可以将类名转换为变量，约定这些变量存放在 `tokens.ts` 文件中， 示例如下

```typescript token.ts
export const classes = {
  'button': 'inline-block.....',
  'size-default': 'h-10 text-sm sm:h-7'
  // ....
}
```

3. mobile-first模板中，由于不能使用类名表示节点的作用，建议给关键的dom元素，增加 `data-tag`属性来表示dom的作用。根结点统一要增加 data-tag, 示例如下：

```html
<button data-tag="tiny-button"></button>
```

## 参考资源

- [最终导出示例](../../packages/vue/src/button/index.ts)
- [整合模板为一个统一的组件示例](../../packages/vue/src/button/src/index.ts)
- [Button pc模板示例](../../packages/vue/src/button/src/pc.vue)
- [Button mobile-first模板示例](../../packages/vue/src/button/src/mobile-first.vue)

## 多模式介绍

TinyVue 提供了 PC 和 Mobile 组件库，两套组件库对外是同一份依赖`@opentiny/vue`，同名组件通过`tiny_mode`切换组件模式。  
针对 SaaS 业务场景，TinyVue 提供了基于`tailwind`实现的多端组件，  
在 TinyVue 基础上新增`多端模式`，支持业务切换同名组件，同名组件默认情况下是`桌面模式`即`PC 组件`。

### 模式分类

AUI 组件库提供了三种组件模式：`桌面模式`、`多端模式(移动优先)`

| 模式     | 模式介绍 | 模式配置     |
| -------- | -------- | ------------ |
| 桌面模式 | 纯 PC    | pc           |
| 多端模式 | 多端一致 | mobile-first |

### 模式切换

AUI 组件模式设置优先级

`单组件切换` > `模式透传` > `全局切换` > `组件默认模式`

#### 单组件切换

可在组件标签上配置`tiny_mode`属性，指定组件模式，就会选择对应模板渲染：

- 桌面模式：`pc`
- 多端模式：`mobile-first`

参考示例如下：

```html
<tiny-button tiny_mode="mobile-first">默认按钮</tiny-button>
```

#### 全局切换

通过在 Vue 的原型上全局设置`tiny_mode`，可以指定所有同名组件的默认模式。  
在项目入口  `src/main.js`  文件中导入 Vue 依赖后，增加如下配置：

```js
// Vue 2.0
Vue.prototype.tiny_mode = { value: 'mobile-first' }

// Vue 3.0
app.config.globalProperties.tiny_mode = { value: 'mobile-first' }
```

#### 模式透传

如果想在页面部分区域切换模式，如卡片级控制，  
可以在外层 AUI 组件上添加`tiny_mode_root`属性，透传当前 AUI 组件的`tiny_mode`配置到所有子级 AUI 组件上，  
参考 demo 示例如下：

```html
<template>
  <div>
    <tiny-layout>
      <tiny-row tiny_mode="pc" tiny_mode_root>
        <tiny-button>PC 按钮</tiny-button>
        <tiny-button type="primary" native-type="submit">主要按钮</tiny-button>
        <tiny-button type="success">成功按钮</tiny-button>
        <tiny-button type="info">信息按钮</tiny-button>
        <tiny-button type="warning">警告按钮</tiny-button>
        <tiny-button type="danger">危险按钮</tiny-button>
      </tiny-row>
      <tiny-row tiny_mode="mobile-first" tiny_mode_root>
        <tiny-button>多端按钮</tiny-button>
        <tiny-button type="primary" native-type="submit">主要按钮</tiny-button>
        <tiny-button type="success">成功按钮</tiny-button>
        <tiny-button type="info">信息按钮</tiny-button>
        <tiny-button type="warning">警告按钮</tiny-button>
        <tiny-button type="danger">危险按钮</tiny-button>
      </tiny-row>
    </tiny-layout>
  </div>
</template>

<script>
  import { Button, Layout, Row } from '@opentiny/vue'

  export default {
    components: {
      TinyButton: Button,
      TinyLayout: Layout,
      TinyRow: Row
    }
  }
</script>
```
