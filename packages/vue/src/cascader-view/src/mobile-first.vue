<template>
  <div data-tag="tiny-cascader-view">
    <tiny-action-sheet
      ref="actionSheet"
      :title="title"
      :lock-scroll="lockScroll"
      :mask="mask"
      :show-header="showHeader"
      :custom-class="m('h-full max-h-full rounded-none text-color-text-primary pb-0', customClass)"
      :visible="visible"
      @update:visible="$emit('update:visible', $event)"
    >
      <template #header-left>
        <IconChevronLeft class="h-5 w-5 fill-color-text-primary cursor-pointer" @click="close"></IconChevronLeft>
      </template>
      <template #header-right>
        <div></div>
      </template>

      <template #body-top>
        <!-- search header -->
        <div
          data-tag="search-header"
          class="flex leading-6 pb-4 px-4 text-base items-center border-b-0.5 border-color-border-separator"
        >
          <div class="flex-auto flex items-center h-8 py-1 px-3 bg-color-bg-4 rounded">
            <IconSearch custom-class="h-4 w-4" class="mr-1 fill-color-icon-disabled"></IconSearch>
            <input
              v-model="state.search.input"
              class="h-5 flex-auto text-xs bg-transparent outline-0"
              :placeholder="t('ui.select.pleaseSearch')"
              @input="inputKeyword"
              @keyup.enter="searchMethod"
            />
          </div>
          <div class="flex items-center pl-3 cursor-pointer">
            <div @click="searchMethod">{{ t('ui.select.search') }}</div>
          </div>
        </div>

        <div
          data-tag="nav-box"
          v-show="!state.search.show"
          class="h-11 flex flex-none items-center border-b-0.5 border-color-border-separator overflow-auto whitespace-nowrap scrollbar-size-0"
        >
          <div class="px-4 flex">
            <div v-for="(option, index) in state.computedNavList" :key="index" class="flex-none flex items-center">
              <span v-if="index !== 0" class="px-2 text-color-text-placeholder flex items-center"
                ><IconChevronRight custom-class="w-4 h-4 fill-current"></IconChevronRight
              ></span>
              <span
                :class="[
                  'flex-none max-w-[theme(spacing.24)] truncate',
                  { 'text-color-brand': index === state.level },
                  disabledNavOption(index, option) ? 'text-color-text-disabled' : 'cursor-pointer'
                ]"
                @click="setLevel(index, option)"
                >{{ option.data[textField] }}</span
              >
            </div>
            <div class="flex-auto"></div>
          </div>
        </div>
      </template>
      <template #body-bottom>
        <div data-tag="view-footer" class="flex items-center py-4 px-3 border-t border-color-bg-4 shadow-sm">
          <div class="cursor-pointer pr-2" @click.stop="toggleCheckList(true)">
            <span>{{ t('ui.select.selectedNum', { num: state.computedCheckList.length }) }}</span>
            <IconChevronUp
              v-show="state.computedCheckList.length"
              class="flex-none w-4 h-4 ml-2 fill-current"
            ></IconChevronUp>
          </div>
          <div class="flex-auto"></div>
          <tiny-button
            tiny_mode="mobile-first"
            class="flex-none ml-3 w-28"
            type="primary"
            size="medium"
            :reset-time="0"
            @click="confirm"
          >
            {{ t('ui.button.confirm') }}
          </tiny-button>
        </div>
      </template>

      <div data-tag="tabs" v-show="!state.search.show" class="flex-auto">
        <div
          data-tag="tab-item"
          v-show="index === state.level"
          v-for="(currentList, index) in state.options"
          :key="index"
          class="flex flex-col px-4 overflow-auto pt-2"
        >
          <tiny-option
            v-for="(item, index) in currentList"
            :key="item.data[valueField]"
            :ellipsis="ellipsis"
            :textField="textField"
            :textField2="textField2"
            :textField3="textField3"
            :loading="state.loading"
            :option="item"
            @check="selectOption(item)"
            @expand="nodeExpand"
            ><slot :item="item" :index="index"></slot
          ></tiny-option>
        </div>
      </div>

      <!-- search box -->
      <div data-tag="search-box" :class="[state.search.show ? 'flex flex-col flex-auto' : 'hidden']">
        <!-- search body -->
        <div data-tag="search-body" class="flex-auto overflow-auto flex flex-col">
          <div :class="['flex flex-col px-4']">
            <tiny-option
              v-for="(item, index) in state.search.filterOptions"
              :key="index"
              :ellipsis="ellipsis"
              :textField="textField"
              :textField2="textField2"
              :textField3="textField3"
              :option="item.node"
              @check="searchSelectHandler(item.node, index)"
            >
              <slot v-if="searchConfig.openSearchSlot" name="search-item" :item="item" :index="index"></slot>
              <slot v-else :item="item" :index="index">
                <div :class="['flex-auto', { 'truncate': ellipsis }]">
                  <span v-for="(text, index) in renderSearchOption(item.data[textField])" :key="index"
                    ><span v-if="index" class="text-color-brand">{{ state.search.input }}</span
                    >{{ text }}</span
                  >
                </div>
              </slot>
            </tiny-option>
          </div>
          <div
            v-show="state.search.loaded && !state.search.filterOptions.length"
            class="w-full flex justify-center items-center text-center flex-auto"
          >
            <tiny-exception component-page type="noresult"></tiny-exception>
          </div>
        </div>
      </div>
    </tiny-action-sheet>

    <tiny-action-sheet
      data-tag="selected-box"
      custom-class="h-3/4 text-color-text-primary"
      :title="t('ui.select.selected')"
      show-footer
      :lock-scroll="false"
      :menus="state.selected.options"
      :visible="state.selected.show"
      @update:visible="state.selected.show = $event"
    >
      <template #header-left>
        <div class="cursor-pointer text-color-brand" @click="clean">{{ t('ui.datepicker.clear') }}</div>
      </template>

      <div class="h-full overflow-auto scrollbar-size-0">
        <tiny-option v-for="(item, index) in state.computedSelectedList" :key="index">
          <div class="flex flex-auto px-4 items-center overflow-hidden">
            <div class="flex-auto truncate min-w-[theme(spacing.14)]">
              {{ item.waitLoad ? item.data[valueField] : item.getPathText(textField, ' / ') }}
            </div>
            <div class="flex-none pl-4 text-right">
              <IconOperationfaild
                class="w-5 h-5 fill-color-text-placeholder"
                @click="removeOption(item)"
              ></IconOperationfaild>
            </div>
          </div>
        </tiny-option>
      </div>

      <template #footer>
        <tiny-button
          tiny_mode="mobile-first"
          custom-class="flex-1 w-full mx-4 sm:mx-0"
          type="primary"
          size="medium"
          :reset-time="0"
          @click="toggleCheckList(false)"
        >
          {{ t('ui.button.confirm') }}
        </tiny-button>
      </template>
    </tiny-action-sheet>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/cascader-view/vue'
