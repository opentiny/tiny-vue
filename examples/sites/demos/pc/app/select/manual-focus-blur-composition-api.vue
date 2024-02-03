<template>
  <div>
    <div>
      <tiny-button @click="handleFocus"> 点击获取焦点 </tiny-button>
      <tiny-button @click="handleBlur"> 点击失去焦点 </tiny-button>
    </div>
    <tiny-select v-model="value" ref="dropRef" filterable>
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
const dropRef = ref()

const handleFocus = () => {
  dropRef.value.focus()
}

const handleBlur = () => {
  dropRef.value.blur()
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
.tiny-button {
  max-width: unset;
  margin-bottom: 10px;
}
p {
  font-size: 14px;
  line-height: 1.5;
}
</style>
