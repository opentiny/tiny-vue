# 无渲染逻辑层开发规范

无渲染逻辑层中，是将一个组件的内部变量和内部方法整合在一起，返回给模板的使用。该模块不应该依赖第三方包，只能依赖 `@opentiny/utils` ,`@opentiny/vue-hooks` 这两个包。

约定它的必须有2个文件来开发一个组件的逻辑层：

### Renderless 架构（必须遵守）

1. 无渲染逻辑层的入口： `packages/renderless/src/<component-name>/vue.ts`

它主要是导出一个 `renderless`的函数变量供适配层调用。 在每一个组件的 `setup`生命周期中，会调用且只调用一次 `renderless`的函数。 适配层会给`renderless`传入相应的参数， `renderless`的函数返回一个全新的上下文对象 {state,api} 。

在`renderless`函数中，除了定义 state,api之外，还要处理 `watch`, `computed`等变化监听，也常常要处理 onMounted, onUnmounted 的生命周期需要处理的任务以及组件初始化的准备工作。

renderless 接收四个参数：

第一个参数： props, 组件初始化时，Vue运行时生成的props对象
第二个参数： 传入Vue2包 或 Vue3包的导出对象，也称其为hooks对象
第三个参数： 适配层生成的组件上下文对象。由于要兼容Vue2/3, 所以使用组件内部的对象时，需要使用该对象。
第四个参数： 这个是可选参数，如果模板中传入 `extendOptions`属性时， 从这个参数中接收。

一个完整的rendereless示例如下：

```typescript
import type {
  IAlertApi,
  IAlertProps,
  IAlertState,
  ISharedRenderlessParamHooks,
  IAlertRenderlessParamUtils
} from '@/types'
import {
  computedGetIcon,
  computedGetTitle,
  computedStyle,
  computedClass,
  handleClose,
  handleHeaderClick,
  watchAutoHide,
  handlerTargetNode
} from './index'
import { nanoid } from '@opentiny/utils'

export const api = ['handleClose', 'state', 'handleHeaderClick']

const initState = ({ api, computed, constants, reactive }): IAlertState => {
  return reactive({
    show: true,
    contentVisible: false,
    contentDescribeHeight: 0,
    contentDefaultHeight: 0,
    contentMaxHeight: constants.CONTENT_MAXHEUGHT,
    scrollStatus: false,
    getIcon: computed(() => api.computedGetIcon()),
    getTitle: computed(() => api.computedGetTitle()),
    alertClass: computed(() => api.computedClass()),
    alertStyle: computed(() => api.computedStyle()),
    titleId: `tiny-alert-title-${nanoid.api.nanoid(8)}`,
    contentId: `tiny-alert-description-${nanoid.api.nanoid(8)}`
  })
}

const initApi = ({ api, state, constants, props, designConfig, t, emit, vm, parent, nextTick, mode }): void => {
  Object.assign(api, {
    state,
    computedGetIcon: computedGetIcon({ constants, props, designConfig }),
    computedGetTitle: computedGetTitle({ constants, props, t }),
    computedClass: computedClass({ props, mode }),
    computedStyle: computedStyle({ props, mode }),
    handleClose: handleClose({ emit, state }),
    handleHeaderClick: handleHeaderClick({ state, props, vm }),
    watchAutoHide: watchAutoHide({ api, props }),
    handlerTargetNode: handlerTargetNode({ props, parent, vm, nextTick })
  })
}

const initWatcher = ({ watch, props, api }) => {
  watch(() => props.autoHide, api.watchAutoHide, { immediate: true })
  watch(() => props.target, api.handlerTargetNode, { immediate: true })
}

export const renderless = (
  props: IAlertProps,
  { computed, reactive, watch }: ISharedRenderlessParamHooks,
  { t, emit, constants, vm, designConfig, parent, nextTick, mode }: IAlertRenderlessParamUtils
): IAlertApi => {
  const api = {} as IAlertApi
  const state: IAlertState = initState({ api, computed, constants, reactive })
  initApi({ api, state, constants, props, designConfig, t, emit, vm, parent, nextTick, mode })
  initWatcher({ watch, props, api })

  return api
}
```

#### 适配层生成的组件上下文对象

renderless函数的第三个参数是适配层生成的组件上下文对象， 它是适配层为了兼容Vue2,Vue3，在组件初始化时，构造了一组相同的上下文对象，来抹平跨框架的差异。

这个参数是在 `..\packages\vue-common\src\index.ts` 的setup函数中传入的，它包含以下值：

