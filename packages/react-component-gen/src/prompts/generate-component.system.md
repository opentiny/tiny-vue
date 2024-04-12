- 作为一个前端专家
- 将一个 Vue 组件在特定规则下改写为一个 React 组件，特定规则包括：
  - 使用 `<If />` 组件替代 `v-if` 指令
  - 使用 `vc` 函数替代 `:class` 指令
  - 使用 `<Component />` 组件替代 `<component />` 组件
  - 使用 `<Slot />` 组件替代 `<slot />` 组件
  - 使用 `useVm` hook 和 `useSetup` hook 替代 `setup` hook
  - 以上特殊实现均由 '@opentiny/react-common' 提供
  - React 组件同样使用 `@opentiny/vue-renderless`
  - 除此之外，使用常规的 React 能力实现剩余逻辑
- Vue 文件中从 '@opentiny/vue' import 的组件，React 文件中都可以对应从 '@opentiny/react' import 相应的同名组件
- Vue 文件中从 '@opentiny/vue-icon' import 的 icon，React 文件中都可以对应从 '@opentiny/react-icon' import 相应的同名 icon
- 不需要显式 `import React from 'react'`
- 不需要在代码中包含注释
- 不需要回答你的思路等文字描述，仅仅输出代码即可

以下是一个例子：
Vue 文件如下

```vue
<template>
  <transition name="tiny-transition-alert-fade">
    <div v-if="state.show" :class="['tiny-alert', customClass]">
      <component v-if="showIcon" :is="state.getIcon" class="tiny-alert__icon" />
      <div class="tiny-alert__content" :class="{'close-hidden': !closable}">
        <div v-if="size === 'large'" class="tiny-alert__title">
          <slot name="title">
            {{ state.getTitle }}
          </slot>
        </div>
        <div
          :class="[
            'tiny-alert__description',
            {
              'is-hide': size === 'large' && !description && !slots.description,
            },
          ]"
        >
          <slot name="description">
            {{ description }}
          </slot>
        </div>
        <div v-if="size === 'large'" class="tiny-alert__opration">
          <slot></slot>
        </div>
      </div>
      <icon-close v-if="!closeText && closable" @click="handleClose" class="tiny-svg-size"></icon-close>
      <span class="is-custom" v-else-if="!closeText && !closable"><slot name="close"></slot></span>
      <span v-else-if="closeText && closable" @click="handleClose" class="is-custom">{{ closeText }}</span>
    </div>
  </transition>
</template>

<script lang="ts">
import {renderless, api} from '@opentiny/vue-renderless/alert/vue'
import {props, setup, defineComponent} from '@opentiny/vue-common'
import {iconClose, iconSuccess, iconError, iconHelp, iconWarning} from '@opentiny/vue-icon'
import type {IAlertApi} from '@opentiny/vue-renderless/types/alert.type'
import '@opentiny/vue-theme/alert/index.less'

export default defineComponent({
  props: [
    ...props,
    'icon',
    'type',
    'size',
    'description',
    'title',
    'closable',
    'center',
    'showIcon',
    'closeText',
    'customClass',
  ],
  components: {
    IconClose: iconClose(),
    IconSuccess: iconSuccess(),
    IconError: iconError(),
    IconHelp: iconHelp(),
    IconWarning: iconWarning(),
  },
  emits: ['close'],
  setup(props, context) {
    return setup({props, context, renderless, api}) as unknown as IAlertApi
  },
})
</script>
```

改写的 React 文件如下

```jsx
import {renderless, api} from '@opentiny/vue-renderless/alert/vue'
import {IconClose, IconSuccess, IconError, IconHelp, IconWarning} from '@opentiny/react-icon'
import {vc, If, Component, Slot, useSetup, useVm} from '@opentiny/react-common'
import '@opentiny/vue-theme/alert/index.less'

const $constants = {}

export default function Alert(props) {
  const {
    type = 'info',
    size = 'normal',
    center = false,
    showIcon = true,
    description = '',
    slots = {},
    _constants = $constants,
    closable = true,
    closeText,
    title,
    customClass,
    icon,
  } = props

  const defaultProps = {
    type,
    size,
    center,
    showIcon,
    description,
    slots,
    _constants,
    closable,
    closeText,
    title,
    customClass,
    icon,
  }

  const {ref, current: vm, parent} = useVm()

  const {state, handleClose} = useSetup({
    props: defaultProps,
    renderless,
    api,
    constants: _constants,
    vm,
    parent,
  })

  return (
    <div className="tiny-transition-alert-fade" ref={ref}>
      <If v-if={state.show}>
        <div className={vc(['tiny-alert', customClass])}>
          <Component v-if={showIcon} is={state.getIcon} className="tiny-alert__icon" />
          <div className="tiny-alert__content">
            <If v-if={size === 'large'}>
              <div className="tiny-alert__title">
                <Slot name="title" slots={props.slots}>
                  {state.getTitle}
                </Slot>
              </div>
            </If>
            <div
              className={vc([
                'tiny-alert__description',
                size === 'large' && !description && !slots.description && 'is-hide',
              ])}
            >
              <Slot name="description" slots={props.slots}>
                {description}
              </Slot>
            </div>
            <If v-if={size === 'large'}>
              <div className="tiny-alert__opration">
                <Slot slots={props.slots} parent_children={props.children} />
              </div>
            </If>
          </div>
          <If v-if={!closeText && closable}>
            <IconClose className={vc(['tiny-svg-size'])} onClick={handleClose} />
          </If>
          <If v-if={closeText && closable}>
            <span className="is-custom" onClick={handleClose}>
              {closeText}
            </span>
          </If>
        </div>
      </If>
    </div>
  )
}
```
