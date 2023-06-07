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
  <div ref="wrapper" v-show="state.showWrapper" :class="'tiny-mobile-dropdown-item--' + state.direction" class="tiny-mobile-dropdown-item" @click="clickWrapper" :style="state.itemStyle">
    <tiny-popup v-model="state.showPopup" popup-class="tiny-mobile-dropdown-item__content" :overlay="state.overlay" :close-on-click-overlay="state.closeOnClickOverlay" :closeable="false" :position="state.direction === 'down' ? 'top' : 'bottom'" :duration="state.transition ? state.duration : 0" @open="open" @close="close" @opened="opened" @closed="closed">
      <slot>
        <div class="tiny-mobile-dropdown-item__options" v-if="type === 'selection'">
          <div v-for="(item, index) in options" class="tiny-mobile-dropdown-item__cell tiny-mobile-dropdown-item__option" :key="index" :class="item.value === modelValue ? 'is-active' : ''" tabindex="0" @click="clickItem(item.value)">
            <div class="tiny-mobile-dropdown-item__option-icon">
              <slot name="icon">
                <component :is="icon"></component>
              </slot>
            </div>
            <div class="tiny-mobile-dropdown-item__option-title">
              <slot name="title" :title-data="item">
                <span :style="{
                  color: item.value === modelValue && state.activeColor ? state.activeColor : ''
                }">{{ item.text }}</span>
              </slot>
            </div>
            <div class="tiny-mobile-dropdown-item__option-value">
              <icon-yes v-if="item.value === modelValue" :fill="state.activeColor ? state.activeColor : '#f36f64'"></icon-yes>
            </div>
          </div>
        </div>
        <div class="tiny-mobile-dropdown-item__filter" v-if="type === 'filter'" v-clickoutside="clickOutside">
          <div class="tiny-mobile-dropdown-item__filter-wrap">
            <div v-for="(item, key) in options" :key="key" class="tiny-mobile-dropdown-item__cell tiny-mobile-dropdown-item__filter-item">
              <span class="tiny-mobile-dropdown-item__filter-title">{{ item.title }}</span>
              <ul>
                <li v-for="(tag, tagkey) in options.length === 0 ? (item.data = []) : item.data" class="tiny-mobile-dropdown-item__filter-li" :style="getOptionStyle(tag, modelValue[key])" @click="tagClick(key, tag, $event)" :key="tagkey" :class="[modelValue[key].indexOf(tag.value) > -1 ? 'checked' : '']">
                  {{ tag.text }}
                </li>
              </ul>
            </div>
          </div>
          <div class="tiny-mobile-dropdown-item__filter-operate">
            <tiny-button @click="reset">
              Reset
            </tiny-button>
            <tiny-button type="primary" @click="confirm">
              OK
            </tiny-button>
          </div>
        </div>
      </slot>
    </tiny-popup>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/dropdown-item/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconYes } from '@opentiny/vue-icon'
import Popup from '@opentiny/vue-popup'
import Button from '@opentiny/vue-button'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import '@opentiny/vue-theme-mobile/dropdown-item/index.less'

export default defineComponent({
  directives: { Clickoutside },
  props: [...props, 'modelValue', 'title', 'disabled', 'titleClass', 'options', 'icon', 'type'],
  components: {
    IconYes: iconYes(),
    TinyPopup: Popup,
    TinyButton: Button
  },
  emits: ['update:modelValue', 'open', 'opened', 'click', 'change', 'closed', 'close', 'reset', 'confirm', 'item-click'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
