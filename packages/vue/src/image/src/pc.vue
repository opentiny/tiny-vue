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

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/image/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import ImageViewer from '@opentiny/vue-image-viewer'

export default defineComponent({
  components: {
    ImageViewer
  },
  emits: ['load', 'error'],
  props: [...props, 'src', 'fit', 'lazy', 'scrollContainer', 'previewSrcList', 'zIndex'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
