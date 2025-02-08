<template>
  <div class="checkbox-wrap">
    <tiny-checkbox v-model="checked" @change="handleChange">复选框</tiny-checkbox>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyCheckbox } from '@opentiny/vue-mobile'

const checked = ref(true)

function handleChange(val) {
  console.log('当前值为：' + val)
}
</script>

<style scoped>
.checkbox-wrap {
  padding: 20px;
}
</style>
