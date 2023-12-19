<template>
  <div class="mobile-mask-demo">
    <tiny-button  @click="visible = true">点击展示遮罩层</tiny-button>

    <p v-if="showMsg">遮罩层click事件已触发！</p>

    <tiny-mask v-model:visible="visible" @click="handleClick"></tiny-mask>
  </div>
</template>

<script>
import { Mask, Button } from '@opentiny/vue'

export default {
  components: {
    TinyMask: Mask,
    TinyButton: Button
  },
  data() {
    return {
      visible: false,
      showMsg: false
    }
  },
  methods: {
    handleClick() {
      this.showMsg = true
    }
  },
}
</script>

<style scoped>
.mobile-mask-demo {
  height: 100%;
  background: #f4f4f4;
}
</style>
