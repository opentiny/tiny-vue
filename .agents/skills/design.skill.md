# TinyVue 设计规范（Design）开发指南

## 适用场景

- 为 Aurora / SaaS / 企业自定义规范配置组件默认行为
- 通过 `design` 覆盖图标、默认 props、renderless 扩展逻辑
- 使用 `TinyConfigProvider` 在应用级注入交互规范
- 在 renderless 中读取 `designConfig` 实现规范差异

## 与 Theme 的区别

| 维度       | Design（本规范）                             | Theme（见 [theme.skill.md](./theme.skill.md)） |
| ---------- | -------------------------------------------- | ---------------------------------------------- |
| 职责       | 交互行为、默认 props、图标、renderless 扩展  | 视觉样式、CSS 变量、Less                       |
| 代码位置   | `packages/design/*`、`designConfig`          | `packages/theme`、`packages/theme-saas`        |
| 注入方式   | `TinyConfigProvider` / `provideDesignConfig` | 引入 Less、`theme` prop、ThemeTool             |
| 运行时对象 | `utils.designConfig`（renderless 第三参数）  | `tiny_theme`、`--tv-*` CSS 变量                |

二者可组合使用：SaaS 场景常见 `tiny_theme="saas"` + `@opentiny/vue-design-saas`。

## 架构概览

```text
packages/design/
├── aurora/          # Aurora 规范（@opentiny/vue-design-aurora）
│   ├── index.ts     # 导出 { name, version, components }
│   └── src/<Component>/index.ts
├── saas/            # SaaS 规范（@opentiny/vue-design-saas）
│   └── src/<Component>/index.ts
└── smb/             # SMB 示例规范（文档 demo 用）

packages/vue/src/config-provider/   # TinyConfigProvider
packages/vue-common/src/index.ts    # provideDesignConfig、getDesignConfig、setup 合并逻辑
packages/vue-saas-common/           # 预置 customDesignConfig.designConfig = designSaasConfig
```

全局配置结构（`DesignConfig`）：

```typescript
{
  name?: string      // 规范名称，如 'saas'
  version?: string   // 规范版本
  components?: {
    [ComponentName: string]: IComponentDesignConfig  // 键名不含 Tiny 前缀，如 Button、Select、Alert
  }
}
```

单组件配置（内部类型 `IComponentDesignConfig`，定义于 `packages/renderless/types/shared.type.ts`，未对外 export）常用字段：

| 字段         | 说明                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------- |
| `props`      | 默认 props；用户未传时才覆盖（仅在跨端父组件 **`$setup`** 中合并到 `customDesignProps`） |
| `icons`      | 图标映射，如 `{ warning: iconWarning() }`                                                |
| `state`      | 规范级状态默认值，renderless 内通过 `designConfig.state` 读取                            |
| `renderless` | 扩展函数，在组件 renderless 执行后合并进 `sdk`                                           |
| `api`        | 扩展暴露给模板的 api 名称列表（与组件 `api` 数组合并）                                   |
| 其它         | 组件自定义字段，如 `baseOpts`、`messageType`、`showText` 等                              |

## 应用侧使用

### 1. ConfigProvider（推荐）

```vue
<template>
  <tiny-config-provider :design="design">
    <tiny-alert type="warning" />
    <tiny-button>按钮</tiny-button>
  </tiny-config-provider>
</template>

<script setup>
import { TinyConfigProvider, TinyAlert, TinyButton } from '@opentiny/vue'
import { iconWarningTriangle } from '@opentiny/vue-icon'

const design = {
  name: 'x-design',
  version: '1.0.0',
  components: {
    Alert: {
      icons: { warning: iconWarningTriangle() },
      props: { center: true },
      renderless: (props, hooks, utils, api) => ({
        handleClose() {
          api.state.show = false
          utils.emit('close')
        }
      })
    },
    Button: {
      props: { round: true, resetTime: 0 }
    }
  }
}
</script>
```

`TinyConfigProvider` 内部调用 `provideDesignConfig(design)`，子树组件通过 `inject` 获取。

### 2. 内置规范包（SaaS / Aurora）

SaaS 工程使用 `@opentiny/vue-saas-common` 时已注入：

```typescript
// packages/vue-saas-common/src/index.ts
import { customDesignConfig } from '@opentiny/vue-common'
import designSaasConfig from '@opentiny/vue-design-saas'

customDesignConfig.designConfig = designSaasConfig
```

Aurora 对应 `@opentiny/vue-design-aurora`，在应用入口赋值 `customDesignConfig.designConfig`（写法同 SaaS）。

> **注意**：`@opentiny/vue-saas-common` 启动时已写入 `customDesignConfig.designConfig`，会**优先于**子树 `TinyConfigProvider` 的 `inject` 配置。应用级临时覆盖需改 `customDesignConfig`，或勿使用 `vue-saas-common` 的全局注入。普通 `@opentiny/vue` 场景下 `customDesignConfig.designConfig` 默认为 `null`，以 `ConfigProvider` 的 `provide` 为准。

### 3. 编程式注入

须在组件 `setup` 中调用（需 Vue 上下文）：

```typescript
import { provideDesignConfig } from '@opentiny/vue-common'

export default {
  setup() {
    provideDesignConfig({
      components: {
        Form: { props: { hideRequiredAsterisk: true } }
      }
    })
  }
}
```

