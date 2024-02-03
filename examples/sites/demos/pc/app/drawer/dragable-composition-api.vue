<template>
  <div>
    <tiny-button @click="fn" type="primary"> 宽度拖拽 </tiny-button>
    <tiny-drawer title="标题" dragable :visible="visible" @update:visible="visible = $event">
      横向拖拽左边框可改变抽屉主体宽度
    </tiny-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Drawer as TinyDrawer, Button as TinyButton } from '@opentiny/vue'

const visible = ref(false)

function fn() {
  visible.value = true
}
</script>
