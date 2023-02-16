<template>
  <div class="tiny-mobile-image-viewer-demo">
    <tiny-button @click="fn">click me</tiny-button>
    <tiny-image-viewer
      :url-list="srcList"
      :z-index="zIndex"
      :close-show="true"
      :show-index="true"
      :arrow-show="true"
      :preview-visible="shows"
      @update:preview-visible="shows = $event"
    >
      <template #index="data">
        <b>第{{ data.value }}张</b>
      </template>
    </tiny-image-viewer>
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
      zIndex: 200,
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
