<template>
  <tiny-slide-bar
    v-model="list"
    :init-blocks="initBlocks"
    @click="handleClick"
    @before-click="beforClick"
  ></tiny-slide-bar>
</template>

<script>
import { SlideBar, Modal } from '@opentiny/vue'

export default {
  components: {
    TinySlideBar: SlideBar
  },
  data() {
    return {
      initBlocks: 4,
      list: [
        { title: 'a', lang: 'en_US' },
        { title: 'b', lang: 'zh-CN' },
        { title: 'c', lang: 'en_US' },
        { title: 'd', lang: 'en_US' },
        { title: 'e', lang: 'en_US' },
        { title: 'f', lang: 'en_US' },
        { title: 'g', lang: 'en_US' },
        { title: 'h', lang: 'en_US' },
        { title: 'i', lang: 'en_US' }
      ]
    }
  },
  methods: {
    handleClick(data, index) {
      Modal.message({
        message: `click 事件，回调参数：${data.title}, ${index}`,
        status: 'info'
      })
    },
    beforClick() {
      Modal.message({ message: 'before-click 事件', status: 'info' })
    }
  }
}
</script>
