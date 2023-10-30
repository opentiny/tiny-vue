<template>
  <div>
    <tiny-button @click="click1" style="max-width: unset; margin-bottom: 15px">
      单击按钮 Select 将获取焦点
    </tiny-button>
    <tiny-button @click="click2" style="max-width: unset; margin-bottom: 15px">
      单击按钮 Select 将失去焦点
    </tiny-button>
    <tiny-select v-model="value" ref="dropRef" placeholder="请选择" multiple filterable>
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

const click1 = () => {
  dropRef.value.focus()
}

const click2 = () => {
  dropRef.value.blur()
}
</script>
