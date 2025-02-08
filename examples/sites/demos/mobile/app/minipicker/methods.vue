<template>
  <div class="tiny-mobile-mini-picker-demo">
    <tiny-button @click="fn">cliclk me!</tiny-button>
    <tiny-mini-picker
      title="设置初始值索引"
      ref="pickerRef"
      @change="change"
      :columns="columns1"
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
      :default-index="2"
    ></tiny-mini-picker>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyMiniPicker, TinyButton } from '@opentiny/vue-mobile'

const boxVisibility = ref(false)
const columns1 = ref(['小花', '小草', '小叶', '小树', '小星', '小月'])
const pickerRef = ref()

function change() {
  let indexes = pickerRef.value.getIndexes()
  let values = pickerRef.value.getValues()
  console.log(indexes, values)
}

function fn() {
  boxVisibility.value = true
}
</script>
