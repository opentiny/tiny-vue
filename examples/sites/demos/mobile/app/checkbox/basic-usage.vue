<template>
  <div class="checkbox-wrap">
    <p>当前选中的值为：{{ checked1 }}</p>
    <tiny-checkbox v-model="checked1" label="复选框1"></tiny-checkbox>

    <p>使用插槽：</p>
    <tiny-checkbox v-model="checked2">
      <span style="color: red">当前选中的值为：{{ checked2 }}</span>
    </tiny-checkbox>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyCheckbox } from '@opentiny/vue-mobile'

const checked1 = ref(true)
const checked2 = ref(false)
</script>

<style scoped>
.checkbox-wrap {
  padding: 20px;
}
</style>
