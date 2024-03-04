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
  <div
    class="tiny-mobile-multi-select-item"
    :class="{
      'is-active': option.active,
      'is-disabled': option.disabled,
      'tiny-mobile-multi-select-item--divided': divided,
      'has-children': option.children?.length
    }"
    ref="multiSelectItem"
    @click.stop="handleClick"
    @mousedown.stop
    :aria-disabled="option.disabled"
    :tabindex="option.disabled ? null : -1"
  >
    <div class="tiny-mobile-multi-select-item__wrap">
      <div class="tiny-mobile-multi-select-item__content">
        <span v-for="i in option.level" :key="i" class="tiny-mobile-multi-select-item__content-indent"></span>
        <component v-if="option.icon" :is="option.icon" class="tiny-svg-size" />
        <slot :item-data="option">
          <span>{{ option.label }}</span>
        </slot>
      </div>
      <span
        v-if="option.hasChild"
        :class="['tiny-mobile-multi-select-item__suffix-icon']"
        :style="{
          transform: option.expanded && !slots.suffix ? 'rotate(180deg)' : 'none'
        }"
        @click="toggleExpand"
      >
        <slot name="suffix">
          <IconChevronDown></IconChevronDown>
        </slot>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { $prefix, props, setup, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/multi-select-item/vue'
import { iconChevronDown } from '@opentiny/vue-icon'
import Button from '@opentiny/vue-button'
import '@opentiny/vue-theme-mobile/multi-select-item/index.less'

export default defineComponent({
  name: $prefix + 'MultiSelectItem',
  components: {
    TinyButton: Button,
    IconChevronDown: iconChevronDown()
  },
  props: [...props, 'option', 'divided'],

  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
