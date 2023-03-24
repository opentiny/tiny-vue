<template>
  <div class="demo-form-valid-text">
    <br />
    <p>配置在form标签上</p>
    <tiny-form ref="ruleForm" :model="createData" :rules="rules" label-width="100px" validate-type="text" :inline-message="true">
      <tiny-form-item label="必填" prop="users" validate-position="top-end">
        <tiny-input v-model="createData.users"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="日期" prop="datepicker">
        <tiny-date-picker v-model="createData.datepicker"></tiny-date-picker>
      </tiny-form-item>
      <tiny-form-item label="URL" prop="url" validate-position="bottom-end">
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

    <p>配置在某一个 form-item 上控制某一项的校验提示形式</p>

    <tiny-form ref="ruleForm1" :model="createData" :rules="rules" label-width="100px" validate-type="text">
      <tiny-form-item
        label="必填"
        prop="users"
        show-message
        error="自定义的错误信息"
        validate-type="text"
        :inline-message="true"
        size="mini"
      >
        <tiny-input v-model="createData.users"></tiny-input>
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
        url: { required: true, type: 'url' },
        email: { required: true, type: 'email' }
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
.demo-form-valid-text {
  width: 380px;
}
.demo-form-valid-text .tiny-form-item {
  margin-bottom: 20px;
}
</style>
