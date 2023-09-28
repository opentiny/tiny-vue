<template>
  <div class="demo-date-picker-wrap">
    <tiny-form :model="ruleForm" :rules="rules" ref="ruleFormRef" label-width="100px">
      <tiny-form-item label="活动名称" prop="name">
        <tiny-input v-model="ruleForm.name"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="活动时间" required>
        <tiny-form-item prop="date1">
          <tiny-date-picker
            :validate-event="false"
            type="date"
            placeholder="选择日期"
            v-model="ruleForm.date1"
          ></tiny-date-picker>
        </tiny-form-item>
        <tiny-form-item prop="date2">
          <tiny-time-picker
            :validate-event="false"
            placeholder="选择时间"
            v-model="ruleForm.date2"
          ></tiny-time-picker>
        </tiny-form-item>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button type="primary" @click="submitForm()">立即创建</tiny-button>
        <tiny-button @click="resetForm()">重置</tiny-button>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Form as TinyForm,
  FormItem as TinyFormItem,
  Button as TinyButton,
  TimePicker as TinyTimePicker,
  DatePicker as TinyDatePicker,
  Input as TinyInput,
  Modal
} from '@opentiny/vue'

const ruleFormRef = ref()
const ruleForm = ref({
  name: '',
  date1: ''
})
const rules = ref({
  name: [
    { required: true, trigger: 'blur' },
    { min: 3, max: 5, trigger: 'blur' }
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: '请选择日期',
      trigger: 'blur'
    }
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: '请选择时间',
      trigger: 'change'
    }
  ]
})

function submitForm() {
  ruleFormRef.value.validate((valid) => {
    if (valid) {
      Modal.message('Submitted successfully !')
    } else {
      Modal.message('Data verification failed !')

      return false
    }
  })
}

function resetForm() {
  ruleFormRef.value.resetFields()
}
</script>

<style scoped>
.demo-date-picker-wrap {
  width: 400px;
}
</style>
