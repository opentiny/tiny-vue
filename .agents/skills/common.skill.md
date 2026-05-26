# @opentiny/vue-common 适配层开发规范

## 适用场景

- 理解 TinyVue 如何同时支持 Vue 2.6 / 2.7 / Vue 3
- 编写或调试组件 `setup`、`$setup`、跨端模板选择
- 使用 `defineComponent`、`hooks`、`directive`、`svg`、`mergeClass` 等适配 API
- 排查「仅在某一 Vue 版本下复现」的问题

## 核心原则

### 1. 包定位

`packages/vue-common` 发布为 `@opentiny/vue-common`，是整个组件库的 **Vue 版本适配与运行时胶水层**：

- 通过 `virtual:common/adapter/vue` 在构建时指向 `adapter/vue2` | `vue2.7` | `vue3`
- 向 renderless 提供统一的 `hooks` 对象（即对应 Vue 版本的 API）
- 提供 `$setup` / `setup`，连接模板与 renderless
- 提供主题/模式解析、设计规范注入、图标 `svg` 包装等

**修改约束**：表结构变更、新 Vue 版本支持需充分评估；日常组件开发**优先改 renderless / vue 模板**，避免随意改动适配层行为。`SKILL.md` 中亦提示：非必要不修改适配层。

### 2. 目录结构

```text
packages/vue-common/src/
├── index.ts              # 对外主入口：$setup、setup、$prefix、svg 等
├── adapter/
│   ├── index.ts          # 导出当前 Vue 版本 adapter
│   ├── vue2/
│   ├── vue2.7/
│   └── vue3/
├── breakpoint.ts         # useBreakpoint 响应式断点
├── csscls.ts             # 类名序列化、去重
├── usedefer.ts           # useDefer
└── generateIcon.ts       # 渐变图标 id 处理
```

### 3. 组件开发中最常用的 API

| API                                | 用途                                                              |
| ---------------------------------- | ----------------------------------------------------------------- |
| `$prefix`                          | 组件名前缀 `'Tiny'`，如 `TinyButton`                              |
| `$props` / `props`                 | 框架保留 prop：`tiny_mode`、`tiny_renderless`、`tiny_template` 等 |
| `defineComponent`                  | 定义组件（跨版本）                                                |
| `$setup`                           | 跨端父组件：根据 `tiny_mode` 选择 `pc` / `mobile-first` 模板      |
| `setup`                            | 子模板中连接 renderless，返回模板绑定对象                         |
| `hooks`                            | 当前 Vue 版本的 API 集合，可传给 renderless 第二参数              |
| `isVue2` / `isVue3`                | 版本判断（renderless 中应尽量避免，优先用 utils/vm）              |
| `directive`                        | 统一 Vue2/3 指令钩子名                                            |
| `svg`                              | 包装 `@opentiny/vue-theme` 的 svg 为图标组件                      |
| `mergeClass`                       | mobile-first 下合并 Tailwind 类名                                 |
| `filterAttrs`（模板中 `a`）        | 过滤 `$attrs` 绑定                                                |
| `Teleport` / `KeepAlive`           | 须从此包导入以保证兼容                                            |
| `useBreakpoint` / `useDefer`       | 布局与渲染优化                                                    |
| `useInstanceSlots` / `useRelation` | 已注入 `isVue2` 的 hooks 封装                                     |

### 4. 双层组件：$setup + 子模板 setup

**跨端组件**（`pc.vue` + `mobile-first.vue`）：

```typescript
// packages/vue/src/alert/src/index.ts
import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

export default defineComponent({
  name: $prefix + 'Alert',
  props: alertProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
```

`$setup` 会：

1. `resolveMode` 解析 `tiny_mode`（`pc` | `mobile` | `mobile-first`）
2. 通过 `virtual-template` 插件加载对应模板
3. `renderComponent` 渲染子组件，并合并设计规范 `designConfig` 中的默认 props

**具体模板**（`pc.vue`）：

