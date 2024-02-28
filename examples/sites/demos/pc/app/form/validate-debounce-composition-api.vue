<template>
  <div class="demo-form">
    <tiny-form ref="ruleFormRef" :model="createData" :rules="rules" label-width="100px" :show-message="false">
      <tiny-form-item label="不防抖" prop="user1">
        <tiny-input v-model="createData.user1"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="防抖" prop="user2" :validate-debounce="true">
        <tiny-input v-model="createData.user2"></tiny-input>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button type="success" @click="clearFormValid">移除表单校验</tiny-button>
        <tiny-button type="primary" @click="handleSubmit">提交</tiny-button>
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
  user1: '',
  user2: ''
})
const rules = ref({
  user1: { validator: validateUser, trigger: 'change' },
  user2: { validator: validateUser, trigger: 'change' }
})
const ruleFormRef = ref()

function clearFormValid() {
  ruleFormRef.value.clearValidate()
}

function handleSubmit() {
  ruleFormRef.value.validate((valid) => {
    if (valid) {
      Modal.message({ message: '提交成功', status: 'info' })
    }
  })
}

function validateUser(rule, value, callback) {
  /**
   * 模拟异步校验
   * 如果validate-debounce为false，在连续输入的情况下，这里会创建很多校验请求
   */
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value && value.length > 30) {
        Modal.message({ message: '校验成功', status: 'info' })
        resolve()
      } else {
        Modal.message({ message: '校验失败', status: 'info' })
        reject(new Error('The length must be greater than 30 characters.'))
      }
    }, 300)
  })
    .then(() => {
      callback()
    })
    .catch((e) => {
      callback(e)
    })
}
</script>

<style scoped>
.demo-form {
  width: 380px;
}
</style>
