<template>
  <div class="demo-form-valid-text">
    <div class="mb-12">
      <div>提示形式：<tiny-button-group :data="validTypeList" v-model="validType"></tiny-button-group></div>
      <div>错误文本类型：<tiny-button-group :data="messageTypeList" v-model="messageType"></tiny-button-group></div>
    </div>
    <tiny-form
      ref="ruleFormRef"
      :model="createData"
      :rules="rules"
      label-width="100px"
      :validate-type="validType"
      :message-type="messageType"
    >
      <tiny-form-item label="必填" prop="users">
        <tiny-input v-model="createData.users"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="日期" prop="datepicker">
        <tiny-date-picker v-model="createData.datepicker"></tiny-date-picker>
      </tiny-form-item>
      <tiny-form-item label="短输入框" prop="input">
        <tiny-input v-model="createData.input" style="width: 180px"></tiny-input>
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
        input: '',
        email: '',
        datepicker: '',
        textarea: ''
      },
      validType: 'text',
      messageType: 'block',
      validTypeList: [
        { text: 'tip', value: 'tip' },
        { text: 'text', value: 'text' }
      ],
      messageTypeList: [
        { text: '默认', value: 'none' },
        { text: '行内', value: 'inline' },
        { text: '块级', value: 'block' }
      ],
      rules: {
        users: [
          { required: true, message: '必填', trigger: 'blur' },
          { min: 2, max: 11, message: '长度必须不小于2', trigger: 'blur' }
        ],
        datepicker: { type: 'date' },
        input: { required: true },
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

.mb-12 {
  margin-bottom: 12px;
}
.demo-form-valid-text .tiny-form-item {
  margin-bottom: 20px;
}
</style>
