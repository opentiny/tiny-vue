<template>
  <div class="demo-drawer">
    <tiny-button @click="toggleDrawer(true)" type="primary"> 点击展开 Drawer </tiny-button>
    <tiny-drawer
      title="抽屉关闭将会被拦截"
      v-model:visible="visible"
      :before-close="onBeforeClose"
      show-footer
      @confirm="confirm"
    >
      <tiny-button @click="toggleDrawer(false)" type="primary"> 关闭 Drawer </tiny-button>
    </tiny-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Drawer as TinyDrawer, Button as TinyButton, Modal } from '@opentiny/vue'

const visible = ref(false)

const toggleDrawer = (value) => {
  visible.value = value
}

const onBeforeClose = (type) => {
  Modal.message({ message: `beforeClose 回调参数 type =  ${type}`, status: 'info', duration: 5000 })
  return false
}

const confirm = () => {
  visible.value = false
}
</script>