```typescript
// 适配层构造一个组件的vm变量，将Vue实例上的某些值代理出来。
const vm = {
  $attrs: { get: () => $attrs },
  $children: { get: () => generateChildren(instance.subTree) },
  $constants: { get: () => instance.props._constants },
  $emit: { get: () => emit },
  $el: { get: () => instance.vnode.el },
  $listeners: { get: () => $listeners },
  $mode: { get: () => instance._tiny_mode },
  $nextTick: { get: () => hooks.nextTick },
  $off: { get: () => $emitter.off },
  $on: { get: () => $emitter.on },
  $once: { get: () => $emitter.once },
  $options: { get: () => ({ componentName: instance.type.componentName }) },
  $parent: {
    get: () => instance.parent && createVm({}, getRealParent(instance))
  },
  $refs: { get: () => instance.refs },
  $renderless: { get: () => instance.props.tiny_renderless },
  $scopedSlots: { get: () => instance.slots },
  $set: { get: () => $set },
  $slots: { get: () => instance.slots },
  $template: { get: () => instance.props.tiny_template }
}

// 该值为传递给renderless第3个参数，所有属性都可以从中解构出来。
const utils = {
  $prefix,
  t,
  designConfig,
  globalDesignConfig,
  useBreakpoint,
  mergeClass,
  framework: 'vue3',
  vm,
  emit,
  emitter,
  route,
  router,
  dispatch,
  broadcast,
  parentHandler,
  childrenHandler,
  i18n,
  refs,
  slots: instance?.slots,
  scopedSlots: instance?.slots,
  attrs: context.attrs,
  parent: parentVm,
  nextTick: hooks.nextTick,
  constants: instance?.props._constants,
  mode,
  isPCMode: mode === 'pc',
  isMobileMode: mode === 'mobile',
  service: root?.$getService ? root?.$getService(vm) : root?.$service,
  getService: () => root?.$getService(vm),
  setParentAttribute,
  defineInstanceProperties,
  defineParentInstanceProperties
}
```

我们观察到，有些属性在`utils`下存在，在`vm`下也存在。建议使用 `vm`下的相应值，比如 `vm.$refs, vm.$slots` 。

2. 辅助方法与函数

- **业务逻辑** → `packages/renderless/src/<component-name>/index.ts`
  1. 它们都是纯函数，不依赖任何 UI 框架，不依赖其它上下文
  2. 在`index.ts`文件中， 禁止直接导入 Vue API（ref、reactive、watch 等）
  3. 每一个函数，通常都是要接收{state, api, props} 等传入的变量，生成一个全新的函数变量。这个函数只与当前组件产生互操作。
  4. 所有的函数不要互相调用，通常应该是通过 api 变量来调用其它函数。

以下是一个简单的纯函数示例：

```typescript
export const watchAutoHide =
  ({ api, props }: Pick<IAlertRenderlessParams, 'api' | 'props'>) =>
  (newVal: boolean) => {
    if (props.autoHide && newVal) {
      const timer = setTimeout(() => {
        api.handleClose()
        clearTimeout(timer)
      }, ALERT_TIMEOUT)
    }
  }
```

3. 类型声明

- **类型声明** → `packages/renderless/types/<component-name>.type.ts`

在 `types` 文件夹中，为每一个组件添加一个声明文件，这样在逻辑层代码开发，以及模板绑定属性和方法时，才会有正确的类型提示。

以下是一个类型声明的示例：

```typescript
import type { ExtractPropTypes, CSSProperties } from 'vue'
import type { alertProps, $constants } from '@/alert/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

export interface IAlertState {
  show: boolean
  getIcon: string
  getTitle: string
  contentVisible: boolean
  contentDescribeHeight: number
  contentDefaultHeight: number
  contentMaxHeight: number
  scrollStatus: boolean
  titleId: string
  contentId: string
}

export type IAlertProps = ExtractPropTypes<typeof alertProps>

export type IAlertConstants = typeof $constants

export type IAlertRenderlessParams = ISharedRenderlessFunctionParams<IAlertConstants> & {
  api: IAlertApi
  state: IAlertState
  props: IAlertProps
}

export interface IAlertApi {
  state: IAlertState
  computedGetIcon: () => string
  computedGetTitle: () => string
  handleClose: () => void
  handleHeaderClick: () => void
  watchAutoHide: (value: boolean) => void
  computedStyle: () => CSSProperties
}

export type IAlertRenderlessParamUtils = ISharedRenderlessParamUtils<IAlertConstants>
```

TypeScript 类型安全的开发规范

- 优先使用 TypeScript
- 禁止使用 `any`，需要类型逃逸时加注释说明
- 类型定义放在 `packages/renderless/types/` 或组件目录下

### 开发规范

- 一份 renderless 逻辑同时服务 Vue 2 和 Vue 3
- 如需判断框架版本，使用 `@opentiny/vue-common` 中的工具函数， 不得在 renderless 层写 `if (vue3)` 这样的判断
- 应该尽量避免直接操作dom
- 尽量编写相应的类型声明， 包含 props, state, api下的属性和方法的签名。
- 不要引用 'vue' 包，应该从renderless的第2个参数中，获取vue包下的变量。

  **在 renderless 层使用 Vue API**

```typescript
// ❌ 错误
import { ref } from 'vue'
const count = ref(0)

// ✅ 正确方式 1
import { hooks } from '@opentiny/vue-common'
const state = hooks.ref({ count: 0 })

// ✅ 正确方式 2
export const renderless = (props, { ref }) => {
  const state = hooks.ref({ count: 0 })
}
```

## 参考资源

- [vue.ts](../../packages/renderless/src/button/vue.ts)
- [index.ts](../../packages/renderless/src/button/index.ts)
- [button.type.ts](../../packages/renderless/types/button.type.ts)
