<template>
  <div class="title">聚焦、失焦事件：</div>
  <tiny-ip-address v-model="value1" @blur="handleBlur" @focus="handleFocus"></tiny-ip-address>
  <div class="title">内容改变事件：</div>
  <tiny-ip-address v-model="value2" @change="handleChange"></tiny-ip-address>
  <div class="title">输入事件：</div>
  <tiny-ip-address v-model="value3" @input="handleInput"></tiny-ip-address>
  <div class="title">选中事件：</div>
  <tiny-ip-address v-model="value4" @select="handleSelect"></tiny-ip-address>
</template>

<script setup>
import { ref } from 'vue'
import { IpAddress as TinyIpAddress, Modal } from '@opentiny/vue'

const value1 = ref('192.168.0.1')
const value2 = ref('192.168.0.1')
const value3 = ref('192.168.0.1')
const value4 = ref('192.168.0.1')

function handleBlur() {
  Modal.message({ message: 'blur 事件触发了', status: 'info' })
}

function handleChange() {
  Modal.message({ message: 'change 事件触发了', status: 'info' })
}

function handleFocus() {
  Modal.message({ message: 'focus 事件触发了', status: 'info' })
}

function handleInput() {
  Modal.message({ message: 'input 事件触发了', status: 'info' })
}

function handleSelect() {
  Modal.message({ message: 'select 事件触发了', status: 'info' })
}
</script>

<style scoped>
.title {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
}
</style>
