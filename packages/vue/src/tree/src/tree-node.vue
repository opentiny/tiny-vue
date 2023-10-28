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
  <div class="tiny-tree-node__wrapper">
    <div
      class="tiny-tree-node"
      :class="{
        'is-indeterminate': !node.disabled && node.indeterminate,
        'is-current': node.isCurrent,
        'is-hidden': !node.visible,
        'is-checked': !node.disabled && node.checked,
        'is-focusable': !node.disabled,
        'is-expanded': state.expanded,
        'is-loading': node.loading,
        'is-disabled': node.disabled,
        'is-leaf': node.isLeaf,
        'is-root': node.level === 1,
        'show-line': showLine,
        'show-checkbox': showCheckbox
      }"
      role="treeitem"
      tabindex="-1"
      v-show="node.visible"
      :aria-expanded="state.expanded"
      :aria-disabled="node.disabled"
      :aria-checked="node.checked"
      :draggable="state.tree.draggable"
      @click.stop="handleClick"
      @contextmenu.stop="($event) => handleContextMenu($event)"
      @dragstart.stop="handleDragStart"
      @dragover.stop="handleDragOver"
      @dragend.stop="handleDragEnd"
      @drop.stop="handleDrop"
      ref="node"
    >
      <div
        :class="{
          'tiny-tree-node__content': true,
          'tiny-tree-node__content-number': showNumber
        }"
        :style="{
          'height': nodeHeight ? nodeHeight + 'px' : undefined,
          'line-height': nodeHeight ? nodeHeight + 'px' : undefined
        }"
        @click="handleContentClick(node, currentRadio)"
      >
        <span
          class="tiny-tree-node__content-indent"
          v-for="i in showLine ? 1 : node.level - 1"
          :style="{ width: state.computedIndent }"
        ></span>
        <div class="tiny-tree-node__content-left">
          <template v-if="showNumber">
            <span class="tree-node-number">{{ node.data.number }}</span>
          </template>
          <template v-else>
            <span v-if="!node.isLeaf" class="tree-node-icon" @click="handleExpandIconClick($event, node)">
              <template v-if="state.expandIcon !== undefined && state.shrinkIcon !== undefined">
                <component
                  :is="state.expanded ? state.shrinkIcon : state.expandIcon"
                  :fill="state.expanded ? state.shrinkIconColor : state.expandIconColor"
                  :class="['tiny-tree-node__expand-icon', { 'is-leaf': node.isLeaf }]"
                />
              </template>
              <template v-else>
                <component
                  :is="state.computedExpandIcon"
                  :class="[
                    'tiny-tree-node__expand-icon',
                    {
                      'is-leaf': node.isLeaf,
                      expanded: !node.isLeaf && state.expanded,
                      'is-saas-theme': state.isSaaSTheme
                    }
                  ]"
                />
              </template>
            </span>
          </template>

          <checkbox
            v-if="showCheckbox"
            :modelValue="node.checked"
            ref="checkbox"
            :indeterminate="node.indeterminate"
            :disabled="!!node.disabled"
            :validate-event="false"
            @change="handleCheckChange"
          >
          </checkbox>
          <tiny-radio
            v-if="showRadio"
            :model-value="currentRadio.value"
            @update:model-value="$emit('radio-change', $event)"
            :validate-event="false"
            :label="node.id"
            :disabled="!!node.disabled"
          ></tiny-radio>
          <svg v-if="node.loading" class="tiny-tree-node__loading tiny-svg circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="24" fill="none"></circle>
          </svg>
          <slot name="prefix" :node="node"></slot>
          <template v-if="action.type === 'edit' && action.node && action.node === node">
            <tiny-input
              v-model="action.label"
              ref="editInput"
              autofocus
              clearable
              @keyup.enter="saveEdit($event)"
              @blur="saveEdit($event)"
              @click.stop="($event) => $event.stopPropagation()"
            />
          </template>
          <div v-else class="tiny-tree-node__content-box">
            <node-content :node="node" :render-content="renderContent"></node-content>
          </div>
          <slot name="suffix" :node="node"></slot>
        </div>
        <div class="tiny-tree-node__content-right">
          <slot name="operation" :node="node"></slot>
          <template v-if="action.show">
            <span :title="t('ui.base.edit')">
              <icon-edit
                v-if="!action.deleteDisabled.includes(node.data[nodeKey])"
                @click.stop="openEdit(node)"
              ></icon-edit>
            </span>
            <span :title="t('ui.base.delete')">
              <icon-minus-square
                v-if="!action.editDisabled.includes(node.data[nodeKey])"
                @click.stop="deleteNode($event, node)"
              ></icon-minus-square>
            </span>
            <span :title="t('ui.tree.newNodeTitle')">
              <icon-plus-square
                v-if="!node.data._isNewNode && !action.addDisabled.includes(node.data[nodeKey])"
                @click.stop="addNode(node)"
              ></icon-plus-square>
            </span>
          </template>
        </div>
      </div>

      <template v-if="node.childNodes.length">
        <collapse-transition>
          <div
            class="tiny-tree-node__children"
            v-if="!renderAfterExpand || state.childNodeRendered"
            v-show="state.expanded"
            role="group"
            :aria-expanded="state.expanded"
            :style="{
              'margin-left': showLine ? state.computedIndent : 0
            }"
          >
            <span
              v-if="showLine"
              class="tiny-tree-node__children-indent"
              :style="{ width: state.computedIndent, left: `-${state.computedIndent}` }"
            ></span>
            <tree-node
              v-for="child in node.childNodes"
              :action="action"
              :show-radio="showRadio"
              :theme="theme"
              :current-radio="currentRadio"
              :render-content="renderContent"
              :expand-icon="state.expandIcon"
              :shrink-icon="state.shrinkIcon"
              :expand-icon-color="state.expandIconColor"
              :shrink-icon-color="state.shrinkIconColor"
              :render-after-expand="renderAfterExpand"
              :show-checkbox="showCheckbox"
              :show-number="showNumber"
              :node-height="nodeHeight"
              :key="getNodeKey(child)"
              :node-key="nodeKey"
              :check-easily="checkEasily"
              :node="child"
              :show-line="showLine"
              @node-expand="handleChildNodeExpand"
              @radio-change="$emit('radio-change', $event)"
            >
              <template #prefix="slotScoped">
                <slot name="prefix" :node="slotScoped.node"></slot>
              </template>
              <template #suffix="slotScoped">
                <slot name="suffix" :node="slotScoped.node"></slot>
              </template>
              <template #operation="slotScoped">
                <slot name="operation" :node="slotScoped.node"></slot>
              </template>
            </tree-node>
          </div>
        </collapse-transition>
      </template>
    </div>
    <div
      ref="menuContext"
      class="tiny-tree-node__menu"
      :style="state.menuposition"
      v-if="state.showMenu && TreeRoot.showContextmenu"
      v-clickoutside="closeMenu"
      @contextmenu.stop
      @click.stop
    >
      <menu-context :node="node"></menu-context>
    </div>
  </div>
