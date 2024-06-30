<template>
  <div>
    <tiny-button @click="openDrawer('width')" type="primary"> 宽度拖拽 </tiny-button>
    <tiny-button @click="openDrawer('height')" type="primary"> 高度拖拽 </tiny-button>

    <tiny-drawer :placement="placement" title="标题" dragable :visible="visible" @update:visible="visible = $event">
      <div class="content">
        <p v-if="placement === 'right'">横向拖拽左边框可改变抽屉主体宽度。</p>
        <p v-else>竖向拖拽上边框可改变抽屉主体高度。</p>
      </div>
    </tiny-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Drawer as TinyDrawer, Button as TinyButton } from '@opentiny/vue'

const visible = ref(false)
const placement = ref('right')

function openDrawer(target) {
  visible.value = true
  placement.value = target === 'width' ? 'right' : 'bottom'
}
</script>

<style scoped>
.content {
  height: 300px;
  padding: 16px 0;
}
</style>
