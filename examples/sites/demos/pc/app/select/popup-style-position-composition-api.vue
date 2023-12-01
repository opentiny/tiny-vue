<template>
  <tiny-select v-model="value" popper-class="drop" :popper-append-to-body="false" placement="top">
    <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
  </tiny-select>
</template>

<script setup>
import { reacitve } from 'vue'
import { Select as TinySelect, Option as TinyOption } from '@opentiny/vue'

const options = reacitve([
  { value: '选项1', label: '黄金糕' },
  { value: '选项2', label: '双皮奶' },
  { value: '选项3', label: '蚵仔煎' },
  { value: '选项4', label: '龙须面' },
  { value: '选项5', label: '北京烤鸭' }
])
const value = reacitve('')
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
  margin-top: 30px;
}
</style>

<style>
.drop {
  background-color: #d5e8ff;
}
</style>
