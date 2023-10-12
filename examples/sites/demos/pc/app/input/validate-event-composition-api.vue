<template>
  <tiny-form :model="ruleForm" :rules="rules" ref="ruleFormRef" label-width="100px" class="demo-form">
    <tiny-form-item label="活动名称" prop="name">
      <tiny-input v-model="ruleForm.name" validate-event></tiny-input>
    </tiny-form-item>
  </tiny-form>
</template>

<script setup>
import { ref } from 'vue'
import { Input as TinyInput, Form as TinyForm, FormItem as TinyFormItem } from '@opentiny/vue'

const ruleForm = ref({
  name: ''
})
const rules = ref({
  name: [
    { required: true, message: '请输入活动名称', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
  ]
})
</script>

<style scoped>
.demo-form .tiny-input {
  width: 250px;
}
</style>
