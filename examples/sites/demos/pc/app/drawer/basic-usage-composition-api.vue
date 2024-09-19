<template>
  <div>
    <tiny-button @click="openDrawer" type="primary"> 抽屉组件 </tiny-button>
    <tiny-drawer title="标题" :visible="visible" @update:visible="visible = $event" @confirm="confirm">
      <div>内容区域</div>
    </tiny-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Drawer as TinyDrawer, Button as TinyButton } from '@opentiny/vue'

const visible = ref(false)

function openDrawer() {
  visible.value = true
}

function confirm() {
  visible.value = false
}
</script>
