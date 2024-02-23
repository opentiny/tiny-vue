<template>
  <div class="tiny-mobile-image-viewer-demo">
    <tiny-button @click="fn">click me</tiny-button>
    <tiny-image-viewer
      :url-list="srcList"
      :close-show="true"
      :show-index="true"
      :arrow-show="true"
      :preview-visible="shows"
      @update:preview-visible="shows = $event"
      @change="handleChange"
      @close="handleClose"
    ></tiny-image-viewer>
  </div>
</template>

<script lang="jsx">
import { ImageViewer, Button } from '@opentiny/vue'

export default {
  components: {
    TinyImageViewer: ImageViewer,
    TinyButton: Button
  },
  data() {
    return {
      srcList: [
        `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/dog1.png`,
        `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/dog2.png`,
        `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/dog3.png`
      ],
      shows: false
    }
  },
  methods: {
    fn() {
      this.shows = true
    },
    handleChange(index, url) {
      console.log('当前图片索引：' + index + '，当前图片路径：' + url)
    },
    handleClose(index, url) {
      console.log('当前图片索引：' + index + '，当前图片路径：' + url)
    }
  }
}
</script>
