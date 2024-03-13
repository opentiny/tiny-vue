<template>
  <div ref="root" data-tag="tiny-pull-refresh" :style="{ '--tiny-pull-refresh-head-height': state.headerHeight }">
    <div
      ref="track"
      class="relative h-fit transition-transform"
      data-tag="tiny-pull-refresh__track"
      data-tiny-touch-simulate-container
      :style="{
        transitionDuration: `${state.duration}ms`,
        transform: state.distance ? `translate3d(0,${state.distance}px, 0)` : ''
      }"
      @touchstart.passive="onTouchStart"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
    >
      <component :is="HeadComponent" ref="head"></component>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { $prefix, props, defineComponent, setup, h } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/pull-refresh-mobile-first/vue'
import Loading from '@opentiny/vue-loading'

export default defineComponent({
  name: $prefix + 'PullRefresh',
  emits: ['change', 'refresh', 'update:modelValue'],
  props: [
    ...props,
    'disabled',
    'modelValue',
    'headHeight',
    'successText',
    'pullingText',
    'loosingText',
    'loadingText',
    'pullDistance',
    'successDuration',
    'animationDuration',
    'loadingOptions',
    'selfSimulate'
  ],
  setup(props, context) {
    const apis: any = setup({ props, context, renderless, api, extendOptions: { Loading } })
    const { state, getStatusText, constants } = apis
    const { PULLING, LOOSING, SUCCESS } = constants.STATUS

    const HeadComponent = {
      render() {
        const { slots } = context
        const { status, distance } = state
        let children

        if (slots[status]) {
          children = [slots[status]!({ distance })]
        } else {
          children = []

          if ([PULLING, LOOSING, SUCCESS].includes(status)) {
            children.push(h('div', { attrs: { 'data-tag': 'tiny-pull-refresh__text' } }, [getStatusText()]))
          }
        }

        return h(
          'div',
          {
            class: [
              'absolute left-0 -translate-y-full overflow-hidden text-base text-color-text-info-primary text-center',
              'w-full h-[var(--tiny-pull-refresh-head-height)] leading-[var(--tiny-pull-refresh-head-height)]'
            ],
            attrs: { 'data-tag': 'tiny-pull-refresh__head' }
          },
          children
        )
      }
    }

    return { ...apis, HeadComponent }
  }
})
</script>
