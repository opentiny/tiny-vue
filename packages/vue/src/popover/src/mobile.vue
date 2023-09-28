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
        class="tiny-mobile-popover tiny-mobile-popper"
        :class="[popperClass, 'tiny-mobile-popover__plain', { 'no-arrow': !visibleArrow }]"
        ref="popper"
        v-show="!disabled && state.showPopper"
        :style="{
          width: width === 'auto' ? width : width + 'px',
          maxHeight: maxHeight === 'auto' ? maxHeight : maxHeight + 'px'
        }"
        role="tooltip"
        :id="state.tooltipId"
        :aria-hidden="disabled || !state.showPopper ? 'true' : 'false'"
      >
        <div class="tiny-mobile-popover__title" v-if="title" v-text="title"></div>
        <slot>
          <div class="list-content" :style="{ maxHeight: maxHeight === 'auto' ? maxHeight : maxHeight + 'px' }">
            <div
              v-for="(item, index) in listData"
              :key="item.id"
              :class="['list-view', item.subLabel ? 'list-view-height' : '']"
              @click="handleItemClick(item)"
            >
              <img :src="item.icon" class="icon" />
              <div class="label-view">
                <div class="main">{{ item.label }}</div>
                <div v-if="item.subLabel" class="sub">{{ item.subLabel }}</div>
              </div>
              <div v-if="index !== listData.length - 1" class="line"></div>
            </div>
          </div>
        </slot>
      </div>
    </transition>
    <span ref="wrapper" class="reference-wrapper" :class="{ 'reference-wrapper-show': !disabled && state.showPopper }">
      <slot name="reference"></slot>
    </span>
  </span>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/popover/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import '@opentiny/vue-theme-mobile/popover/index.less'

export default defineComponent({
  emits: ['update:modelValue', 'hide', 'show', 'after-enter', 'after-leave', 'created', 'itemClick'],
  props: [
    ...props,
    'appendToBody',
    'arrowOffset',
    'boundariesPadding',
    'closeDelay',
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
    'transformOrigin',
    'transition',
    'trigger',
    'visibleArrow',
    'width',
    'maxHeight',
    'listData'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
