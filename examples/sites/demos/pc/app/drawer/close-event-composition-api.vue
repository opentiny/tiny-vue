<template>
  <div>
    <tiny-button @click="openDrawer" type="primary"> 关闭事件示例 </tiny-button>
    <tiny-drawer
      title="标题"
      :show-footer="true"
      :visible="visible"
      @update:visible="visible = $event"
      @close="close"
      @confirm="confirm"
    >
      <div style="padding: 32px">内容区域</div>
    </tiny-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Drawer as TinyDrawer, Button as TinyButton, Modal } from '@opentiny/vue'

const visible = ref(false)

function openDrawer() {
  visible.value = true
}

function close() {
  Modal.message('关闭事件')
}

function confirm() {
  Modal.message({ message: '确认事件', status: 'success' })
  visible.value = false
}
</script>
