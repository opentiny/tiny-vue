<!-- eslint-disable vue/no-mutating-props -->
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
  <template v-if="node.childNodes && node.childNodes.length > 0">
    <TinyPopover
      trigger="hover"
      placement="right"
      :visible-arrow="false"
      :popperClass="
        'tiny-tree-menu-pop-menu-panel ' +
        (node.level === 1 && 'tiny-tree-menu-pop-menu-panel__first') +
        ' ' +
        (popperClass || '')
      "
      class="tiny-tree-menu-pop-menu"
    >
      <template #default>
        <div class="tree-menu-pop-menu__list">
          <div
            class="tree-menu-pop-menu__list-item"
            :class="{ 'is-current': item.isCurrent, 'has-current': hasCurrent(item) }"
            v-for="(item, index) in node.childNodes"
            :key="'pop-menu-item-' + index"
            @click="onClickItem(item)"
          >
            <TreeMenuPopMenu :node="item" :data="item.data" :getTitle="getTitle" :popperClass="popperClass">
              <template #reference="{ node: childNode, data: childData }">
                <TinyTreeMenuNode :node="childNode" :data="childData" :getTitle="getTitle" />
              </template>
            </TreeMenuPopMenu>
          </div>
        </div>
      </template>
      <template #reference>
        <slot name="reference" :node="node" :data="data" :getTitle="getTitle"></slot>
      </template>
    </TinyPopover>
  </template>
  <template v-else>
    <slot name="reference" :node="node" :data="data" :getTitle="getTitle"></slot>
  </template>
</template>

<script lang="ts">
import { defineComponent, hooks } from '@opentiny/vue-common'
import Popover from '@opentiny/vue-popover'
import MenuNode from './menu-node.vue'

export default defineComponent({
  name: 'TreeMenuPopMenu',
  componentName: 'TreeMenuPopMenu',
  components: {
    TinyPopover: Popover,
    TinyTreeMenuNode: MenuNode
  },

  props: {
    node: {},
    data: {},
    getTitle: {},
    suffixIcon: {},
    popperClass: {}
  },

  setup() {
    const treeMenuVm = hooks.inject('tree-menu')

    function onClickItem(item) {
      treeMenuVm && treeMenuVm.setCurrentNode(item)
    }

    function hasCurrent(node) {
      if (node.isCurrent === true) {
        return false // 输入对象自身 isCurrent 为 true，直接返回 false
      }

      function hasChildCurrent(currentNode) {
        if (currentNode.childNodes && Array.isArray(currentNode.childNodes)) {
          for (const child of currentNode.childNodes) {
            if (typeof child === 'object' && child !== null) {
              // 检查子节点是否直接标记为 current
              if (child.isCurrent === true) {
                return true
              }
              // 递归检查子节点的子节点
              if (hasChildCurrent(child)) {
                return true
              }
            }
          }
        }
        return false
      }

      return hasChildCurrent(node)
    }

    return {
      onClickItem,
      hasCurrent
    }
  }
})
</script>
