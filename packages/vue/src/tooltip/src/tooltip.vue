<template>
  <div
    ref="referenceRef"
    class="tiny-tooltip"
    v-bind="$attrs"
    style="display: inline-block"
    :tabindex="tabindex"
    :aria-describedby="state.tooltipId"
    @mouseenter="handleRefEvent('mouseenter')"
    @mouseleave="handleRefEvent('mouseleave')"
  >
    <slot></slot>
    <Transition :name="transition">
      <div
        ref="popperRef"
        v-show="!disabled && state.showPopper"
        :id="state.tooltipId"
        class="tiny-tooltip tiny-tooltip__popper"
        :class="['is-' + (type || effect || 'dark'), popperClass, state.showContent ? 'tiny-tooltip__show-tips' : '']"
        :style="{ ['max-width']: state.tipsMaxWidth }"
        role="tooltip"
        :aria-hidden="disabled || !state.showPopper ? 'true' : 'false'"
        @mouseenter="handlePopEvent('mouseenter')"
        @mouseleave="handlePopEvent('mouseleave')"
        @click.stop
      >
        <slot name="content">
          <template v-if="renderContent">
            <render-content-node :renderContent="renderContent" :content="content" />
          </template>
          <template v-else>
            <div v-if="!pre" class="tiny-tooltip__content-wrapper" :style="{ ['max-height']: contentMaxHeight }">
              {{ content }}
            </div>
            <pre v-else>{{ content }}</pre>
          </template>
        </slot>
      </div>
    </Transition>
  </div>
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
      props: ['renderContent', 'content'],
      render() {
        return this.renderContent(h, this.content)
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
    // 原来未暴露的属性, 自动传入vue-popper
    adjustArrow: {
      type: Boolean,
      default: () => false
    },
    //  自动传入vue-popper
    appendToBody: {
      type: Boolean,
      default: () => true
    },
    // 原来未暴露的属性, 自动传入vue-popper
    arrowOffset: {
      type: Number,
      default: () => 0
    },
    // 原来未暴露的属性, 未入 vue-popper， 可能bug
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
    //  自动传入vue-popper
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
    // 原来未暴露的属性， 自动传入vue-popper
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
