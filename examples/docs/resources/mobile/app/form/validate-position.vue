<template>
  <div class="demo-form">
    <div class="page__hd">
      <h1 class="page__title">Form</h1>
      <p class="page__desc">表单（校验显示位置）</p>
    </div>
    <div class="demo-form-position-padds">
      <tiny-form ref="ruleForm" :model="createData" :rules="rules" validate-position="left" label-position="left">
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

<script lang="jsx">
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
  padding-left: 16px;
  padding-right: 15px;
  background: #f4f4f4;
}
.demo-form-position-padds {
  padding-right: 15px;
  background: white;
  padding-left: 15px;
  margin-bottom: 15px;
}

.demo-form-item {
  margin-top: 12px;
}
</style>

<style>
.demo-form-position-padds .tiny-mobile-input-form__input {
  text-align: right;
}
</style>
