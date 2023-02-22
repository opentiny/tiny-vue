<template>
  <div class="demo-form">
    <tiny-form ref="ruleForm" :model="createData" :rules="rules" :validate-on-rule-change="isvalidate" label-width="100px" @validate="validate">
      <tiny-form-item label="用户名" prop="username">
        <tiny-input v-model="createData.username" novalid-tip></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="密码" prop="password">
        <tiny-input v-model="createData.password" type="password" show-password></tiny-input>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button type="primary" @click="handleSubmit('ruleForm')">注册</tiny-button>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script>
import { Form, FormItem, Input, Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyForm: Form,
    TinyFormItem: FormItem,
    TinyInput: Input,
    TinyButton: Button
  },
  data() {
    return {
      createData: {
        username: '',
        password: ''
      },
      isvalidate: true,
      rules: {
        username: [{ required: true, message: '必填', trigger: 'blur' }],
        password: [{ required: true, message: '必填', trigger: 'blur' }]
      }
    }
  },
  methods: {
    validate(val) {
      Modal.message({
        message: `表单项被校验后触发的事件,所校验字段为:${val}`,
        status: 'info'
      })
    },
    handleSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          Modal.alert('校验通过，开始注册！')
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.demo-form {
  width: 380px;
}
</style>
