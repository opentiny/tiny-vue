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
  <div ref="menu" class="tiny-mobile-dropdown-menu">
    <div class="tiny-mobile-dropdown-menu__bar tiny-mobile-dropdown-menu__bar--opened">
      <div
        v-for="(item, index) in state.children"
        :key="index"
        role="button"
        v-clickoutside="clickOutside"
        :tabindex="item.disabled ? -1 : 0"
        class="tiny-mobile-dropdown-menu__item"
        :class="[item.disabled ? 'is-disabled' : '', item.titleClass]"
        @click="toggleItem(index, item)"
      >
        <div
          class="tiny-mobile-dropdown-menu__title"
          :style="{ color: item.state.showPopup ? activeColor : '' }"
          :class="{
            'is-active': item.state.showPopup,
            'is-down': item.state.showPopup === (direction === 'down')
          }"
        >
          <div class="tiny-mobile-dropdown-menu__title-wrap">
            <span v-if="!slots['title']">
              <span class="tiny-mobile-dropdown-menu__title-text">{{ item.state.displayTitle }}</span>
              <span class="tiny-mobile-dropdown-menu__title-icon" v-if="item.type === 'sort'">
                <icon-delta-up class="up" :fill="item.state.sort === 'asc' ? (activeColor ? activeColor : '#f36f64') : '#ccc'"></icon-delta-up>
                <icon-delta-down class="down" :fill="item.state.sort === 'desc' ? (activeColor ? activeColor : '#f36f64') : '#ccc'"></icon-delta-down>
              </span>
              <component
                v-else
                :fill="item.state.showPopup ? (activeColor ? activeColor : '#f36f64') : '#ccc'"
                :is="item.type === 'filter' ? 'IconUnfilter' : item.type === 'selection' && item.state.showPopup ? 'IconUp' : 'IconDown'"
                :class="[item.type === 'filter' ? 'filter-icon' : '']"
              />
            </span>
            <slot v-else name="title"></slot>
          </div>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/dropdown-menu/vue'
import { props, setup } from '@opentiny/vue-common'
import { iconUp, iconDown, iconUnfilter, iconSort, iconDeltaDown, iconDeltaUp } from '@opentiny/vue-icon'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import '@opentiny/vue-theme-mobile/dropdown-menu/index.css'

export default {
  props: [...props, 'activeColor', 'closeOnClickOutside', 'closeOnClickOverlay', 'direction', 'duration', 'overlay', 'zIndex'],
  components: {
    IconUp: iconUp(),
    IconDown: iconDown(),
    IconUnfilter: iconUnfilter(),
    IconSort: iconSort(),
    IconDeltaDown: iconDeltaDown(),
    IconDeltaUp: iconDeltaUp()
  },
  directives: { Clickoutside },
  emits: ['open'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
