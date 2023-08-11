<template>
  <div class="demo-form">
    <tiny-form ref="ruleFormRef" :model="createData" :rules="rules" label-width="100px" validate-position="right">
      <tiny-form-item label="必填" prop="users" validate-position="top-end">
        <tiny-input v-model="createData.users"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="日期" prop="datepicker" validate-position="bottom-end">
        <tiny-date-picker v-model="createData.datepicker"></tiny-date-picker>
      </tiny-form-item>
      <tiny-form-item label="URL" prop="url">
        <tiny-input v-model="createData.url"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="邮件" prop="email">
        <tiny-input v-model="createData.email"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="文本">
        <tiny-input v-model="createData.textarea" type="textarea" maxlength="15"></tiny-input>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button type="primary"> 提交 </tiny-button>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script setup lang="jsx">
import { ref, reactive } from 'vue'
import {
  Form as TinyForm,
  FormItem as TinyFormItem,
  Input as TinyInput,
  DatePicker as TinyDatePicker,
  Button as TinyButton
} from '@opentiny/vue'

const createData = reactive({
  users: '',
  url: '',
  email: '',
  datepicker: '',
  textarea: ''
})
const rules = ref({
  users: [
    { required: true, message: '必填', trigger: 'blur' },
    { min: 2, max: 11, message: '长度必须不小于2', trigger: 'blur' }
  ],
  datepicker: { type: 'date' },
  url: { type: 'url' },
  email: { type: 'email' }
})
</script>

<style scoped>
.demo-form {
  width: 380px;
}
</style>
