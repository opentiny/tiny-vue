<template>
  <aui-virtual-scroll-box ref="vsBox" class="aui-virtual-tree" v-bind="state.vsBoxOptions" @change="onVsBoxChange">
    <aui-tree
      ref="tree"
      v-bind="state.treeOptions"
      v-on="state.treeEvents"
      :style="state.treeStyle"
      @node-expand="onTreeChange"
      @node-collapse="onTreeChange"
    >
      <!-- 透传 空数据插槽 -->
      <template v-if="slots.empty" #empty="params">
        <slot name="empty" v-bind="params"></slot>
      </template>

      <!-- 透传 默认插槽 -->
      <template v-if="slots.default" #default="params">
        <slot name="default" v-bind="params"></slot>
      </template>

      <!-- 透传 前缀插槽 -->
      <template v-if="slots.prefix" #prefix="params">
        <slot name="prefix" v-bind="params"></slot>
      </template>

      <!-- 透传 后缀插槽 -->
      <template v-if="slots.suffix" #suffix="params">
        <slot name="suffix" v-bind="params"></slot>
      </template>

      <!-- 透传 操作插槽 -->
      <template v-if="slots.operation" #operation="params">
        <slot name="operation" v-bind="params"></slot>
      </template>
    </aui-tree>
  </aui-virtual-scroll-box>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/virtual-tree/vue'
import { defineComponent, props, setup } from '@opentiny/vue-common'
import VirtualScrollBox from '@opentiny/vue-virtual-scroll-box'
import Tree from '@opentiny/vue-tree'

export default defineComponent({
  inheritAttrs: false,
  props: [...props, 'width', 'height', 'rowHeight', 'scrollbarSize', 'treeOp'],
  components: {
    AuiVirtualScrollBox: VirtualScrollBox,
    AuiTree: Tree
  },
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
