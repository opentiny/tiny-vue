<template>
  <tiny-base-select
    ref="baseSelectRef"
    class="tiny-tree-select"
    v-model="state.value"
    :clearable="clearable"
    :filterable="filterable"
    :filter-method="filter"
    :multiple="multiple"
  >
    <template #panel>
      <tiny-tree
        ref="treeRef"
        :current-node-key="!multiple ? state.currentKey : ''"
        :data="state.treeData"
        :default-checked-keys="multiple ? state.defaultCheckedKeys : treeOp.defaultCheckedKeys || []"
        :default-expand-all="true"
        :expand-on-click-node="false"
        :filter-node-method="filterMethod"
        :icon-trigger-click-node="false"
        :node-key="valueField"
        :props="{ label: textField }"
        :show-checkbox="multiple"
        @check="check"
        @node-click="nodeClick"
        v-bind="treeOp"
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
