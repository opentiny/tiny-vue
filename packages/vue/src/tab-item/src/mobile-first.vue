<template>
  <div class="hidden" data-tag="tiny-tab-item"></div>
</template>

<script lang="ts">
import { renderless } from '@opentiny/vue-renderless/tab-item-mf/vue'
import { setup, defineComponent, $props } from '@opentiny/vue-common'

export default defineComponent({
  props: {
    ...$props,
    title: String,
    name: String,
    selected: Boolean,
    renderTitle: Function,
    renderSetting: Function
  },
  setup(props, context): any {
    return setup({ props, context, renderless, api: null })
  }
})
</script>
