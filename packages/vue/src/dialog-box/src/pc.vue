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
  <transition :name="state.animationName" @after-enter="afterEnter" @after-leave="afterLeave">
    <div v-show="visible" :class="['tiny-dialog-box__wrapper', dialogClass]" @click.self="handleWrapperClick">
      <div
        ref="dialog"
        v-if="destroyOnClose ? visible : true"
        :class="[
          {
            'is-fullscreen': state.isFull,
            'is-center': center,
            'is-right-slide': rightSlide
          }
        ]"
        :style="state.style"
        class="tiny-dialog-box"
        :key="state.key"
      >
        <div v-if="showHeader" class="tiny-dialog-box__header" @mousedown="handleDrag">
          <slot name="title">
            <span class="tiny-dialog-box__title">{{ title }}</span>
          </slot>
          <button
            v-if="showClose"
            type="button"
            class="tiny-dialog-box__headerbtn"
            aria-label="Close"
            @click="handleClose('close', $event)"
          >
            <icon-close class="tiny-svg-size tiny-dialog-box__close" />
          </button>
          <button
            v-if="resize && !state.isFull"
            type="button"
            class="tiny-dialog-box__headerbtn"
            aria-label="Resize"
            @click="state.isFull = true"
          >
            <icon-fullscreen class="tiny-svg-size tiny-dialog-box__close" />
          </button>
          <button
            v-if="resize && state.isFull"
            type="button"
            class="tiny-dialog-box__headerbtn"
            aria-label="Resize"
            @click="state.isFull = false"
          >
            <icon-minscreen class="tiny-svg-size tiny-dialog-box__close" />
          </button>
        </div>
        <div class="tiny-dialog-box__body" :style="state.bodyStyle">
          <slot></slot>
        </div>
        <div v-if="slots.footer" class="tiny-dialog-box__footer">
          <slot name="footer" :beforeClose="beforeClose"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/dialog-box/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconClose, iconFullscreen, iconMinscreen } from '@opentiny/vue-icon'
import '@opentiny/vue-theme/dialog-box/index.less'
import type { IDialogBoxApi } from '@opentiny/vue-renderless/types/dialog-box.type'

export default defineComponent({
  components: {
    IconClose: iconClose(),
    IconFullscreen: iconFullscreen(),
    IconMinscreen: iconMinscreen()
  },
  emits: [
    'update:visible',
    'change',
    'before-close',
    'open',
    'close',
    'opened',
    'confirm',
    'cancel',
    'closed',
    'drag-start',
    'drag-move',
    'drag-end'
  ],
  props: [
    ...props,
    'resize',
    'isFormReset',
    'visible',
    'title',
    'modal',
    'modalAppendToBody',
    'appendToBody',
    'lockScroll',
    'closeOnClickModal',
    'closeOnPressEscape',
    'showClose',
    'width',
    'fullscreen',
    'top',
    'center',
    'draggable',
    'showHeader',
    'rightSlide',
    'destroyOnClose',
    'dialogClass',
    'beforeClose',
    'maxHeight'
  ],
  model: {
    prop: 'visible',
    event: 'update:visible'
  },
  provide() {
    return { dialog: this }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IDialogBoxApi
  }
})
</script>
