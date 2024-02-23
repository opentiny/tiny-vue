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
    ref="option"
    @mouseenter="hoverItem"
    @click.stop="selectOptionClick"
    @mousedown.stop=""
    data-tag="tiny-option"
    class="tiny-option tiny-select-dropdown__item"
    v-show="visible && state.visible"
    :class="[
      {
        selected: state.itemSelected,
        'is-disabled': disabled || state.groupDisabled || state.limitReached,
        hover: state.hover && !state.limitReached,
        'is-required': required
      },
      highlightClass
    ]"
  >
    <span v-if="state.select.multiple" class="tiny-option__checkbox-wrap">
      <tiny-checkbox
        :model-value="state.itemSelected"
        :disabled="disabled || state.groupDisabled || state.limitReached"
      >
      </tiny-checkbox>
    </span>
    <component v-if="icon" :is="icon" class="tiny-option__icon"></component>
    <slot>
      <span class="tiny-option__label" :title="state.showTitle ? state.currentLabel : ''">
        {{ state.currentLabel }}
      </span>
    </slot>
  </li>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/option/vue'
import { $prefix, props, setup, defineComponent } from '@opentiny/vue-common'
import Checkbox from '@opentiny/vue-checkbox'
import '@opentiny/vue-theme/option/index.less'

export default defineComponent({
  name: $prefix + 'Option',
  componentName: 'Option',
  components: {
    TinyCheckbox: Checkbox
  },
  props: {
    ...props,
    value: {
      required: true
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    events: {
      type: Object,
      default: () => ({})
    },
    visible: {
      type: Boolean,
      default: true
    },
    highlightClass: String,
    required: {
      type: Boolean,
      default: false
    },
    // tiny 新增
    icon: Object
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
