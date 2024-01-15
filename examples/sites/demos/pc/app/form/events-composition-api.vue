<template>
  <div class="demo-form">
    <tiny-form ref="formRef" :model="createData" @validate="validate">
      <tiny-form-item label="姓名" prop="name" :rules="{ required: true, messages: '必填', trigger: 'blur' }">
        <tiny-input v-model="createData.name"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="昵称">
        <tiny-input v-model="createData.nickname"></tiny-input>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button @click="submit" type="primary">提交</tiny-button>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Form as TinyForm,
  FormItem as TinyFormItem,
  Input as TinyInput,
  Button as TinyButton,
  Modal as TinyModal
} from '@opentiny/vue'

const createData = ref({
  name: '',
  nickname: ''
})
const formRef = ref()
function validate() {
  TinyModal.message({ message: '校验事件触发了', status: 'info' })
}
function submit() {
  formRef.value.validate(() => {
    // empty
  })
}
</script>

<style scoped>
.demo-form {
  width: 380px;
}
</style>
