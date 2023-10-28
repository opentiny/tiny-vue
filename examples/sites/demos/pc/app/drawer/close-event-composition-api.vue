<template>
  <div>
    <tiny-button @click="fn" type="primary"> 关闭事件示例 </tiny-button>
    <tiny-drawer title="标题" :show-footer="true" :visible="visible" @update:visible="visible = $event" @close="close">
      <div style="height: 200px; text-align: center">内容区域</div>
    </tiny-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Drawer as TinyDrawer, Button as TinyButton, Modal } from '@opentiny/vue'

const visible = ref(false)

function fn() {
  visible.value = true
}

function close() {
  Modal.message('关闭事件')
}
</script>
