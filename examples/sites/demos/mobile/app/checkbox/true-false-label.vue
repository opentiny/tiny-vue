<template>
  <div class="checkbox-wrap">
    <tiny-checkbox v-model="checked" false-label="no" true-label="yes">复选框</tiny-checkbox>
    <br />
    当前选中状态的值为：{{ checked }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyCheckbox } from '@opentiny/vue-mobile'

const checked = ref('yes')
</script>

<style scoped>
.checkbox-wrap {
  padding: 20px;
}
</style>
