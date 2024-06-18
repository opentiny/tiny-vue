<template>
  <tiny-base-select
    ref="baseSelectRef"
    class="tiny-tree-select"
    v-model="state.value"
    :multiple="multiple"
    :filterable="filterable"
    :clearable="clearable"
    :filter-method="filter"
  >
    <template #panel>
      <tiny-tree
        ref="treeRef"
        :data="state.treeData"
        :expand-on-click-node="false"
        :icon-trigger-click-node="false"
        :default-expand-all="true"
        :props="{ label: textField }"
        :node-key="valueField"
        :show-checkbox="multiple"
        :filter-node-method="filterMethod"
        @node-click="nodeClick"
        @check="check"
      ></tiny-tree>
    </template>
  </tiny-base-select>
</template>

<script lang="ts">
import { $prefix, defineComponent, setup } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/tree-select/vue'
import Tree from '@opentiny/vue-tree'
import BaseSelect from '@opentiny/vue-base-select'

export default defineComponent({
  name: $prefix + 'TreeSelect',
  components: {
    TinyTree: Tree,
    TinyBaseSelect: BaseSelect
  },
  props: {
    clearable: Boolean,
    filterable: Boolean,
    filterMethod: Function,
    modelValue: {},
    multiple: Boolean,
    textField: {
      type: String,
      default: 'label'
    },
    treeOp: {
      type: Object,
      default: () => ({})
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
