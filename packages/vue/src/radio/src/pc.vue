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
    class="tiny-radio"
    :class="[
      border && state.radioSize ? 'tiny-radio--' + state.radioSize : '',
      { 'is-disabled': state.isDisabled },
      { 'is-focus': state.focus },
      { 'is-bordered': border },
      { 'is-checked': state.model === label },
      { 'is-display-only': state.isDisplayOnly }
    ]"
    role="radio"
    :aria-checked="state.model === label"
    :aria-disabled="state.isDisabled"
    tabindex="-1"
    @keydown.space.stop.prevent="state.model = state.isDisabled ? state.model : label"
    v-bind="a($attrs, ['class', 'style', 'onClick'], true)"
  >
    <span
      class="tiny-radio__input"
      :class="{
        'is-disabled': state.isDisabled,
        'is-checked': state.model === label
      }"
    >
      <span class="tiny-radio__inner" :tabindex="tabindex"></span>
      <input
        ref="radio"
        class="tiny-radio__original"
        :value="label"
        type="radio"
        aria-hidden="true"
        v-model="state.model"
        @focus="state.focus = true"
        @blur="state.focus = false"
        @change="handleChange"
        :name="name"
        :disabled="state.isDisabled"
        @click.stop
      />
    </span>
    <span class="tiny-radio__label" @keydown.stop>
      <slot>{{ text || label }}</slot>
    </span>
  </label>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/radio/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import '@opentiny/vue-theme/radio/index.less'

export default defineComponent({
  emits: ['change', 'update:modelValue'],
  props: [
    ...props,
    'modelValue',
    'events',
    'label',
    'text',
    'disabled',
    'name',
    'border',
    'size',
    'tabindex',
    'displayOnly'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
