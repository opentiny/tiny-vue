<template>
  <label
    data-tag="tiny-checkbox"
    :class="
      m(
        'inline-flex sm:items-center text-sm leading-5 cursor-pointer',
        state.size === 'medium' ? 'sm:text-sm' : 'sm:text-xs',
        { 'sm:py-2': state.vertical },
        customClass
      )
    "
    :id="id"
    tabindex="-1"
    v-bind="a($attrs, ['class', 'style', 'onClick'], true)"
  >
    <span
      :class="['relative', state.size === 'medium' ? 'sm:w-6 sm:h-6' : 'sm:h-4 sm:w-4']"
      :role="indeterminate ? 'checkbox' : false"
      :aria-checked="indeterminate ? 'mixed' : false"
    >
      <span class="inline-flex p-3 sm:p-0" tabindex="1">
        <icon-check
          v-if="!state.isChecked && !indeterminate"
          data-tag="icon-check"
          :custom-class="['w-5 h-5 flex-1', state.size === 'medium' ? 'sm:w-6 sm:h-6' : 'sm:w-4 sm:h-4']"
          :class="[
            state.isDisabled
              ? '[&_path:nth-of-type(2)]:fill-color-icon-disabled [&_path:nth-of-type(1)]:fill-color-bg-3 cursor-not-allowed'
              : '[&_path:nth-of-type(1)]:fill-color-icon-inverse [&_path:nth-of-type(2)]:fill-color-none-hover'
          ]"
        />
        <icon-halfselect
          v-else-if="indeterminate"
          data-tag="icon-halfselect"
          :custom-class="
            m(
              'w-5 h-5 flex-1 [&_path:nth-of-type(2)]:fill-color-icon-inverse',
              state.isDisabled
                ? '[&_path:nth-of-type(1)]:fill-color-brand-disabled cursor-not-allowed'
                : '[&_path:nth-of-type(1)]:fill-color-brand',
              state.size === 'medium' ? 'sm:w-6 sm:h-6' : 'sm:w-4 sm:h-4'
            )
          "
        />
        <icon-checked-sur
          v-else-if="state.isChecked"
          data-tag="icon-checked-sur"
          :custom-class="['w-5 h-5', state.size === 'medium' ? 'sm:w-6 sm:h-6' : 'sm:w-4 sm:h-4']"
          :class="
            m(
              'flex-1 [&_path:nth-of-type(2)]:fill-color-icon-inverse',
              state.isDisabled
                ? '[&_path:nth-of-type(1)]:fill-color-brand-disabled cursor-not-allowed'
                : '[&_path:nth-of-type(1)]:fill-color-brand'
            )
          "
        />
      </span>
      <input
        v-if="trueLabel || falseLabel"
        class="absolute left-0 right-0 top-0 bottom-0 w-0 h-0 -z-10 opacity-0"
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
        class="absolute left-0 right-0 top-0 bottom-0 w-0 h-0 -z-10 opacity-0"
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
      v-if="(slots.default && slots.default()) || state.isShowText"
      ref="label"
      :class="[
        'py-3 sm:py-0 pl-0 sm:pl-2 mr-5 flex-auto',
        state.isDisabled ? 'cursor-not-allowed text-color-text-disabled' : 'text-color-text-primary'
      ]"
    >
      <slot>{{ state.showText }}</slot>
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
    'customClass'
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
