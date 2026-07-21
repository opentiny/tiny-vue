# TinyVue Global Motion Configuration

This solution provides **global motion configuration** for TinyVue, based on **LESS and CSS variables**, with the following goals:

1. **Unified Management**: All motions are centrally maintained to avoid scattered definitions and redundant work.
2. **Global Control**: Use CSS variables to control motion duration, delay, speed, and other parameters.
3. **Component Integration**: Components can directly use the unified motion class names or `@keyframes`.
4. **Dynamic Adjustability**: Switch motion styles for different scenarios simply by overriding CSS variables.

## Global Configuration

### Global Variable Definition

Define motion variables in `/packages/theme/src/base/vars.less`:

```less
:root {
  /* Ants (marching border) related config */
  --tv-motion-ants-shift: 8px;
  --tv-motion-ants-speed: 0.8s;

  /* Other motion parameters... */
}
```

Developers can override these variables in the component theme file:

```css
.copyed-borders {
  --tv-motion-ants-shift: 12px;
  --tv-motion-ants-speed: 1.2s;
}
```

Or create a `motion-theme.less` file under `/packages/theme/src/base/` to switch global motion styles:

```less
:root {
  --tv-motion-ants-shift: 12px;
  --tv-motion-ants-speed: 1.2s;
}
```

## Motion Categories & Directory Structure

All motions are stored in `/packages/theme/src/motion/`, organized by type:

```
motion/
  ├─ fade.less        // Fade in/out
  ├─ slide.less       // Slide
  ├─ zoom.less        // Zoom
  ├─ rotate.less      // Rotate
  ├─ bounce.less      // Bounce
  ├─ scroll.less      // Scroll
  ├─ stroke.less      // Stroke
  ├─ shine.less       // Shine
  ├─ ants.less        // Ants (marching border)
  ├─ arrow.less       // Arrow
  ├─ tab.less         // Tab switching
  ├─ progress.less    // Progress bar
  └─ index.less       // Unified import
```

## Motion Examples

### 1. Fade (fade.less)

```less
@keyframes fade-in {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes fade-out {
  0%   { opacity: 1; }
  100% { opacity: 0; }
}
```

Component usage example:

```less
.@{fade-prefix-cls} {
  &-enter-active {
    animation: var(--tv-motion-fade-speed) fade-in ease-out both;
  }
  &-leave-active {
    animation: var(--tv-motion-fade-speed) fade-out ease-in both;
  }
}
```

### 2. Slide (slide.less)

```less
@keyframes slide-left-in {
  0%   { opacity: 0; transform: translateX(var(--tv-motion-slide-offset-left)); }
  50%  { opacity: var(--tv-motion-slide-opacity-mid); transform: translateX(var(--tv-motion-slide-offset-left-mid)); }
  100% { opacity: 1; transform: translateX(0%); }
}

@keyframes slide-left-out {
  0%   { opacity: 1; transform: translateX(0%); }
  50%  { opacity: var(--tv-motion-slide-opacity-mid); transform: translateX(var(--tv-motion-slide-offset-left-mid)); }
  100% { opacity: 0; transform: translateX(var(--tv-motion-slide-offset-left)); }
}
```

Component usage example:

```less
.drawer-slide-left-enter-active {
  animation: slide-left-in var(--tv-motion-slide-speed) linear;
}
.drawer-slide-left-leave-active {
  animation: slide-left-out var(--tv-motion-slide-speed) linear;
}
```

### 3. Ants (ants.less, configurable)

```less
@keyframes ants-x {
  0%   { background-position: 0 0; }
  100% { background-position: var(--tv-motion-ants-shift, 8px) 0; }
}

@keyframes ants-x-rev {
  0%   { background-position: 0 0; }
  100% { background-position: calc(-1 * var(--tv-motion-ants-shift, 8px)) 0; }
}
```

Component usage example:

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

## Component Integration

1. **Global Import**
   All `@keyframes` are maintained in `transition.less` and `motion/*`, and loaded together.

2. **Local Usage**
   Components can use the motions via `className` or `animation`.

3. **Configurable Parameters**
   Developers can override `:root` variables to adjust motion duration, speed, and other parameters.

## Extension & Maintenance

1. **Naming Convention**

   * Use `{type}-{direction}-{state}` format, e.g., `slide-left-in`.
   * Ensure global uniqueness to avoid conflicts.

2. **Category Management**

   * Motions must be written in the corresponding category file (e.g., slide → `slide.less`).
   * New variables must be declared in `index.less` first, then used in the specific file.

3. **Documentation & Comments**

   * Each motion category should provide example code and usage instructions.
   * Add comments before `@keyframes` to indicate purpose and source.
   * Group related motions together for easier lookup and maintenance.
