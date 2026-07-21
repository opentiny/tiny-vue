# @opentiny/vue-directive 开发规范

## 适用场景

- 模板层需要声明式 DOM 行为（点击外部关闭、无限滚动、文本高亮、自动 Tooltip 等）
- 逻辑与具体组件解耦，可在多个 `pc.vue` / `mobile-first.vue` 中复用
- 不适合放入 renderless 的、强依赖 DOM 或全局监听的交互

## 核心原则

### 1. 包定位

`packages/vue-directive` 发布为 `@opentiny/vue-directive`。

- 指令实现放在 `src/<directive-name>.ts`
- 在 `index.ts` 统一导出
- 可依赖 `@opentiny/utils`、`@opentiny/vue-common`（如 `auto-tip` 使用 Tooltip 与 `hooks`）
- **业务逻辑仍应优先下沉 renderless**；指令只负责 DOM 绑定与事件桥接

### 2. 内置指令一览

| 导出                | 指令名                 | 说明                                                        |
| ------------------- | ---------------------- | ----------------------------------------------------------- |
| `Clickoutside`      | `v-clickoutside`       | 点击元素外部触发回调，支持 `.mousedown` / `.mouseup` 修饰符 |
| `AutoTip`           | `v-auto-tip`           | 文本溢出时自动展示 Tooltip                                  |
| `InfiniteScroll`    | `v-infinite-scroll`    | 滚动到底加载更多                                            |
| `HighlightQuery`    | `v-highlight-query`    | 高亮匹配关键字                                              |
| `ObserveVisibility` | `v-observe-visibility` | 元素可见性监听                                              |
| `RepeatClick`       | `v-repeat-click`       | 长按/重复点击                                               |

文档示例：[自定义指令](https://opentiny.design/tiny-vue/zh-CN/smb-theme/components/directives-auto-tip)

### 3. 在组件模板中注册（必须）

指令在 **vue 模板层** 注册，不在 renderless 中注册。

**Vue 3 写法**（推荐通过 `directive` 适配函数兼容 Vue 2 生命周期名）：

```vue
<script lang="ts">
import { setup, directive, defineComponent } from '@opentiny/vue-common'
import { Clickoutside, AutoTip } from '@opentiny/vue-directive'

export default defineComponent({
  directives: directive({ Clickoutside, AutoTip }),
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>

<template>
  <div v-clickoutside="handleClose" v-auto-tip>...</div>
</template>
```

**仅含 Vue 2 钩子（`bind`/`inserted`/`unbind`）的指令**，应通过 `directive({ ... })` 包装。部分指令（如 `ObserveVisibility`、`HighlightQuery`）已在实现内同时声明 Vue 2 / Vue 3 钩子，可直接注册：`directives: { ObserveVisibility }`。

`directive` 辅助函数位于适配层，用于统一 Vue 2 / Vue 3 指令钩子名：

```typescript
// packages/vue-common/src/adapter/vue3/index.ts
mapping(content, 'bind', 'beforeMount')
mapping(content, 'inserted', 'mounted')
mapping(content, 'update', 'updated')
mapping(content, 'unbind', 'unmounted')
```

### 4. 指令实现规范

#### 指令钩子写法

**推荐（新指令）**：实现 `bind` / `update` / `unbind`，由 `directive()` 映射为 Vue 3 的 `beforeMount` / `updated` / `unmounted`：

**特例 `RepeatClick`**：导出为函数而非对象，需手动包装：

```typescript
import { RepeatClick } from '@opentiny/vue-directive'

directives: {
  repeatClick: {
    bind: RepeatClick
  } // 模板中使用 v-repeat-click
}
```

**特例 `HighlightQuery` / `ObserveVisibility`**：实现内已同时声明 Vue 2 / Vue 3 钩子，可直接 `directives: { HighlightQuery }`，无需再经 `directive()` 转换。

新指令推荐模板：

```typescript
import { on, isServer } from '@opentiny/utils'

export default {
  bind(el, binding, vnode) {
    // 初始化
  },
  update(el, binding, vnode) {
    // 更新 binding
  },
  unbind(el) {
    // 清理监听、移除 DOM 副作用
  }
}
```

#### 全局监听

若需 `document` 级监听（如 `Clickoutside`），在模块顶层用 `isServer` 守卫，维护共享 `nodeList`，在 `unbind` 中务必移除引用，防止泄漏。

#### Shadow DOM

点击外部判断需使用 `event.composedPath()`，参考 `clickoutside.ts`。

### 5. 典型用法示例

**Clickoutside**

```html
<!-- 默认：外部按下并松开才触发 -->
<div v-clickoutside="handleClose"></div>
<!-- 修饰符 -->
<div v-clickoutside.mousedown="handleClose"></div>
<div v-clickoutside.mouseup="handleClose"></div>
```

**AutoTip**

```html
<div v-auto-tip>长文本...</div>
<div v-auto-tip="{ content: '自定义', placement: 'top', effect: 'dark' }"></div>
```

绑定值为 `false` / 空时禁用。模板内文字节点需用标签包裹，且避免指令节点直接包含裸文本节点（详见 `highlight-query.ts` 注释）。

**InfiniteScroll**

```html
<div v-infinite-scroll="loadMore" :infinite-scroll-disabled="loading"></div>
```

### 6. 新增指令流程

1. 在 `packages/vue-directive/src/` 新增实现，默认导出指令对象
2. 在 `packages/vue-directive/index.ts` 具名导出
3. 在使用的 `pc.vue` / `mobile-first.vue` 中 `import` 并通过 `directives: directive({ ... })` 注册
4. 优先使用 `@opentiny/utils` 的 `on`/`off`、`throttle`、`getScrollContainer` 等
5. 若需组件方法，通过 `binding.expression` 或 `binding.value` 与 `vnode.context` 通信（Vue 3 项目注意与 `setup` 返回方法的兼容方式，保持与现有指令一致）
6. 在 `examples/sites/demos` 补充演示（若对用户可见）

### 7. 禁止事项

- ❌ 不得在 renderless 的 `index.ts` 中注册或使用 `v-*` 指令
- ❌ 不得在指令中编写组件级业务状态机（应通过 binding 调用 renderless 暴露的方法）
- ❌ 不得跳过 `unbind` 清理
- ❌ 新增指令时避免直接 `import from 'vue'`，DOM 工具走 `@opentiny/utils`，组件/渲染走 `@opentiny/vue-common`

## 参考资源

- [Clickoutside](../../packages/vue-directive/src/clickoutside.ts)
- [AutoTip](../../packages/vue-directive/src/auto-tip.ts)
- [select pc 模板注册示例](../../packages/vue/src/select/src/pc.vue)
