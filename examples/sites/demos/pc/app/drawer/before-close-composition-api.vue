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

<script setup>
import { ref } from 'vue'
import { Drawer as TinyDrawer, Button as TinyButton, Modal } from '@opentiny/vue'

const visible = ref(false)
const drawer = ref()
const showDrawer = () => {
  visible.value = true
}

const forceClose = () => {
  drawer.value.close(true)
}

const onBeforeClose = (type) => {
  Modal.message({ message: `beforeClose 回调参数 type =  ${type}`, status: 'info', duration: 5000 })
  return false
}
</script>
