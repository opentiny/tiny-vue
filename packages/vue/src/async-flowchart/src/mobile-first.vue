<template>
  <div data-tag="tiny-async-flowchart">
    <div v-if="state.loading" class="h-12"></div>
    <tiny-flowchart
      v-else
      ref="chart"
      :data="state.data"
      :config="state.config"
      @click-node="handleClickNode"
      @click-link="handleClickLink"
      @click-blank="handleClickBlank"
      @click-group="handleClickGroup"
    >
    </tiny-flowchart>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/async-flowchart/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import Flowchart from '@opentiny/vue-flowchart'
import Loading from '@opentiny/vue-loading'

export default defineComponent({
  props: [...props, 'fetch'],
  emits: ['click-node', 'click-link', 'click-blank', 'click-group'],
  components: {
    TinyFlowchart: Flowchart
  },
  setup(props: any, context: any): any {
    return setup({ props, context, renderless, api, extendOptions: { Loading } })
  }
})
</script>
