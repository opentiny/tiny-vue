<template>
  <div>
    <tiny-button @click="fn" type="primary"> 底部插槽示例 </tiny-button>
    <tiny-drawer title="标题" :visible="visible" @update:visible="visible = $event" :show-footer="true">
      <div>内容区域</div>

      <template #footer>
        <div class="my-footer">
          <span>自定义底部文本</span>
          <tiny-button type="primary" native-type="submit">确定提交</tiny-button>
        </div>
      </template>
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
.my-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
