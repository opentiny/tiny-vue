<template>
  <div>
    <tiny-button @click="openDrawer" type="primary"> 头部右侧插槽示例 </tiny-button>
    <tiny-drawer title="标题" :visible="visible" @update:visible="visible = $event" :show-close="false">
      <template #header-right>
        <div class="my-header-right">
          <span>自定义头部右侧</span>
        </div>
      </template>
      <div style="padding: 32px">内容区域</div>
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
.my-header-right {
  font-size: 14px;
}
</style>
