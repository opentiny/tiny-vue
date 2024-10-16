<template>
  <div class="demo-drawer">
    <tiny-button @click="openDrawer" type="primary"> 展开抽屉 </tiny-button>
    <tiny-drawer title="标题" :tipsProps="tipsProps" :visible="visible" @update:visible="visible = $event">
      <div>内容区域</div>
    </tiny-drawer>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { Drawer as TinyDrawer, Button as TinyButton } from '@opentiny/vue'

const visible = ref(false)
const tipsProps = reactive({
  content: '这是一段帮助提示。。。',
  placement: 'right',
  effect: 'light'
})

function openDrawer() {
  visible.value = true
}
</script>
