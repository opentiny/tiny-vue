<template>
  <div>
    <p>场景 1：默认不可搜索时，获取焦点不下拉</p>
    <br />
    <tiny-button @click="handleFocus1"> 点击获取焦点 </tiny-button>
    <tiny-select v-model="value" ref="selectOnlyFocusRef">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br /><br />
    <p>场景 2：设置不可搜索时，获取焦点并自动下拉</p>
    <br />
    <tiny-button @click="handleFocus2"> 点击获取焦点 </tiny-button>
    <tiny-select v-model="value" ref="selectAutoDropRef" automatic-dropdown>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinySelect, TinyOption, TinyButton } from '@opentiny/vue'

const options = ref([
  { value: '选项 1', label: '北京' },
  { value: '选项 2', label: '上海' },
  { value: '选项 3', label: '天津' },
  { value: '选项 4', label: '重庆' },
  { value: '选项 5', label: '深圳' }
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
  margin-right: 10px;
}
</style>
