<template>
  <div class="demo-form">
    <tiny-form ref="ruleFormRef" :model="createData" :rules="rules" label-width="100px">
      <tiny-form-item label="用户名" prop="username" :show-message="false">
        <tiny-input v-model="createData.username"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="密码" prop="password">
        <tiny-input v-model="createData.password" type="password" show-password></tiny-input>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button type="primary" @click="handleSubmit"> 注册 </tiny-button>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script>
import { TinyForm, TinyFormItem, TinyInput, TinyButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyForm,
    TinyFormItem,
    TinyInput,
    TinyButton
  },
  data() {
    return {
      createData: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '必填', trigger: 'blur' }],
        password: [{ required: true, message: '必填', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          TinyModal.alert('校验通过，开始注册！')
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
