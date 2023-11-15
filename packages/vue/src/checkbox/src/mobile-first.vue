<template>
  <label
    data-tag="tiny-checkbox"
    :class="
      m(
        'inline-flex sm:items-center text-sm sm:py-2 leading-5 cursor-pointer',
        state.size === 'medium' ? 'sm:text-sm' : 'sm:text-xs',
        customClass
      )
    "
    :id="id"
    tabindex="-1"
    v-bind="a($attrs, ['class', 'style', 'onClick'], true)"
  >
    <span
      :class="[
        'relative w-11 h-11 sm:p-0',
        state.size === 'medium' ? 'sm:w-6 sm:h-6' : 'sm:h-4 sm:w-4',
        state.isDisplayOnly || state.isGroupDisplayOnly ? 'hidden' : ''
      ]"
      :role="indeterminate ? 'checkbox' : false"
      :aria-checked="indeterminate ? 'mixed' : false"
    >
      <span tabindex="1">
        <icon-check
          data-tag="icon-check"
          :class="
            m(
              'w-5 h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0',
              state.size === 'medium' ? 'sm:w-6 sm:h-6' : 'sm:w-4 sm:h-4',
              state.isDisabled
                ? '[&_path:nth-of-type(2)]:fill-color-icon-disabled [&_path:nth-of-type(1)]:fill-color-bg-3 cursor-not-allowed'
                : '[&_path:nth-of-type(1)]:fill-color-icon-inverse [&_path:nth-of-type(2)]:fill-color-none-hover'
            )
          "
        />
        <icon-halfselect
          data-tag="icon-halfselect"
          :class="
            m(
              'w-5 h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all [&_path:nth-of-type(2)]:fill-color-icon-inverse',
              indeterminate ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-0 z-0',
              state.isDisabled
                ? '[&_path:nth-of-type(1)]:fill-color-brand-disabled cursor-not-allowed'
                : '[&_path:nth-of-type(1)]:fill-color-brand [&_path:nth-of-type(1)]:shadow-xsm',
              state.size === 'medium' ? 'sm:w-6 sm:h-6' : 'sm:w-4 sm:h-4'
            )
          "
        />
        <icon-checked-sur
          data-tag="icon-checked-sur"
          :class="
            m(
              'w-5 h-5',
              state.size === 'medium' ? 'sm:w-6 sm:h-6' : 'sm:w-4 sm:h-4',
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all [&_path:nth-of-type(2)]:fill-color-icon-inverse',
              state.isChecked && !indeterminate ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-0 z-0',
              state.isDisabled
                ? '[&_path:nth-of-type(1)]:fill-color-brand-disabled cursor-not-allowed'
                : '[&_path:nth-of-type(1)]:fill-color-brand [&_path:nth-of-type(2)]:shadow-xsm'
            )
          "
        />
      </span>
      <input
        v-if="trueLabel || falseLabel"
        class="absolute inset-0 w-0 h-0 -z-10 opacity-0"
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
        class="absolute inset-0 w-0 h-0 -z-10 opacity-0"
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
      ref="label"
      class="py-3 sm:py-0 pl-0 sm:pl-2 text-color-text-primary mr-5 flex-auto"
      v-if="(slots.default && slots.default()) || text || label"
    >
      <slot>{{ text || label }}</slot>
    </span>
  </label>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/checkbox/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconHalfselect, iconCheckedSur, iconCheck } from '@opentiny/vue-icon'

export default defineComponent({
  inheritAttrs: false,
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
    'customClass',
    'displayOnly'
  ],
  components: {
    IconHalfselect: iconHalfselect(),
    IconCheckedSur: iconCheckedSur(),
    IconCheck: iconCheck()
  },
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
