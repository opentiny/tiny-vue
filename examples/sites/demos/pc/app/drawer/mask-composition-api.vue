<template>
  <div>
    <tiny-button @click="fn" type="primary"> 关闭遮罩层 </tiny-button>
    <tiny-drawer title="标题" :visible="visible" :mask="false" @update:visible="visible = $event">
      <div style="padding: 32px">左侧遮罩层已隐藏</div>
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
