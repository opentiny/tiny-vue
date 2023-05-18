<template>
  <label
    data-tag="tiny-checkbox"
    class="inline-flex sm:items-center sm:text-xs text-sm sm:py-2 leading-5 cursor-pointer"
    :id="id"
    tabindex="-1"
    v-bind="a($attrs, ['class', 'style', 'onClick'], true)"
  >
    <span
      class="relative sm:h-4 sm:w-4"
      :role="indeterminate ? 'checkbox' : false"
      :aria-checked="indeterminate ? 'mixed' : false"
    >
      <span class="inline-flex p-3 sm:p-0" tabindex="1">
        <icon-check
          v-if="!state.isChecked && !indeterminate"
          data-tag="icon-check"
          custom-class="sm:w-4 sm:h-4 w-5 h-5 flex-1"
          :class="[
            state.isDisabled
              ? '[&_path:nth-of-type(2)]:fill-color-icon-disabled [&_path:nth-of-type(1)]:fill-color-bg-3 cursor-not-allowed'
              : '[&_path:nth-of-type(1)]:fill-white [&_path:nth-of-type(2)]:fill-color-none-hover'
          ]"
        />
        <icon-checked-sur
          v-if="state.isChecked"
          data-tag="icon-checked-sur"
          custom-class="sm:w-4 sm:h-4 w-5 h-5"
          :class="
            m(
              'flex-1 [&_path:nth-of-type(2)]:fill-white',
              state.isDisabled
                ? '[&_path:nth-of-type(1)]:fill-color-brand-disabled cursor-not-allowed'
                : '[&_path:nth-of-type(1)]:fill-color-brand'
            )
          "
        />
        <icon-halfselect
          v-if="indeterminate"
          data-tag="icon-halfselect"
          :custom-class="
            m(
              'sm:w-4 sm:h-4 w-5 h-5 flex-1 [&_path:nth-of-type(2)]:fill-white',
              state.isDisabled
                ? '[&_path:nth-of-type(1)]:fill-color-brand-disabled cursor-not-allowed'
                : '[&_path:nth-of-type(1)]:fill-color-brand'
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
import { props, setup } from '@opentiny/vue-common'
import { IconHalfselect, IconCheckedSur, IconCheck } from '@opentiny/vue-icon'

import { defineComponent } from '@opentiny/vue-common'

export default defineComponent({
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
    IconHalfselect: IconHalfselect(),
    IconCheckedSur: IconCheckedSur(),
    IconCheck: IconCheck()
  },
  emits: ['update:modelValue', 'change', 'complete'],
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
