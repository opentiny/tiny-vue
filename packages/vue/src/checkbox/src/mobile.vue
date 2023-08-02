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
  <label
    class="tiny-mobile-checkbox"
    :class="{
      'is-disabled': state.isDisabled,
      'is-checked': state.isChecked,
      'is-indeterminate': indeterminate,
      'is-focus': state.focus
    }"
    :id="id"
  >
    <span
      class="tiny-mobile-checkbox__input"
      :tabindex="indeterminate ? 0 : false"
      :role="indeterminate ? 'checkbox' : false"
      :aria-checked="indeterminate ? 'mixed' : false"
    >
      <span class="tiny-mobile-checkbox__inner"></span>
      <input
        v-if="trueLabel || falseLabel"
        class="tiny-mobile-checkbox__original"
        type="checkbox"
        :aria-hidden="indeterminate ? 'true' : 'false'"
        :name="name"
        :disabled="state.isDisabled"
        :true-value="trueLabel"
        :false-value="falseLabel"
        v-model="state.model"
        @change="handleChange"
        @focus="state.focus = true"
        @blur="state.focus = false"
      />
      <input
        v-else
        class="tiny-mobile-checkbox__original"
        type="checkbox"
        :aria-hidden="indeterminate ? 'true' : 'false'"
        :disabled="state.isDisabled"
        :value="label"
        :name="name"
        v-model="state.model"
        @change="handleChange"
        @focus="state.focus = true"
        @blur="state.focus = false"
      />
    </span>
    <span v-if="(slots.default && slots.default()) || state.isShowText" class="tiny-mobile-checkbox__label">
      <slot>{{ state.showText }}</slot>
    </span>
  </label>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/checkbox/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import '@opentiny/vue-theme-mobile/checkbox/index.less'

export default defineComponent({
  inheritAttrs: false,
  props: [...props, 'modelValue', 'text', 'events', 'label', 'indeterminate', 'disabled', 'checked', 'name', 'trueLabel', 'falseLabel', 'id'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
