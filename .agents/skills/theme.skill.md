# TinyVue 主题定制指南

## 适用场景

- 为新组件编写样式
- 修改现有组件的视觉效果
- 创建自定义主题
- 调整响应式断点

## 核心原则

### 1. 主题架构

TinyVue 支持多主题系统：

```
packages/
├── theme/
│   └── src/
│       ├── base /             # 公共变量和混入
│       │   ├── vars.less      # 全局的CSS 变量定义
│       │   └── reset.less    # rest 样式定义
│       │   └── transition.less    # 全局动画 样式定义
│       │   └── aurora-theme.less    # vars.less 中的一个变体， aurora风格
│       │   └── dark-theme.less    # vars.less 中的一个变体， 暗黑风格
│       │   └── motion-theme.less    # vars.less 中的一个变体， motion 风格
│       │   └── old-theme.less    # vars.less 中的一个变体， 原来的主题风格
│       ├── svgs /            # 所有图标的原始 svg 文件
│       └── <component>/      # 各组件样式
│           └── vars.less      #  组件级的 CSS 变量定义
│           └── index.less     #  组件的 CSS 样式
└── theme-saas/         # SAAS 主题
    └── src/
        └── ...         # 类似结构，不同变量值
```

### 2. CSS 变量系统

Tinyvue的样式系统设计了一套多级CSS 变量系统,`base CSS 变量` 和 `common CSS 变量` 的定义都在 `packages/theme/src/base/vars.less`中；`组件的CSS 变量`的定义在各个组件的文件夹下面。

1. `base CSS 变量` 定义一套规范的颜色值和数字值, 以 --tv-base-\* 打头。
2. `common CSS 变量` 定义一套通用的CSS 变量值，有明确的使用场景约束, 更好的名称可读性。所有的值必须从`base CSS 变量`里面选取， 以 --tv-小写字母 打头, 比如 --tv-color-\* 。
3. `组件的CSS 变量` 定义在组件级别的CSS 变量值，方便用户定制组件样式。 它必须使用 `common CSS 变量` ，并且不允许使用 `base CSS 变量`的值。 以 --tv-组件名首字母大写 打头，比如： --tv-Button-\*。 每一个组件级CSS 变量的上面必须是对应的注释，写明它的使用的位置。

```less
// base CSS 变量
:root {
  --tv-base-color-brand: #191919;
  --tv-base-color-brand-1: #f0f7ff;
  --tv-base-color-brand-2: #deecff;
  --tv-base-color-brand-3: #b3d6ff;
  --tv-base-color-brand-4: #7eb7fc;
  --tv-base-color-brand-5: #4191fa;
  --tv-base-color-brand-6: #1476ff;
  --tv-base-color-brand-7: #0f5ed4;
  --tv-base-color-brand-8: #0845a6;
  --tv-base-color-brand-9: #022e7a;
  --tv-base-color-brand-10: #001a4a;
  --tv-base-color-brand-11: #3d6899;
  --tv-base-color-brand-12: #7fa6d4;
  --tv-base-color-brand-13: #b6d4f2;
}
// common CSS 变量
:root {
  --tv-color-success-text: var(--tv-base-color-success-6); // #5cb300 成功-文本色 tag的light、plain类型
  --tv-color-success-text-primary: var(--tv-base-color-common-11); // #191919 常规一级文本色（非主题色）
  --tv-color-success-bg: var(--tv-base-color-success-6); //#5cb300 成功-背景色(深) tag的dark类型/tooltip/badge
  --tv-color-success-bg-light: var(--tv-base-color-success-14); // #e6f2d5 成功-背景色(浅)
  --tv-color-success-bg-1: var(--tv-base-color-success-14); // #e6f2d5 tag的light类型
  --tv-color-success-border: var(--tv-base-color-success-6); // #5cb300 成功-边框色(深)
  --tv-color-success-border-light: var(--tv-base-color-success-14); // #e6f2d5 成功-边框色（浅） 型
  --tv-color-success-border-1: var(--tv-base-color-success-14); // #e6f2d5 tag的light类型
  --tv-color-success-icon: var(--tv-base-color-success-6); // #5cb300 成功-图标色
}

// 组件级 CSS 变量
.inject-Button-vars() {
  // 默认时按钮字重
  --tv-Button-font-weight: var(--tv-font-weight-regular, 400);
  // 默认时按钮边框宽度
  --tv-Button-border-width: var(--tv-border-width, 1px);
  // 按钮的文本行高
  --tv-Button-line-height: var(--tv-line-height-number, 1.5);
}
```

