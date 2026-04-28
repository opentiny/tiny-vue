<template>
  <div>
    <tiny-button @click="openDrawer" type="primary"> 抽屉组件AppendToBody </tiny-button>
    <tiny-drawer
      v-if="visible"
      title="标题"
      :visible="visible"
      :append-to-body="true"
      @update:visible="visible = $event"
      @confirm="confirm"
    >
      <div>内容区域</div>
    </tiny-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyDrawer, TinyButton } from '@opentiny/vue'

const visible = ref(false)

function openDrawer() {
  visible.value = true
}

function confirm() {
  visible.value = false
}
</script>
