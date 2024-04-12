<template>
  <div class="demo-image__index-change">
    <tiny-image :src="url" :preview-src-list="srcList" @change-index="changeIndex"> </tiny-image>
  </div>
</template>

<script>
import { Image, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyImage: Image
  },
  data() {
    return {
      url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
      srcList: [
        `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
        `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/house.jpg`,
        `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/bridge.jpg`
      ]
    }
  },
  methods: {
    changeIndex(index) {
      Modal.message({ message: `图片切换事件触发，当前 index： ${index}`, status: 'info' })
    }
  }
}
</script>

<style scoped>
.demo-image__index-change {
  width: 200px;
  height: 200px;
}
</style>