```typescript
import { setup, defineComponent, props } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/alert/vue'
import type { IAlertApi } from '@opentiny/vue-renderless/types/alert.type'

export default defineComponent({
  props: [...props, 'type', 'size' /* 其它组件 props */],
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IAlertApi
  }
})
```

### 5. setup 与 renderless 的协作

`setup` 内部流程概要：

1. 选择 `props.tiny_renderless` 或入参 `renderless`
2. 构造 `utils`（含 `vm`、`emit`、`t`、`designConfig`、`mode`、`mergeClass` 等）
3. 调用 `render(props, hooks, utils, extendOptions)` 得到 `sdk`
4. 按 `api` 数组将 `sdk` 上的方法/状态暴露给模板（`attrs`）
5. 双层组件默认 `mono: false`，将 api 同步到父组件 ref；单层组件传 `mono: true`

模板中常用简写：

- `t('ui.xxx')` — 国际化
- `a($attrs, filters, include)` — `filterAttrs`
- `m(...)` — `mergeClass`
- `f` / `d` / `dp` — 过滤器与实例属性定义（见 renderless.skill.md）

### 6. 模式与主题解析

- **模式** `resolveMode`：`tiny_mode` prop > inject `TinyMode` > 全局 config > 默认 `'pc'`
- **主题** `resolveTheme`：`'tiny'` | `'saas'`
- 根组件可设 `tiny_mode_root` 以 `provide('TinyMode', mode)`

函数式组件（Modal、Loading、Notify）依赖全局 `tiny_mode`，需在应用级配置。

### 7. 设计规范 designConfig

适配层负责注入与合并 `designConfig`，详细约定见 [design.skill.md](./design.skill.md)。

```typescript
import { provideDesignConfig } from '@opentiny/vue-common'

provideDesignConfig({
  components: {
    Button: { props: { round: true }, api: [], renderless: fn }
  }
})
```

`setup` 会合并 `designConfig.renderless` 与组件级 props 默认值。

### 8. 图标 svg 工厂

```typescript
import { svg } from '@opentiny/vue-common'
import IconX from '@opentiny/vue-theme/svgs/icon-x.svg'

export default () => svg({ name: 'IconX', component: IconX, filledComponent: IconX })()
```

详见 [icon.skill.md](./icon.skill.md)。

### 9. 版本判断与 hooks 使用

```typescript
// ❌ renderless 中
if (process.env.VUE_VERSION === '3') { ... }

// ✅ 模板/极少数适配代码
import { isVue2, hooks } from '@opentiny/vue-common'

// ✅ renderless 接收第二参数
export const renderless = (props, { computed, reactive, watch }, utils) => { ... }
```

### 10. 禁止事项

- ❌ 组件模板中不要 `import from 'vue'`（使用 `@opentiny/vue-common` 的 `defineComponent`、`hooks`、`Teleport` 等）
- ❌ renderless 中不要依赖适配层实现细节（仅使用文档化的 `utils` / `vm` 字段）
- ❌ 不要随意修改 `adapter/` 下生命周期映射逻辑
- ❌ 不要在 `.vue` 中写复杂业务逻辑，应下沉 renderless

## 与其它规范的关系

| 模块       | 规范文件                                     |
| ---------- | -------------------------------------------- |
| 模板层     | [vue.skill.md](./vue.skill.md)               |
| 逻辑层     | [renderless.skill.md](./renderless.skill.md) |
| 样式       | [theme.skill.md](./theme.skill.md)           |
| 设计规范   | [design.skill.md](./design.skill.md)         |
| 工具函数   | [utils.skill.md](./utils.skill.md)           |
| 组合式逻辑 | [hooks.skill.md](./hooks.skill.md)           |
| 指令       | [directive.skill.md](./directive.skill.md)   |

## 参考资源

- [主入口 setup / $setup](../../packages/vue-common/src/index.ts)
- [Vue3 适配器](../../packages/vue-common/src/adapter/vue3/index.ts)
- [Alert 跨端入口](../../packages/vue/src/alert/src/index.ts)
- [Alert pc 模板 setup](../../packages/vue/src/alert/src/pc.vue)
