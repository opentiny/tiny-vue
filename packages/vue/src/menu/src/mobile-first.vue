<template>
  <div data-tag="tiny-menu" class="w-28 sm:w-56 h-full pt-0 sm:pt-4 bg-color-bg-2 sm:bg-color-bg-1 overflow-y-auto">
    <div
      data-tag="tiny-menu-filter"
      v-if="showFilter"
      class="px-6 pb-3 pt-0 hidden sm:block [&_svg]:fill-color-text-placeholder"
    >
      <tiny-input
        v-model="state.filterText"
        @input="filterInput($event)"
        :suffix-icon="searchIcon"
        :placeholder="t('ui.treeMenu.placeholder')"
      ></tiny-input>
    </div>
    <div data-tag="tiny-menu-empty" v-if="state.isEmpty" class="relative w-full min-h-[theme(spacing.16)]">
      <tiny-exception component-page type="noresult"></tiny-exception>
    </div>
    <div data-tag="tiny-slot-empty" v-if="!data.length">
      <slot name="empty">
        <div class="relative w-full min-h-[theme(spacing.16)] flex justify-center items-center">
          <span>{{ emptyText || t('ui.tree.emptyText') }}</span>
        </div>
      </slot>
    </div>
    <menu-node
      v-for="(item, index) in state.filterValue ? state.filterData : state.data"
      v-show="!item.hidden"
      :key="item.id || index"
      :nodes="item"
      :depth="1"
      :current-paths="state.currentPaths"
      :expanded-keys-path="state.expandedKeysPath"
      :actived-keys-path="state.activedKeysPath"
      :actived-keys="state.activedKeys"
      :only-check-children="onlyCheckChildren"
    >
    </menu-node>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/menu/vue'
import { $props, $prefix, setup, defineComponent } from '@opentiny/vue-common'
import MenuNode from './menu-node.vue'
import Input from '@opentiny/vue-input'
import Exception from '@opentiny/vue-exception'
import { IconSearch } from '@opentiny/vue-icon'

export default defineComponent({
  name: $prefix + 'Menu',
  componentName: 'Menu',
  emits: ['current-change', 'node-click'],
  components: {
    MenuNode,
    TinyInput: Input,
    TinyException: Exception
  },
  props: {
    ...$props,
    showFilter: {
      type: Boolean,
      default: false
    },
    searchIcon: {
      type: Object,
      default: () => IconSearch()
    },
    emptyText: {
      type: String,
      default: ''
    },
    expandedKeys: {
      type: Array,
      default: () => {
        return []
      }
    },
    activedKeys: {
      type: [Number, String],
      default: ''
    },
    onlyCheckChildren: {
      type: Boolean,
      default: false
    },
    expandAll: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api,
      mono: true
    })
  }
})
</script>
