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
      { 'is-controls-right': state.controlsAtRight },
      { 'is-display-only': state.isDisplayOnly }
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
        { 'tiny-numeric__read-only': state.isDisplayOnly },
        state.inputSize ? `tiny-input-${state.inputSize}` : '',
        state.inputDisabled ? 'is-disabled' : '',
        { 'has-unit': unit && !hideUnit },
        { 'text-align-left': unit && !unitCenter },
        { 'tiny-numeric__controls-position': controlsPosition }
      ]"
    >
      <span class="tiny-numeric-display-only">
        <span class="tiny-numeric-display-only__content" v-if="state.isDisplayOnly">
          <span class="tiny-numeric-display-only__value">{{ state.displayOnlyText }}</span>
          <span class="tiny-numeric-display-only__unit" v-if="unit && !hideUnit && state.currentValue">{{ unit }}</span>
          <span v-else-if="unit && !hideUnit">{{ unit }}</span>
        </span>
        <input
          :tabindex="tabindex"
          :class="['tiny-numeric__input-inner', { 'tiny-numeric__show-left': !controls && showLeft }]"
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
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/numeric/vue'
import { props, setup, directive, defineComponent } from '@opentiny/vue-common'
import bind from '@opentiny/vue-renderless/common/deps/repeat-click'
import { iconChevronDown, iconChevronUp, iconMinus, iconPlus } from '@opentiny/vue-icon'
import '@opentiny/vue-theme/numeric/index.less'
import type { INumericApi } from '@opentiny/renderless/types/numeric.type'

export default defineComponent({
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
    'unitCenter',
    'displayOnly',
    'showLeft',
    'showEmptyValue'
  ],
  emits: ['update:modelValue', 'change', 'blur', 'focus', 'paste-error'],
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as INumericApi
  }
})
</script>
