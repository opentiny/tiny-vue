<template>
  <div>
    <p>medium</p>
    <br />
    <tiny-select v-model="value2" size="medium" multiple :options="options"></tiny-select>
    <br />
    <br />
    <p>默认</p>
    <br />
    <tiny-select v-model="value1" multiple :options="options"></tiny-select>
    <br />
    <br />
    <p>small</p>
    <br />
    <tiny-select v-model="value3" size="small" multiple :options="options"> </tiny-select>
    <br />
    <br />
    <p>mini</p>
    <br />
    <tiny-select v-model="value4" size="mini" multiple :options="options"> </tiny-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinySelect } from '@opentiny/vue'

const options = ref([
  { value: '选项 1', label: '北京' },
  { value: '选项 2', label: '上海' },
  { value: '选项 3', label: '天津' },
  { value: '选项 4', label: '重庆' },
  { value: '选项 5', label: '深圳' }
])
const value1 = ref(['选项 1', '选项 2'])
const value2 = ref(['选项 1', '选项 2'])
const value3 = ref(['选项 1', '选项 2'])
const value4 = ref(['选项 1', '选项 2'])
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
