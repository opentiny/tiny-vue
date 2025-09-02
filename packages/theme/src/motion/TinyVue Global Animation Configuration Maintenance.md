# TinyVue 全局动效配置维护

## 1. 目的

本手册用于指导 TinyVue 开发者如何 **新增、修改和维护全局动效配置**。
 目标是确保动效在 **全局统一管理、可配置、可扩展** 的前提下，保持 **一致性和易维护性**。

------

## 2. 目录与文件结构

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

全局变量统一在 `index.less` 中定义：

```less
:root {
  /* 蚂蚁线相关配置 */
  --tv-motion-ants-shift: 8px;
  --tv-motion-ants-speed: 0.8s;
  ...
}
```

------

## 4. 动效命名规范

格式：

```
{type}-{direction}-{state}
```

示例：

- `fade-in` / `fade-out`
- `slide-left-in` / `slide-left-out`
- `zoom-in-scale` / `zoom-out-scale`
- `ants-x` / `ants-x-rev`

👉 规则：

- **type**：动效类型（fade/slide/zoom/ants/...）
- **direction**：方向或轴向（left/right/up/down/x/y/scale）
- **state**：状态（in/out/rev/pulse 等）

------

## 5. 新增动效流程

### Step 1. 创建 keyframes

在对应 `motion/*.less` 文件中新增动效，示例：

```less
@keyframes fade-in-up {
  0% {
    transform: translate3d(0, -20p, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
```

### Step 2. （可选）使用变量替代固定值

```less
@keyframes fade-in-up {
  0% {
    transform: translate3d(0, calc(-1 * var(--tv-motion-fade-offset-y, 20px)), 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
```

### Step 3. 在组件中绑定

```less
.dialog-fade-enter-active {
  animation: fade-in-up var(--tv-motion-fade-speed);
}
```

### Step 4. 更新文档

- 在 **对应 `.less` 文件顶部注释** 动效用途
- 在 PR 描述中说明：类别 / 动效名 / 用法示例

------

## 6. 动效扩展与维护

### 6.1 扩展原则

1. 动效必须写在对应分类文件中（如滑动类 → `slide.less`）。
2. 保持命名唯一性，避免与现有动效冲突。
3. 需要新变量时，先在 `index.less` 中声明，再调用。

### 6.2 维护规范

- **代码注释**：在 `@keyframes` 前标注用途和来源。
- **文件内分组**：同类动效写在一起，便于查找。

------

## 7. 组件集成方式

1. **全局引入**
    所有动效在 `motion/*` 中维护，并在组件中通过className或者animation使用。
3. **覆盖参数**
    用户可覆盖变量来自定义速度/时长。

------

## 8. 常见问题

- **不同组件能否自定义时长？**
   可以，在组件作用域覆盖变量。