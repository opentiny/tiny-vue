<template>
  <div>
    <tiny-button @click="openDrawer0" type="primary"> 设置宽度为900px </tiny-button>
    <tiny-button @click="openDrawer1" plain> 宽度改为700px </tiny-button>
    <tiny-button @click="openDrawer2" plain> 宽度改为80% </tiny-button>

    <tiny-drawer title="标题" :width="width" :visible="visible" @update:visible="visible = $event">
      <div style="padding: 32px">内容区域</div>
    </tiny-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Drawer as TinyDrawer, Button as TinyButton } from '@opentiny/vue'

const visible = ref(false)
const width = ref('900px')

function openDrawer0() {
  visible.value = true
}

function openDrawer1() {
  width.value = '700px'
  visible.value = true
}

function openDrawer2() {
  width.value = '80%'
  visible.value = true
}
</script>
