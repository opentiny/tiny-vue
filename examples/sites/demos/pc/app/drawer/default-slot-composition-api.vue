<template>
  <div>
    <tiny-button @click="fn" type="primary"> 抽屉默认插槽示例 </tiny-button>
    <tiny-drawer title="标题" :visible="visible" @update:visible="visible = $event">
      <div class="my-content">默认插槽内容</div>
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

<style scoped>
.my-content {
  padding: 16px 0;
}
</style>
