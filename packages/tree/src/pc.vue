<template>
  <div
    class="tiny-tree"
    :class="{
      'tiny-tree--highlight-current': highlightCurrent,
      'is-dragging': !!state.dragState.draggingNode,
      'is-drop-not-allow': !state.dragState.allowDrop,
      'is-drop-inner': state.dragState.dropType === 'inner'
    }"
    role="tree"
  >
    <tree-node
      v-for="child in state.root.childNodes"
      :showRadio="showRadio"
      :currentRadio="state.currentRadio"
      @radio-change="state.currentRadio.value = $event"
      :expandIcon="expandIcon"
      :shrinkIcon="shrinkIcon"
      :node="child"
      :props="props"
      :render-after-expand="renderAfterExpand"
      :show-checkbox="showCheckbox"
      :key="getNodeKey(child)"
      :render-content="renderContent"
      @node-expand="handleNodeExpand"
    >
    </tree-node>
    <div class="tiny-tree__empty-block" v-if="state.isEmpty">
      <slot name="empty">
        <span class="tiny-tree__empty-text">{{ state.showEmptyText }}</span>
      </slot>
    </div>
    <div
      v-show="state.dragState.showDropIndicator"
      class="tiny-tree__drop-indicator"
      ref="dropIndicator"
    ></div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/tree/vue'
import { props, setup } from '@opentiny/vue-common'
import TreeNode from './tree-node.vue'

export default {
  props: [
    ...props,
    'data',
    'dataset',
    'parentKey',
    'expandIcon',
    'shrinkIcon',
    'emptyText',
    'renderAfterExpand',
    'nodeKey',
    'checkStrictly',
    'defaultExpandAll',
    'expandOnClickNode',
    'checkOnClickNode',
    'checkDescendants',
    'autoExpandParent',
    'defaultCheckedKeys',
    'defaultExpandedKeys',
    'defaultExpandedKeysHighlight',
    'currentNodeKey',
    'renderContent',
    'showCheckbox',
    'draggable',
    'allowDrag',
    'allowDrop',
    'props',
    'lazy',
    'highlightCurrent',
    'load',
    'filterNodeMethod',
    'accordion',
    'indent',
    'icon',
    'iconTriggerClickNode',
    'showRadio',
    'showContextmenu'
  ],
  components: {
    TreeNode
  },
  emits: [
    'node-expand',
    'node-drag-leave',
    'check-change',
    'check',
    'node-drag-over',
    'node-drag-enter',
    'node-drag-start',
    'node-drag-end',
    'node-drop',
    'current-change',
    'node-click'
  ],
  provide() {
    return {
      parentTree: this,
      TreeRoot: this
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
