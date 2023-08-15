<template>
  <div>
    <tiny-button type="primary" @click="showDrawer()"> 显示底部 </tiny-button>

    <tiny-drawer :show-footer="showFooter" title="标题" :visible="visible" @update:visible="visible = $event">
      <div style="height: 200px; text-align: center">内容区域</div>
    </tiny-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Drawer as TinyDrawer, Button as TinyButton } from '@opentiny/vue'

const visible = ref(false)
const showFooter = ref(true)

function showDrawer() {
  visible.value = true
}
</script>
