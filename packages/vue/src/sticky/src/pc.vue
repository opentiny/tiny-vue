<template>
  <div ref="root" class="tiny-sticky" :style="state.rootStyle">
    <div :class="state.isFixed && 'tiny-sticky--fixed'" :style="state.stickyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/sticky/vue'
import { setup, props, defineComponent } from '@opentiny/vue-common'
import '@opentiny/vue-theme/sticky/index.less'

export default defineComponent({
  emits: ['change', 'scroll'],
  props: [...props, 'zIndex', 'target', 'offset', 'position'],
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
