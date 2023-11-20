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

<script setup>
import { ref, reactive } from 'vue'
import {
  Form as TinyForm,
  FormItem as TinyFormItem,
  Input as TinyInput,
  Button as TinyButton,
  Modal
} from '@opentiny/vue'

const createData = reactive({
  username: '',
  password: ''
})
const rules = ref({
  username: [{ required: true, message: '必填', trigger: 'blur' }],
  password: [{ required: true, message: '必填', trigger: 'blur' }]
})
const ruleFormRef = ref()

function handleSubmit() {
  ruleFormRef.value.validate((valid) => {
    if (valid) {
      Modal.alert('校验通过，开始注册！')
    } else {
      return false
    }
  })
}
</script>

<style scoped>
.demo-form {
  width: 380px;
}
</style>
