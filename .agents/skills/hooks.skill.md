# @opentiny/vue-hooks 开发规范

## 适用场景

- 多个组件共享的组合式逻辑（Popper、弹层、父子关系、窗口尺寸等）
- renderless 的 `vue.ts` 中需要 DOM/生命周期相关能力，但逻辑仍希望可测试、可复用
- 不宜放入 `@opentiny/utils` 的、需要 Vue 生命周期或响应式 API 的逻辑

## 核心原则

### 1. 包定位

`packages/vue-hooks` 发布为 `@opentiny/vue-hooks`。

- **可以**依赖 `@opentiny/utils`
- **不得**直接 `import from 'vue'`——Vue API 由调用方从 `hooks` 解构后传入（柯里化或直接传参，见下文）
- renderless 与 vue-common 通过 renderless 第二参数或合并后的 `hooks` 对象实例化

### 2. 现有 Hooks 一览

| 导出               | 文件                  | 用途                                         |
| ------------------ | --------------------- | -------------------------------------------- |
| `useEventListener` | `useEventListener.ts` | 绑定/自动清理 DOM 事件，支持 target 为 ref   |
| `useWindowSize`    | `useWindowSize.ts`    | 窗口宽高响应式                               |
| `useRect`          | `useRect.ts`          | 元素尺寸与位置                               |
| `useTouch`         | `useTouch.ts`         | 触摸手势                                     |
| `useUserAgent`     | `useUserAgent.ts`     | UA / 浏览器能力判断                          |
| `useInstanceSlots` | `useInstanceSlots.ts` | 插槽访问（vue-common 已预绑定 `isVue2`）     |
| `useRelation`      | `useRelation.ts`      | 父子组件关系树（Tabs、Form 等）              |
| `useFloating`      | `use-floating.ts`     | 浮层定位                                     |
| `useLazyShow`      | `use-lazy-show.ts`    | 延迟展示                                     |
| `userPopper`       | `vue-popper.ts`       | Popper 弹层（注意导出名拼写为 `userPopper`） |
| `usePopup`         | `vue-popup.ts`        | Popup 弹层管理                               |

### 3. 两种调用形态

#### 形态 A：柯里化（多数 hooks）

第一个参数为 Vue 运行时 API 集合，返回可在 renderless 中调用的函数。适用于 `useEventListener`、`useRelation`、`useRect` 等。

```typescript
// packages/vue-hooks/src/useEventListener.ts
import { on, off, isServer } from '@opentiny/utils'

export const useEventListener =
  ({ unref, isRef, watch, nextTick, onMounted, onUnmounted, onActivated, onDeactivated }) =>
  (type, listener, options = {}) => {
    if (isServer) return
    // ... 实现
  }
```

在 renderless 的 `vue.ts` 中使用：

```typescript
import { useEventListener } from '@opentiny/vue-hooks'

export const renderless = (props, hooks, utils) => {
  const addListener = useEventListener(hooks)
  addListener('scroll', onScroll, { target: scrollRef })
  // ...
}
```

在 vue-common 中预绑定 Vue2 差异的示例：

```typescript
import { useRelation as createUseRelation } from '@opentiny/vue-hooks'
import hooks from './adapter'

export const useRelation = createUseRelation({ ...hooks, isVue2 })
```

#### 形态 B：直接工厂（`userPopper`、`usePopup`）

接收合并了 Vue API 与业务上下文的对象，**不是**柯里化：

```typescript
import { userPopper } from '@opentiny/vue-hooks'

export const renderless = (
  props,
  { watch, reactive, onBeforeUnmount, onDeactivated, nextTick, toRefs },
  { vm, slots, emit }
) => {
  const popper = userPopper({
    emit,
    nextTick,
    onBeforeUnmount,
    onDeactivated,
    props,
    reactive,
    vm,
    slots,
    toRefs,
    watch
  })
  const state = initState({ reactive, popper })
  // 返回 updatePopper、destroyPopper、doDestroy 及 popper 相关 state 字段
}
```

`usePopup` 用法见 `dialog-box/vue.ts`，返回 `{ open, close, PopupManager, ...toRefs(state) }`。

### 4. useRelation 使用要点

用于「父收集子、子注册到父」的场景。典型写法（参考 `tabs-mf/vue.ts`）：

```typescript
import { useRelation } from '@opentiny/vue-hooks'

Object.assign(api, { useRelation: useRelation(hooks) })

api.useRelation({
  relationKey: `tabs-${state.tabsId}`,
  relationContainer: () => vm.$el.querySelector('[data-tag=tiny-tabs-hidden]'),
  childrenKey: 'childTabs',
  onChange: () => api.onRelationChange()
})
// 返回 { children, index, delivery }
```

- `relationKey` 必须在父子树中一致
- 子组件通过 inject 注册，在 `onUnmounted` 时自动 `unlink`
- 也可从 `@opentiny/vue-common` 导入已绑定 `isVue2` 的 `useRelation`

### 5. userPopper / usePopup

Popper、Dialog、Select 等浮层在 renderless `vue.ts` 中按**形态 B**调用，将 `popper` / `usePopup` 传入 `initState` 或 `initApi`，勿 `Object.assign` 到整个 `api`。

内部依赖 `@opentiny/utils` 的 `PopupManager`、`PopperJS`、`on`/`off` 等，勿在 renderless 重复实现定位逻辑。

### 6. 新增 Hook 流程

1. 在 `packages/vue-hooks/src/` 新建实现文件
2. 在 `packages/vue-hooks/index.ts` 导出
3. 仅使用 `@opentiny/utils` 处理 DOM/工具，Vue API 一律从参数解构
4. 在 renderless 或 vue-common 中接入并补充类型（`packages/vue-hooks/types/shared.type.ts` 若需扩展）
5. 避免与 utils 中「待改造成 hooks」的模块重复（如 `touch`）

### 7. 禁止事项

- ❌ 不得在 vue-hooks 中 `import { ref } from 'vue'`
- ❌ 不得在 hook 内写组件模板或 JSX
- ❌ 不得被 `packages/utils` 反向依赖
- ❌ renderless 的 `index.ts` 纯函数文件中不宜直接调用 vue-hooks（应在 `vue.ts` 中组装）

## 参考资源

- [入口导出](../../packages/vue-hooks/index.ts)
- [useEventListener](../../packages/vue-hooks/src/useEventListener.ts)
- [useRelation](../../packages/vue-hooks/src/useRelation.ts)
- [sticky 组件中的组合使用](../../packages/renderless/src/sticky/vue.ts)
- [tabs-mf 中 useRelation](../../packages/renderless/src/tabs-mf/vue.ts)
- [select-dropdown 中 userPopper](../../packages/renderless/src/select-dropdown/vue.ts)
