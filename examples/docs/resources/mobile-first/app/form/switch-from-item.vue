<template>
  <div class="demo-form">
    <tiny-form ref="ruleForm" hide-required-asterisk :model="createData" :rules="rules" label-width="100px" show-message>
      <tiny-form-item label="等级" prop="radio">
        <tiny-radio-group v-model="createData.radio" :options="options" @change="change"></tiny-radio-group>
      </tiny-form-item>
      <tiny-form-item v-if="handleKey === 0" label="必填" prop="users" required key="1">
        <tiny-input v-model="createData.users"></tiny-input>
      </tiny-form-item>
      <tiny-form-item v-if="handleKey === 1" label="级联选择器" prop="cascader" key="2">
        <tiny-cascader v-model="createData.cascader" :options="options2" filterable></tiny-cascader>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button type="primary" @click="handleSubmit('ruleForm')"> 提交 </tiny-button>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script>
import { Form, FormItem, Input, Button, Modal, RadioGroup, Cascader } from '@opentiny/vue'

export default {
  components: {
    TinyForm: Form,
    TinyFormItem: FormItem,
    TinyInput: Input,
    TinyButton: Button,
    TinyRadioGroup: RadioGroup,
    TinyCascader: Cascader
  },
  data() {
    return {
      handleKey: 0,
      options: [
        { label: 'A', text: '很好' },
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
        cascader: [] // 注意:级联选择器放在表单中校验时，默认值必须是数组
      },
      rules: {
        radio: [{ required: true, message: '必填啊啊啊', trigger: 'change' }],
        users: [
          { required: true, message: '必填顶顶顶顶', trigger: 'blur' },
          { min: 2, max: 11, message: '长度必须不小于2', trigger: 'change' }
        ],
        cascader: [{ required: true, message: '必填休息休息', trigger: 'blur' }]
      }
    }
  },
  methods: {
    change() {
      if (this.handleKey === 0) {
        this.handleKey = 1
      } else {
        this.handleKey = 0
      }
    },
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

button:first-of-type {
  margin-left: 100px;
}
</style>
