<template>
  <div class="demo-form-native-type">
    <div class="page__hd">
      <h1 class="page__title">Form</h1>
      <p class="page__desc">表单（纯展示）</p>
    </div>
    <div class="demo-padds-native-type">
      <tiny-form ref="ruleForm" :model="createData" :rules="rules">
        <tiny-form-item label="优秀" prop="users">
          <tiny-input v-model="createData.users" placeholder="请输入内容" type="form"></tiny-input>
        </tiny-form-item>
        <tiny-form-item>
          <tiny-button @click="handleSubmit('ruleForm')">重置</tiny-button>
        </tiny-form-item>
      </tiny-form>
    </div>
    <tiny-dialog-box :visible="boxVisibility" @update:visible="boxVisibility = $event" :modal-append-to-body="false" title="消息提示">
      <span>reset</span>
    </tiny-dialog-box>
  </div>
</template>

<script>
import { Form, FormItem, Input, Button, DialogBox } from '@opentiny/vue'

export default {
  components: {
    TinyForm: Form,
    TinyFormItem: FormItem,
    TinyInput: Input,
    TinyButton: Button,
    TinyDialogBox: DialogBox
  },
  data() {
    return {
      createData: {
        users: ''
      },
      rules: {
        users: [{ required: true, message: '必填', trigger: 'change' }]
      },
      boxVisibility: false
    }
  },
  methods: {
    handleSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.boxVisibility = true
          this.$refs[formName].resetFields()
        }
      })
    }
  }
}
</script>

<style scoped>
.demo-padds-native-type {
  padding: 15px;
  background: white;
  margin-bottom: 15px;
}
.page__hd {
  padding: 40px;
}
.page__title {
  font-weight: 400;
  font-size: 21px;
  text-align: left;
}
.page__desc {
  margin-top: 5px;
  color: #888;
  font-size: 14px;
  text-align: left;
}
.demo-form-native-type {
  height: 100%;
  background: #f4f4f4;
}
</style>

<style>
.demo-form-native-type .tiny-form-item__label {
  background: #fff;
}
.demo-padds-native-type .tiny-mobile-input-form__input {
  text-align: right;
}
</style>
