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
  <li
    class="tiny-dropdown-menu__item"
    :class="{
      'is-disabled': disabled,
      'tiny-dropdown-menu__item--divided': divided
    }"
    ref="dropdownItem"
    @click="handleClick"
    @mousedown.stop
    :aria-disabled="disabled"
    :tabindex="disabled ? null : -1"
  >
    <span v-if="itemData.children && itemData.children.length" class="tiny-dropdown-menu__item-expand">
      <icon-delta-left></icon-delta-left>
    </span>
    <div class="tiny-dropdown-menu__item-content">
      <component v-if="icon" :is="icon" class="tiny-svg-size" />
      <slot :itemData="itemData">
        <span>{{ label }}</span>
      </slot>
    </div>
    <ul v-if="itemData.children && itemData.children.length" :class="['tiny-dropdown-menu', 'tiny-dropdown-menu__item--child', state.popperClass]">
      <tiny-dropdown-item
        v-for="(item, index) in itemData.children"
        :key="index"
        :label="item[state.textField]"
        :itemData="item"
        :icon="item.icon"
        :disabled="item.disabled"
        :divided="item.divided"
      >
        <slot :itemData="item"></slot>
      </tiny-dropdown-item>
    </ul>
  </li>
</template>

<script lang="tsx">
import { props, setup, $prefix, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/dropdown-item/vue'
import { iconDeltaLeft } from '@opentiny/vue-icon'
import '@opentiny/vue-theme/dropdown-item/index.less'

export default defineComponent({
  name: $prefix + 'DropdownItem',
  componentName: $prefix + 'DropdownItem',
  emits: ['item-click'],
  props: [...props, 'command', 'disabled', 'divided', 'icon', 'label', 'itemData', 'appendToBody', 'textField'],
  components: {
    IconDeltaLeft: iconDeltaLeft()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
