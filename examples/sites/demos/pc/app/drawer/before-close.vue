<template>
  <div class="demo-drawer">
    <tiny-button @click="toggleDrawer(true)" type="primary"> 点击展开 Drawer </tiny-button>
    <tiny-drawer
      title="抽屉关闭将会被拦截"
      :visible="visible"
      @update:visible="visible = $event"
      show-footer
      :before-close="onBeforeClose"
    >
      <tiny-button @click="toggleDrawer(false)" type="primary"> 关闭 Drawer </tiny-button>
    </tiny-drawer>
  </div>
</template>

<script>
import { Drawer, Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyDrawer: Drawer,
    TinyButton: Button
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    toggleDrawer(value) {
      this.visible = value
    },
    onBeforeClose(type) {
      Modal.message({ message: `beforeClose 回调参数 type =  ${type}`, status: 'info', duration: 5000 })
      return false
    }
  }
}
</script>
