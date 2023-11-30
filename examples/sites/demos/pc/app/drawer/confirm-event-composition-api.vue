<template>
  <div>
    <tiny-button @click="fn" type="primary"> 确认事件示例 </tiny-button>
    <tiny-drawer
      title="标题"
      :show-footer="true"
      :visible="visible"
      @update:visible="visible = $event"
      @confirm="confirm"
    >
      <div style="height: 200px; text-align: center">
        <br />
        <br />
        <span>内容区域</span>
      </div>
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

function confirm() {
  Modal.message('确认事件')
}
</script>
