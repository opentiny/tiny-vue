<template>
  <div :class="[pattern]" class="tiny-container">
    <div
      v-if="state.showHeader"
      :style="state.headerStyle"
      class="tiny-container__header"
    >
      <slot name="header"></slot>
    </div>
    <div
      v-if="state.showAside"
      :style="state.asideStyle"
      class="tiny-container__aside"
    >
      <slot name="aside"></slot>
    </div>
    <div :style="state.mainStyle" class="tiny-container__main">
      <slot></slot>
    </div>
    <div
      v-if="state.showFooter"
      :style="state.footerStyle"
      class="tiny-container__footer"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/container/vue'
import { props, setup } from '@opentiny/vue-common'

export default {
  props: [...props, 'pattern', 'headerHeight', 'asideWidth', 'footerHeight'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
