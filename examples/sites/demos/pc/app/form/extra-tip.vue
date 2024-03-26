<template>
  <div class="demo-form">
    <tiny-form ref="ruleFormRef" :model="createData" :rules="rules" validate-type="text">
      <tiny-form-item label="姓名" prop="name" extra="需要填写真实姓名">
        <tiny-input v-model="createData.name"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="年龄" prop="age" extra="需要填写真实年龄">
        <tiny-input v-model="createData.age"></tiny-input>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button type="primary" @click="submit"> 提交 </tiny-button>
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
        age: ''
      },
      rules: {
        name: [
          { required: true, message: '必填' },
          { min: 2, max: 11, message: '长度必须不小于2' }
        ],
        age: { required: true }
      }
    }
  },
  methods: {
    submit() {
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
