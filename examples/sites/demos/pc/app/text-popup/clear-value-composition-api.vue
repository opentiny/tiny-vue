<template>
  <div>
    <div>value 值：{{ value }}</div>
    <br />
    <tiny-button @click="click">点击清除</tiny-button>
    <tiny-text-popup v-model="value"></tiny-text-popup>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyTextPopup, TinyButton } from '@opentiny/vue'

const value = ref('')

function click() {
  value.value = ''
}
</script>
