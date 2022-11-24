<template>
  <div class="demo-image__lazy" style="height: 300px; overflow-y: auto">
    <tiny-image v-for="url in srcList" :key="url" :src="url" lazy></tiny-image>
  </div>
</template>

<script>
import { Image } from '@opentiny/vue'

export default {
  components: {
    TinyImage: Image
  },
  data() {
    return {
      srcList: ['static/images/aui3bg.b5dd307.jpg', 'static/images/tjdk.22c8d3d.png', 'static/images/featuremap.c5e796e.png']
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
