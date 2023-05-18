<template>
  <div class="demo-image__lazy" style="height: 300px; overflow-y: auto">
    <tiny-image v-for="url in srcList" :key="url" :src="url" lazy></tiny-image>
  </div>
</template>

<script lang="jsx">
import { Image } from '@opentiny/vue'

export default {
  components: {
    TinyImage: Image
  },
  data() {
    return {
      srcList: ['/static/images/mountain.png', '/static/images/book.jpg', '/static/images/bridge.jpg']
    }
  }
}
</script>

<style scoped>
.demo-image__lazy .tiny-image {
  display: block;
  min-height: 200px;
}
</style>
