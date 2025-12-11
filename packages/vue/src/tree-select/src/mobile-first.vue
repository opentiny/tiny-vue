<template>
  <tiny-base-select
    ref="baseSelectRef"
    data-tag="tiny-tree-select"
    v-model="state.modelValue"
    :clearable="clearable"
    :filterable="filterable"
    :filter-method="filter"
    :multiple="multiple"
    :text-field="textField"
    :value-field="valueField"
    :size="size"
    :disabled="disabled"
    :placeholder="placeholder"
    :readonly="readonly"
    :popper-class="popperClass"
    :popper-append-to-body="popperAppendToBody"
    :placement="placement"
    :drop-style="dropStyle"
    :hover-expand="hoverExpand"
    :click-expand="clickExpand"
    :collapse-tags="collapseTags"
    :copyable="copyable"
    :text-split="textSplit"
    :show-tips="showTips"
    :searchable="searchable"
    :multiple-limit="multipleLimit"
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
        :default-expand-all="treeOp.defaultExpandAll !== undefined ? treeOp.defaultExpandAll : true"
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
import { props, $prefix, defineComponent, setup } from '@opentiny/vue-common'
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
    ...props,
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
    // 基础 props
    size: String,
    disabled: Boolean,
    placeholder: String,
    readonly: Boolean,
    // 弹框相关
    popperClass: String,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'bottom-start'
    },
    dropStyle: {
      type: Object,
      default: () => ({})
    },
    // 标签相关
    collapseTags: Boolean,
    copyable: Boolean,
    textSplit: {
      type: String,
      default: ','
    },
    hoverExpand: Boolean,
    clickExpand: Boolean,
    showTips: {
      type: Boolean,
      default: true
    },
    // 搜索和过滤
    searchable: Boolean,
    // 多选相关
    multipleLimit: {
      type: Number,
      default: 0
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
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
