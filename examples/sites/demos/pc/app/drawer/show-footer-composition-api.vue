<template>
  <div>
    <tiny-button type="primary" @click="openDrawer"> 显示底部 </tiny-button>

    <tiny-drawer
      :show-footer="showFooter"
      title="标题"
      :visible="visible"
      @update:visible="visible = $event"
      @confirm="confirm"
    >
      <div>内容区域</div>
    </tiny-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Drawer as TinyDrawer, Button as TinyButton } from '@opentiny/vue'

const visible = ref(false)
const showFooter = ref(true)

function openDrawer() {
  visible.value = true
}

function confirm() {
  visible.value = false
}
</script>
