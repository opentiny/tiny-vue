<template>
  <div>
    <p>场景1：默认不可搜索时，获取焦点不下拉</p>
    <tiny-button @click="handleFocus1"> 点击获取焦点 </tiny-button>
    <tiny-base-select v-model="value" ref="selectOnlyFocusRef">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-base-select>
    <p>场景2：设置不可搜索时，获取焦点并自动下拉</p>
    <tiny-button @click="handleFocus2"> 点击获取焦点 </tiny-button>
    <tiny-base-select v-model="value" ref="selectAutoDropRef" automatic-dropdown>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-base-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { BaseSelect as TinyBaseSelect, Option as TinyOption, Button as TinyButton } from '@opentiny/vue'

const options = ref([
  { value: '选项1', label: '北京' },
  { value: '选项2', label: '上海' },
  { value: '选项3', label: '天津' },
  { value: '选项4', label: '重庆' },
  { value: '选项5', label: '深圳' }
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
.tiny-base-select {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
  padding: 16px 0;
}
.tiny-button {
  margin-right: 10px;
}
</style>
