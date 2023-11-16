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
  <!-- TINY-TODO:  tiny-dropdown-menu__item命名不规范，后续统一有个迭代去掉 -->
  <tiny-tooltip :content="getTip" :placement="tipPosition">
    <li
      class="tiny-dropdown-item tiny-dropdown-menu__item"
      :class="{
        'is-disabled': disabled,
        'tiny-dropdown-item--divided tiny-dropdown-menu__item--divided': divided,
        'has-children': itemData.children && itemData.children.length
      }"
      ref="dropdownItem"
      @click.stop="handleClick"
      @mousedown.stop
      :aria-disabled="disabled"
      :tabindex="disabled ? null : -1"
    >
      <div class="tiny-dropdown-item__wrap">
        <span
          v-if="itemData.children && itemData.children.length"
          class="tiny-dropdown-item__expand tiny-dropdown-menu__item-expand"
        >
          <component :is="state.getIcon" />
        </span>
        <div class="tiny-dropdown-item__content tiny-dropdown-menu__item-content">
          <component v-if="icon" :is="icon" class="tiny-svg-size" />
          <span class="tiny-dropdown-item__label">
            <slot :item-data="itemData">
              <span>{{ label }}</span>
            </slot>
          </span>
        </div>
        <ul
          v-if="itemData.children && itemData.children.length"
          :class="[
            'tiny-dropdown-menu',
            'tiny-dropdown-item--child tiny-dropdown-menu__item--child',
            state.popperClass
          ]"
        >
          <tiny-dropdown-item
            v-for="(item, index) in itemData.children"
            :key="index"
            :label="item[state.textField]"
            :item-data="item"
            :icon="item.icon"
            :disabled="item.disabled"
            :divided="item.divided"
            :tip="item.tip"
            :tip-position="item.tipPosition"
          >
            <slot :item-data="item"></slot>
          </tiny-dropdown-item>
        </ul>
      </div>
    </li>
  </tiny-tooltip>
</template>

<script lang="ts">
import { props, setup, $prefix, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/dropdown-item/vue'
import { iconDeltaLeft } from '@opentiny/vue-icon'
import TinyTooltip from '@opentiny/vue-tooltip'
import '@opentiny/vue-theme/dropdown-item/index.less'
import type { IDropdownItemApi } from '@opentiny/vue-renderless/types/dropdown-item.type'

export default defineComponent({
  name: $prefix + 'DropdownItem',
  componentName: $prefix + 'DropdownItem',
  emits: ['item-click'],
  props: [
    ...props,
    'disabled',
    'divided',
    'icon',
    'itemData',
    'title',
    'titleClass',
    'options',
    'type',
    'label',
    'appendToBody',
    'textField',
    'selected',
    'selectedField',
    'multiStage',
    'currentIndex',
    'tip',
    'tipPosition'
  ],
  components: {
    IconDeltaLeft: iconDeltaLeft(),
    TinyTooltip
  },
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IDropdownItemApi
  }
})
</script>
