<template>
  <span ref="root" :class="$attrs.class">
    <transition :name="transition" @after-enter="handleAfterEnter" @after-leave="handleAfterLeave">
      <div
        :class="[gcls('popper'), popperClass, { 'hidden': disabled || !state.showPopper }]"
        ref="popper"
        v-show="!disabled && state.showPopper"
        :style="{ width: width + 'px' }"
        role="tooltip"
        :id="state.tooltipId"
        :aria-hidden="disabled || !state.showPopper ? 'true' : 'false'"
      >
        <div v-if="title" :class="[gcls('title')]" v-text="title"></div>
        <slot>{{ content }}</slot>
        <div
          v-if="visibleArrow"
          x-arrow
          :class="[gcls('arrow'), gcls('placement-' + state.xPlacement.split('-')[0])]"
        ></div>
      </div>
    </transition>
    <span ref="wrapper">
      <slot name="reference"></slot>
    </span>
    <div class="sm:hidden inline-block">
      <tiny-modal ref="modal" tiny_mode="mobile-first" class="sm:hidden" v-model="state.showPopper" :title="title">
        <template v-if="slots.default" #default="params">
          <slot name="default" v-bind="params"></slot>
        </template>
        <template v-if="!slots.default">
          {{ content }}
        </template>
      </tiny-modal>
    </div>
  </span>
</template>

<script lang="ts">
import { setup, $prefix, defineComponent, $props } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/popover/vue'
import Modal from '@opentiny/vue-modal'
import { classes } from './token'

export default defineComponent({
  inheritAttrs: false,
  name: $prefix + 'Popover',
  components: {
    TinyModal: Modal
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
