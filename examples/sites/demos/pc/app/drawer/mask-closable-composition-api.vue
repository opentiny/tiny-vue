<template>
  <div>
    <tiny-button @click="openDrawer" type="primary" style="max-width: 200px">单击遮罩层不关闭抽屉</tiny-button>
    <tiny-drawer title="标题" :mask-closable="false" :visible="visible" @update:visible="visible = $event">
      <div style="padding: 32px">单击遮罩层, 不关闭抽屉</div>
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
