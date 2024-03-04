<template>
  <div>
    <tiny-button @click="boxVisibility = true">弹出表单</tiny-button>
    <tiny-dialog-box
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
      resize
      max-height="500"
      title="消息"
      width="30%"
      :is-form-reset="false"
    >
      <tiny-form :model="formData" label-width="100px" label-position="top">
        <tiny-form-item label="人员姓名" prop="name">
          <tiny-input type="text" v-model="formData.name"></tiny-input>
        </tiny-form-item>
        <tiny-form-item label="岗位" prop="type">
          <tiny-radio-group v-model="formData.type">
            <tiny-radio :label="0">研发</tiny-radio>
            <tiny-radio :label="1">非研发</tiny-radio>
          </tiny-radio-group>
        </tiny-form-item>
        <tiny-form-item label="特长" prop="goodAt">
          <tiny-checkbox :indeterminate="isIndeterminate" v-model="checkAll">全部</tiny-checkbox>
          <tiny-checkbox-group v-model="formData.goodAt">
            <tiny-checkbox
              v-for="(goodAtItem, index) in goodAtOptions[formData.type]"
              :label="goodAtItem"
              :key="goodAtItem + index"
              >{{ goodAtItem }}</tiny-checkbox
            >
          </tiny-checkbox-group>
        </tiny-form-item>
        <tiny-form-item label="技能" prop="skill" required>
          <tiny-select v-model="value">
            <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </tiny-option>
          </tiny-select>
        </tiny-form-item>
      </tiny-form>
      <template #footer>
        <tiny-button type="primary" :loading="btnSubmit.loading" @click="handleSubmit">{{
          btnSubmit.text[btnSubmit.loading]
        }}</tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script setup lang="jsx">
import { ref, computed } from 'vue'
import {
  Button as TinyButton,
  DialogBox as TinyDialogBox,
  Form as TinyForm,
  FormItem as TinyFormItem,
  Input as TinyInput,
  Radio as TinyRadio,
  RadioGroup as TinyRadioGroup,
  Checkbox as TinyCheckbox,
  CheckboxGroup as TinyCheckboxGroup,
  Notify,
  Option as TinyOption,
  Select as TinySelect
} from '@opentiny/vue'

const options = ref([
  { value: 'js', label: 'js' },
  { value: 'java', label: 'java' }
])

const value = ref('')

const btnSubmit = ref({
  loading: false,
  text: {
    true: '提交中',
    false: '确定'
  }
})
const boxVisibility = ref(false)
const formData = ref({
  name: '',
  type: 0,
  goodAt: []
})
const goodAtOptions = ref([
  ['架构', '算法', '自动化'],
  ['UI设计', 'EXCEL', 'PPT制作']
])
const checkAll = computed({
  get() {
    return formData.value.goodAt.length === goodAtOptions.value[formData.value.type].length
  },
  set(val) {
    formData.value.goodAt = val ? [...goodAtOptions.value[formData.value.type]] : []
  }
})
const isIndeterminate = computed({
  get() {
    return (
      formData.value.goodAt.length > 0 && formData.value.goodAt.length < goodAtOptions.value[formData.value.type].length
    )
  }
})

function handleSubmit() {
  btnSubmit.value.loading = true
  mockPost().then((response) => {
    if (response.status === 200) {
      btnSubmit.value.loading = false
      boxVisibility.value = false
      Notify({
        title: '成功',
        message: '表单已成功提交！',
        offset: 0
      })
    }
  })
}

function mockPost() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 200 })
    }, 800)
  })
}

function resetForm() {
  formData.value = {
    name: '',
    type: 0,
    goodAt: []
  }
}
</script>
