<template>
  <div class="demo-form">
    <tiny-form style="height: 2000px; overflow-y: auto" ref="ruleForm" hide-required-asterisk :model="createData" :rules="rules" label-width="100px" show-message>
      <tiny-form-item label="必填" prop="users" required :popper-options="{ bubbling: false }">
        <tiny-input v-model="createData.users"></tiny-input>
      </tiny-form-item>

      <tiny-form-item label="日期" prop="datepicker">
        <tiny-date-picker v-model="createData.datepicker"></tiny-date-picker>
      </tiny-form-item>

      <tiny-form-item label="邮件" prop="email" :popper-options="{ bubbling: true }">
        <tiny-input v-model="createData.email"></tiny-input>
      </tiny-form-item>

      <tiny-form-item label="文本">
        <tiny-input v-model="createData.textarea" type="textarea" maxlength="15"></tiny-input>
      </tiny-form-item>

      <tiny-form-item>
        <tiny-button type="primary" @click="handleSubmit('ruleForm')">提交</tiny-button>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script>
import { Form, FormItem, Input, DatePicker, Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyForm: Form,
    TinyFormItem: FormItem,
    TinyInput: Input,
    TinyDatePicker: DatePicker,
    TinyButton: Button
  },

  data() {
    return {
      createData: {
        users: '',
        email: '',
        datepicker: '',
        textarea: ''
      },

      rules: {
        users: [
          { required: true, message: '必填', trigger: 'blur' },
          { min: 2, max: 11, message: '长度必须不小于2', trigger: 'change' }
        ],
        datepicker: { type: 'date' },
        email: { type: 'email' }
      }
    }
  },

  methods: {
    handleSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          Modal.alert('提交成功')
        }
      })
    }
  }
}
</script>

<style scoped>
.demo-form {
  width: 380px;
  height: 260px;
  overflow-y: auto;
}

button:first-of-type {
  margin-left: 100px;
}
</style>
