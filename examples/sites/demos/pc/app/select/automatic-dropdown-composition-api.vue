<template>
  <div>
    <p>场景1：默认不可搜索时，获取焦点不下拉</p>
    <tiny-button @click="handleFocus1"> 点击获取焦点 </tiny-button>
    <tiny-select v-model="value" ref="selectOnlyFocusRef">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <p>场景2：设置不可搜索时，获取焦点并自动下拉</p>
    <tiny-button @click="handleFocus2"> 点击获取焦点 </tiny-button>
    <tiny-select v-model="value" ref="selectAutoDropRef" automatic-dropdown>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
  </div>
</template>

<script setup>
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
const selectOnlyFocusRef = ref()
const selectAutoDropRef = ref()

const handleFocus1 = () => {
  selectOnlyFocusRef.value.focus()
}

const handleFocus2 = () => {
  selectAutoDropRef.value.focus()
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
}
.tiny-button {
  margin-bottom: 10px;
}
</style>
