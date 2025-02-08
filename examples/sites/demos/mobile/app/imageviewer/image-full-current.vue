<template>
  <div class="tiny-mobile-image-viewer-demo">
    <tiny-button @click="fn">click me</tiny-button>
    <tiny-image-viewer
      :url-list="srcList"
      :close-show="true"
      :arrow-show="true"
      :preview-visible="shows"
      @update:preview-visible="shows = $event"
      image-full-current
    ></tiny-image-viewer>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyImageViewer, TinyButton } from '@opentiny/vue-mobile'

const srcList = ref([
  `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/dog1.png`,
  `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/dog2.png`,
  `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/dog3.png`
])
const shows = ref(false)

function fn() {
  shows.value = true
}
</script>
