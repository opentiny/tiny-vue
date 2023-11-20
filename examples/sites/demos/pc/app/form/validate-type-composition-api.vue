<template>
  <div class="demo-form-valid-text">
    <div class="title">
      <div>提示形式：<tiny-button-group :data="validTypeList" v-model="validType"></tiny-button-group></div>
    </div>
    <tiny-form ref="ruleFormRef" :model="createData" :rules="rules" :validate-type="validType">
      <tiny-form-item label="必填" prop="users">
        <tiny-input v-model="createData.users"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="日期" prop="datepicker">
        <tiny-date-picker v-model="createData.datepicker"></tiny-date-picker>
      </tiny-form-item>
      <tiny-form-item label="邮件" prop="email" :validate-type="validType">
        <tiny-input v-model="createData.email"></tiny-input>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button type="primary" @click="handleSubmit"> 提交 </tiny-button>
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
  DatePicker as TinyDatePicker,
  Button as TinyButton,
  ButtonGroup as TinyButtonGroup
} from '@opentiny/vue'

const ruleFormRef = ref()

const createData = ref({
  users: '',
  email: '',
  datepicker: ''
})
const validType = ref('text')
const validTypeList = ref([
  { text: 'tip', value: 'tip' },
  { text: 'text', value: 'text' }
])
const rules = ref({
  users: { required: true, message: '必填', trigger: 'blur' },
  datepicker: { required: true, type: 'date' },
  email: { required: true, type: 'email' }
})

function handleSubmit() {
  ruleFormRef.value.validate((valid) => {})
}
</script>

<style scoped>
.demo-form-valid-text {
  width: 380px;
}

.title {
  margin-bottom: 16px;
  font-size: 14px;
}
</style>
