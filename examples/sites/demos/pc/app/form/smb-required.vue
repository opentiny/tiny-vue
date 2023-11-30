<template>
  <div class="demo-form">
    <div class="mb-12">
      是否隐藏星号：
      <tiny-switch v-model="hideRequiredAsterisk"></tiny-switch>
    </div>
    <tiny-form
      ref="ruleFormRef"
      :hide-required-asterisk="hideRequiredAsterisk"
      :model="createData"
      :rules="rules"
      label-width="100px"
      validate-type="text"
      message-type="block"
    >
      <tiny-form-item label="用户名" prop="username">
        <tiny-input v-model="createData.username"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="密码" prop="password">
        <tiny-input v-model="createData.password" type="password" show-password></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="昵称（可选）" prop="nickname">
        <tiny-input v-model="createData.nickname"></tiny-input>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button type="primary" @click="handleSubmit()"> 注册 </tiny-button>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script>
import { Form, FormItem, Input, Button, Modal, Switch } from '@opentiny/vue'

export default {
  components: {
    TinyForm: Form,
    TinyFormItem: FormItem,
    TinyInput: Input,
    TinyButton: Button,
    TinySwitch: Switch
  },
  data() {
    return {
      hideRequiredAsterisk: true,
      createData: {
        username: '',
        password: '',
        nickname: ''
      },
      isvalidate: true,
      rules: {
        username: [{ required: true, message: '必填', trigger: 'blur' }],
        password: [{ required: true, message: '必填', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.ruleFormRef.validate((valid) => {
        // empty
      })
    }
  }
}
</script>

<style scoped>
.demo-form {
  width: 380px;
}
.mb-12 {
  margin-bottom: 12px;
}
</style>
