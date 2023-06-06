<template>
  <component :is="newProps.tag.name ?? 'div'" v-if="newProps.tag?.enable" :class="classNames" :style="cssVar">
    <slot></slot>
  </component>
  <slot v-else></slot>
</template>

<script lang="ts">
import type { PropType } from '@opentiny/vue-common'
import type { ConfigProviderProps } from './props'
import { $prefix, defineComponent, provideDesignConfig, hooks } from '@opentiny/vue-common'

const constant: ConfigProviderProps = {
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
}
export default defineComponent({
  name: $prefix + 'ConfigProvider',
  props: {
    design: {
      type: Object as PropType<ConfigProviderProps>,
      default: () => {
        return {
          ...constant
        } as ConfigProviderProps
      }
    }
  },
  setup(props, { slots }) {
    const { breakPoints, direction, globalPrefix, tag } = hooks.toRefs(props.design)
    const standardizationProps = hooks.reactive({
      breakPoints: breakPoints?.value ?? constant.breakPoints,
      direction: direction?.value ?? constant.direction,
      globalPrefix: globalPrefix?.value ?? constant.globalPrefix,
      tag: tag?.value ?? constant.tag,
    })
    provideDesignConfig(standardizationProps)
    const isRTL = hooks.computed(() => standardizationProps.direction === 'rtl')
    const cssVar = hooks.computed(() => {
      return {
        '--text-direction': standardizationProps.direction
      }
    })
    const classNames = hooks.reactive({
      'tiny-config-provider': true,
      'tiny-config-provider--rtl': isRTL
    })
    return { slots, classNames, cssVar, newProps: standardizationProps }
  },
})
</script>

<style>
.tiny-config-provider--rtl{
  direction: var(--text-direction);
  transform: translateY(-1);
}
</style>
