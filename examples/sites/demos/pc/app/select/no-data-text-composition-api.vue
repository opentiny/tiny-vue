<template>
  <div>
    <p>默认不显示空数据图片</p>
    <tiny-select v-model="value" placeholder="请选择" no-data-text="None">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>

    <p>显示空数据图片</p>
    <tiny-select v-model="value" placeholder="请选择" no-data-text="暂无数据" :show-empty-image="true">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Select as TinySelect, Option as TinyOption } from '@opentiny/vue'

const options = ref([])
const value = ref('')
</script>
