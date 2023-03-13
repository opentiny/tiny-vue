<template>
  <div class="demo-form-validate">
    <div class="page__hd">
      <h1 class="page__title">Form</h1>
      <p class="page__desc">表单校验</p>
    </div>
    <div class="demo-form-validate-padds">
      <tiny-form ref="ruleForm" :model="createData" :rules="rules" inline-message>
        <tiny-form-item label="优秀" prop="users" vertical>
          <tiny-input v-model="createData.users" placeholder="请输入内容" type="form"></tiny-input>
        </tiny-form-item>
        <tiny-form-item label="优秀" prop="user" vertical>
          <tiny-input v-model="createData.user" is-select :select-menu="menus" placeholder="请输入内容" type="form"></tiny-input>
        </tiny-form-item>
        <tiny-form-item class="demo-form-validate-item">
          <tiny-button type="primary" @click="handleSubmit('ruleForm')">提交</tiny-button>
          <tiny-button type="primary" @click="clearValidate('ruleForm')">移除校验</tiny-button>
          <tiny-button type="primary" @click="resetFields('ruleForm')">重置</tiny-button>
        </tiny-form-item>
      </tiny-form>
    </div>
    <tiny-dialog-box :visible="boxVisibility" @update:visible="boxVisibility = $event" :modal-append-to-body="false" title="消息提示">
      <span>提交成功！</span>
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
      menus: [
        {
          id: 1,
          label: '我是小花,我是小花,我是小花,我是小花,我是小花,我是小花,我是小花'
        },
        {
          id: 2,
          label: '我是小树'
        },
        {
          id: 3,
          label: '我是小草'
        },
        {
          id: 4,
          label: '我是小叶',
          warn: true
        }
      ],
      createData: {
        users: '',
        user: ''
      },
      rules: {
        users: [{ required: true, message: '必填', trigger: 'change' }]
      },
      boxVisibility: false
    }
  },
  methods: {
    clearValidate(formName) {
      this.$refs[formName].clearValidate()
    },
    resetFields(formName) {
      this.$refs[formName].resetFields()
    },
    handleSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.boxVisibility = true
        }
      })
    }
  }
}
</script>

<style scoped>
.demo-form-validate-padds {
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
.demo-form-validate {
  height: 100%;
  background: #f4f4f4;
}
.demo-form-validate-item {
  margin-top: 12px;
}
</style>

<style>
.demo-form-validate .tiny-mobile-form-item__label {
  background: #fff;
}
.demo-form-validate-padds .tiny-mobile-input-form__input {
  text-align: right;
}
.demo-form-validate-item .tiny-mobile-form-item__content {
  display: flex;
  justify-content: space-around;
}
</style>
