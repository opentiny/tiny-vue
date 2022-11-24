<template>
  <div>
    <div
      class="tiny-tree-node"
      :class="{
        'is-indeterminate': !node.disabled && node.indeterminate,
        'is-current': node.isCurrent,
        'is-hidden': !node.visible,
        'is-checked': !node.disabled && node.checked,
        'is-indeterminate': !node.disabled && node.indeterminate,
        'is-focusable': !node.disabled,
        'is-expanded': state.expanded
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
        class="tiny-tree-node__content"
        :style="{ 'padding-left': (node.level - 1) * state.tree.indent + 'px' }"
        @click="handleContentClick(node, currentRadio)"
      >
        <span class="tree-node-icon" @click="handleExpandIconClick($event, node)">
          <template v-if="state.expandIcon !== undefined && state.shrinkIcon !== undefined">
            <component :is="state.expanded ? state.shrinkIcon : state.expandIcon" :class="['tiny-tree-node__expand-icon', { 'is-leaf': node.isLeaf }]" />
          </template>
          <template v-else>
            <component
              :is="state.tree.icon ? state.tree.icon : 'icon-chevron-right'"
              :class="[
                'tiny-tree-node__expand-icon',
                {
                  'is-leaf': node.isLeaf,
                  expanded: !node.isLeaf && state.expanded
                }
              ]"
            />
          </template>
        </span>
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
        <icon-loading v-if="node.loading" class="tiny-tree-node__loading-icon tiny-svg-size"></icon-loading>
        <node-content :node="node" :render-content="renderContent"></node-content>
      </div>
      <collapse-transition>
        <div
          class="tiny-tree-node__children"
          v-if="!renderAfterExpand || state.childNodeRendered"
          v-show="state.expanded"
          role="group"
          :aria-expanded="state.expanded"
        >
          <tree-node
            :showRadio="showRadio"
            :currentRadio="currentRadio"
            @radio-change="$emit('radio-change', $event)"
            :render-content="renderContent"
            v-for="child in node.childNodes"
            :expandIcon="state.expandIcon"
            :shrinkIcon="state.shrinkIcon"
            :render-after-expand="renderAfterExpand"
            :show-checkbox="showCheckbox"
            :key="getNodeKey(child)"
            :node="child"
            @node-expand="handleChildNodeExpand"
          >
          </tree-node>
        </div>
      </collapse-transition>
    </div>
    <div
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

<script>
import { setup, directive, h } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/tree-node/vue'
import CollapseTransition from '@opentiny/vue-collapse-transition'
import Checkbox from '@opentiny/vue-checkbox'
import { iconChevronRight, iconLoading } from '@opentiny/vue-icon'
import Radio from '@opentiny/vue-radio'
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
    }
  },
  components: {
    CollapseTransition,
    Checkbox,
    TinyRadio: Radio,
    IconChevronRight: iconChevronRight(),
    IconLoading: iconLoading(),
    MenuContext: {
      props: {
        node: {
          required: true
        }
      },
      render() {
        const tree = this.$parent.state.tree
        const { data } = this.node

        return tree && tree.scopedSlots && tree.scopedSlots.contextmenu && tree.scopedSlots.contextmenu({ data })
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
          : (tree.scopedSlots.default && tree.scopedSlots.default({ node, data })) || h('span', { class: 'tiny-tree-node__label' }, node.label)
      }
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
}
</script>
