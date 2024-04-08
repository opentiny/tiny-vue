<template>
  <div class="tiny-custom-river echarts-custom-river" :style="state.canvasStyle"></div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/river/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import * as echarts from 'echarts'

export default defineComponent({
  emits: ['paths', 'click-node', 'click-link', 'click-icon', 'click-lege'],
  props: [...props, 'data', 'config'],
  setup(props, context): any {
    return setup({ props, context, renderless, api, extendOptions: { echarts } })
  }
})
</script>
