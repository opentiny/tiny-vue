<template>
  <div class="w-96">
    <tiny-form ref="ruleForm" :model="createData" :rules="rules" label-width="96px" show-message>
      <tiny-form-item label="必填项" prop="users" required>
        <template #prompt>
          <div class="relative sm:absolute text-xs leading-normal text-color-alert" title="强提示插槽">强提示插槽</div>
        </template>
        <tiny-input v-model="createData.users"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="URL" prop="url">
        <tiny-input v-model="createData.url"></tiny-input>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button type="primary" @click="handleSubmit('ruleForm')" class="ml-24"> 提交 </tiny-button>
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
        users: '',
        url: ''
      },
      rules: {
        users: [
          { required: true, message: '必填', trigger: 'blur' },
          { min: 2, max: 11, message: '长度必须不小于2', trigger: 'change' }
        ],
        url: { type: 'url' }
      }
    }
  },
  methods: {
    handleSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          Modal.alert('提交成功')
        }
      })
    }
  }
}
</script>
