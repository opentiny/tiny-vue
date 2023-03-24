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
  <div class="tiny-mobile-wheel">
    <div class="tiny-mobile-wheel__container">
      <transition name="picker-move">
        <div class="tiny-mobile-wheel__picker__panel" @click.stop>
          <div class="tiny-mobile-wheel__picker__content">
            <div class="tiny-mobile-wheel__wheel__wrapper" ref="wheelWrapper">
              <div class="wheel" v-for="(data, index) in state.pickerData" :key="index">
                <ul class="wheel__scroll_hasFooter" v-if="hasFooter">
                  <li v-for="item in data" :key="item.label" :class="[item.selected ? 'wheel__item__selected' : '', 'wheel__item']">{{ item.label }}</li>
                </ul>
                <ul class="wheel__scroll_noFooter" v-else>
                  <li
                    v-for="(item, index) in data"
                    :key="item.label"
                    :class="[item.selected ? 'wheel__item__selected' : '', 'wheel__item']"
                    @click="clickWheelItem(index)"
                  >
                    {{ item.label }}
                    <IconYes class="size20" v-if="item.selected"></IconYes>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="tsx">
import { $prefix, setup, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/wheel/vue'
import { IconYes } from '@opentiny/vue-icon'
import BScroll from '@better-scroll/core'
import Wheel from '@better-scroll/wheel'
BScroll.use(Wheel)

export default defineComponent({
  name: $prefix + 'Wheel',
  components: {
    IconYes: IconYes()
  },
  props: {
    dataSource: {
      type: Array,
      default: () => []
    },
    defaultSelectedIndexs: {
      type: Array,
      default: () => []
    },
    hasFooter: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true, extendOptions: { BScroll } })
  }
})
</script>
