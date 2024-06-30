<template>
  <div
    data-tag="tiny-image"
    :class="[
      'relative inline-block overflow-hidden w-full rounded',
      {
        'rounded-full': round
      }
    ]"
    :style="{ 'width': `${!lazy ? imageSize : ''}px`, 'height': `${!lazy ? imageSize : ''}px` }"
  >
    <slot data-tag="tiny-image-loading" v-if="state.loading" name="placeholder">
      <div class="w-full h-full"></div>
    </slot>
    <slot v-else-if="state.error" name="error" data-tag="tiny-image-error">
      <img
        class="flex justify-center items-center text-sm align-middle text-color-bg-3 bg-no-repeat bg-center"
        :src="state.images.imageError"
        alt=""
      />
    </slot>
    <img
      v-else
      v-bind="$attrs"
      @click="clickHandler"
      :src="state.src"
      :style="state.getImageStyle"
      :class="[
        'align-top w-full h-full rounded cursor-pointer',
        { 'relative left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 block': state.getAlignCenter }
      ]"
    />
    <div
      data-tag="tiny-image-showhover"
      :class="[
        'inline-block w-full h-full hover:bg-color-text-disabled absolute top-0 left-0 cursor-pointer',
        showHover ? 'block' : 'hidden'
      ]"
    ></div>
    <teleport to="body">
      <image-viewer
        :z-index="zIndex"
        v-if="state.getPreview && state.showViewer"
        :on-switch="handleSwitch"
        :on-close="closeViewer"
        :url-list="previewSrcList"
        :show-index="showIndex"
        :keep-style="keepStyle"
        @delete="deleteHander"
      >
        <template #count="slotScoped">
          <slot name="count" :index="slotScoped.index"></slot>
        </template>
      </image-viewer>
    </teleport>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/image/vue'
import { props, setup, defineComponent, Teleport } from '@opentiny/vue-common'
import ImageViewer from '@opentiny/vue-image-viewer'
import imageError from '@opentiny/vue-theme/images/image-error.jpg'

export default defineComponent({
  components: {
    ImageViewer,
    Teleport
  },
  emits: ['load', 'error', 'delete', 'change-index'],
  props: [
    ...props,
    'src',
    'fit',
    'lazy',
    'scrollContainer',
    'previewSrcList',
    'zIndex',
    'showIndex',
    'showHover',
    'previewVisible',
    'round',
    'imageSize',
    'keepStyle'
  ],
  setup(props, context): any {
    return setup({
      props,
      context,
      renderless,
      api,
      extendOptions: {
        images: {
          imageError
        }
      }
    })
  }
})
</script>
