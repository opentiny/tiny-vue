<template>
  <component :is="design.tag.name ?? 'div'" v-if="design.tag?.enable" :class="classNames" :style="cssVar">
    <slot></slot>
  </component>
  <slot v-else></slot>
</template>

<script lang="ts">
import type { PropType } from '@opentiny/vue-common'
import type { ConfigProviderProps } from './props'
import { $prefix, defineComponent, provideDesignConfig, hooks } from '@opentiny/vue-common'

export default defineComponent({
  name: $prefix + 'ConfigProvider',
  props: {
    design: {
      type: Object as PropType<ConfigProviderProps>,
      default: () => {
        return {
          breakPoints: {
            'xs': 480,
            'sm': 640,
            'md': 768,
            'lg': 1024,
            'xl': 1280,
            '2xl': 1536
          },
          direction: 'ltr',
          tag: {
            enable: true,
            name: 'div'
          },
        } as ConfigProviderProps
      }
    }
  },
  setup(props, { slots }) {
    provideDesignConfig(props.design)
    const isRTL = hooks.computed(() => props.design.direction === 'rtl')
    const cssVar = hooks.computed(() => {
      return {
        '--text-direction': props.design.direction
      }
    })
    const classNames = hooks.reactive({
      'tiny-config-provider': true,
      'tiny-config-provider--rtl': isRTL
    })
    return { slots, classNames, cssVar }
  },
})
</script>

<style>
.tiny-config-provider--rtl{
  direction: var(--text-direction);
  transform: translateY(-1);
}
</style>
