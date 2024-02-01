<template>
  <div data-tag="tiny-select-mobile">
    <tiny-cell
      :placeholder="placeholder"
      v-if="mode === 'form'"
      :data="state.selectedLabel"
      @click="$emit('update:visible', true)"
    ></tiny-cell>
    <tiny-action-sheet
      v-show="visible"
      tiny_mode="mobile-first"
      :title="title"
      :lock-scroll="lockScroll"
      :visible="state.toggle"
      @update:visible="$emit('update:visible', $event)"
      @close="hide"
      :show-header="!state.search.show"
      :show-footer="multiple"
      :custom-class="[{ 'min-h-[90%]': state.search.show }, { 'pb-4': state.search.show && multiple }]"
    >
      <div data-tag="tiny-select-mobile-content" v-show="!state.search.show" :class="['flex flex-col px-4']">
        <div
          data-tag="tiny-select-mobile-multiple"
          v-if="multiple"
          :class="['flex items-start leading-6 py-3 cursor-pointer select-none']"
          @click="allCheckHandler"
        >
          <component
            v-if="multiple"
            :is="
              state.checkList.length === 0
                ? 'icon-check'
                : state.checkList.length === menus.length
                ? 'icon-checked-sur'
                : 'icon-halfselect'
            "
            :class="['flex-none mt-1 mr-2', state.checkList.length ? 'fill-color-brand' : 'fill-color-icon-disabled']"
            custom-class="w-4.5 h-4.5"
          />
          <div data-tag="tiny-select-mobile-ellipsis" :class="['flex-auto', { 'truncate': ellipsis }]">
            {{ t('ui.base.all') }}
          </div>
        </div>
        <tiny-option
          v-for="(item, index) in menus"
          :key="item[valueField]"
          :multiple="multiple"
          :ellipsis="ellipsis"
          :textField="textField"
          :textField2="textField2"
          :textField3="textField3"
          :option="item"
          :selected="isSelected(item)"
          @click="selectOption(item, index)"
          ><slot :item="item" :index="index"></slot
        ></tiny-option>
      </div>
      <!-- search box -->
      <div data-tag="tiny-select-mobile-box" :class="[state.search.show ? 'flex flex-col flex-auto' : 'hidden']">
        <!-- search header -->
        <div data-tag="tiny-select-mobile-header" class="flex leading-6 pt-4 pb-4 px-4 text-base items-center">
          <div class="flex-auto flex items-center h-8 py-1 px-3 bg-color-bg-4 rounded">
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
        <!-- search body -->
        <div data-tag="tiny-select-mobile-body" class="flex-auto overflow-auto flex flex-col">
          <div
            data-tag="tiny-select-mobile-filter"
            v-show="state.search.filterOptions.length"
            :class="['flex flex-col px-4']"
          >
            <tiny-option
              v-for="(item, index) in state.search.filterOptions"
              :key="item[valueField]"
              :multiple="multiple"
              :ellipsis="ellipsis"
              :textField="textField"
              :textField2="textField2"
              :textField3="textField3"
              :option="item"
              :selected="isSelected(item)"
              @click="searchSelectHandler(item, index)"
            >
              <slot v-if="searchConfig.openSearchSlot" name="search-item" :item="item" :index="index"></slot>
              <slot v-else :item="item" :index="index"></slot>
            </tiny-option>
          </div>
          <div
            data-tag="tiny-select-mobile-nodata"
            v-show="!state.search.filterOptions.length"
            class="w-full flex justify-center items-center text-center flex-auto"
          >
            <tiny-exception component-page type="nodata">
              <template #content>{{ t('ui.select.noSearchData') }}</template>
            </tiny-exception>
          </div>
        </div>
      </div>
      <template #header-left>
        <IconSearch custom-class="h-5 w-5" class="cursor-pointer" @click="searchBoxToggle(true)"></IconSearch>
      </template>
      <template #footer>
        <tiny-button
          v-if="multiple"
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
import { renderless, api } from '@opentiny/vue-renderless/select-mobile/vue'
import { $prefix, setup, $props, defineComponent } from '@opentiny/vue-common'
import { IconSearch, IconClose, IconHalfselect, IconCheckedSur, IconCheck } from '@opentiny/vue-icon'
import Button from '@opentiny/vue-button'
import ActionSheet from '@opentiny/vue-action-sheet'
import Exception from '@opentiny/vue-exception'
import Input from '@opentiny/vue-input'
import Cell from '@opentiny/vue-cell'
import Option from './option.vue'

export default defineComponent({
  name: $prefix + 'SelectMobile',
  emits: ['click', 'search-click', 'update:visible', 'update:text'],
  components: {
    TinyActionSheet: ActionSheet,
    TinyOption: Option,
    TinyButton: Button,
    TinyException: Exception,
    IconCheck: IconCheck(),
    IconCheckedSur: IconCheckedSur(),
    IconHalfselect: IconHalfselect(),
    IconSearch: IconSearch(),
    IconClose: IconClose(),
    TinyInput: Input,
    TinyCell: Cell
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
    ellipsis: {
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
    showFooter: {
      type: Boolean,
      default: false
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
    lockScroll: {
      type: Boolean,
      default: true
    },
    mode: {
      type: String,
      default: '',
      validator(val) {
        return ['', 'form'].includes(val)
      }
    },
    placeholder: String
  },
  setup(props: any, context: any) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
