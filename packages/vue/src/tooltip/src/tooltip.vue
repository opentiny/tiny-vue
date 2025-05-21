<template>
  <span
    ref="referenceRef"
    class="tiny-tooltip"
    v-bind="$attrs"
    @mouseenter="handleRefEvent('mouseenter')"
    @mouseleave="handleRefEvent('mouseleave')"
  >
    <slot></slot>
  </span>
  <Transition :name="transition">
    <div
      ref="popperRef"
      v-show="!disabled && state.showPopper"
      class="tiny-tooltip tiny-tooltip__popper"
      :class="['is-' + (type || effect), popperClass, state.showContent ? 'tiny-tooltip__show-tips' : '']"
      :style="{ ['max-width']: state.tipsMaxWidth }"
      @mouseenter="handlePopEvent('mouseenter')"
      @mouseleave="handlePopEvent('mouseleave')"
    >
      <slot name="content">
        <template v-if="renderContent">
          <render-content-node />
        </template>
        <template v-else>
          <span v-if="!pre" class="tiny-tooltip__content-wrapper" :style="{ ['max-height']: contentMaxHeight }">
            {{ content }}
          </span>
          <pre v-else>{{ content }}</pre>
        </template>
      </slot>
    </div>
  </Transition>
</template>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/tooltip/new-vue'
import { $prefix, setup, defineComponent, $props, h } from '@opentiny/vue-common'
import '@opentiny/vue-theme/tooltip/index.less'

export default defineComponent({
  name: $prefix + 'Tooltip',
  componentName: 'Tooltip',
  components: {
    RenderContentNode: {
      render() {
        return this.$parent.renderContent(h, this.$parent.content)
      }
    }
  },
  props: {
    ...$props,
    visible: {
      type: String,
      default: () => 'always',
      validator: (value: string) => ['always', 'auto'].includes(value)
    },
    // 原来未暴露的属性
    adjustArrow: {
      type: Boolean,
      default: () => false
    },
    appendToBody: {
      type: Boolean,
      default: () => true
    },
    // 原来未暴露的属性
    arrowOffset: {
      type: Number,
      default: () => 0
    },
    // 原来未暴露的属性
    boundariesPadding: {
      type: Number,
      default: () => 5
    },
    closeDelay: {
      type: Number,
      default: () => 300
    },
    content: { type: [String, Object] },
    disabled: { type: Boolean },
    effect: {
      type: String,
      default: () => 'dark'
    },
    enterable: {
      type: Boolean,
      default: () => true
    },
    hideAfter: {
      type: Number,
      default: () => 0
    },
    manual: { type: Boolean },
    modelValue: { type: Boolean },
    offset: {
      default: () => 0
    },
    openDelay: {
      type: Number,
      default: () => 0
    },
    placement: {
      type: String,
      default: () => 'bottom'
    },
    popperClass: { type: String },
    popperOptions: {
      default: () => ({ gpuAcceleration: false, boundariesPadding: 10 })
    },
    pre: { type: Boolean },
    // 原来未暴露的属性， 不明确作用
    reference: {},
    popper: {},

    renderContent: { type: Function },
    tabindex: {
      type: Number,
      default: () => 0
    },
    transition: {
      type: String,
      default: () => 'tiny-fade-in-linear'
    },
    // 优先级 > effect
    type: {
      type: String,
      validator: (value: string) => Boolean(~['normal', 'warning', 'error', 'info', 'success'].indexOf(value))
    },
    visibleArrow: {
      type: Boolean,
      default: () => true
    },
    // 原来未暴露的属性
    zIndex: {
      type: String,
      default: () => 'next'
    },
    contentMaxHeight: {
      type: String
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
