<template>
  <div class="demo-form">
    <div class="title">标签位置： <tiny-switch v-model="isLabelAlign"></tiny-switch></div>
    <tiny-form ref="ruleFormRef" :model="createData" label-position="left" :label-align="isLabelAlign">
      <tiny-form-item label="用户名" prop="username" required>
        <tiny-input v-model="createData.username"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="密码" prop="password" required>
        <tiny-input v-model="createData.password" type="password" show-password></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="密钥" prop="password2">
        <tiny-input v-model="createData.password2" type="password" show-password></tiny-input>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Form as TinyForm, FormItem as TinyFormItem, Input as TinyInput, Switch as TinySwitch } from '@opentiny/vue'

const ruleFormRef = ref()

const isLabelAlign = ref(true)

const createData = reactive({
  username: '',
  password: '',
  password2: ''
})
</script>

<style scoped>
.demo-form {
  width: 380px;
}
.title {
  margin-bottom: 20px;
  font-size: 14px;
}
</style>
