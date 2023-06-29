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
      { 'is-disabled': state.isDisabled },
      { 'is-bordered': border },
      { 'is-checked': state.isChecked },
      { 'is-group-display-only': state.isGroupDisplayOnly },
      { 'is-display-only': state.isDisplayOnly }
    ]"
    :id="id"
    tabindex="-1"
    v-bind="a($attrs, ['class', 'style', 'onClick'], true)"
  >
    <span
      class="tiny-checkbox__input"
      :class="{
        'is-disabled': state.isDisabled,
        'is-checked': state.isChecked,
        'is-indeterminate': indeterminate,
        'is-focus': state.focus
      }"
      :role="indeterminate ? 'checkbox' : false"
      :aria-checked="indeterminate ? 'mixed' : false"
    >
      <span class="tiny-checkbox__inner" tabindex="1">
        <icon-halfselect v-if="indeterminate" class="tiny-svg-size icon-halfselect" />
        <icon-checked-sur v-else-if="state.isChecked" class="tiny-svg-size icon-checked-sur" />
        <icon-check v-else class="tiny-svg-size icon-check" />
      </span>
      <input
        v-if="trueLabel || falseLabel"
        class="tiny-checkbox__original"
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
        @click.stop
      />
      <input
        v-else
        class="tiny-checkbox__original"
        type="checkbox"
        :aria-hidden="indeterminate ? 'true' : 'false'"
        :disabled="state.isDisabled"
        :value="label"
        :name="name"
        v-model="state.model"
        @change="handleChange"
        @focus="state.focus = true"
        @blur="state.focus = false"
        @click.stop
      />
    </span>
    <span class="tiny-checkbox__label tiny-checkbox-display-only" v-if="(slots.default && slots.default()) || text || label">
      <slot>{{ text || label }}</slot>
    </span>
  </label>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/checkbox/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import '@opentiny/vue-theme/checkbox/index.less'
import { iconHalfselect, iconCheckedSur, iconCheck } from '@opentiny/vue-icon'

export default defineComponent({
  emits: ['change', 'update:modelValue', 'complete'],
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
    'displayOnly'
  ],
  components: {
    IconHalfselect: iconHalfselect(),
    IconCheckedSur: iconCheckedSur(),
    IconCheck: iconCheck()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
