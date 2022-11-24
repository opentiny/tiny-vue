<template>
  <span ref="root">
    <transition
      :name="transition"
      @after-enter="handleAfterEnter"
      @after-leave="handleAfterLeave"
    >
      <div
        class="tiny-popover tiny-popper"
        :class="[
          popperClass,
          content && 'tiny-popover__plain',
          { 'no-arrow': !visibleArrow }
        ]"
        ref="popper"
        v-show="!disabled && state.showPopper"
        :style="{ width: width + 'px' }"
        role="tooltip"
        :id="state.tooltipId"
        :aria-hidden="disabled || !state.showPopper ? 'true' : 'false'"
      >
        <div class="tiny-popover__title" v-if="title" v-text="title"></div>
        <slot>{{ content }}</slot>
      </div>
    </transition>
    <span
      ref="wrapper"
      class="reference-wrapper"
      :class="{ 'reference-wrapper-show': !disabled && state.showPopper }"
    >
      <slot name="reference"></slot>
    </span>
  </span>
</template>

<script>
import { setup, $prefix } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/popover/vue'

export default {
  inheritAttrs: false,
  name: $prefix + 'Popover',
  emits: [
    'update:modelValue',
    'hide',
    'show',
    'after-enter',
    'after-leave',
    'created'
  ],
  props: {
    appendToBody: {
      type: Boolean,
      default: true
    },
    arrowOffset: {
      type: Number,
      default: 0
    },
    boundariesPadding: {
      type: Number,
      default: 5
    },
    closeDelay: {
      type: Number,
      default: 200
    },
    content: String,
    disabled: Boolean,
    modelValue: Boolean,
    offset: {
      default: 0
    },
    openDelay: {
      type: Number,
      default: 0
    },
    placement: {
      type: String,
      default: 'bottom'
    },
    popper: {},
    popperClass: String,
    popperOptions: {
      type: Object,
      default: () => ({ gpuAcceleration: false })
    },
    reference: {},
    tabindex: {
      type: Number,
      default: 0
    },
    title: String,
    transformOrigin: {
      type: [Boolean, String],
      default: true
    },
    transition: {
      type: String,
      default: 'fade-in-linear'
    },
    trigger: {
      type: String,
      default: 'click',
      validator: (value) =>
        ~['click', 'focus', 'hover', 'manual'].indexOf(value)
    },
    visibleArrow: {
      default: true
    },
    width: {}
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
}
</script>
