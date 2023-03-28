<template>
  <div class="demo-form">
    <tiny-form ref="ruleForm" :model="createData" :rules="rules" label-width="100px" validate-position="right">
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
        <tiny-button type="primary" @click="handleSubmit('ruleForm')">提交</tiny-button>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script lang="jsx">
import { Form, FormItem, Input, DatePicker, Button } from '@opentiny/vue'

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
        url: '',
        email: '',
        datepicker: '',
        textarea: ''
      },
      rules: {
        users: [
          { required: true, message: '必填', trigger: 'blur' },
          { min: 2, max: 11, message: '长度必须不小于2', trigger: 'blur' }
        ],
        datepicker: { type: 'date' },
        url: { type: 'url' },
        email: { type: 'email' }
      }
    }
  },
  methods: {
    handleSubmit(formName) {
      let sdge = false

      this.$refs[formName].validate((valid) => {
        if (valid) {
          sdge = valid
        } else {
          sdge = false
        }
      })

      if (sdge) {
        sdge = this.createData
      } else {
        sdge = null
      }

      return sdge
    }
  }
}
</script>

<style scoped>
.demo-form {
  width: 380px;
}
</style>
