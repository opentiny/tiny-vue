<template>
  <div class="demo-form">
    <div class="page__hd">
      <h1 class="page__title">Form</h1>
      <p class="page__desc">表单（设置标签宽度）</p>
    </div>
    <div class="demo-form-label-width-padds">
      <tiny-form ref="ruleForm" :model="createData" :rules="rules" label-width="100px" label-position="left">
        <tiny-form-item label="优秀" prop="users" vertical>
          <tiny-input v-model="createData.users" placeholder="请输入内容" type="form"></tiny-input>
        </tiny-form-item>
        <tiny-form-item label="优秀" vertical>
          <tiny-input v-model="createData.user" is-select :select-menu="menus" placeholder="请输入内容" type="form"></tiny-input>
        </tiny-form-item>
        <tiny-form-item class="demo-form-item">
          <tiny-button type="primary" @click="handleSubmit('ruleForm')">提交</tiny-button>
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
    gev() {
      console.log(this.createData.users)
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
.page__hd {
  padding: 40px;
}
.page__title {
  font-weight: 400;
  font-size: 21px;
  text-align: left;
}
.demo-form {
  height: 100%;
  overflow: auto;
  padding-right: 15px;
  padding-left: 16px;
  background: #f4f4f4;
}
.demo-form-label-width-padds {
  padding-right: 15px;
  padding-left: 15px;
  background: white;
  margin-bottom: 15px;
}
.demo-form-item {
  margin-top: 12px;
}
</style>

<style>
.demo-form-label-width-padds .tiny-mobile-input-form__input {
  text-align: right;
}
</style>
