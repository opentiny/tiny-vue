<template>
  <div class="tiny-image">
    <slot v-if="state.loading" name="placeholder">
      <div class="tiny-image__placeholder"></div>
    </slot>
    <slot v-else-if="state.error" name="error">
      <div class="tiny-image__error">{{ t('ui.image.loadFail') }}</div>
    </slot>
    <img
      v-else
      class="tiny-image__inner"
      v-bind="$attrs"
      @click="clickHandler"
      :src="src"
      :style="state.getImageStyle"
      :class="{
        'tiny-image__inner-center': state.getAlignCenter,
        'tiny-image__preview': state.getPreview
      }"
    />
    <image-viewer
      :z-index="zIndex"
      v-if="state.getPreview && state.showViewer"
      :on-close="closeViewer"
      :url-list="previewSrcList"
    />
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/image/vue'
import { props, setup } from '@opentiny/vue-common'
import ImageViewer from '@opentiny/vue-image-viewer'

export default {
  components: {
    ImageViewer
  },
  emits: ['load', 'error'],
  props: [
    ...props,
    'src',
    'fit',
    'lazy',
    'scrollContainer',
    'previewSrcList',
    'zIndex'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
