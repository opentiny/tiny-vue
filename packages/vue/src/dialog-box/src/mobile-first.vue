<template>
  <div>
    <div v-if="state.current !== 'default'">
      <transition :name="state.animationName" @after-enter="afterEnter" @after-leave="afterLeave">
        <div
          v-show="visible"
          :class="['fixed inset-0 m-0 flex items-center', dialogClass]"
          data-tag="tiny-dialog-box__wrapper"
          @click.self="handleWrapperClick"
        >
          <div
            ref="dialog"
            data-tag="tiny-dialog-box"
            v-if="destroyOnClose ? visible : true"
            :class="[
              {
                'left-0 top-0 w-screen h-screen': state.isFull,
                'text-center': center,
                'flex flex-col rounded-none': rightSlide
              }
            ]"
            :style="state.style"
            class="absolute bg-color-bg-1 border-none overflow-hidden shadow-xl rounded flex flex-col"
            :key="state.key"
          >
            <div
              v-if="showHeader"
              data-tag="tiny-dialog-box__header"
              class="px-6 py-4 h-12 leading-4 bg-color-bg-1 flex justify-between items-center border-b border-b-color-bg-3"
              @mousedown="handleDrag"
            >
              <slot name="title">
                <span data-tag="tiny-dialog-box__title" class="text-sm text-color-text-primary mr-4 flex-1 font-bold">{{
                  title
                }}</span>
              </slot>
              <button
                v-if="showClose"
                type="button"
                data-tag="tiny-dialog-box__headerbtn"
                class="border-none p-0 leading-none cursor-pointer focus:outline-0"
                aria-label="Close"
                @click="handleClose('close', $event)"
              >
                <icon-close
                  data-tag="tiny-svg-size tiny-dialog-box__close"
                  class="fill-color-text-primary text-base hover:fill-color-brand"
                />
              </button>
              <button
                v-if="resize && !state.isFull"
                type="button"
                data-tag="tiny-dialog-box__headerbtn"
                class="border-none p-0 leading-none cursor-pointer focus:outline-0"
                aria-label="Resize"
                @click="state.isFull = true"
              >
                <icon-fullscreen
                  data-tag="tiny-svg-size tiny-dialog-box__close"
                  class="fill-color-text-primary text-base hover:fill-color-brand"
                />
              </button>
              <button
                v-if="resize && state.isFull"
                type="button"
                data-tag="tiny-dialog-box__headerbtn"
                class="border-none p-0 leading-none cursor-pointer focus:outline-0"
                aria-label="Resize"
                @click="state.isFull = false"
              >
                <icon-minscreen
                  data-tag="tiny-svg-size tiny-dialog-box__close"
                  class="fill-color-text-primary text-base hover:fill-color-brand"
                />
              </button>
            </div>
            <div
              data-tag="tiny-dialog-box__body"
              class="text-left pt-0 pr-6 pb-0 pl-6 mb-6 mt-6 text-color-text-primary leading-5 text-sm overflow-auto"
              :class="[
                state.isFull ? 'max-h-[calc(100vh-theme(spacing.28))]' : 'max-h-[65vh]',
                rightSlide ? 'max-h-[none] flex-auto' : ''
              ]"
              :style="state.bodyStyle"
            >
              <slot></slot>
            </div>
            <div
              v-if="slots.footer"
              data-tag="tiny-dialog-box__footer"
              class="pt-4 pr-6 pb-4 pl-6 text-right box-border border-t border-t-color-bg-3 [&_[data-tag=tiny-button]]:mx-1 [&_[data-tag=tiny-button]]:my-0 [&_[data-tag=tiny-toolbar]_[data-tag=tiny-button]]:my-0 [&_[data-tag=tiny-toolbar]_[data-tag=tiny-button]]:mx-1"
            >
              <slot name="footer" :before-close="beforeClose"></slot>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <div v-if="state.current === 'default'">
      <tiny-action-sheet
        ref="dialog"
        v-if="destroyOnClose ? visible : true"
        v-bind="$props"
        :show-footer="true"
        :mask="modal"
        :mask-closable="closeOnClickModal"
        :before-close="beforeClose"
        @update:visible="$emit('update:visible', $event)"
      >
        <template v-for="(value, name) in slots" #[name]="scopeData">
          <div
            :class="{
              'flex w-full justify-between px-4 [&_[data-tag=tiny-button]]:flex-grow [&_[data-tag=tiny-button]:nth-child(2)]:ml-2':
                name === 'footer',
              'px-4 min-h-[250px]': name === 'default'
            }"
            :key="name"
          >
            <slot :name="name" v-bind="scopeData"></slot>
          </div>
        </template>
      </tiny-action-sheet>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/dialog-box/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { IconClose, IconFullscreen, IconMinscreen } from '@opentiny/vue-icon'
import ActionSheet from '@opentiny/vue-action-sheet'

export default defineComponent({
  components: {
    IconClose: IconClose(),
    IconFullscreen: IconFullscreen(),
    IconMinscreen: IconMinscreen(),
    TinyActionSheet: ActionSheet
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
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
