<template>
  <div>
    <tiny-button @click="onFocus" style="margin-bottom: 10px"> 点击获取焦点 </tiny-button>
    <tiny-select v-model="value" placeholder="请选择" automatic-dropdown ref="selectDomRef">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Select as TinySelect, Option as TinyOption, Button as TinyButton } from '@opentiny/vue'

const options = ref([
  { value: '选项1', label: '黄金糕' },
  { value: '选项2', label: '双皮奶' },
  { value: '选项3', label: '蚵仔煎' },
  { value: '选项4', label: '龙须面' },
  { value: '选项5', label: '北京烤鸭' }
])
const value = ref('')
const selectDomRef = ref()

function onFocus() {
  selectDomRef.value.focus()
}
</script>
