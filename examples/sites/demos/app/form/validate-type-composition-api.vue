<template>
  <div class="demo-form-valid-text">
    <div class="mb-12">
      <div>提示形式：<tiny-button-group :data="validTypeList" v-model="validType"></tiny-button-group></div>
      <div>行内形式：<tiny-button-group :data="inlineList" v-model="inlineType"></tiny-button-group></div>
    </div>
    <tiny-form
      ref="ruleFormRef"
      :model="createData"
      :rules="rules"
      label-width="100px"
      :validate-type="validType"
      :inline-message="inlineType"
    >
      <tiny-form-item label="必填" prop="users">
        <tiny-input v-model="createData.users"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="日期" prop="datepicker">
        <tiny-date-picker v-model="createData.datepicker"></tiny-date-picker>
      </tiny-form-item>
      <tiny-form-item label="URL" prop="url">
        <tiny-input v-model="createData.url"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="邮件" prop="email" validate-type="text">
        <tiny-input v-model="createData.email"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="文本">
        <tiny-input v-model="createData.textarea" type="textarea" maxlength="15"></tiny-input>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button type="primary" @click="handleSubmit"> 提交 </tiny-button>
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
  Button as TinyButton,
  ButtonGroup as TinyButtonGroup
} from '@opentiny/vue'

const ruleFormRef = ref()

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
  url: { required: true, type: 'url' },
  email: { required: true, type: 'email' }
})

const validType = ref('text')
const inlineType = ref(false)
const validTypeList = ref([
  { text: 'tip', value: 'tip' },
  { text: 'text', value: 'text' }
])
const inlineList = ref([
  { text: 'false', value: false },
  { text: 'true', value: true }
])

function handleSubmit() {
  ruleFormRef.value.validate((valid) => {})
}
</script>

<style scoped>
.demo-form-valid-text {
  width: 380px;
}

.mb-12 {
  margin-bottom: 12px;
}
.demo-form-valid-text .tiny-form-item {
  margin-bottom: 20px;
}
</style>
