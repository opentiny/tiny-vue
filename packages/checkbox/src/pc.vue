<template>
  <label
    class="tiny-checkbox"
    :class="[
      border && state.checkboxSize
        ? 'tiny-checkbox--' + state.checkboxSize
        : '',
      { 'is-disabled': state.isDisabled },
      { 'is-bordered': border },
      { 'is-checked': state.isChecked }
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
        <icon-check
          v-if="!state.isChecked && !indeterminate"
          class="tiny-svg-size"
        />
        <icon-checked-sur v-if="state.isChecked" class="tiny-svg-size" />
        <icon-halfselect v-if="indeterminate" class="tiny-svg-size" />
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
    <span
      class="tiny-checkbox__label"
      v-if="(slots.default && slots.default()) || text || label"
    >
      <slot>{{ text || label }}</slot>
    </span>
  </label>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/checkbox/vue'
import { props, setup } from '@opentiny/vue-common'
import '@opentiny/vue-theme/checkbox/index.css'
import {
  iconHalfselect,
  iconCheckedSur,
  iconCheck
} from '@opentiny/vue-icon'

export default {
  inheritAttrs: false,
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
    'validateEvent'
  ],
  components: {
    IconHalfselect: iconHalfselect(),
    IconCheckedSur: iconCheckedSur(),
    IconCheck: iconCheck()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
