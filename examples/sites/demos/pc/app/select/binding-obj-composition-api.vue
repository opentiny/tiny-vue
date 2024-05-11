<template>
  <div>
    <tiny-select v-model="value" value-key="val">
      <tiny-option v-for="(item, index) in options" :key="index" :label="item.text" :value="item.obj"> </tiny-option>
    </tiny-select>
    <p class="value">
      {{ value }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Select as TinySelect, Option as TinyOption } from '@opentiny/vue'

const options = ref([
  { obj: { val: '选项1', id: 1 }, text: '北京' },
  { obj: { val: '选项2', id: 2 }, text: '上海' },
  { obj: { val: '选项3', id: 3 }, text: '天津' },
  { obj: { val: '选项4', id: 4 }, text: '重庆' },
  { obj: { val: '选项5', id: 5 }, text: '深圳' }
])
const value = ref({ val: '选项3', id: 3 })
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
