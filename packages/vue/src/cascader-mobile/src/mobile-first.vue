<template>
  <div data-tag="tiny-cascader-mobile" v-show="visible">
    <tiny-action-sheet
      tiny_mode="mobile-first"
      :title="title"
      show-footer
      :visible="state.toggle"
      @update:visible="$emit('update:visible', $event)"
      @close="close"
      :show-header="!state.search.show"
      :custom-class="['min-h-[95%] pb-4']"
    >
      <template #body-top>
        <div
          v-show="!state.search.show"
          class="h-11 flex-none flex items-center border-b-0.5 border-color-border-separator overflow-auto whitespace-nowrap scrollbar-size-0"
        >
          <div class="px-4 flex">
            <div v-for="(option, index) in state.computedNavList" :key="index" class="flex-none flex leading-5.5">
              <template v-if="index <= state.level">
                <span v-if="index !== 0" class="px-2 text-color-text-placeholder">/</span>
                <span
                  :class="[
                    'flex-none max-w-[theme(spacing.24)] truncate',
                    { 'text-color-brand': index === state.level },
                    disabledNavOption(index, option) ? 'text-color-text-disabled' : 'cursor-pointer'
                  ]"
                  @click="setLevel(index, option)"
                  >{{ option.data[textField] }}</span
                >
              </template>
            </div>
            <div class="flex-auto"></div>
          </div>
        </div>

        <!-- search header -->
        <div
          data-tag="search-header"
          v-show="state.search.show"
          class="flex leading-6 pt-4 pb-4 px-4 text-base items-center"
        >
          <div class="flex-auto flex items-center h-8 py-1 px-3 bg-color-bg-4 rounded-full">
            <IconSearch custom-class="h-4 w-4" class="mr-1 fill-color-icon-disabled"></IconSearch>
            <input
              v-model="state.search.input"
              class="h-5 flex-auto text-xs bg-transparent outline-0"
              :placeholder="t('ui.select.pleaseSearch')"
              @input="searchMethod"
            />
          </div>
          <div class="flex items-center pl-3 cursor-pointer">
            <div @click="searchBoxToggle(false)">{{ t('ui.base.cancel') }}</div>
          </div>
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
            v-for="(item, itemIndex) in currentList"
            :key="item.data[valueField]"
            :multiple="multiple"
            :ellipsis="ellipsis"
            :text-field="textField"
            :text-field2="textField2"
            :text-field3="textField3"
            :loading="state.loading"
            :option="item"
            :selected="isSelected(item)"
            @click="selectOption(item, $event)"
          >
            <slot :item="item" :index="itemIndex"></slot>
          </tiny-option>
        </div>
      </div>

      <!-- search box -->
      <div data-tag="search-box" v-show="state.search.show" class="flex flex-col flex-auto">
        <!-- search body -->
        <div data-tag="search-body" class="flex-auto overflow-auto flex flex-col">
          <div v-show="state.search.filterOptions.length" :class="['flex flex-col px-4']">
            <tiny-option
              v-for="(item, index) in state.search.filterOptions"
              :key="index"
              :multiple="multiple"
              :ellipsis="ellipsis"
              :text-field="textField"
              :text-field2="textField2"
              :text-field3="textField3"
              :option="item"
              :selected="isSelected(item)"
              @click="searchSelectHandler(item, index)"
            >
              <slot v-if="searchConfig.openSearchSlot" name="search-item" :item="item" :index="index"></slot>
              <slot v-else :item="item" :index="index">
                <div :class="['flex-auto', { 'truncate': ellipsis }]">
                  <span v-for="(text, textIndex) in renderSearchOption(item[textField])" :key="text">
                    <span v-if="textIndex" class="text-color-brand">{{ state.search.input }}</span
                    >{{ text }}
                  </span>
                </div>
              </slot>
            </tiny-option>
          </div>
          <div
            v-show="state.search.input && !state.search.filterOptions.length"
            class="w-full flex justify-center items-center text-center flex-auto"
          >
            <tiny-exception component-page type="noresult" tiny_mode="mobile-first" tiny_mode_root></tiny-exception>
          </div>
        </div>
      </div>

      <template #header-left>
        <IconSearch
          v-if="!state.search.show"
          custom-class="h-5 w-5"
          class="cursor-pointer"
          @click="searchBoxToggle(true)"
        ></IconSearch>
      </template>
      <template #footer>
        <tiny-button
          v-show="state.showButton"
          tiny_mode="mobile-first"
          class="flex-1 mx-4 sm:mx-0"
          type="primary"
          :reset-time="0"
          @click="confirm"
          >{{ t('ui.button.confirm') }}</tiny-button
        >
      </template>
    </tiny-action-sheet>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/cascader-mobile/vue'
import { $prefix, setup, $props, defineComponent } from '@opentiny/vue-common'
import { IconSearch } from '@opentiny/vue-icon'
import Button from '@opentiny/vue-button'
import ActionSheet from '@opentiny/vue-action-sheet'
import Exception from '@opentiny/vue-exception'
import Option from './option.vue'
import { t } from '@opentiny/vue-locale'

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
  name: $prefix + 'CascaderMobile',
  emits: [
    'click',
    'search-click',
    'node-expand',
    'close',
    'update:modelValue',
    'confirm',
    'update:visible',
    'update:text'
  ],
  components: {
    TinyActionSheet: ActionSheet,
    TinyOption: Option,
    TinyButton: Button,
    TinyException: Exception,
    IconSearch: IconSearch()
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
    ellipsis: {
      type: Boolean,
      default: false
    },
    valueField: {
      type: String,
      default: 'id'
    },
    placeholder: {
      type: [String, Array],
      default: t('ui.select.placeholder')
    },
    childrenField: {
      type: String,
      default: 'children'
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
      default: ' / '
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    multiple: Boolean,
    searchConfig: {
      type: Object,
      default: () => ({
        options: [],
        searchMethod: null,
        openSearchSlot: false
      })
    },
    nodeConfig: {
      type: Object,
      default: () => $constants.defaultNodeConfig
    }
  },
  setup(props: any, context: any) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