</template>

<script lang="ts">
import { setup, directive, h, isVue2 } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/tree-node/vue'
import CollapseTransition from '@opentiny/vue-collapse-transition'
import {
  iconChevronRight,
  iconLoading,
  iconArrowBottom,
  iconEdit,
  iconMinusSquare,
  iconPlusSquare
} from '@opentiny/vue-icon'
import Checkbox from '@opentiny/vue-checkbox'
import Radio from '@opentiny/vue-radio'
import Input from '@opentiny/vue-input'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'

export default {
  name: 'TreeNode',
  componentName: 'TreeNode',
  directives: directive({ Clickoutside }),
  inject: ['TreeRoot'],
  provide() {
    return {
      parentTree: this
    }
  },
  emits: ['update:modelValue', 'hook-updated', 'node-expand', 'radio-change', 'tree-node-expand', 'closeMenu'],
  props: {
    node: {
      default() {
        return {}
      }
    },
    props: {},
    expandIcon: Object,
    shrinkIcon: Object,
    expandIconColor: String,
    shrinkIconColor: String,
    renderContent: Function,
    renderAfterExpand: {
      type: Boolean,
      default: true
    },
    showCheckbox: {
      type: Boolean,
      default: false
    },
    showRadio: {
      type: Boolean,
      default: false
    },
    currentRadio: {
      type: Object,
      default() {
        return {
          value: null
        }
      }
    },
    showNumber: {
      type: Boolean,
      default: false
    },
    collapsible: {
      type: Boolean,
      default: true
    },
    nodeHeight: Number,
    checkEasily: {
      type: Boolean,
      default: false
    },
    action: Object,
    nodeKey: String,
    theme: String,
    showLine: Boolean
  },
  components: {
    CollapseTransition,
    Checkbox,
    TinyRadio: Radio,
    TinyInput: Input,
    IconChevronRight: iconChevronRight(),
    IconLoading: iconLoading(),
    IconArrowBottom: iconArrowBottom(),
    IconEdit: iconEdit(),
    IconMinusSquare: iconMinusSquare(),
    IconPlusSquare: iconPlusSquare(),
    MenuContext: {
      props: {
        node: {
          required: true
        }
      },
      render() {
        const tree = this.$parent.state.tree
        const { data } = this.node

        return (
          tree &&
          tree.scopedSlots &&
          tree.scopedSlots.contextmenu &&
          tree.scopedSlots.contextmenu({ data, node: this.node })
        )
      }
    },
    NodeContent: {
      props: {
        node: {
          required: true
        },
        renderContent: Function
      },
      inject: ['TreeRoot', 'parentTree'],
      render() {
        const parent = this.$parent
        const tree = parent.state.tree
        const node = this.node
        const { data, store } = node

        return this.renderContent
          ? this.renderContent(h, { _self: this, node, data, store })
          : (tree.scopedSlots.default && tree.scopedSlots.default({ node, data })) ||
              h('span', { class: 'tiny-tree-node__label' }, node.label)
      }
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true, extendOptions: { isVue2 } })
  }
}
</script>
