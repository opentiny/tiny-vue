<template>
  <div>
    <div class="flex w-1/2 mt-10 justify-around">
      <tiny-button @click="clickHander1">默认</tiny-button>
      <tiny-button @click="clickHander2">居中</tiny-button>
      <tiny-button @click="clickHander3">向左</tiny-button>
    </div>
    <tiny-floating-button :position="position" is-expand :expand-list="expandList"></tiny-floating-button>
  </div>
</template>

<script>
import { FloatingButton, Button } from '@opentiny/vue'
import { IconCopy } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFloatingButton: FloatingButton,
    TinyButton: Button
  },
  data() {
    return {
      position: 'right',
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
    clickHander1() {
      this.position = 'right'
    },
    clickHander2() {
      this.position = 'center'
    },
    clickHander3() {
      this.position = 'left'
    }
  }
}
</script>
