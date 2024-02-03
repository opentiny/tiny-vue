<template>
  <div>
    <tiny-button @click="fn" type="primary"> 隐藏关闭图标 </tiny-button>
    <tiny-drawer title="标题" :visible="visible" @update:visible="visible = $event" :show-close="false">
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
