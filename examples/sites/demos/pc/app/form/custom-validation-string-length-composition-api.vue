<template>
  <div class="demo-form">
    <tiny-form :model="state" :rules="rules">
      <tiny-form-item label="HTML" prop="value0">
        <tiny-input :maxLength="3" v-model="state.value0"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="默认" prop="value1">
        <tiny-input v-model="state.value1"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="自定义" prop="value2">
        <tiny-input v-model="state.value2"></tiny-input>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

import { Form as TinyForm, FormItem as TinyFormItem, Input as TinyInput } from '@opentiny/vue'

const state = reactive({
  value0: '',
  value1: '',
  value2: ''
})

const rules = ref({
  value1: [{ max: 3 }],
  value2: [{ max: 4, regular: (val) => val.length }]
})
</script>

<style scoped>
.demo-form {
  width: 380px;
}
</style>
