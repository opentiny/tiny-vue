<template>
  <div class="demo-form">
    <tiny-form ref="ruleFormRef" :model="createData" :rules="rules">
      <tiny-form-item label="姓名" prop="name">
        <tiny-input v-model="createData.name"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="年龄" prop="age">
        <tiny-input v-model="createData.age"></tiny-input>
        <template #error>
          <span>错误提示内容插槽</span>
        </template>
      </tiny-form-item>
      <tiny-form-item label="昵称" prop="nickname" validate-type="text">
        <tiny-input v-model="createData.nickname"></tiny-input>
        <template #error="message">
          <span class="error-slot">{{ message }}</span>
        </template>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button type="primary" @click="validateField"> 校验 </tiny-button>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script>
import { Form, FormItem, Input, Button } from '@opentiny/vue'

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
        name: '',
        age: '',
        nickname: ''
      },
      rules: {
        name: [
          { required: true, message: '必填', trigger: 'blur' },
          { min: 2, max: 11, message: '长度必须不小于2', trigger: ['change', 'blur'] }
        ],
        age: { required: true },
        nickname: [
          { required: true, message: '昵称必填' },
          { min: 2, max: 11, message: '昵称长度必须不小于2切不大于11', trigger: ['change', 'blur'] }
        ]
      }
    }
  },
  methods: {
    validateField() {
      this.$refs.ruleFormRef.validate(() => {})
    }
  }
}
</script>

<style scoped>
.demo-form {
  width: 380px;
}
.error-slot {
  color: #ffd0a6;
}
</style>
