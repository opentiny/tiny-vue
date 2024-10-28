<template>
  <tiny-base-select ref="baseSelectRef" class="tiny-grid-select" v-model="state.value">
    <template #panel>
      <tiny-grid ref="gridRef" v-bind="state.gridData"></tiny-grid>
    </template>
  </tiny-base-select>
</template>

<script lang="ts">
import { $prefix, defineComponent, setup } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/grid-select/vue'
import Grid from '@opentiny/vue-grid'
import BaseSelect from '@opentiny/vue-base-select'

export default defineComponent({
  name: $prefix + 'GridSelect',
  components: {
    TinyGrid: Grid,
    TinyBaseSelect: BaseSelect
  },
  props: {
    gridOp: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
