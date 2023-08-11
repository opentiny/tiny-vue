<template>
  <tiny-form :model="ruleForm" :rules="rules" ref="ruleFormRef" label-width="100px">
    <tiny-form-item label="活动名称" prop="name">
      <tiny-input v-model="ruleForm.name"></tiny-input>
    </tiny-form-item>
    <tiny-form-item label="活动时间" required>
      <tiny-col :span="12">
        <tiny-form-item prop="date1">
          <tiny-date-picker
            :validate-event="false"
            type="date"
            placeholder="选择日期"
            v-model="ruleForm.date1"
            style="width: 100%"
          ></tiny-date-picker>
        </tiny-form-item>
      </tiny-col>
      <tiny-col :span="12">
        <tiny-form-item prop="date2">
          <tiny-time-picker
            :validate-event="false"
            placeholder="选择时间"
            v-model="ruleForm.date2"
            style="width: 100%"
          ></tiny-time-picker>
        </tiny-form-item>
      </tiny-col>
    </tiny-form-item>
    <tiny-form-item>
      <tiny-button type="primary" @click="submitForm()">立即创建</tiny-button>
      <tiny-button @click="resetForm()">重置</tiny-button>
    </tiny-form-item>
  </tiny-form>
</template>

<script lang="jsx">
import { Form, FormItem, Button, Col, TimePicker, DatePicker, Input, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyForm: Form,
    TinyFormItem: FormItem,
    TinyInput: Input,
    TinyButton: Button,
    TinyCol: Col,
    TinyTimePicker: TimePicker,
    TinyDatePicker: DatePicker
  },
  data() {
    return {
      ruleForm: {
        name: '',
        date1: ''
      },
      rules: {
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
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          Modal.alert('Submitted successfully !')
        } else {
          Modal.alert('Data verification failed !')

          return false
        }
      })
    },
    resetForm() {
      this.$refs.ruleFormRef.resetFields()
    }
  }
}
</script>
