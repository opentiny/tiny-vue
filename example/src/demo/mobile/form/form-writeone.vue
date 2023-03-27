<template>
  <div class="demo-form">
    <div class="page__hd">
      <h1 class="page__title">Form</h1>
      <p class="page__desc">表单（文本框）</p>
    </div>
    <div class="demo-form-writeone-padds">
      <tiny-form ref="ruleForm" :model="createData" :rules="rules" label-width="120px" :hide-required-asterisk="true">
        <tiny-form-item label="标题" prop="title1" vertical>
          <tiny-input v-model="createData.title1" placeholder="请输入内容" type="form"></tiny-input>
        </tiny-form-item>
        <tiny-form-item label="标题" prop="title2" vertical>
          <tiny-input v-model="createData.title2" placeholder="请输入内容" type="form"></tiny-input>
        </tiny-form-item>
        <tiny-form-item label="标题" prop="title3" vertical>
          <tiny-input v-model="createData.title3" @blur="handleSubmit('ruleForm')" placeholder="错误信息文本，右对齐" type="form"></tiny-input>
        </tiny-form-item>
        <tiny-form-item label="标题" prop="title4" vertical>
          <tiny-input
            v-model="createData.title4"
            placeholder="请输入内容"
            type="form"
            mobile-tips="辅助文本说明辅助文本说明辅助文本说明辅助文本说明"
          ></tiny-input>
        </tiny-form-item>
      </tiny-form>
    </div>
    <div class="demo-form-writeone-padds">
      <tiny-form ref="ruleForm1" :model="createData" :rules="rules" label-width="60px" label-position="top" validate-position="left">
        <tiny-form-item label="标题" prop="title4" vertical>
          <tiny-input
            v-model="createData.title4"
            placeholder="请输入内容"
            type="form"
            readonly
            mobile-tips="辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明辅助文本说明"
          ></tiny-input>
        </tiny-form-item>
        <tiny-form-item label="标题" prop="title5" id="title5" vertical>
          <tiny-input v-model="createData.title5" placeholder="错误信息文本左对齐" type="form" readonly @blur="handleSubmit('ruleForm1')"></tiny-input>
        </tiny-form-item>
      </tiny-form>
    </div>
    <tiny-dialog-box :visible="boxVisibility" @update:visible="boxVisibility = $event" :modal-append-to-body="false" title="消息提示">
      <span>校验通过！</span>
    </tiny-dialog-box>
  </div>
</template>
<script>
import { Form, FormItem, Input, DialogBox } from '@opentiny/vue'
export default {
  components: {
    TinyForm: Form,
    TinyFormItem: FormItem,
    TinyInput: Input,
    TinyDialogBox: DialogBox
  },
  data() {
    return {
      rules: {
        title3: [{ required: true, message: '错误信息文本，右对齐', trigger: 'change' }],
        title5: [{ required: true, message: '错误信息文本左对齐', trigger: 'change' }]
      },
      createData: {
        title1: '',
        title2: '已填写有内容',
        title3: '',
        title4: ''
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
.demo-form-writeone-padds {
  padding-right: 15px;
  padding-left: 15px;
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
.demo-form {
  height: 100%;
  overflow: auto;
  background: #f4f4f4;
  padding: 0 16px;
}
</style>

<style>
.demo-form-writeone-padds .tiny-mobile-input-form__input {
  text-align: right;
}
</style>
