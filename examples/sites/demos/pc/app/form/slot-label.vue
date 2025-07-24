<template>
  <div class="demo-form">
    <tiny-form ref="ruleFormRef" :model="createData" :rules="rules" label-width="100px">
      <tiny-form-item prop="users">
        <template #label> 必填 </template>
        <tiny-input v-model="createData.users"></tiny-input>
      </tiny-form-item>
      <tiny-form-item prop="datepicker">
        <template #label> 日期 </template>
        <tiny-date-picker v-model="createData.datepicker"></tiny-date-picker>
      </tiny-form-item>
      <tiny-form-item prop="url">
        <template #label>
          <div class="custom-label" v-auto-tip>超过两行文字，显示省略号</div>
        </template>
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
import { TinyForm, TinyFormItem, TinyInput, TinyDatePicker, TinyButton, TinyModal, TinyRadioGroup } from '@opentiny/vue'
import { AutoTip } from '@opentiny/vue-directive'

export default {
  components: {
    TinyForm,
    TinyFormItem,
    TinyInput,
    TinyDatePicker,
    TinyButton,
    TinyRadioGroup
  },
  directives: { AutoTip },
  data() {
    return {
      options: [
        { label: 'A', text: '很好', events: { click: this.handleClick } },
        { label: 'B', text: '一般' }
      ],
      createData: {
        radio: 'A',
        users: '',
        url: '',
        email: '',
        datepicker: '',
        textarea: '',
        cascader: [] // 注意：级联选择器放在表单中校验时，默认值必须是数组
      },
      rules: {
        radio: [{ required: true, message: '必填', trigger: 'blur' }],
        users: [
          { required: true, message: '必填', trigger: 'blur' },
          { min: 2, max: 11, message: '长度必须不小于 2', trigger: 'change' }
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
          TinyModal.alert('提交成功')
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
.custom-label {
  display: -webkit-box;
  width: 100%;
  -webkit-line-clamp: 2;
  line-height: 1.2;
  overflow: hidden;
  -webkit-box-orient: vertical;
  white-space: wrap;
}
</style>
