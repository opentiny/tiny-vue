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
    class="tiny-checkbox"
    :class="[
      border && state.checkboxSize ? 'tiny-checkbox--' + state.checkboxSize : '',
      { 'is-disabled': state.isDisabled || state.isDisplayOnly },
      { 'is-bordered': border },
      { 'is-checked': state.isChecked },
      { 'is-group-display-only': state.isGroupDisplayOnly },
      { 'is-display-only': state.isDisplayOnly },
      { 'is-filter': state.shape === 'filter' }
    ]"
    :id="id"
    tabindex="-1"
    v-bind="a($attrs, ['class', 'style', 'onClick'], true)"
  >
    <span
      class="tiny-checkbox__input"
      :class="{
        'is-disabled': state.isDisabled || state.isDisplayOnly,
        'is-checked': state.isChecked,
        'is-indeterminate': indeterminate,
        'is-focus': state.focus
      }"
      :role="indeterminate ? 'checkbox' : undefined"
      :aria-checked="indeterminate ? 'mixed' : false"
    >
      <span class="tiny-checkbox__inner" tabindex="1">
        <icon-halfselect v-if="indeterminate && state.shape !== 'filter'" class="tiny-svg-size icon-halfselect" />
        <icon-checked-sur v-else-if="state.isChecked" class="tiny-svg-size icon-checked-sur" />
        <icon-check v-else class="tiny-svg-size icon-check" />
      </span>
      <input
        v-if="trueLabel || falseLabel"
        class="tiny-checkbox__original"
        type="checkbox"
        :aria-hidden="indeterminate ? 'true' : 'false'"
        :name="name"
        :disabled="state.isDisabled || state.isDisplayOnly"
        :true-value="trueLabel"
        :false-value="falseLabel"
        v-model="state.model"
        @change="handleChange"
        @focus="state.focus = true"
        @blur="state.focus = false"
        @click.stop
      />
      <input
        v-else
        class="tiny-checkbox__original"
        type="checkbox"
        :aria-hidden="indeterminate ? 'true' : 'false'"
        :disabled="state.isDisabled || state.isDisplayOnly"
        :value="label"
        :name="name"
        v-model="state.model"
        @change="handleChange"
        @focus="state.focus = true"
        @blur="state.focus = false"
        @click.stop
      />
    </span>
    <span
      v-if="(slots.default && slots.default()) || state.isShowText"
      class="tiny-checkbox__label tiny-checkbox-display-only"
      @mouseenter="handleLabelMouseenter"
      @mouseleave="handleMouseleave"
    >
      <slot>{{ state.showText }}</slot>
      <tiny-tooltip
        ref="tooltip"
        v-model="state.tooltipVisible"
        :manual="true"
        effect="light"
        :content="state.displayedValue"
        placement="top"
      >
      </tiny-tooltip>
    </span>
  </label>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/checkbox/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import '@opentiny/vue-theme/checkbox/index.less'
import { iconHalfselect, iconCheckedSur, iconCheck } from '@opentiny/vue-icon'
import type { ICheckboxApi } from '@opentiny/vue-renderless/types/checkbox.type'
import Tooltip from '@opentiny/vue-tooltip'

export default defineComponent({
  // tiny 新增。 renderless中，没有emit('click')的地方。 此处勿声明，否则会造成丢失click事件。
  emits: ['update:modelValue', 'change', 'complete'],
  props: [
    ...props,
    'modelValue',
    'text',
    'events',
    'label',
    'indeterminate',
    'disabled',
    'checked',
    'name',
    'trueLabel',
    'falseLabel',
    'id',
    'controls',
    'size',
    'border',
    'validateEvent',
    'displayOnly',
    'shape'
  ],
  components: {
    IconHalfselect: iconHalfselect(),
    IconCheckedSur: iconCheckedSur(),
    IconCheck: iconCheck(),
    TinyTooltip: Tooltip
  },
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as ICheckboxApi
  }
})
</script>
