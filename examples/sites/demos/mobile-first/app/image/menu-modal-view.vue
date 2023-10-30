<template>
  <div>
    <label><input v-model="pageOnly" class="align-middle" type="checkbox" name="button" />pageOnly</label>
    <label><input v-model="teleport" class="align-middle" type="checkbox" name="button" />teleport</label>
    <tiny-fullscreen
      :teleport="teleport"
      :page-only="pageOnly"
      :z-index="999"
      :fullscreen="fullscreen"
      @update:fullscreen="fullscreen = $event"
    >
      <div
        data-tag="tiny-fullscreen-wrapper"
        class="tiny-fullscreen-wrapper w-full h-full flex flex-col justify-center bg-color-bg-2"
      >
        <tiny-button class="self-center" @click="toggle">{{
          fullscreen ? 'Exit Fullscreen' : 'Request Fullscreen'
        }}</tiny-button>
        <tiny-image-viewer
          v-show="!fullscreen"
          modal-view
          is-menu-view
          :url-list="srcList"
          show-index
          @delete="deleteHander"
        ></tiny-image-viewer>
        <tiny-image-viewer
          modal-view
          :modal-height="450"
          v-show="fullscreen"
          is-menu-view
          :url-list="srcList"
          show-index
          @delete="deleteHander"
        ></tiny-image-viewer>
      </div>
    </tiny-fullscreen>
  </div>
</template>

<script>
import { ImageViewer, Button, Fullscreen } from '@opentiny/vue'

export default {
  components: {
    TinyImageViewer: ImageViewer,
    TinyButton: Button,
    TinyFullscreen: Fullscreen
  },
  data() {
    return {
      fullscreen: false,
      teleport: true,
      pageOnly: false,
      srcList: [
        '/static/images/3.jpg',
        '/static/images/1.jpg',
        '/static/images/3.jpg',
        '/static/images/1.jpg',
        '/static/images/3.jpg',
        '/static/images/1.jpg',
        '/static/images/3.jpg',
        '/static/images/1.jpg',
        '/static/images/3.jpg',
        '/static/images/1.jpg',
        '/static/images/3.jpg',
        '/static/images/1.jpg',
        '/static/images/3.jpg',
        '/static/images/1.jpg',
        '/static/images/3.jpg',
        '/static/images/1.jpg',
        '/static/images/3.jpg',
        '/static/images/1.jpg'
      ]
    }
  },
  methods: {
    deleteHander(imageName) {
      this.$message({ message: `已删除${imageName}图片`, status: 'info' })
    },
    toggle() {
      this.fullscreen = !this.fullscreen
    }
  }
}
</script>
