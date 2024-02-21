<template>
  <div>
    <tiny-button @click="fn" type="primary"> 头部右侧插槽示例 </tiny-button>
    <tiny-drawer title="标题" :visible="visible" @update:visible="visible = $event" :show-close="false">
      <template #header-right>
        <div class="my-header-right">
          <span>自定义头部右侧</span>
        </div>
      </template>
      <div>
        <br />
        <br />
        <span>内容区域</span>
      </div>
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
.my-header-right {
  font-size: 14px;
}
</style>