**重要约束**

目前组件库已经稳定，在开发组件时，尽量复用已经存在的 `common CSS 变量`，不要添加新变量。

### 3. BEM 命名规范

在模板中，为节点添加类名时，使用 **Block\_\_Element--Modifier** 命名的规则：

```less
// Block: 组件名
.tiny-button {
  // Element: 组成部分（双下划线）
  &__icon {
    margin-right: @spacing-xs;
  }

  &__text {
    font-weight: bold;
  }

  // Modifier: 状态变体（双横线）
  &--primary {
    background-color: @color-brand;
  }

  &--disabled {
    opacity: @opacity-disabled;
  }
}
```

```less
@button-prefix-cls: ~'@{css-prefix}button';

.@{button-prefix-cls} {
  .inject-Button-vars();

  &.@{button-prefix-cls}--large {
    .size-mixin(-large);
  }
  &.@{button-prefix-cls}--medium {
    .size-mixin(-medium);
  }
  &.@{button-prefix-cls}--small {
    .size-mixin(-small);
  }
  &.@{button-prefix-cls}--mini {
    .size-mixin(-mini);
  }
```

### 4. 组件的样式开发规范

一个组件通常都有三个样式文件：

1. vars.less: 组件级 CSS 变量。 通过分析组件中，哪些地方的样式需要适配不同主题，以及它们的值在 `common CSS 变量`中存在的，就需要找出来定义为组件级变量。 每一个组件级变量上面必须写注释指示该变量的使用场景。示例如下：

```less
.inject-Button-vars() {
  // 默认时按钮字重
  --tv-Button-font-weight: var(--tv-font-weight-regular, 400);
  // 默认时按钮边框宽度
  --tv-Button-border-width: var(--tv-border-width, 1px);
  // 按钮的文本行高
  --tv-Button-line-height: var(--tv-line-height-number, 1.5);
  // 默认时按钮圆角
  --tv-Button-border-radius: var(--tv-border-radius-md, 6px); // 默认还原为6px
  // 大圆角时按钮圆角
  --tv-Button-border-radius-round: var(--tv-border-radius-round, 999px);
  // 圆形时按钮圆角
  --tv-Button-border-radius-circle: var(--tv-border-radius-round, 999px);
}
```

2. index.less: 组件的样式编写。每个组件的根节点，

首先要注入一下自己的组件级 CSS 变量,以便这些变量生效。如果组件有多个根节点，或者有弹出层等场景，需要给所有的根节点或弹出层的根节点添加这个注入。

其次，尽量使用 `less`的`嵌套结构`和`父选择器 &` 的能力进行编写。

最后，需要使用组件级的CSS变量，避免使用 `common CSS 变量` 和 `base CSS 变量`。

示例如下：

```less
@alert-prefix-cls: ~'@{css-prefix}alert';

.@{alert-prefix-cls} {
  .inject-Alert-vars();

  position: relative;
  display: flex;
  border: none;
  border-radius: var(--tv-Alert-border-radius);
  padding: var(--tv-Alert-padding-y) var(--tv-Alert-padding-x);
  margin: var(--tv-Alert-margin-y) var(--tv-Alert-margin-x);
  line-height: 1.5;

  &.is-center {
    justify-content: center;
    align-items: center;
  }

  /** alert-icon 场景 */
  .@{alert-prefix-cls}__icon:not(.@{alert-prefix-cls}__close) {
    font-size: var(--tv-Alert-icon-size);
    margin-right: var(--tv-Alert-icon-margin-right);
    flex-shrink: 0;
    margin-top: 2px;
  }
}
```

3. 组件的响应式设计

组件在不同的屏幕尺寸时，有不同的规范要求时，就需要添加 `responsive.less` 样式文件，编写在指定的屏幕大小时应该呈现的样式。开发规范同 `index.ts` 一致。示例如下：

```less
@import '../custom.less';
@import './vars.less';
@alert-prefix-cls: ~'@{css-prefix}alert';

@media screen and (max-width: 1280px) {
  .@{alert-prefix-cls} {
    .inject-Alert-responsive-vars();

    .@{alert-prefix-cls}__content {
      .@{alert-prefix-cls}__title {
        font-size: var(--tv-Alert-title-responsive-font-size);
      }

      .@{alert-prefix-cls}__description {
        color: var(--tv-Alert-title-responsive-text-color);
      }
    }
  }
}
```

