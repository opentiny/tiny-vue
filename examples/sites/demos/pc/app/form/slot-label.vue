<template>
  <div class="demo-form">
    <tiny-form ref="ruleFormRef" :model="createData" :rules="rules" label-width="100px" show-message>
      <tiny-form-item prop="users">
        <template #label> 必填 </template>
        <tiny-input v-model="createData.users"></tiny-input>
      </tiny-form-item>
      <tiny-form-item prop="datepicker">
        <template #label> 日期 </template>
        <tiny-date-picker v-model="createData.datepicker"></tiny-date-picker>
      </tiny-form-item>
      <tiny-form-item prop="url">
        <template #label> URL </template>
        <tiny-input v-model="createData.url"></tiny-input>
      </tiny-form-item>
      <tiny-form-item prop="radio">
        <template #label> 等级 </template>
        <tiny-radio-group v-model="createData.radio" :options="options"></tiny-radio-group>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button type="primary" @click="handleSubmit()"> 提交 </tiny-button>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script>
import { Form, FormItem, Input, DatePicker, Button, Modal, RadioGroup } from '@opentiny/vue'

export default {
  components: {
    TinyForm: Form,
    TinyFormItem: FormItem,
    TinyInput: Input,
    TinyDatePicker: DatePicker,
    TinyButton: Button,
    TinyRadioGroup: RadioGroup
  },
  data() {
    return {
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
        radio: 'A',
        users: '',
        url: '',
        email: '',
        datepicker: '',
        textarea: '',
        cascader: [] // 注意:级联选择器放在表单中校验时，默认值必须是数组
      },
      rules: {
        radio: [{ required: true, message: '必填', trigger: 'blur' }],
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
    handleSubmit() {
      this.$refs.ruleFormRef.validate((valid) => {
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
