<template>
  <div class="demo-form">
    <div class="group-form-title">分组标题1</div>
    <tiny-form ref="groupForm1Ref" :model="createData" :rules="rules" label-position="top" label-width="100px">
      <tiny-form-item label="站点名称" prop="name">
        <tiny-input v-model="createData.name" placeholder="请输入"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="弹性公网IP" prop="ip">
        <tiny-radio v-model="createData.ip" label="1"> 现在购买 </tiny-radio>
        <tiny-radio v-model="createData.ip" label="0"> 暂不购买 </tiny-radio>
      </tiny-form-item>
      <tiny-form-item label="站点地址（可选）" prop="address" class="address">
        <tiny-input v-model="createData.address" placeholder="例如：www.example.com"></tiny-input>
        <icon-help-circle title="站点地址（可选）" class="icon-help"></icon-help-circle>
      </tiny-form-item>
    </tiny-form>
    <div class="group-form-title second-title">分组标题2</div>
    <tiny-form ref="groupForm2Ref" :model="createData" :rules="rules" label-position="top" label-width="100px">
      <tiny-form-item label="国家" prop="country">
        <tiny-input v-model="createData.country" placeholder="请输入"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="类别" prop="type">
        <tiny-radio v-model="createData.type" label="1"> 现在购买 </tiny-radio>
        <tiny-radio v-model="createData.type" label="0"> 暂不购买 </tiny-radio>
      </tiny-form-item>
      <tiny-form-item label="标题内容超出六个字" prop="title">
        <tiny-input type="textarea" v-model="createData.title" placeholder="请输入"></tiny-input>
      </tiny-form-item>
      <tiny-form-item class="btn-form-item">
        <tiny-button type="primary" @click="handleSubmit"> 确认 </tiny-button>
        <tiny-button @click="resetForm"> 取消 </tiny-button>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script>
import { Form, FormItem, Input, Button, Modal, Radio } from '@opentiny/vue'
import { IconHelpCircle } from '@opentiny/vue-icon'

export default {
  components: {
    TinyForm: Form,
    TinyFormItem: FormItem,
    TinyInput: Input,
    TinyButton: Button,
    TinyRadio: Radio,
    IconHelpCircle: IconHelpCircle()
  },
  data() {
    return {
      createData: {
        name: '',
        ip: '0',
        address: '',
        country: '',
        type: '0',
        title: ''
      },
      rules: {
        name: [{ required: true, message: '必填', trigger: 'blur' }],
        country: [{ required: true, message: '必填', trigger: 'blur' }]
      }
    }
  },
  methods: {
    validForm(formRef) {
      return new Promise((resolve) => {
        formRef.validate((valid) => {
          resolve(valid)
        })
      })
    },
    handleSubmit() {
      Promise.all([this.validForm(this.$refs.groupForm1Ref), this.validForm(this.$refs.groupForm2Ref)]).then((res) => {
        const [valid1, valid2] = res
        if (valid1 && valid2) {
          Modal.alert('提交成功！')
        }
      })
    },
    resetForm() {
      this.$refs.groupForm1Ref.resetFields()
      this.$refs.groupForm2Ref.resetFields()
    }
  }
}
</script>

<style scoped>
.demo-form {
  width: 380px;
}
.group-form-title {
  margin-bottom: 24px;
  font-size: 16px;
  color: #191919;
  font-weight: bold;
}
.btn-form-item {
  padding-top: 8px;
}
.second-title {
  margin-top: 8px;
}
.address {
  position: relative;
}
.tiny-textarea,
.tiny-input {
  width: 200px;
}
.icon-help {
  margin-left: 12px;
  font-size: 16px;
  fill: #191919;
}
</style>
