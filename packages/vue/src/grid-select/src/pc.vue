<template>
  <tiny-base-select
    ref="baseSelectRef"
    class="tiny-grid-select"
    v-model="state.value"
    :multiple="multiple"
    :filterable="filterable"
    :filter-method="filter"
  >
    <template #panel>
      <tiny-grid
        ref="gridRef"
        auto-resize
        :row-id="valueField"
        :select-config="buildSelectConfig()"
        :radio-config="buildRadioConfig()"
        :highlight-current-row="true"
        :columns="state.gridData.columns"
        :data="state.gridData"
        @select-all="selectChange"
        @select-change="selectChange"
        @radio-change="radioChange"
        @mousedown.stop
        v-bind="gridOp"
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
    extraQueryParams: {
      type: [Object, String, Boolean, Array, Number],
      default: ''
    },
    filterable: Boolean,
    filterMethod: Function,
    gridOp: {
      type: Object,
      default: () => ({})
    },
    initLabel: {
      type: String,
      default: ''
    },
    initQuery: Function,
    modelValue: {},
    multiple: Boolean,
    radioConfig: {
      type: Object,
      default() {
        return {
          checkMethod() {
            return true
          }
        }
      }
    },
    remote: Boolean,
    remoteConfig: {
      type: Object,
      default() {
        return {
          showIcon: false,
          clearData: false,
          autoSearch: false
        }
      }
    },
    remoteMethod: Function,
    reserveKeyword: Boolean,
    selectConfig: {
      type: Object,
      default() {
        return {
          checkMethod() {
            return true
          }
        }
      }
    },
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