`TinyConfigProvider` 传入的 `design` 为响应式 ref，`getDesignConfig` 会通过 `.value` 解包后读取。

## 运行时解析流程

1. `getDesignConfig()`：**优先** `customDesignConfig.designConfig`，否则 `inject(design.configKey, {})`；若结果为 ref/computed 则取 `.value`
2. 按当前组件名去掉 `Tiny` 前缀（`getComponentName().replace('Tiny', '')`），取 `globalDesignConfig.components[ComponentName]`
3. **`$setup`**：合并 `designConfig.props` 为默认 props（不覆盖用户已传属性）
4. **`setup`**：
   - 将 `designConfig`、`globalDesignConfig` 放入 renderless 第三参数 `utils`
   - 执行组件 `renderless` 得到 `sdk`
   - 若存在 `designConfig.renderless`，将其返回值 `Object.assign` 到 `sdk`
   - 若 `designConfig.api` 存在，与组件 `api` 数组合并后暴露给模板

组件名映射示例：`TinySelect` → `Select`，`TinyAlert` → `Alert`。

## 在 renderless 中使用 designConfig

### 1. 从 utils 解构（推荐）

```typescript
export const renderless = (
  props: IAlertProps,
  hooks: ISharedRenderlessParamHooks,
  { designConfig, t, emit }: IAlertRenderlessParamUtils
): IAlertApi => {
  // ...
}

// index.ts 纯函数
export const computedGetIcon =
  ({ constants, props, designConfig }: Pick<IAlertRenderlessParams, 'constants' | 'props' | 'designConfig'>) =>
  () => {
    const designIcon = designConfig?.icons?.[props.type]
    return props.icon || designIcon || constants.ICON_MAP[props.type]
  }
```

### 2. 读取 state / props 级配置

```typescript
// select/vue.ts 示例
autoHideDownIcon: (() => {
  if (designConfig?.state && 'autoHideDownIcon' in designConfig.state) {
    return designConfig.state.autoHideDownIcon
  }
  return true
})(),
  designConfig // 挂到 state，供模板 state.designConfig?.icons 使用
```

### 3. designConfig.renderless 扩展

规范包可覆盖或增补 api 方法，**不得**破坏原有 `api.state` 引用：

```typescript
// packages/design/saas/src/select/index.ts
// 签名：(props, hooks, utils, sdk) => Partial<api>
renderless: (props, hooks, utils, api) => {
  const state = api.state
  return {
    toggleCheckAll: (filtered) => {
      /* 规范定制逻辑 */
    },
    computedShowTagText: () => state.isDisabled || state.isDisplayOnly
  }
}
```

适配层实际调用：`Object.assign(sdk, designConfig.renderless(props, hooks, utils, sdk))`，第三参为完整 `utils`（含 `emit`、`designConfig`、`vm` 等），第四参为组件 renderless 已返回的 `sdk`。

## 新增 / 修改设计规范

### 在 packages/design 中增加组件配置

1. 在 `packages/design/saas/src/<component>/index.ts`（或 `aurora`）新增默认导出对象
2. 在对应 `index.ts` 的 `components` 中注册（键名与组件名一致，PascalCase，无 `Tiny` 前缀）
3. 图标优先使用对应主题的 icon 包（SaaS 用 `@opentiny/vue-icon-saas`）
4. 在 renderless 中增加对 `designConfig` 的可选读取，并提供合理默认值（无 design 时行为不变）

示例（SaaS Alert 仅换图标）：

```typescript
// packages/design/saas/src/alert/index.ts
import { iconWarning } from '@opentiny/vue-icon-saas'

export default {
  icons: {
    warning: iconWarning()
  }
}
```

### 在组件 renderless 中支持新 design 字段

1. 在 `index.ts` 纯函数中增加 `designConfig` 参数类型（`Pick<..., 'designConfig'>`）
2. 使用可选链与 `in` 判断，避免假设 design 一定存在
3. 模板需访问时，将 `designConfig` 挂到 `state`（参考 Select）

## mobile-first 与 twMerge

SaaS 多端模式依赖 `customDesignConfig.twMerge`（通常 `tailwind-merge`）：

```typescript
import { customDesignConfig } from '@opentiny/vue-common'
import { twMerge } from 'tailwind-merge'

customDesignConfig.twMerge = twMerge
```

`mergeClass`（模板中的 `m(...)`）会经此函数合并 Tailwind 类名。

## 禁止事项

- ❌ 不要用 design 配置颜色/尺寸等纯样式（应走 theme / CSS 变量）
- ❌ 不要在 design 的 `components` 键名中带 `Tiny` 前缀
- ❌ 不要在 `designConfig.renderless` 中替换整个 `api` 或 `state` 对象
- ❌ 不要在 renderless 中 `import` 规范包；规范由应用或 `vue-saas-common` 注入
- ❌ 不要假设 `designConfig` 一定存在，必须提供默认行为

## 参考资源

- [ConfigProvider 组件](../../packages/vue/src/config-provider/src/index.vue)
- [适配层 design 逻辑](../../packages/vue-common/src/index.ts)
- [类型定义](../../packages/renderless/types/shared.type.ts)
- [SaaS Select 规范示例](../../packages/design/saas/src/select/index.ts)
- [文档 demo](../../examples/sites/demos/pc/app/config-provider/base-composition-api.vue)
- [主题规范](./theme.skill.md)
- [适配层规范](./common.skill.md)
