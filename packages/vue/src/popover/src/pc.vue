<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<template>
  <span ref="root">
    <transition :name="transition" @after-enter="handleAfterEnter" @after-leave="handleAfterLeave">
      <div
        class="tiny-popover tiny-popper"
        :class="[popperClass, content && 'tiny-popover__plain', { 'no-arrow': !visibleArrow }]"
        ref="popper"
        v-show="!disabled && state.showPopper"
        :style="{ width: width === 'auto' ? width : width + 'px', height: height === 'auto' ? height : height + 'px' }"
        role="tooltip"
        :id="state.tooltipId"
        :aria-hidden="disabled || !state.showPopper ? 'true' : 'false'"
      >
        <div class="tiny-popover__title" v-if="title" v-text="title"></div>
        <slot>{{ content }}</slot>
      </div>
    </transition>
    <span ref="wrapper" class="reference-wrapper" :class="{ 'reference-wrapper-show': !disabled && state.showPopper }">
      <slot name="reference"></slot>
    </span>
  </span>
</template>

<script lang="ts">
import { setup, props, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/popover/vue'
import '@opentiny/vue-theme/popover/index.less'
import type { IPopoverApi } from '@opentiny/vue-renderless/types/popover.type'

export default defineComponent({
  emits: ['update:modelValue', 'hide', 'show', 'after-enter', 'after-leave', 'created'],
  props: [
    ...props,
    'appendToBody',
    'arrowOffset',
    'boundariesPadding',
    'closeDelay',
    'content',
    'disabled',
    'modelValue',
    'offset',
    'openDelay',
    'placement',
    'popper',
    'popperClass',
    'popperOptions',
    'reference',
    'tabindex',
    'title',
    'transition',
    'trigger',
    'visibleArrow',
    'width',
    'height'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IPopoverApi
  }
})
</script>
