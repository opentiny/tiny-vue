# TinyVue 全局动效配置

## 1. 背景与目标

在应用开发中，统一的动效配置有助于提升整体用户体验和产品一致性。
 本方案为 TinyVue 提供 **全局动效配置能力**，仅依赖 **LESS 与 CSS 变量**，实现以下目标：

1. **统一管理**：所有动效集中管理，避免分散定义和重复维护。
2. **全局可控**：通过 CSS 变量统一控制动效的持续时间、延迟、速度等参数。
3. **组件集成**：组件可直接调用统一的动效类名或 `@keyframes`。
4. **动态可调**：通过覆盖 CSS 变量即可在不同场景下切换动效风格。

------

## 2. 全局配置

### 2.1 全局变量定义

在 `/packages/theme/src/motion/index.less` 中统一定义：

```less
:root {
  /* 蚂蚁线相关配置 */
  --tv-motion-ants-shift: 8px;
  --tv-motion-ants-speed: 0.8s;
  ...
}
```

开发者可在组件主题文件中覆盖这些变量：

```css
.copyed-borders {
  --tv-motion-ants-shift: 12px;
  --tv-motion-ants-speed: 1.2s;
}
```

------

## 3. 动效分类与使用

动效统一存放在 `/packages/theme/src/motion/` 目录下，按类型拆分：

```
motion/
  ├─ fade.less        // 淡入淡出
  ├─ slide.less       // 滑动
  ├─ zoom.less        // 缩放
  ├─ rotate.less      // 旋转
  ├─ bounce.less      // 弹跳
  ├─ scroll.less      // 滚动
  ├─ stroke.less      // 描边
  ├─ shine.less       // 闪烁
  ├─ ants.less        // 蚂蚁线
  ├─ arrow.less       // 箭头
  ├─ tab.less         // Tab 切换
  ├─ progress.less    // 进度条
  └─ index.less       // 全局变量定义
```

------

## 3. 全局变量管理

### 3.1 示例：淡入淡出 (fade.less)

```less
@keyframes fade-in {
  0%   { 
    opacity: 0; 
  }
  
  100% { 
    opacity: 1; 
  }
}

@keyframes fade-out {
  0%   { 
    opacity: 1; 
  }
  
  100% { 
    opacity: 0; 
  }
}
```

组件调用示例：

```less
.@{fade-prefix-cls} {
  &-enter-active {
    animation: var(--tv-motion-fade-speed) fade-in both ease-out;
  }

  &-leave-active {
    animation: var(--tv-motion-fade-speed) fade-out both ease-in;
  }
}
```

---

### 3.2 示例：滑动 (slide.less)

```less
/* ============ 左滑 ============ */
@keyframes slide-left-in {
  0% {
    opacity: 0;
    transform: translateX(var(--tv-motion-slide-offset-left));
  }
  50% {
    opacity: var(--tv-motion-slide-opacity-mid);
    transform: translateX(var(--tv-motion-slide-offset-left-mid));
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}

@keyframes slide-left-out {
  0% {
    opacity: 1;
    transform: translateX(0%);
  }
  50% {
    opacity: var(--tv-motion-slide-opacity-mid);
    transform: translateX(var(--tv-motion-slide-offset-left-mid));
  }
  100% {
    opacity: 0;
    transform: translateX(var(--tv-motion-slide-offset-left));
  }
}
```

组件调用示例：

```less
.drawer-slide-left-enter-active {
  animation: slide-left-in var(--tv-motion-slide-speed) linear;
}

.drawer-slide-left-leave-active {
  animation: slide-left-out var(--tv-motion-slide-speed) linear;
}
```

### 3.3 示例：蚂蚁线 (ants.less，可配置)

```less
@keyframes ants-x {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: var(--tv-motion-ants-shift, 8px) 0;
  }
}

@keyframes ants-x-rev {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: calc(-1 * var(--tv-motion-ants-shift, 8px)) 0;
  }
}
```

组件调用示例：

```less
  .@{grid-prefix-cls}-copyed-borders {
    --tv-motion-ants-shift: 13px;

    .@{grid-prefix-cls}-border-top {
      animation: ants-x var(--tv-motion-ants-speed) linear infinite;
    }
    .@{grid-prefix-cls}-border-right {
      animation: ants-y var(--tv-motion-ants-speed) linear infinite;
    }
    .@{grid-prefix-cls}-border-bottom {
      animation: ants-x-rev var(--tv-motion-ants-speed) linear infinite;
    }
    .@{grid-prefix-cls}-border-left {
      animation: ants-y-rev var(--tv-motion-ants-speed) linear infinite;
    }
  }
```

------

## 4. 组件集成方式

1. **全局引入**
    所有 `@keyframes` 集中在 `transition.less` 和 `motion/*` 中。
2. **局部调用**
    组件通过 className 或 `-enter-active / -leave-active` 绑定。
3. **可配置参数**
    开发者可通过覆盖 `:root` 变量修改动效时长、速度等。

示例动效：

```less
.drawer-slide-left-enter-active {
  animation: slide-left-in var(--tv-motion-slide-speed) linear;
}
```

------

## 5. 扩展与维护

1. **命名规范**：
   - 使用 `{type}-{direction}-{state}` 格式，例如 `slide-left-in`。
   - 保证全局唯一性，避免冲突。
2. **文档补充**：
   - 每类动效提供示例代码与调用方式说明。
3. **未来扩展**：
   - 支持引入方便引入其他动效资源，增强 TinyVue 动效生态。
