<template>
  <div>
    <tiny-base-select v-model="value" multiple all-text="全部小吃">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-base-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyBaseSelect, TinyOption } from '@opentiny/vue'

const options = ref([
  { value: '选项 1', label: '黄金糕' },
  { value: '选项 2', label: '双皮奶' },
  { value: '选项 3', label: '蚵仔煎' },
  { value: '选项 4', label: '龙须面' },
  { value: '选项 6', label: '螺蛳粉' }
])

const value = ref([])
</script>

<style lang="less" scoped>
.tiny-base-select {
  width: 280px;
}
</style>