import { $prefix, setup, $props, defineComponent } from '@opentiny/vue-common'
import {
  iconSearch,
  iconChevronLeft,
  iconChevronDown,
  iconChevronUp,
  iconOperationfaild,
  iconChevronRight
} from '@opentiny/vue-icon'
import Button from '@opentiny/vue-button'
import ActionSheet from '@opentiny/vue-action-sheet'
import Exception from '@opentiny/vue-exception'
import Option from './option.vue'

const $constants = {
  defaultNodeConfig: {
    lazy: false,
    load: null,
    isLeaf: 'leaf',
    afterLoad: null,
    currentNodeKey: null,
    checkStrictly: false,
    checkDescendants: null,
    defaultCheckedKeys: null,
    defaultExpandedKeys: null,
    autoExpandParent: null,
    defaultExpandAll: null,
    filterNodeMethod: null
  }
}

export default defineComponent({
  name: $prefix + 'CascaderView',
  emits: ['click', 'update:text', 'update:visible', 'close', 'update:modelValue', 'search-click', 'confirm'],
  components: {
    TinyOption: Option,
    TinyActionSheet: ActionSheet,
    TinyButton: Button,
    TinyException: Exception,
    IconChevronRight: iconChevronRight(),
    IconChevronUp: iconChevronUp(),
    IconChevronDown: iconChevronDown(),
    IconSearch: iconSearch(),
    IconOperationfaild: iconOperationfaild(),
    IconChevronLeft: iconChevronLeft()
  },
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    data: {
      type: Array,
      default: () => []
    },
    modelValue: [Number, String, Array],
    visible: {
      type: Boolean,
      default: false
    },
    valueField: {
      type: String,
      default: 'id'
    },
    textField: {
      type: String,
      default: 'label'
    },
    textField2: {
      type: String,
      default: ''
    },
    textField3: {
      type: String,
      default: ''
    },
    title: String,
    textSplit: {
      type: String,
      default: '; '
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    customClass: [String, Object, Array],
    mask: {
      type: Boolean,
      default: true
    },
    ellipsis: {
      type: Boolean,
      default: false
    },
    searchConfig: {
      type: Object,
      default: () => ({
        options: [],
        searchMethod: null,
        openSearchSlot: false
      })
    },
    childrenField: {
      type: String,
      default: 'children'
    },
    nodeConfig: {
      type: Object,
      default: () => $constants.defaultNodeConfig
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    emitPath: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
