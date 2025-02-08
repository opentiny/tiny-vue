<template>
  <div class="demo">
    <p>默认</p>
    <tiny-radio v-model="value" label="1" @change="changeAction">男</tiny-radio>
    <tiny-radio v-model="value" label="2" @change="changeAction">女</tiny-radio>
    <p>{{ text }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyRadio } from '@opentiny/vue-mobile'

const value = ref('1')
const text = ref('男')

function changeAction(value) { // NISVUE3 FIXME: value重复定义，请手工修改
  text.value = value === '1' ? '男' : '女'
}
</script>

<style>
.demo {
  height: 100%;
  overflow-y: scroll;
  padding: 20px;
}
</style>
