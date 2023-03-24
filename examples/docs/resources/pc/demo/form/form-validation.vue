<template>
  <div class="demo-form">
    <tiny-form ref="ruleForm" hide-required-asterisk :model="createData" :rules="rules" label-width="100px" show-message>
      <tiny-form-item label="必填" prop="users" required :validateIcon="validateIcon">
        <tiny-input v-model="createData.users"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="日期" prop="datepicker">
        <tiny-date-picker v-model="createData.datepicker"></tiny-date-picker>
      </tiny-form-item>
      <tiny-form-item label="URL" prop="url">
        <tiny-input v-model="createData.url"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="等级" prop="radio">
        <tiny-radio-group v-model="createData.radio" :options="options"></tiny-radio-group>
      </tiny-form-item>
      <tiny-form-item label="邮件" prop="email">
        <tiny-input v-model="createData.email"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="文本">
        <tiny-input v-model="createData.textarea" type="textarea" maxlength="15"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="级联选择器" prop="cascader">
        <tiny-cascader v-model="createData.cascader" :options="options2" :popper-append-to-body="true" filterable></tiny-cascader>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button type="primary" @click="handleSubmit('ruleForm')">提交</tiny-button>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script lang="jsx">
import { Form, FormItem, Input, DatePicker, Button, Modal, RadioGroup, Cascader } from '@opentiny/vue'
import { IconWarning } from '@opentiny/vue-icon'

export default {
  components: {
    TinyForm: Form,
    TinyFormItem: FormItem,
    TinyInput: Input,
    TinyDatePicker: DatePicker,
    TinyButton: Button,
    TinyRadioGroup: RadioGroup,
    TinyCascader: Cascader
  },
  data() {
    return {
      validateIcon: IconWarning(),
      options: [
        { label: 'A', text: '很好', events: { click: this.handleClick } },
        { label: 'B', text: '一般' }
      ],
      options2: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'anzhuang',
              label: '安装'
            },
            {
              value: 'kaifa',
              label: '开发'
            }
          ]
        }
      ],
      createData: {
        radio: '',
        users: '',
        url: '',
        email: '',
        datepicker: '',
        textarea: '',
        cascader: [] // 注意:级联选择器放在表单中校验时，默认值必须是数组
      },
      rules: {
        radio: [{ required: true, message: '必填', trigger: 'change' }],
        users: [
          { required: true, message: '必填', trigger: 'blur' },
          { min: 2, max: 11, message: '长度必须不小于2', trigger: 'change' }
        ],
        datepicker: { type: 'date' },
        url: { type: 'url' },
        email: { type: 'email' },
        cascader: [{ required: true, message: '必填', trigger: 'blur' }]
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

<style scoped>
.demo-form {
  width: 380px;
}
</style>
