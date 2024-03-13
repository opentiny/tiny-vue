<template>
  <div>
    <p>默认</p>
    <tiny-select v-model="value1" multiple :options="options"></tiny-select>
    <p>medium</p>
    <tiny-select v-model="value2" size="medium" multiple :options="options"></tiny-select>
    <p>small</p>
    <tiny-select v-model="value3" size="small" multiple :options="options"> </tiny-select>
    <p>mini</p>
    <tiny-select v-model="value4" size="mini" multiple :options="options"> </tiny-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Select as TinySelect } from '@opentiny/vue'

const options = ref([
  { value: '选项1', label: '黄金糕' },
  { value: '选项2', label: '双皮奶' },
  { value: '选项3', label: '蚵仔煎' },
  { value: '选项4', label: '龙须面' },
  { value: '选项5', label: '北京烤鸭' }
])
const value1 = ref(['选项1', '选项2'])
const value2 = ref(['选项1', '选项2'])
const value3 = ref(['选项1', '选项2'])
const value4 = ref(['选项1', '选项2'])
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
}
</style>
