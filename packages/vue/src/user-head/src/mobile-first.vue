<template>
  <div class="inline-block relative" data-tag="tiny-user-head" @click="handleClick" @mouseenter="mouseEnter">
    <div
      data-tag="tiny-user-head-body"
      :style="[state.style, { height: `${state.size}px`, width: `${state.size}px`, lineHeight: `${state.size}px` }]"
      :class="[
        'overflow-hidden w-10 h-10  text-center rounded  bg-center bg-no-repeat bg-cover',
        { 'h-8 w-8 leading-8': min },
        {
          '[&_span]:overflow-hidden [&_span]:flex [&_span]:justify-center [&_span]:h-full px-0.5': type === 'label'
        },
        { 'rounded-full': round },
        {
          '[&_svg]:top-1/2  [&_svg]:absolute [&_svg]:left-1/2  [&_svg]:-translate-y-1/2 [&_svg]:-translate-x-1/2':
            type === 'icon'
        },
        { 'text-sm': type === 'icon' && min }
      ]"
    >
      <slot>
        <component
          v-if="type === 'icon'"
          :is="state.internalValue"
          class="inline-block w-6 h-6"
          :style="[
            {
              height: `${state.size / 1.5}px`,
              width: `${state.size / 1.5}px`,
              lineHeight: `${state.size / 1.5}px`,
              top: `${state.size / 2}`
            }
          ]"
        />
        <span v-if="type === 'label'" :style="state.fontSize" :title="state.internalValue">{{ state.label }}</span>
      </slot>
    </div>
    <div
      data-tag="tiny-user-head-message"
      v-if="messageTotal"
      :class="[
        'absolute rounded-lg text-color-text-primary text-center box-content bg-color-error',
        messageType === 'basic'
          ? 'w-0 h-1 px-0.5 border-2 -right-1.5 border-color-bg-1 border-solid -top-1 left-9'
          : 'min-w-[0.625rem] w-auto left-7 flex items-center -top-2.5 px-0.5 text-xs h-3.5 border-2 border-color-bg-1 border-solid',
        { '-top-1 h-2 min-w-2 leading-none rounded': messageType === 'icon' },
        { 'top-0 -right-1.5': (messageType === 'basic' || messageType === 'icon') && round },
        { '-top-1.5 left-8 -right-1.5 w-3 h-3': (messageType === 'basic' || messageType === 'icon') && min },
        { 'top-0': (messageType === 'basic' || messageType === 'icon') && round && min }
      ]"
    >
      {{ state.message }}
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/user-head/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { IconUser } from '@opentiny/vue-icon'

export default defineComponent({
  components: {
    IconUser: IconUser()
  },
  emits: ['click', 'mouseenter'],
  props: [
    ...props,
    'min',
    'round',
    'color',
    'backgroundColor',
    'type',
    'value',
    'modelValue',
    'messageTotal',
    'messageType',
    'messageUpperLimit',
    'size'
  ],
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
