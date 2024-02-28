<template>
  <div>
    <tiny-button @click="clickHander1" custom-class="m-6">切换模糊背景</tiny-button>
    <tiny-button @click="clickHander2" custom-class="m-8">切换遮罩背景</tiny-button>
    <tiny-floating-button
      v-if="vague"
      :vague="vague"
      @click="clickHander3"
      position="right"
      is-expand
      :expand-list="expandList"
    ></tiny-floating-button>
    <tiny-floating-button
      v-if="mask"
      @click="clickHander4"
      :mask="mask"
      position="center"
      is-expand
      :expand-list="expandList"
    ></tiny-floating-button>
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
      vague: false,
      mask: false,
      expandList: [
        { icon: IconCopy(), title: '点击1消失点击消失' },
        { icon: IconCopy(), title: '点击2消失点击消失' },
        { icon: IconCopy(), title: '点击3消失点击消失' },
        { icon: IconCopy(), title: '点击4消失点击消失' },
        { icon: IconCopy(), title: '点击5消失点击消失' }
      ]
    }
  },
  methods: {
    clickHander1() {
      this.mask = false
      this.vague = true
    },
    clickHander2() {
      this.vague = false
      this.mask = true
    },
    clickHander3(event, index) {
      if (index !== 0) {
        this.vague = false
      }
    },
    clickHander4(event, index) {
      if (index !== 0) {
        this.mask = false
      }
    }
  }
}
</script>
