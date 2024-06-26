<template>
  <div class="demo-drawer">
    <tiny-button type="primary" @click="showDrawer"> 点击打开抽屉 </tiny-button>
    <tiny-drawer
      title="事件示例"
      :show-footer="true"
      :visible="visible"
      @update:visible="visible = $event"
      @open="onOpen"
      @close="onClose"
      @confirm="onConfirm"
    >
      <div class="content">
        <span>内容区域</span>
      </div>
    </tiny-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Drawer as TinyDrawer, Button as TinyButton, Modal } from '@opentiny/vue'

const visible = ref(false)

const showDrawer = () => {
  visible.value = true
}

const onOpen = () => {
  Modal.message({ message: '打开事件', status: 'info' })
}
const onClose = () => {
  Modal.message({ message: '关闭事件', status: 'info' })
}
const onConfirm = () => {
  Modal.message({ message: '确定事件', status: 'info' })
}
</script>

<style scoped>
.content {
  padding: 20px 0;
}
</style>
