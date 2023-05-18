<template>
  <div class="w-auto h-7 flex items-center" data-tag="tiny-numeric">
    <div
      :class="
        m(
          gcls('numeric'),
          state.inputSize === 'medium' ? gcls('numeric_medium') : gcls('numeric_size'),
          state.inputDisabled ? gcls('numeric_disabled') : ''
        )
      "
      @dragstart.prevent
      @mousewheel.passive="mouseEvent"
    >
      <span
        :class="
          m(
            gcls('numeric_decrease'),
            state.inputSize === 'medium' ? gcls('numeric_svg_medium') : gcls('numeric_svg_size'),
            state.minDisabled || state.inputDisabled ? gcls('numeric_crease_disabled') : ''
          )
        "
        role="button"
        v-repeat-click="decrease"
        @keydown.enter="decrease"
      >
        <component
          :is="state.controlsAtRight ? 'icon-chevron-down' : 'icon-minus'"
          :class="m(state.minDisabled || state.inputDisabled ? gcls('numeric_svg_disabled') : gcls('numeric_svg'))"
        />
      </span>
      <div
        :class="[
          'sm:w-px sm:h-4 sm:bg-color-text-disabled sm:absolute',
          state.inputSize === 'medium' ? 'sm:left-8' : 'sm:left-7'
        ]"
      ></div>
      <span
        :class="
          m(
            gcls('numeric_increase'),
            state.inputSize === 'medium' ? gcls('numeric_svg_medium') : gcls('numeric_svg_size'),
            state.minDisabled || state.inputDisabled ? gcls('numeric_crease_disabled') : ''
          )
        "
        role="button"
        v-repeat-click="increase"
        @keydown.enter="increase"
      >
        <component
          :is="state.controlsAtRight ? 'icon-chevron-up' : 'icon-plus'"
          :class="state.maxDisabled || state.inputDisabled ? gcls('numeric_svg_disabled') : gcls('numeric_svg')"
        />
      </span>
      <div
        :class="[
          'sm:w-px sm:h-4 sm:bg-color-text-disabled sm:absolute',
          state.inputSize === 'medium' ? 'sm:right-8' : 'sm:right-7'
        ]"
      ></div>
      <div :class="state.inputSize === 'medium' ? gcls('numeric_input_medium') : gcls('numeric_input')">
        <input
          :tabindex="tabindex"
          :class="
            m(
              gcls('numeric_input_inner'),
              state.inputSize === 'medium' ? gcls('numeric_input_inner_medium') : gcls('numeric_input_inner_size'),
              state.inputDisabled ? gcls('numeric_input_inner_disabled') : gcls('numeric_input_inner_default')
            )
          "
          :disabled="state.inputDisabled"
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
    <div class="h-0 right-0 flex ml-2 text-xs sm:h-7 items-center">
      {{ unit }}
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/numeric/vue'
import { props, setup, directive, defineComponent } from '@opentiny/vue-common'
import bind from '@opentiny/vue-renderless/common/deps/repeat-click'
import { IconChevronDown, IconChevronUp, IconMinus, IconPlus } from '@opentiny/vue-icon'
import { classes } from './token'

export default defineComponent({
  directives: directive({
    repeatClick: { bind }
  }),
  components: {
    IconChevronDown: IconChevronDown(),
    IconChevronUp: IconChevronUp(),
    IconMinus: IconMinus(),
    IconPlus: IconPlus()
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
    'displayOnly'
  ],
  emits: ['blur', 'focus', 'update:modelValue', 'change', 'paste-error'],
  setup(props, context): any {
    return setup({ props, context, renderless, api, classes })
  }
})
</script>
