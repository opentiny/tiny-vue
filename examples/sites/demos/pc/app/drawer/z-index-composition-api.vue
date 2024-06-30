<template>
  <div>
    <tiny-button @click="openDrawer" type="primary"> 自定义 z-index </tiny-button>
    <tiny-drawer title="标题" :visible="visible" @update:visible="visible = $event" :z-index="zIndex">
      <div style="padding: 32px">内容区域</div>
    </tiny-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Drawer as TinyDrawer, Button as TinyButton } from '@opentiny/vue'

const visible = ref(false)
const zIndex = ref(3000)

function openDrawer() {
  visible.value = true
}
</script>
