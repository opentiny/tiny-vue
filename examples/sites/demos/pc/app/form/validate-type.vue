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

<script>
import { Form, FormItem, Input, DatePicker, Button, ButtonGroup } from '@opentiny/vue'

export default {
  components: {
    TinyForm: Form,
    TinyFormItem: FormItem,
    TinyInput: Input,
    TinyDatePicker: DatePicker,
    TinyButton: Button,
    TinyButtonGroup: ButtonGroup
  },
  data() {
    return {
      createData: {
        users: '',
        email: '',
        datepicker: ''
      },
      validType: 'text',
      validTypeList: [
        { text: 'tip', value: 'tip' },
        { text: 'text', value: 'text' }
      ],
      rules: {
        users: { required: true, message: '必填', trigger: 'blur' },
        datepicker: { required: true, type: 'date' },
        email: { required: true, type: 'email' }
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.ruleFormRef.validate((valid) => {})
    }
  }
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
