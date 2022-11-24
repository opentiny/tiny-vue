<template>
  <div
    class="tiny-toggle-menu"
    :class="{
      'is-toggle-right': !state.toggleIcon && !state.showNode ? true : false
    }"
  >
    <div class="tiny-toggle-menu__filter" v-if="showFilter">
      <tiny-input
        :placeholder="state.placeholder"
        v-model="state.filterText"
      ></tiny-input>
      <span class="tiny-toggle-menu__filter-search">
        <tiny-icon-search @click="searchNodeText"></tiny-icon-search>
      </span>
    </div>
    <div class="tiny-toggle-menu__wrap">
      <div
        class="tiny-toggle-menu__toggle"
        :class="{
          'tiny-toggle-menu__toggle-right':
            !state.toggleIcon && !state.showNode ? true : false
        }"
        @click="hideNodeText"
      >
        <tiny-icon-chevron-left v-if="state.toggleIcon"></tiny-icon-chevron-left>
        <tiny-icon-chevron-right v-else></tiny-icon-chevron-right>
      </div>
      <tiny-tree
        :class="{
          'is-wrap': !ellipsis ? wrap : false,
          'is-overflow': ellipsis,
          'is-node-hide': !state.showNode
        }"
        :showCheckbox="showCheckbox"
        :data="state.datas"
        node-key="id"
        :accordion="accordion"
        :default-checked-keys="defaultCheckedKeys"
        :icon="icon"
        :props="props"
        :default-expand-all="defaultExpandAll"
        :draggable="draggable"
        :expand-on-click-node="expandOnClickNode"
        :filter-node-method="filterNode"
        @node-click="nodeClick"
        @node-expand="nodeExpand"
        @node-collapse="nodeCollapse"
        @node-drag-end="nodeDragEnd"
        @node-drag-enter="nodeDragEnter"
        @node-drag-leave="nodeDragLeave"
        @node-drag-over="nodeDragOver"
        @node-drag-start="nodeDragStart"
        @node-drop="nodeDrop"
        ref="tree"
      >
        <template #default="{ data }">
          <div class="tiny-toggle-menu__link tiny-tree-node__label">
            <component
              :is="data.icons"
              class="tiny-tree-node__expand-icon"
            ></component>
            <a
              class="tiny-toggle-menu__body"
              :title="data[props.label]"
              @click="clickA(data.url)"
            >
              <span class="tiny-toggle-menu__name">
                <slot name="node" :label="data[props.label]">
                  {{ data[props.label] }}
                </slot>
              </span>
            </a>
          </div>
        </template>
      </tiny-tree>
    </div>
  </div>
</template>

<script>
import {
  renderless,
  api
} from '@opentiny/vue-renderless/toggle-menu/vue'
import { props, setup } from '@opentiny/vue-common'
import Input from '@opentiny/vue-input'
import Tree from '@opentiny/vue-tree'
import { iconSearch, iconChevronLeft, iconChevronRight } from '@opentiny/vue-icon'

export default {
  props: [
    ...props,
    'accordion',
    'showCheckbox',
    'defaultCheckedKeys',
    'automaticFiltering',
    'data',
    'ellipsis',
    'expandOnClickNode',
    'draggable',
    'defaultExpandAll',
    'icon',
    'placeholder',
    'props',
    'showFilter',
    'wrap',
    'getMenuDataSync'
  ],
  components: {
    TinyTree: Tree,
    TinyInput: Input,
    TinyIconSearch: iconSearch(),
    TinyIconChevronLeft: iconChevronLeft(),
    TinyIconChevronRight: iconChevronRight()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
