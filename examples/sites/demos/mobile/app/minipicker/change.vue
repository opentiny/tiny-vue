<template>
  <div class="tiny-mobile-mini-picker-demo">
    <tiny-button @click="fn">cliclk me!</tiny-button>
    <tiny-mini-picker
      title="触发change事件"
      :columns="columns1"
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
      @change="Echange"
    ></tiny-mini-picker>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyMiniPicker, TinyButton } from '@opentiny/vue-mobile'

const boxVisibility = ref(false)
const columns1 = ref(['小花', '小草', '小叶', '小树', '小星', '小月'])

function fn() {
  boxVisibility.value = true
}

function Echange(value) {
  console.log(value, '改变后的值')
}
</script>
