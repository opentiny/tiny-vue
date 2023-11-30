<template>
  <div class="demo-form">
    <tiny-form
      ref="ruleFormRef"
      hide-required-asterisk
      :model="createData"
      :rules="rules"
      label-width="100px"
      show-message
    >
      <tiny-form-item label="姓名" prop="users" required :validate-icon="validateIcon">
        <tiny-input v-model="createData.users"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="日期" prop="datepicker">
        <tiny-date-picker v-model="createData.datepicker"></tiny-date-picker>
      </tiny-form-item>
      <tiny-form-item label="URL" prop="url">
        <tiny-input v-model="createData.url"></tiny-input>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button type="primary" @click="validateField"> 校验特定字段 </tiny-button>
        <tiny-button type="primary" @click="clearValidate"> 移除特定字段校验 </tiny-button>
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
        url: '',
        datepicker: ''
      },
      rules: {
        users: [
          { required: true, message: '必填', trigger: 'blur' },
          { min: 2, max: 11, message: '长度必须不小于2', trigger: ['change', 'blur'] }
        ],
        datepicker: { type: 'date' },
        url: { type: 'url', required: true }
      }
    }
  },
  methods: {
    async validateField() {
      const errArray = []
      await this.$refs.ruleFormRef.validateField(['url', 'datepicker'], (errMsg, fieldConfig) => {
        if (errMsg) {
          errArray.push(fieldConfig)
        }
      })
      if (errArray.length > 0) {
        console.log(errArray)
      } else {
        Modal.alert('日期和url通过校验')
      }
    },
    clearValidate() {
      this.$refs.ruleFormRef.clearValidate(['url', 'datepicker'])
    }
  }
}
</script>

<style scoped>
.demo-form {
  width: 380px;
}
</style>
