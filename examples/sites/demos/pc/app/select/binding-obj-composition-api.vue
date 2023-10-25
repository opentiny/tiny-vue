<template>
  <div>
    <tiny-select v-model="value" placeholder="请选择" value-key="val">
      <tiny-option v-for="item in options" :key="item.obj.id" :label="item.text" :value="item.obj"> </tiny-option>
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
  { obj: { val: '选项1', id: 1 }, text: '黄金糕' },
  { obj: { val: '选项2', id: 2 }, text: '双皮奶' },
  { obj: { val: '选项3', id: 3 }, text: '蚵仔煎' },
  { obj: { val: '选项4', id: 4 }, text: '龙须面' },
  { obj: { val: '选项5', id: 5 }, text: '北京烤鸭' }
])
const value = ref({ val: '选项3', id: 3 })
</script>
