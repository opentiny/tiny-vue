<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->

<template>
  <div
    class="tiny-tree-menu"
    :class="{
      'is-collapsed': state.isCollapsed,
      'is-expand': state.isExpand,
      'tiny-tree-menu__show-filter': showFilter,
      'tiny-tree-menu__show-expand': showExpand
    }"
    :style="widthAdapt ? { width: '100%' } : {}"
  >
    <div v-if="menuCollapsible" class="tiny-tree-menu__toggle-button" @click.stop="collapseChange">
      <icon-arrow></icon-arrow>
    </div>
    <tiny-input
      v-if="showFilter"
      v-model="state.filterText"
      :placeholder="placeholder || t('ui.treeMenu.placeholder')"
      :prefix-icon="searchIcon"
      :clearable="state.clearable"
    />
    <tiny-tree
      ref="tree"
      :class="{
        'tiny-tree-menu__wrap': !ellipsis ? wrap : false,
        'tiny-tree-menu__overflow': ellipsis,
        'only-check-children': onlyCheckChildren
      }"
      tiny_mode="pc"
      theme="tiny"
      :accordion="accordion"
      :data="state.data"
      :node-key="nodeKey || 'id'"
      :empty-text="emptyText"
      :filter-node-method="filterNodeMethod || filterNode"
      :draggable="draggable"
      :default-expand-all="defaultExpandAll"
      :check-strictly="checkStrictly"
      :lazy="lazy"
      :load="load"
      :show-checkbox="showCheckbox"
      :show-number="showNumber"
      :collapsible="collapsible"
      :node-height="nodeHeight"
      :indent="indent"
      :default-checked-keys="defaultCheckedKeys"
      :default-expanded-keys="state.defaultExpandedKeys"
      :default-expanded-keys-highlight="defaultExpandedKeysHighlight"
      :allow-drag="allowDrag"
      :props="props"
      :allow-drop="allowDrop"
      :highlight-query="highlightQuery"
      :expand-on-click-node="expandOnClickNode"
      :only-check-children="onlyCheckChildren"
      @node-drag-start="nodeDragStart"
      @node-drag-enter="nodeDragEnter"
      @node-drag-over="nodeDragOver"
      @node-drag-end="nodeDragEnd"
      @node-drop="nodeDrop"
      @node-expand="nodeExpand"
      @node-collapse="nodeCollapse"
      @node-click="nodeClick"
      @check-change="checkChange"
      @check="check"
      @current-change="currentChange"
    >
      <template #default="{ node, data }">
        <div class="tree-node">
          <div class="tree-menus-link tiny-tree-node__label">
            <a class="tree-node-body" :title="getTitle(data.label)" :href="data.url || void 0">
              <span class="tree-node-name">
                <component v-if="!data.customIcon && suffixIcon" :is="suffixIcon"></component>
                <component v-if="data.customIcon" :is="data.customIcon"></component>
                <slot :node="node" :data="data" :label="data.label">{{ data.label || node.label }} </slot>
              </span>
            </a>
          </div>
        </div>
      </template>
    </tiny-tree>
    <div v-if="showExpand" class="tiny-tree-menu__expand">
      <span>
        <icon-editor-menu-left v-if="!state.isExpand" @click="handleToggleMenu('collapse')"></icon-editor-menu-left>
        <icon-editor-menu-right v-else @click="handleToggleMenu('expand')"></icon-editor-menu-right>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { $prefix, setup, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/tree-menu/vue'
import Tree from '@opentiny/vue-tree'
import Input from '@opentiny/vue-input'
import { iconLeftWardArrow, iconEditorMenuLeft, iconEditorMenuRight } from '@opentiny/vue-icon'
import { treeMenuProps } from './props'
import '@opentiny/vue-theme/tree-menu/index.less'

export default defineComponent({
  name: $prefix + 'TreeMenu',
  emits: [
    'change',
    'current-change',
    'node-drag-start',
    'node-drag-enter',
    'node-drag-over',
    'node-drag-end',
    'node-drop',
    'node-expand',
    'node-click',
    'check-change',
    'check',
    'collapse-change',
    'node-collapse'
  ],
  components: {
    TinyTree: Tree,
    TinyInput: Input,
    IconArrow: iconLeftWardArrow(),
    IconEditorMenuLeft: iconEditorMenuLeft(),
    IconEditorMenuRight: iconEditorMenuRight()
  },
  props: treeMenuProps,
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
