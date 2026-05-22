# ICON 开发规范

## 核心原理

所有的图标原始文件在 `packages/theme/src/svgs` 目录中，每个svg文件对应一个图标，图标名字为小写连字符的格式。

图标库的位置在 `packages\vue-icon`， 它依赖 `@opentiny/vue-theme`包,通过`vite-svg-loader`插件，引用svg文件转为标准的Vue组件。

图标库中的每一个图标都是一个函数，函数中调用适配层的 `svg`函数包装组件一下，返回一个标准的Vue组件。

```typescript
import { svg } from '@opentiny/vue-common'
import Acceptance from '@opentiny/vue-theme/svgs/acceptance.svg'

export default () => svg({ name: 'IconAcceptance', component: Acceptance, filledComponent: Acceptance })()
```

`svg` 函数的路径为： `packages\vue-common\src\index.ts`

## 图标库的开发步骤

1. 设计师提供原始的svg图标

将图标放到 `packages/theme/src/svgs` 目录中，修改文件名为小写连字符的格式，该文件名即为最终的图标名称。

2. 自动同步图标脚本文件

在 `internals\automate` 文件夹中打开终端，然后执行脚本，会将 `packages/theme/src/svgs` 目录中的所有图标同步到`packages\vue-icon`中去。

```bash
 pnpm run build-svgs
```

3. 发布图标库

在 `packages\vue-icon`目录中发布即可。
