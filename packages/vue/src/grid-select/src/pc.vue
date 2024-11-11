<template>
  <tiny-base-select ref="baseSelectRef" class="tiny-grid-select" v-model="state.value" :multiple="multiple">
    <template #panel>
      <tiny-grid
        ref="gridRef"
        auto-resize
        :row-id="valueField"
        :highlight-current-row="true"
        :columns="state.gridData.columns"
        :data="state.gridData"
        @select-all="selectChange"
        @select-change="selectChange"
        @radio-change="radioChange"
        @mousedown.stop
        v-bind="state.gridData"
      ></tiny-grid>
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
    clearable: Boolean,
    filterable: Boolean,
    filterMethod: Function,
    gridOp: {
      type: Object,
      default: () => ({})
    },
    modelValue: {},
    multiple: Boolean,
    textField: {
      type: String,
      default: 'label'
    },
    valueField: {
      type: String,
      default: 'value'
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
