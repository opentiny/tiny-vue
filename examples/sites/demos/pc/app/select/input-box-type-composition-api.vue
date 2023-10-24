<template>
  <div>
    <p>下划线默认</p>
    <tiny-select v-model="value1" input-box-type="underline" clearable placeholder="请选择">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <p>下划线禁用</p>
    <tiny-select v-model="value2" input-box-type="underline" disabled placeholder="请选择">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <p>下划线多选</p>
    <tiny-select v-model="value3" input-box-type="underline" multiple placeholder="请选择">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Select as TinySelect, Option as TinyOption } from '@opentiny/vue'

const options = ref([
  { value: '选项1', label: '黄金糕' },
  { value: '选项2', label: '双皮奶' },
  { value: '选项3', label: '蚵仔煎' },
  { value: '选项4', label: '龙须面' },
  { value: '选项5', label: '北京烤鸭' }
])
const value1 = ref('')
const value2 = ref('')
const value3 = ref([])
</script>
