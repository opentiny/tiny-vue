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

<script lang="jsx">
import { ImageViewer, Button } from '@opentiny/vue'

export default {
  components: {
    TinyImageViewer: ImageViewer,
    TinyButton: Button
  },
  data() {
    return {
      zIndex: 200,
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
    }
  }
}
</script>