### 5 移动优先的多端模板的开发规范

组件的多端模板 `mobile-first.vue`文件，不使用传统的 `BEM`样式规范，而是使用 `tailwind css`进行开发，`tailwind css`的配置文件在`..\packages\theme-saas\tailwind.config.js` 中，其中有定制的颜色值，断点值，布局等配置信息。

多端模板不需要引入任何的 css 文件，在模板中，只需要添加tailwind的类名即可，示例如下：

```vue
<template>
  <div
    data-tag="tiny-alert"
    v-if="state.show"
    :class="
      m(
        'min-h-min flex py-2 sm:py-3 px-4 my-2 rounded box-border font-light sm:font-normal text-color-text-primary',
        { 'bg-color-info-primary-subtler': type === 'info' || !type },
        { 'bg-color-error-subtler': type === 'error' },
        { 'bg-color-warning-subtler': type === 'warning' },
        { 'bg-color-success-subtler': type === 'success' },
        { 'text-center': center },
        customClass
      )
    "
  >
    <span
      v-else-if="closeText && closable"
      data-tag="tiny-alert-close-text"
      @click="handleClose"
      class="leading-6 text-sm cursor-pointer"
      >{{ closeText }}</span
    >
  </div>
</template>
```

上面的 `m函数`是适配层注入的tailwind merge函数，用于合并类名。 如果元素上的类名太长，也可以将类名抽取为变量，集中编写到 `token.ts`文件中。

```typescript token.ts
export const classes = {
  'button': 'inline-block.....',
  'size-default': 'h-10 text-sm sm:h-7'
  // ....
}
```

### Tailwind CSS 集成（Mobile First）

```vue
<!-- 使用 Tailwind 工具类 -->
<template>
  <div
    :class="
      m(
        'flex items-center justify-between',
        'px-4 py-2 sm:px-6 sm:py-3',
        'bg-white dark:bg-gray-800',
        'border border-gray-200 rounded-lg',
        'hover:border-blue-500 transition-colors'
      )
    "
  >
    <!-- 内容 -->
  </div>
</template>
```

## 主题定制检查清单

编写样式时，确认：

### 变量使用

- [ ] 尽量使用common CSS 变量
- [ ] 所有间距使用间距变量
- [ ] 所有字体大小使用字体变量
- [ ] 没有硬编码的十六进制颜色值

### BEM 命名

- [ ] 类名遵循 BEM 规范
- [ ] Block 名称与组件名一致
- [ ] Element 使用双下划线 `__`
- [ ] Modifier 使用双横线 `--`

### 响应式

- [ ] 考虑移动端优先设计
- [ ] 测试不同屏幕尺寸
- [ ] 使用相对单位（rem、em、%）
- [ ] 避免固定宽度，使用 max-width

### 无障碍

- [ ] 颜色对比度符合 WCAG AA 标准
- [ ] 焦点状态清晰可见
- [ ] 禁用状态明确标识
- [ ] 支持键盘导航样式

### 性能

- [ ] 避免深层嵌套（不超过 3 层）
- [ ] 合理使用 CSS 过渡
- [ ] 避免使用 `!important`
- [ ] 合并重复的样式规则

### 兼容性

- [ ] 深色模式适配（如需要）
- [ ] 浏览器兼容性检查

## 调试技巧

### 查看 CSS 变量

```javascript
// 在浏览器控制台执行
getComputedStyle(document.documentElement).getPropertyValue('--tv-color-brand')
```

### 临时覆盖样式

```vue
<style scoped>
/* 仅用于调试，不要提交 */
.tiny-my-component {
  border: 1px solid red !important;
}
</style>
```

### 使用浏览器 DevTools

1. 打开 Elements 面板
2. 查看 Computed 样式
3. 检查 CSS 变量值
4. 实时修改测试效果

## 参考资源

- [Less 官方文档](https://lesscss.org/)
- [BEM 命名规范](https://getbem.com/)
- [WCAG 无障碍指南](https://www.w3.org/WAI/WCAG21/quickref/)
- [Button 组件级变量示例](../../packages/theme/src/button/vars.less)
- [Button 组件样式示例](../../packages/theme/src/button/index.less)
- [Button 组件响应样式的示例](../../packages/theme/src/button/responsive.less)
- [Tailwind CSS 文档](https://tailwindcss.com/)
