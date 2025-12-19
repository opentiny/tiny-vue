<template>
  <tiny-base-select
    ref="baseSelectRef"
    class="tiny-tree-select"
    v-model="state.modelValue"
    :clearable="clearable"
    :filterable="filterable"
    :filter-method="filter"
    :multiple="multiple"
    :hover-expand="hoverExpand"
    :click-expand="clickExpand"
    :collapse-tags="collapseTags"
    :dropdown-icon="dropdownIcon"
    :tag-type="tagType"
    :input-box-type="inputBoxType"
    :max-visible-rows="maxVisibleRows"
    :name="name"
    :autocomplete="autocomplete"
  >
    <template #panel>
      <tiny-tree
        ref="treeRef"
        :check-strictly="treeOp.checkStrictly"
        :current-node-key="!multiple ? state.currentKey : ''"
        :data="state.treeData"
        :default-checked-keys="multiple ? state.defaultCheckedKeys : treeOp.defaultCheckedKeys || []"
        :default-expand-all="treeOp.defaultExpandAll !== undefined ? treeOp.defaultExpandAll : ((lazy !== undefined ? lazy : treeOp.lazy) ? false : true)"
        :expand-on-click-node="false"
        :filter-node-method="filterMethod"
        :icon-trigger-click-node="false"
        :node-key="valueField"
        :props="{ label: textField }"
        :show-checkbox="multiple"
        :lazy="lazy !== undefined ? lazy : treeOp.lazy"
        :load="load || treeOp.load"
        :after-load="afterLoad || treeOp.afterLoad"
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
    },
    // 下拉图标
    dropdownIcon: {
      type: [Object, String],
      default: ''
    },
    // 标签类型
    tagType: {
      type: String,
      default: ''
    },
    // 输入框类型
    inputBoxType: {
      type: String,
      default: 'input',
      validator: (value: string) => ['input', 'underline'].includes(value)
    },
    // 多行默认最大显示行数
    maxVisibleRows: {
      type: Number,
      default: 1
    },
    // 原生属性
    name: String,
    autocomplete: {
      type: String,
      default: 'off'
    },
    // 标签相关
    hoverExpand: Boolean,
    clickExpand: Boolean,
    collapseTags: Boolean,
    // 懒加载相关
    lazy: {
      type: Boolean,
      default: false
    },
    load: Function,
    afterLoad: Function
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
