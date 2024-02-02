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
  <div class="tiny-mobile-multi-select" v-clickoutside="handleClose">
    <div
      :class="[
        'tiny-mobile-multi-select__header',
        { 'show-search': filterable, 'is-searching': state.isSearching, 'is-disabled': disabled }
      ]"
      ref="headerBox"
    >
      <template v-if="!state.isSearching">
        <div class="tiny-mobile-multi-select__header-item-box">
          <div
            v-for="(item, index) of dataSource"
            :key="index"
            :class="['tiny-mobile-multi-select__header-item', { 'item-disabled': item.disabled }]"
            @click="handleClick(index)"
            :style="state.labelsStyle[index]"
          >
            <div
              :class="[
                'tiny-mobile-multi-select__header__label',
                state.headerInfo[index]?.isSelected ? 'tiny-mobile-multi-select__header__active' : ''
              ]"
            >
              <span v-if="!state.headerInfo[index]?.isSelected">{{ item.title }}</span>
              <span v-else>{{ state.headerInfo[index]?.title }}</span>
            </div>

            <div
              :class="[
                'tiny-mobile-multi-select__header__icon',
                state.headerInfo[index]?.isSelected ? 'tiny-mobile-multi-select__header__active' : ''
              ]"
              :style="{
                transform: state.headerInfo[index]?.isUP ? 'rotate(180deg)' : 'none'
              }"
            >
              <IconChevronDown></IconChevronDown>
            </div>
          </div>
        </div>

        <div v-if="filterable" class="tiny-mobile-multi-select__header-search-icon" @click="handleSearchBtnClick">
          <IconSearch></IconSearch>
        </div>
      </template>

      <template v-else>
        <div class="tiny-mobile-multi-select__header-search">
          <tiny-input
            ref="searchInput"
            type="text"
            v-model="state.searchValue"
            placeholder="搜索内容"
            @input="handleSearchInput"
          >
            <template #prefix>
              <IconSearch class="tiny-mobile-multi-select__header-prefix-icon"></IconSearch>
            </template>
          </tiny-input>
        </div>
        <div class="tiny-mobile-multi-select__header-cancel-btn" @click="handleSearchBtnClick">取消</div>
      </template>
    </div>

    <div
      :class="['tiny-mobile-multi-select__content', !dataSource[state.headerIndex]?.hasFooter ? 'noFooter' : '']"
      v-show="state.showOptions"
    >
      <div v-if="type === 'list'" class="tiny-mobile-multi-select__option-list">
        <tiny-multi-select-item
          v-for="(item, index) in state.currentOptions"
          :option="item"
          :key="index"
        ></tiny-multi-select-item>
      </div>

      <tiny-wheel
        v-else
        :data-source="state.wheelData"
        :default-selected-indexs="state.defaultSelectedIndexs"
        :has-footer="dataSource[state.headerIndex]?.hasFooter"
        @change="wheelChange"
        @click-wheel-item="clickWheelItem"
      ></tiny-wheel>

      <div
        class="tiny-mobile-multi-select__footer"
        v-show="state.showOptions && dataSource[state.headerIndex]?.hasFooter"
      >
        <tiny-button round size="large" @click="reset">{{ t('ui.base.reset') }}</tiny-button>
        <tiny-button round size="large" type="primary" @click="confirm">{{ t('ui.button.confirm') }}</tiny-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from '@opentiny/vue-common'
import { $prefix, setup, defineComponent, directive } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/multi-select/vue'
import { iconChevronDown, iconSearch } from '@opentiny/vue-icon'
import Button from '@opentiny/vue-button'
import Wheel from '@opentiny/vue-wheel'
import MultiSelectItem from '@opentiny/vue-multi-select-item'
import Input from '@opentiny/vue-input'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'

export default defineComponent({
  name: $prefix + 'MultiSelect',
  components: {
    IconChevronDown: iconChevronDown(),
    IconSearch: iconSearch(),
    TinyButton: Button,
    TinyWheel: Wheel,
    TinyMultiSelectItem: MultiSelectItem,
    TinyInput: Input
  },
  directives: directive({
    Clickoutside
  }),
  props: {
    dataSource: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: [String, Array],
      default: ''
    },
    searchValue: {
      type: String,
      default: ''
    },
    defaultSelectedArray: {
      type: Array,
      default: () => []
    },
    filterable: {
      type: Boolean,
      default: false
    },
    type: {
      type: String as PropType<'list' | 'wheel'>,
      default: 'list'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'update:searchValue', 'item-click'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
