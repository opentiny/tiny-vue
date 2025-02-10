<template>
  <div class="checkbox-wrap">
    <tiny-checkbox-group v-model="checked">
      <tiny-checkbox label="复选框1">复选框1</tiny-checkbox>
      <tiny-checkbox label="复选框2">复选框2</tiny-checkbox>
    </tiny-checkbox-group>
    <p>当前选中的值为：{{ checked }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyCheckbox, TinyCheckboxGroup } from '@opentiny/vue-mobile'

const checked = ref(['复选框1'])
</script>

<style scoped>
.checkbox-wrap {
  padding: 20px;
}
</style>
