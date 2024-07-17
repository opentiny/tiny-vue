<template>
  <div>
    <p>默认</p>
    <br />
    <tiny-select v-model="value1" multiple :options="options"></tiny-select>
    <br />
    <br />
    <p>medium</p>
    <br />
    <tiny-select v-model="value2" size="medium" multiple :options="options"></tiny-select>
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
import { Select as TinySelect } from '@opentiny/vue'

const options = ref([
  { value: '选项1', label: '北京' },
  { value: '选项2', label: '上海' },
  { value: '选项3', label: '天津' },
  { value: '选项4', label: '重庆' },
  { value: '选项5', label: '深圳' }
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
