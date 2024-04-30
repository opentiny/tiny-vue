<template>
  <div>
    <tiny-button @click="openDrawer" type="primary"> 头部插槽示例 </tiny-button>
    <tiny-drawer title="标题" :visible="visible" @update:visible="visible = $event">
      <template #header>
        <div class="my-header">
          <h3>自定义头部标题</h3>
          <p>自定义副标题xxxxxx</p>
        </div>
      </template>
      <span>内容区域</span>
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
</script>

<style scoped>
.my-header {
  padding: 0 32px;
  border-bottom: 1px solid #ccc;
}
</style>
