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
  <div :class="['tiny-mobile-multi-select', state.isActive ? 'tiny-mobile-multi-select__active' : '']">
    <div class="tiny-mobile-multi-select__header">
      <div class="tiny-mobile-multi-select__header__flexCenter" ref="headerBox">
        <!-- 用来计算头部每项宽度 -->
        <div class="tiny-mobile-multi-select__header__calc">
          <div 
            v-for="(item, index) of dataSource" 
            :key="index" 
            :class="['tiny-mobile-multi-select__header__item', state.headerInfo[index]?.isSelected ? 'tiny-mobile-multi-select__header__selected' : '']" 
            ref="label"
          >
            <div class="tiny-mobile-multi-select__header__label">
              <span v-if="!state.headerInfo[index]?.isSelected">{{ item.title }}</span>
              <span v-else>{{ state.headerInfo[index]?.title }}</span>
            </div>
            <div
              class="tiny-mobile-multi-select__header__icon"
              :style="{
                transform: state.headerInfo[index]?.isUP ? 'rotate(180deg)' : 'none'
              }"
            >
              <IconChevronDown></IconChevronDown>
            </div>
          </div>
        </div>
        <div
          v-for="(item, index) of dataSource"
          :key="index"
          :class="['tiny-mobile-multi-select__header__item', state.headerInfo[index]?.isSelected ? 'tiny-mobile-multi-select__header__selected' : '']"
          @click="handleClick(index)"
          :style="state.labelsStyle[index]"
        >
          <div class="tiny-mobile-multi-select__header__label">
            <span v-if="!state.headerInfo[index]?.isSelected">{{ item.title }}</span>
            <span v-else>{{ state.headerInfo[index]?.title }}</span>
          </div>
          <div
            class="tiny-mobile-multi-select__header__icon"
            :style="{
              transform: state.headerInfo[index]?.isUP ? 'rotate(180deg)' : 'none'
            }"
          >
            <IconChevronDown></IconChevronDown>
          </div>
        </div>
      </div>
    </div>
    <div :class="['tiny-mobile-multi-select__content', !dataSource[state.headerIndex]?.hasFooter ? 'noFooter' : '']" v-if="state.showWheel">
      <tiny-wheel
        :dataSource="state.wheelData"
        :defaultSelectedIndexs="state.defaultSelectedIndexs"
        :hasFooter="dataSource[state.headerIndex]?.hasFooter"
        @change="wheelChange"
        @clickWheelItem="clickWheelItem"
      ></tiny-wheel>
    </div>
    <div class="tiny-mobile-multi-select__footer" v-if="state.showWheel && dataSource[state.headerIndex]?.hasFooter">
      <tiny-button round size="large" @click="reset">{{ t('ui.base.reset') }}</tiny-button>
      <tiny-button round size="large" type="primary" @click="confirm">{{ t('ui.button.confirm') }}</tiny-button>
    </div>
  </div>
</template>

<script lang="tsx">
import { $prefix, setup, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/multi-select/vue'
import { IconChevronDown } from '@opentiny/vue-icon'
import Button from '@opentiny/vue-button'
import Wheel from '@opentiny/vue-wheel'

export default defineComponent({
  name: $prefix + 'MultiSelect',
  components: {
    IconChevronDown: IconChevronDown(),
    TinyButton: Button,
    TinyWheel: Wheel
  },
  props: {
    dataSource: {
      type: Array,
      default: () => []
    },
    defaultSelectedArray: {
      type: Array,
      default: () => []
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
