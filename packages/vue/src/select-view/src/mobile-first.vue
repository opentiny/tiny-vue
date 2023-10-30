<template>
  <div data-tag="tiny-select-view">
    <tiny-action-sheet
      ref="actionSheet"
      :title="title"
      :lock-scroll="lockScroll"
      :mask="mask"
      :show-header="showHeader"
      :custom-class="m('h-full max-h-[100%] rounded-none text-color-text-primary pb-0', customClass)"
      :visible="visible"
      @update:visible="$emit('update:visible', $event)"
    >
      <template #header-left>
        <IconChevronLeft class="h-5 w-5 fill-color-text-primary cursor-pointer" @click="close"></IconChevronLeft>
      </template>
      <template #header-right>
        <div></div>
      </template>
      <!-- search box -->
      <div data-tag="tiny-select-view-inner text-color-text-primary" :class="['flex flex-col flex-auto h-full']">
        <!-- header -->
        <div
          data-tag="select-view-header"
          class="flex flex-none leading-6 py-2.5 px-4 text-base items-center border-b-0.5 border-color-bg-4 shadow-sm"
        >
          <div class="flex-auto flex items-center h-7 py-1 px-3 bg-color-bg-4 rounded">
            <IconSearch class="h-4 w-4 mr-1 fill-color-icon-disabled"></IconSearch>
            <input
              v-model="state.search.input"
              @keydown.enter="searchMethod"
              class="h-5 flex-auto text-xs bg-transparent outline-0"
              :placeholder="placeholder || t('ui.select.pleaseSearch')"
            />
          </div>
          <div class="flex items-center pl-3 cursor-pointer">
            <div @click="searchMethod">{{ t('ui.select.search') }}</div>
          </div>
        </div>
        <!-- search body -->
        <div data-tag="select-view-body" class="flex-auto flex flex-col overflow-auto scrollbar-size-0">
          <div
            data-tag="select-view-recommend"
            v-if="topConfig && topConfig.options.length"
            class="leading-5.5 text-color-text-placeholder mx-4 border-b-0.5 border-color-bg-4"
          >
            <div v-if="topConfig.label" class="mt-4">{{ topConfig.label }}</div>
            <div class="mt-3">
              <div
                v-for="(item, index) in topConfig.options"
                :key="item[valueField]"
                :class="[
                  'max-w-full h-8 rounded-sm inline-flex truncate items-center px-2.5 cursor-pointer mb-3 mr-4 border-0.5',
                  (multiple ? includeOptionIndex(state.checkList, item) > -1 : item[valueField] === modelValue)
                    ? 'border-current text-color-brand bg-color-bg-1'
                    : 'border-transparent bg-color-bg-2'
                ]"
                @click.stop="searchSelectHandler(item, index)"
              >
                <span
                  :class="[
                    (multiple ? includeOptionIndex(state.checkList, item) > -1 : item[valueField] === modelValue)
                      ? 'text-color-brand'
                      : 'text-color-text-primary'
                  ]"
                  >{{ item[textField] }}</span
                ><span v-if="textField2" :class="['ml-2.5', { 'truncate': !textField3 }]">{{ item[textField2] }}</span
                ><span v-if="textField3" class="ml-2.5 truncate">{{ item[textField3] }}</span>
              </div>
            </div>
          </div>
          <div
            data-tag="select-view-infinite-ccroll"
            v-show="state.search.filterOptions.length"
            v-infinite-scroll="load"
            :infinite-scroll-delay="infiniteScroll.delay"
            :infinite-scroll-disabled="infiniteScroll.disabled"
            :infinite-scroll-distance="infiniteScroll.distance"
            :infinite-scroll-immediate="infiniteScroll.immediate"
            :class="['px-4']"
          >
            <tiny-option
              v-for="(item, index) in state.search.filterOptions"
              :key="item[valueField]"
              :multiple="multiple"
              :readonly="multiple && requiredSelectedList.indexOf(item[valueField]) !== -1"
              :selected="multiple ? includeOptionIndex(state.checkList, item) > -1 : item[valueField] === modelValue"
              @click="searchSelectHandler(item, index)"
            >
              <slot :item="item" :index="index">
                <div class="flex">
                  <div :class="[{ 'min-w-[theme(spacing.14)]': !textField3 }]">{{ item[textField] }}</div>
                  <div v-if="textField2" class="ml-5 text-color-text-placeholder truncate">{{ item[textField2] }}</div>
                </div>
                <div v-if="textField3" class="text-color-text-placeholder truncate">{{ item[textField3] }}</div>
              </slot>
            </tiny-option>
          </div>
          <div
            data-tag="select-view-empty"
            v-show="!state.search.filterOptions.length"
            class="flex-auto w-full flex justify-center items-center text-center py-2"
          >
            <tiny-exception component-page type="nodata">
              <template #content>{{ t('ui.select.noSearchData') }}</template>
            </tiny-exception>
          </div>
          <div
            data-tag="select-view-loading"
            v-show="state.search.loading && infiniteScroll.loadingText"
            class="w-full flex justify-center items-center text-center py-2"
          >
            <div>
              <p>{{ infiniteScroll.loadingText }}</p>
            </div>
          </div>
        </div>
        <div
          data-tag="select-view-footer"
          v-if="multiple"
          class="flex flex-none items-center py-4 px-3 border-t border-color-bg-4 shadow-sm"
        >
          <div class="cursor-pointer pr-2" @click.stop="toggleCheckList(true)">
            <span>{{ t('ui.select.selectedNum', { num: state.checkList.length }) }}</span>
            <IconChevronUp v-show="state.checkList.length" class="flex-none w-4 h-4 ml-2 fill-current"></IconChevronUp>
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
      </div>
    </tiny-action-sheet>

    <tiny-action-sheet
      custom-class="h-3/4 text-color-text-primary"
      :title="t('ui.select.selected')"
      show-footer
      :lock-scroll="false"
      :menus="state.selected.options"
      :visible="state.selected.show"
      @update:visible="state.selected.show = $event"
    >
      <template #header-left>
        <div class="cursor-pointer text-color-text-placeholder" @click="clean">{{ t('ui.datepicker.clear') }}</div>
      </template>

      <div class="h-full overflow-auto scrollbar-size-0">
        <tiny-option v-for="item in state.selected.options" :key="item[valueField]">
          <div class="flex px-4 items-center">
            <div class="flex-auto truncate">
              <div class="flex">
                <div :class="[{ 'min-w-[theme(spacing.14)]': !textField3 }]">{{ item[textField] }}</div>
                <div v-if="textField2" class="ml-5 text-color-text-placeholder truncate">{{ item[textField2] }}</div>
              </div>
              <div v-if="textField3" class="text-color-text-placeholder truncate">{{ item[textField3] }}</div>
            </div>
            <div v-if="requiredSelectedList.indexOf(item[valueField]) === -1" class="flex-none pl-4 text-right">
              <IconOperationfaild
                class="w-5 h-5 fill-color-text-placeholder"
                @click="selectedOptionHandler(item)"
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
import { renderless, api } from '@opentiny/vue-renderless/select-view/vue'
import { $prefix, setup, $props, defineComponent } from '@opentiny/vue-common'
import { iconSearch, iconChevronLeft, iconChevronDown, iconChevronUp, iconOperationfaild } from '@opentiny/vue-icon'
import Button from '@opentiny/vue-button'
import ActionSheet from '@opentiny/vue-action-sheet'
import Exception from '@opentiny/vue-exception'
import Option from './option.vue'
import InfiniteScroll from '@opentiny/vue-renderless/common/deps/infinite-scroll'

export default defineComponent({
  name: $prefix + 'SelectView',
  emits: ['click', 'update:text', 'update:visible', 'close', 'update:modelValue', 'search-click', 'confirm'],
  directives: { InfiniteScroll },
  components: {
    TinyOption: Option,
    TinyActionSheet: ActionSheet,
    TinyButton: Button,
    TinyException: Exception,
    IconChevronUp: iconChevronUp(),
    IconChevronDown: iconChevronDown(),
    IconSearch: iconSearch(),
    IconOperationfaild: iconOperationfaild(),
    IconChevronLeft: iconChevronLeft()
  },
  props: {
    ...$props,
    menus: {
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
    multiple: Boolean,
    searchConfig: {
      type: Object,
      default: () => ({
        searchMethod: null
      })
    },
    topConfig: {
      type: Object,
      default: () => ({
        label: '',
        options: []
      })
    },
    requiredSelectedList: {
      type: Array,
      default: () => []
    },
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
    infiniteScroll: {
      type: Object,
      default: () => ({
        load: null,
        delay: 200,
        disabled: true,
        distance: 0,
        immediate: true
      })
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
