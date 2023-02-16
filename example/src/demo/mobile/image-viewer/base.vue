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
      :tool-show="true"
    ></tiny-image-viewer>
  </div>
</template>

<script>
import { ImageViewer, Button } from '@opentiny/vue'

export default {
  components: {
    TinyImageViewer: ImageViewer,
    TinyButton: Button
  },
  data() {
    return {
      srcList: ['static/images/planet1.jpg', 'static/images/planet2.jpg', 'static/images/planet3.jpg'],
      shows: false
    }
  },
  methods: {
    fn() {
      this.shows = true
    }
  }
}
</script>
