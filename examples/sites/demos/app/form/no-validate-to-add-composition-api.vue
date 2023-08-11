<template>
  <tiny-form :model="ruleForm" :rules="rules" ref="ruleFormRef" label-width="100px" class="demo-ruleForm">
    <tiny-form-item label="活动区域" prop="region">
      <tiny-select v-model="ruleForm.region" placeholder="请选择活动区域">
        <tiny-option label="区域一" value="shanghai"></tiny-option>
        <tiny-option label="区域二" value="beijing"></tiny-option>
      </tiny-select>
    </tiny-form-item>
    <tiny-form-item label="日期时间" prop="datetime">
      <tiny-date-picker v-model="ruleForm.datetime" type="datetime"></tiny-date-picker>
    </tiny-form-item>
    <tiny-form-item label="时间" prop="time">
      <tiny-time-picker v-model="ruleForm.time"></tiny-time-picker>
    </tiny-form-item>
    <tiny-form-item label="即时配送" prop="delivery">
      <tiny-switch v-model="ruleForm.delivery"></tiny-switch>
    </tiny-form-item>
    <tiny-form-item label="活动性质" prop="type">
      <tiny-checkbox-group v-model="ruleForm.type">
        <tiny-checkbox label="美食/餐厅线上活动" name="type"></tiny-checkbox>
        <tiny-checkbox label="地推活动" name="type"></tiny-checkbox>
      </tiny-checkbox-group>
    </tiny-form-item>
    <tiny-form-item label="特殊资源" prop="resource">
      <tiny-radio-group v-model="ruleForm.resource">
        <tiny-radio label="线上品牌商赞助"></tiny-radio>
        <tiny-radio label="线下场地免费"></tiny-radio>
      </tiny-radio-group>
    </tiny-form-item>
    <tiny-form-item label="活动形式" prop="desc">
      <tiny-input type="textarea" v-model="ruleForm.desc"></tiny-input>
    </tiny-form-item>
    <tiny-form-item>
      <tiny-button type="primary" @click="submitForm()"> 立即创建 </tiny-button>
      <tiny-button @click="resetForm()"> 重置 </tiny-button>
    </tiny-form-item>
  </tiny-form>
</template>

<script setup lang="jsx">
import { ref, reactive } from 'vue'
import {
  Form as TinyForm,
  FormItem as TinyFormItem,
  Button as TinyButton,
  Checkbox as TinyCheckbox,
  CheckboxGroup as TinyCheckboxGroup,
  Radio as TinyRadio,
  RadioGroup as TinyRadioGroup,
  Switch as TinySwitch,
  TimePicker as TinyTimePicker,
  DatePicker as TinyDatePicker,
  Input as TinyInput,
  Select as TinySelect,
  Option as TinyOption
} from '@opentiny/vue'
import { alert } from '@opentiny/vue-modal'

const reset = ref(false)
const ruleForm = reactive({
  name: '',
  region: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
  datetime: '',
  time: ''
})
const rules = ref({
  name: [
    { required: true, trigger: 'blur' },
    { min: 3, max: 5, trigger: 'blur' }
  ],
  region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
  datetime: [
    {
      type: 'date',
      required: true,
      message: '请选择日期',
      trigger: 'change'
    }
  ],
  time: [
    {
      type: 'date',
      required: true,
      message: '请选择时间',
      trigger: 'change'
    }
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: '请至少选择一个活动性质',
      trigger: 'change'
    }
  ],
  resource: [{ required: true, message: '请选择活动资源', trigger: 'change' }],
  desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
})
const ruleFormRef = ref()

function submitForm() {
  ruleFormRef.value.validate((valid) => {
    if (valid) {
      alert('submit!')
    } else {
      alert('error submit!!')
      return false
    }
  })
}

function resetForm() {
  reset.value = true
  ruleFormRef.value.resetFields()
}
</script>

<style>
.demo-ruleForm .tiny-form-item .tiny-form-item__content {
  width: 270px;
}
</style>
