<template>
  <div class="demo-form">
    <div class="title">
      <div>validate用法：<tiny-button-group :data="validTypeList" v-model="validType"></tiny-button-group></div>
    </div>
    <tiny-form ref="ruleFormRef" :model="createData" :rules="rules" label-width="100px">
      <tiny-form-item label="必填" prop="users" :validate-icon="validateIcon">
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
      <tiny-form-item label="Numeric字段" prop="num1">
        <tiny-numeric v-model="createData.num1"></tiny-numeric>
      </tiny-form-item>
      <tiny-form-item label="IP字段" prop="ip">
        <tiny-ip-address v-model="createData.ip"></tiny-ip-address>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button type="primary" @click="validType === 'callback' ? handleSubmit() : handleSubmitPromise()">
          提交
        </tiny-button>
        <tiny-button type="primary" @click="clearFormValid"> 移除校验 </tiny-button>
        <tiny-button type="primary" @click="resetForm"> 重置表单 </tiny-button>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import {
  Form as TinyForm,
  FormItem as TinyFormItem,
  Input as TinyInput,
  DatePicker as TinyDatePicker,
  Button as TinyButton,
  Modal,
  RadioGroup as TinyRadioGroup,
  Numeric as TinyNumeric,
  IpAddress as TinyIpAddress,
  ButtonGroup as TinyButtonGroup
} from '@opentiny/vue'
import { iconWarning } from '@opentiny/vue-icon'

const ruleFormRef = ref()
function handleClick() {
  Modal.message({ message: 'click', status: 'info' })
}
const validateIcon = ref(iconWarning())
const validType = ref('promise')
const validTypeList = ref([
  { text: 'promise', value: 'promise' },
  { text: '回调', value: 'callback' }
])
const options = ref([
  { label: 'A', text: '很好', events: { click: handleClick } },
  { label: 'B', text: '一般' }
])
const options2 = ref([
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
])
const createData = reactive({
  radio: '',
  users: '',
  url: '',
  email: '',
  datepicker: '',
  ip: '',
  num1: 0
})
const rules = ref({
  radio: [{ required: true, message: '必填', trigger: 'change' }],
  users: [
    { required: true, message: '必填', trigger: 'blur' },
    { min: 2, max: 11, message: '长度必须不小于2', trigger: ['change', 'blur'] }
  ],
  datepicker: { type: 'date' },
  url: { type: 'url' },
  email: { type: 'email' },
  ip: [
    {
      validator: (rule, value, cb) => (value === '1.1.1.1' ? cb() : cb(new Error('必填1.1.1.1'))),
      trigger: 'change'
    }
  ],
  num1: [{ type: 'number', min: 2, max: 11, message: '必填 2~11 之间的数字', trigger: 'change' }]
})

function handleSubmit() {
  ruleFormRef.value.validate((valid) => {
    if (valid) {
      Modal.alert('回调用法：提交成功')
    } else {
      Modal.alert('回调用法：提交失败')
    }
  })
}

function handleSubmitPromise() {
  ruleFormRef.value
    .validate()
    .then(() => {
      Modal.alert('promise用法:提交成功')
    })
    .catch(() => {
      Modal.alert('promise用法:提交失败')
    })
}

function clearFormValid() {
  ruleFormRef.value.clearValidate()
}

function resetForm() {
  ruleFormRef.value.resetFields()
}
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
