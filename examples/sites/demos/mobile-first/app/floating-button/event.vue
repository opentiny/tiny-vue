<template>
  <div>
    <div class="flex w-1/2 mt-10 justify-around">
      <tiny-button @click="clickHander1">主按钮</tiny-button>
      <tiny-button @click="clickHander2">拓展按钮</tiny-button>
    </div>
    <tiny-floating-button position="center" @click="touchstartHandler" v-if="!showExpand"></tiny-floating-button>
    <tiny-floating-button v-else is-expand @click="touchstartHandler" :expand-list="expandList"></tiny-floating-button>
  </div>
</template>

<script>
import { FloatingButton, Modal, Button } from '@opentiny/vue'
import { IconCopy } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFloatingButton: FloatingButton,
    TinyButton: Button
  },
  data() {
    return {
      showExpand: false,
      expandList: [
        { icon: IconCopy(), title: '按钮1按钮1按钮1' },
        { icon: IconCopy(), title: '按钮2按钮2按钮2' },
        { icon: IconCopy(), title: '按钮3按钮3按钮3' },
        { icon: IconCopy(), title: '按钮4按钮4按钮4' },
        { icon: IconCopy(), title: '按钮5按钮5按钮5' }
      ]
    }
  },
  methods: {
    touchstartHandler(event, index) {
      Modal.message('按钮--' + index)
    },
    clickHander1() {
      this.showExpand = false
    },
    clickHander2() {
      this.showExpand = true
    }
  }
}
</script>
