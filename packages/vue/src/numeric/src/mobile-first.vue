<template>
  <div class="w-auto h-7 flex items-center" data-tag="tiny-numeric">
    <div
      data-tag="tiny-numeric-main"
      :class="
        m(
          gcls('numeric'),
          state.inputSize === 'medium' ? gcls('numeric_medium') : gcls('numeric_size'),
          state.inputDisabled ? gcls('numeric_disabled') : '',
          state.isDisplayOnly ? gcls('numeric_display_none') : ''
        )
      "
      @dragstart.prevent
      @mousewheel.passive="mouseEvent"
    >
      <span
        data-tag="tiny-numeric-decrease"
        :class="
          m(
            gcls('numeric_decrease'),
            state.inputSize === 'medium' ? gcls('numeric_svg_medium') : gcls('numeric_svg_size'),
            state.minDisabled || state.inputDisabled ? gcls('numeric_crease_disabled') : ''
          )
        "
        v-if="controls"
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
        data-tag="tiny-numeric-controls"
        :class="[
          'sm:w-px sm:h-4 sm:bg-color-text-disabled sm:absolute',
          state.inputSize === 'medium' ? 'sm:left-8' : 'sm:left-7'
        ]"
        v-if="controls"
      ></div>
      <span
        data-tag="numeric-increase"
        :class="
          m(
            gcls('numeric_increase'),
            state.inputSize === 'medium' ? gcls('numeric_svg_medium') : gcls('numeric_svg_size'),
            state.minDisabled || state.inputDisabled ? gcls('numeric_crease_disabled') : ''
          )
        "
        v-if="controls"
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
        data-tag="tiny-numeric-controls"
        :class="[
          'sm:w-px sm:h-4 sm:bg-color-text-disabled sm:absolute',
          state.inputSize === 'medium' ? 'sm:right-8' : 'sm:right-7'
        ]"
        v-if="controls"
      ></div>
      <div
        :class="
          m(
            gcls(`numeric_input-${state.inputSize === 'medium' ? 'medium' : 'default'}-${controls ? 'num' : 'unit'}`),
            state.inputDisabled ? gcls('numeric_input-disabled') : gcls('numeric_input-active')
          )
        "
      >
        <input
          :tabindex="tabindex"
          :class="
            m(
              gcls('numeric_input_inner'),
              gcls(`numeric-text-${controls ? 'center' : 'left'}`),
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
    <div
      data-tag="numeric-display-only"
      v-if="state.isDisplayOnly"
      :class="state.inputSize === 'medium' ? 'text-sm' : 'text-xs'"
    >
      {{ state.displayValue }}
    </div>
    <div
      data-tag="numeric-unit"
      :class="['h-0 right-0 flex ml-2 text-xs items-center', state.isDisplayOnly ? 'sm:h-4 ' : 'sm:h-7']"
    >
      {{ unit }}
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/numeric/vue'
import { props, setup, directive, defineComponent } from '@opentiny/vue-common'
import bind from '@opentiny/vue-renderless/common/deps/repeat-click'
import { iconChevronDown, iconChevronUp, iconMinus, iconPlus } from '@opentiny/vue-icon'
import { classes } from './token'

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
    'displayOnly'
  ],
  emits: ['update:modelValue', 'change', 'blur', 'focus'],
  setup(props, context): any {
    return setup({ props, context, renderless, api, classes })
  }
})
</script>
