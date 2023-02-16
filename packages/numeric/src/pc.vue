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
    @dragstart.prevent
    :class="[
      'tiny-numeric',
      state.inputSize ? 'tiny-numeric--' + state.inputSize : '',
      { 'is-disabled': state.inputDisabled },
      { 'is-without-controls': !controls || (unit && hideUnit) },
      { 'is-controls-right': state.controlsAtRight }
    ]"
    @mousewheel.prevent="mouseEvent"
  >
    <span
      class="tiny-numeric__decrease"
      role="button"
      v-if="controls && !unit"
      v-repeat-click="decrease"
      :class="{ 'is-disabled': state.minDisabled }"
      @keydown.enter="decrease"
    >
      <component :is="state.controlsAtRight ? 'icon-chevron-down' : 'icon-minus'" class="tiny-svg-size" />
    </span>
    <span
      class="tiny-numeric__increase"
      role="button"
      v-if="controls && !unit"
      v-repeat-click="increase"
      :class="{ 'is-disabled': state.maxDisabled }"
      @keydown.enter="increase"
    >
      <component :is="state.controlsAtRight ? 'icon-chevron-up' : 'icon-plus'" class="tiny-svg-size" />
    </span>
    <div class="tiny-numeric__unit" v-if="unit && !hideUnit">
      {{ unit }}
    </div>
    <div
      :class="[
        'tiny-numeric__input',
        state.inputSize ? `tiny-input-${state.inputSize}` : '',
        state.inputDisabled ? 'is-disabled' : '',
        { 'has-unit': unit && !hideUnit },
        { 'text-align-left': unit && !unitCenter }
      ]"
    >
      <input
        :tabindex="tabindex"
        class="tiny-numeric__input-inner"
        ref="input"
        :value="state.displayValue"
        :placeholder="placeholder"
        :max="max"
        :min="min"
        :name="name"
        :aria-label="label"
        @keydown.up.prevent="increase"
        @keydown.down.prevent="decrease"
        @blur="handleBlur"
        @focus="handleFocus"
        @input="handleInput"
        @change="handleInputChange"
      />
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/numeric/vue'
import { props, setup, directive } from '@opentiny/vue-common'
import bind from '@opentiny/vue-renderless/common/deps/repeat-click'
import { iconChevronDown, iconChevronUp, iconMinus, iconPlus } from '@opentiny/vue-icon'
import '@opentiny/vue-theme/numeric/index.css'

export default {
  directives: directive({
    repeatClick: { bind }
  }),
  components: {
    IconChevronDown: iconChevronDown(),
    IconChevronUp: iconChevronUp(),
    IconMinus: iconMinus(),
    IconPlus: iconPlus()
  },
  props: [
    ...props,
    'step',
    'tabindex',
    'stepStrictly',
    'max',
    'min',
    'modelValue',
    'disabled',
    'size',
    'controls',
    'controlsPosition',
    'name',
    'label',
    'placeholder',
    'precision',
    'circulate',
    'mouseWheel',
    'validateEvent',
    'allowEmpty',
    'format',
    'unit',
    'stringMode',
    'holdZero',
    'plugin',
    'modelTruncation',
    'strictInput',
    'hideUnit',
    'unitCenter'
  ],
  emits: ['update:modelValue', 'change', 'blur', 'focus'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
