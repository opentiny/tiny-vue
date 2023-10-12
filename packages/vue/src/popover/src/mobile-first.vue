<template>
  <span data-tag="tiny-popover" ref="root" :class="$attrs.class">
    <transition :name="transition" @after-enter="handleAfterEnter" @after-leave="handleAfterLeave">
      <div
        data-tag="tiny-popover-content"
        :class="[gcls('popper'), popperClass]"
        ref="popper"
        v-show="!disabled && state.showPopper"
        :style="{ width: width + 'px' }"
        role="tooltip"
        :id="state.tooltipId"
        :aria-hidden="disabled || !state.showPopper ? 'true' : 'false'"
      >
        <div class="hidden sm:block" data-tag="tiny-popover-body">
          <slot v-if="slots.header" name="header"></slot>
          <div v-else-if="title" :class="[gcls('title')]" v-text="title"></div>
          <slot>{{ content }}</slot>
          <slot name="footer"></slot>
          <div
            data-tag="tiny-popover-visible"
            v-if="visibleArrow"
            x-arrow
            :class="[gcls('arrow'), gcls('placement-' + state.xPlacement.split('-')[0])]"
          ></div>
        </div>
        <div
          data-tag="tiny-popover-body"
          :class="[
            'sm:hidden block fixed inset-0 text-sm text-color-text-primary transition-top ease-out duration-300',
            `before:content-[''] before:fixed before:inset-0 before:w-full before:h-full before:opacity-30 before:bg-black`
          ]"
        >
          <div
            :class="['absolute bottom-0 top-auto left-1/2 -translate-x-1/2 w-full max-h-full p-3 pointer-events-auto']"
          >
            <div class="flex flex-col w-full h-full rounded-lg overflow-hidden shadow-xl bg-color-bg-1">
              <div data-tag="tiny-popover-header" class="flex items-center leading-6 text-sm px-6 pt-5">
                <span class="flex-auto text-base truncate font-semibold">{{ title || t('ui.alert.title') }}</span>
                <icon-close @click="state.showPopper = false" />
              </div>
              <div data-tag="tiny-popover-content" class="flex flex-auto leading-5 overflow-auto mx-6 mt-4 mb-5">
                <slot> {{ content }}</slot>
              </div>
              <div
                data-tag="tiny-popover-footer"
                v-if="slots.footer"
                class="w-full py-2.5 px-6 border-t-0.5 border-color-border-separator text-center"
              >
                <slot name="footer"></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <span data-tag="tiny-popover-reference" ref="wrapper">
      <slot name="reference"></slot>
    </span>
  </span>
</template>

<script lang="ts">
import { setup, $prefix, defineComponent, $props } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/popover/vue'
import { iconClose } from '@opentiny/vue-icon'
import { classes } from './token'

export default defineComponent({
  inheritAttrs: false,
  name: $prefix + 'Popover',
  components: {
    IconClose: iconClose()
  },
  emits: ['update:modelValue', 'hide', 'show', 'after-enter', 'after-leave', 'created'],
  props: {
    ...$props,
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
      validator: (value) => ~['click', 'focus', 'hover', 'manual'].indexOf(value)
    },
    visibleArrow: {
      default: true
    },
    genArrowByHtml: {
      type: Boolean,
      default: () => true
    },
    width: {}
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, classes })
  }
})
</script>
