<template>
  <div :style="state.barStyle" :class="`is-${state.rootTabs.position}`" class="tiny-tabs__active-bar"></div>
</template>

<script>
import { $prefix, setup } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/tab-bar/vue'

export default {
  name: $prefix + 'TabBar',
  props: {
    tabs: Array
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
}
</script>
