<template>
  <div class="demo-input">
    <div class="page__hd">
      <tiny-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-form">
        <tiny-form-item label="活动名称" prop="name">
          <tiny-input v-model="ruleForm.name" validate-event></tiny-input>
        </tiny-form-item>
      </tiny-form>
    </div>
  </div>
</template>

<script>
import { Input, Form, FormItem } from '@opentiny/vue'

export default {
  components: {
    TinyInput: Input,
    TinyForm: Form,
    TinyFormItem: FormItem
  },
  data() {
    return {
      ruleForm: {
        name: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
        ]
      }
    }
  }
}
</script>

<style scoped>
.demo-input {
  height: 100%;
  background: #f5f5f5;
}
</style>
