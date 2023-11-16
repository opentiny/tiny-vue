<template>
  <tiny-form :inline="true" label-suffix="：" size="small">
    <tiny-form-item label="数字">
      <tiny-numeric v-model="formData.quantity"></tiny-numeric>
    </tiny-form-item>
    <tiny-form-item label="单选">
      <tiny-radio v-model="formData.sex" label="1"> 男 </tiny-radio>
      <tiny-radio v-model="formData.sex" label="2" text="女"></tiny-radio>
    </tiny-form-item>
  </tiny-form>
</template>

<script setup>
import { reactive } from 'vue'
import { Form as TinyForm, FormItem as TinyFormItem, Numeric as TinyNumeric, Radio as TinyRadio } from '@opentiny/vue'

const formData = reactive({
  quantity: '',
  sex: ''
})
</script>

<style scoped>
#form .tiny-input {
  width: 300px;
}
</style>
