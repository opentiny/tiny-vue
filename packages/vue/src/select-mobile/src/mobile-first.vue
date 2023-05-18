<template>
  <div data-tag="tiny-select-mobile" v-show="visible">
    <tiny-action-sheet tiny_mode="mobile-first" :title="title" :visible="state.toggle" @update:visible="$emit('update:visible', $event)" @close="hide" :show-header="!state.search.show" :show-footer="multiple" :custom-class="[{ 'min-h-[95%]': state.search.show }]">
      <div v-show="!state.search.show" :class="['flex flex-col px-4']">
        <div v-if="multiple" :class="['flex items-start leading-6 py-3 cursor-pointer select-none']" @click="allCheckHandler">
          <component v-if="multiple" :is="
            state.checkList.length === 0
              ? 'icon-check'
              : state.checkList.length === menus.length
                ? 'icon-checked-sur'
                : 'icon-halfselect'
          " :class="[
  'flex-none mt-1 mr-2',
  state.checkList.length ? 'fill-color-brand' : 'fill-color-icon-disabled'
]" custom-class="w-4.5 h-4.5" />
          <div :class="['flex-auto', { 'truncate': ellipsis }]">{{ t('ui.base.all') }}</div>
        </div>
        <tiny-option v-for="(item, index) in menus" :key="item[valueField]" :multiple="multiple" :ellipsis="ellipsis" :selected="multiple ? includeOptionIndex(state.checkList, item) > -1 : item[valueField] === modelValue" @click="selectOption(item, index)">
          {{ item[textField] }}
        </tiny-option>
      </div>
      <!-- search box -->
      <div :class="[state.search.show ? 'flex flex-col flex-auto' : 'hidden']">
        <!-- search header -->
        <div class="flex leading-6 pb-4 px-4 text-base items-center">
          <div class="flex-auto flex items-center h-7 py-1 px-3 bg-color-bg-4 rounded">
            <IconSearch custom-class="h-5 w-5" class="mr-1 fill-color-icon-disabled"></IconSearch>
            <input v-model="state.search.input" class="h-5 flex-auto text-xs bg-transparent outline-0" placeholder="请搜索" @input="searchMethod" />
          </div>
          <div class="flex items-center pl-3 cursor-pointer">
            <div @click="searchBoxToggle(false)">取消</div>
          </div>
        </div>
        <!-- search body -->
        <div class="flex-auto overflow-auto">
          <div v-show="state.search.filterOptions.length" :class="['flex flex-col px-4']">
            <tiny-option v-for="(item, index) in state.search.filterOptions" :key="item[valueField]" :multiple="multiple" :ellipsis="ellipsis" :selected="multiple ? includeOptionIndex(state.checkList, item) > -1 : item[valueField] === modelValue" @click="searchSelectHandler(item, index)">
              {{ item[textField] }}
            </tiny-option>
          </div>
          <div v-show="!state.search.filterOptions.length" class="w-full flex justify-center items-center text-center">
            <div>
              <p>无相关搜索结果，请重新输入</p>
            </div>
          </div>
        </div>
      </div>
      <template #header-left>
        <IconSearch custom-class="h-5 w-5" class="cursor-pointer" @click="searchBoxToggle(true)"></IconSearch>
      </template>
      <template #footer>
        <tiny-button v-if="multiple" tiny_mode="mobile-first" class="flex-1" type="primary" :reset-time="0" @click="confirm">{{ t('ui.button.confirm') }}</tiny-button>
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
import Option from './option.vue'

export default defineComponent({
  name: $prefix + 'SelectMobile',
  emits: ['click', 'search-click', 'update:visible', 'update:text'],
  components: {
    TinyActionSheet: ActionSheet,
    TinyOption: Option,
    TinyButton: Button,
    IconCheck: IconCheck(),
    IconCheckedSur: IconCheckedSur(),
    IconHalfselect: IconHalfselect(),
    IconSearch: IconSearch(),
    IconClose: IconClose()
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
        searchMethod: null
      })
    }
  },
  setup(props, context): any {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
