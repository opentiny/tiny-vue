<template>
  <div>
    <tiny-button @click="fn" type="primary"> 打开事件示例 </tiny-button>
    <tiny-drawer title="标题" :show-footer="true" :visible="visible" @update:visible="visible = $event" @open="open">
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

function open() {
  Modal.message('打开事件')
}
</script>
