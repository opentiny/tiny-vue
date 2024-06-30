<template>
  <div class="demo-drawer">
    <tiny-button type="primary" @click="showDrawer"> 点击展开 Drawer </tiny-button>
    <tiny-drawer
      ref="drawer"
      title="抽屉关闭将会被拦截"
      show-footer
      :visible="visible"
      :before-close="onBeforeClose"
      @update:visible="visible = $event"
    >
      <tiny-button type="primary" @click="forceClose"> 强制关闭 Drawer </tiny-button>
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
    showDrawer() {
      this.visible = true
    },
    forceClose() {
      this.$refs.drawer.close(true)
    },
    onBeforeClose(type) {
      Modal.message({ message: `beforeClose 回调参数 type =  ${type}`, status: 'info', duration: 5000 })
      return false
    }
  }
}
</script>
