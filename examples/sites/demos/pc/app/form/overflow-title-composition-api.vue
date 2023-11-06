<template>
  <div class="demo-form">
    <tiny-form overflow-title :model="formData" label-width="100px">
      <tiny-form-item label="请输入人员信息请输入人员信息">
        <tiny-input v-model="formData.user"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="请输入数量信息请输入数量信息">
        <tiny-numeric v-model="formData.quantity"></tiny-numeric>
      </tiny-form-item>
      <tiny-form-item label="单选">
        <tiny-radio v-model="formData.sex" label="1">男</tiny-radio>
        <tiny-radio v-model="formData.sex" label="2" text="女"></tiny-radio>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Form as TinyForm,
  FormItem as TinyFormItem,
  Input as TinyInput,
  Numeric as TinyNumeric,
  Radio as TinyRadio
} from '@opentiny/vue'

const formData = ref({
  user: '',
  quantity: '',
  sex: ''
})
</script>

<style scoped>
.demo-form {
  width: 380px;
}
</style>
