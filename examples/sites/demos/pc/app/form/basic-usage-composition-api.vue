<template>
  <div class="demo-form">
    <tiny-form label-width="100px">
      <tiny-form-item label="数字">
        <tiny-numeric v-model="createData.quantity"></tiny-numeric>
      </tiny-form-item>
      <tiny-form-item label="单选">
        <tiny-radio v-model="createData.sex" label="1"> 男 </tiny-radio>
        <tiny-radio v-model="createData.sex" label="2" text="女"></tiny-radio>
      </tiny-form-item>
      <tiny-form-item label="日期">
        <tiny-date-picker v-model="createData.datepicker"></tiny-date-picker>
      </tiny-form-item>
      <tiny-form-item label="时间">
        <tiny-drop-times v-model="createData.dropTimes"></tiny-drop-times>
      </tiny-form-item>
      <tiny-form-item label="提示">
        <tiny-tooltip effect="light" content="TinyUI Form Demo" placement="right">
          <tiny-input v-model="createData.input" placeholder="click"></tiny-input>
        </tiny-tooltip>
      </tiny-form-item>
      <tiny-form-item label="文本">
        <tiny-input v-model="createData.textarea" type="textarea" maxlength="15"> </tiny-input>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button type="primary" @click="submitClick"> 提交 </tiny-button>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import {
  Form as TinyForm,
  FormItem as TinyFormItem,
  Numeric as TinyNumeric,
  Radio as TinyRadio,
  DatePicker as TinyDatePicker,
  DropTimes as TinyDropTimes,
  Tooltip as TinyTooltip,
  Input as TinyInput,
  Button as TinyButton,
  Modal as TinyModal
} from '@opentiny/vue'

const createData = reactive({
  quantity: 0,
  sex: '1',
  datepicker: '',
  textarea: '',
  dropTimes: '',
  input: ''
})

function submitClick() {
  TinyModal.alert('提交')
}
</script>

<style scoped>
.demo-form {
  width: 380px;
}
</style>
