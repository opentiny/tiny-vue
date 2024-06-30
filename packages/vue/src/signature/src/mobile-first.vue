<template>
  <teleport to="body" data-tag="tiny-signature" :disabled="!state.isFullscreen" class="w-full h-full">
    <div
      ref="wrapRef"
      style="transform-origin: calc(100vw / 2) center"
      :class="[
        'flex justify-center items-center bg-color-bg-2',
        state.isFullscreen ? 'fixed inset-0 z-[9999]' : 'relative',
        state.current === 'default' && state.isFullscreen ? 'rotate-90 w-[100vh] h-[100vw]' : 'w-full h-full'
      ]"
    >
      <div @click="toggleFullscreen" class="absolute cursor-pointer p-2 right-1 top-1">
        <icon-minscreen-right class="w-6 h-6" v-if="state.isFullscreen"></icon-minscreen-right>
        <icon-fullscreen class="w-6 h-6" v-else></icon-fullscreen>
      </div>
      <div v-if="state.value" class="absolute w-full h-full flex align-middle justify-center z-[999] bg-color-bg-2">
        <img class="block max-w-full h-auto select-none" draggable="false" :src="value" />
        <tiny-button
          @click="rewrite"
          size="small"
          type="text"
          custom-class="absolute right-2 bottom-2 text-color-info-primary"
          >{{ resignButtonText }}</tiny-button
        >
      </div>
      <div class="w-full h-full" data-tag="tiny-signature__content">
        <canvas
          ref="canvasRef"
          :width="state.width"
          :height="state.height"
          data-tiny-touch-simulate-container
          @touchstart.passive="touchStart"
          @touchmove="touchMove"
          @touchend="touchEnd"
          class="w-full h-full"
        ></canvas>
      </div>
      <div data-tag="tiny-signature__footer" class="absolute flex justify-end origin-top right-2 bottom-2">
        <tiny-button @click="rewrite" size="small" type="text" custom-class="mt-2 -mr-1 text-color-info-primary">{{
          rewriteButtonText
        }}</tiny-button>
        <tiny-button
          v-if="state.current !== 'default' && state.isFullscreen"
          size="small"
          @click="cancel"
          custom-class="mt-2"
          >{{ cancelButtonText }}</tiny-button
        >
        <tiny-button v-if="showSubmitButton" @click="submit" size="small" type="primary" custom-class="mt-2 ml-1">{{
          submitButtonText
        }}</tiny-button>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/signature/vue'
import { props, setup, defineComponent, Teleport } from '@opentiny/vue-common'
import { IconFullscreen, IconMinscreenRight } from '@opentiny/vue-icon'
import Button from '@opentiny/vue-button'
import Modal from '@opentiny/vue-modal'

export default defineComponent({
  emits: ['submit', 'rewrite', 'start', 'end', 'signing', 'cancel'],
  props: [
    ...props,
    'type',
    'height',
    'penColor',
    'lineWidth',
    'rewriteButtonText',
    'resignButtonText',
    'cancelButtonText',
    'backgroundColor',
    'submitButtonText',
    'placeholder',
    'showSubmitButton',
    'value'
  ],
  components: {
    TinyButton: Button,
    Teleport,
    IconFullscreen: IconFullscreen(),
    IconMinscreenRight: IconMinscreenRight()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, extendOptions: { Modal } })
  }
})
</script>
