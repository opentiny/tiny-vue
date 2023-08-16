<template>
  <div>
    <tiny-button @click="hanleFocus">手动获取焦点</tiny-button>
    <tiny-time-select v-model="value" placeholder="选择时间" ref="timeSelectRef"></tiny-time-select>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TimeSelect as TinyTimeSelect, Button as TinyButton } from '@opentiny/vue'

const value = ref('')
const timeSelectRef = ref()

function hanleFocus() {
  timeSelectRef.value.focus()
}
</script>
