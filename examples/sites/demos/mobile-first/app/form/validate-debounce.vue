<template>
  <div class="demo-form">
    <tiny-form ref="ruleForm" :model="createData" :rules="rules" label-width="100px">
      <tiny-form-item label="不防抖" prop="user1">
        <tiny-input v-model="createData.user1"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="防抖" prop="user2" validate-debounce>
        <tiny-input v-model="createData.user2"></tiny-input>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button type="success" @click="clearFormValid">移除表单校验</tiny-button>
        <tiny-button type="primary" @click="handleSubmit">提交</tiny-button>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script>
import { TinyForm, TinyFormItem, TinyInput, TinyButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyForm,
    TinyFormItem,
    TinyInput,
    TinyButton
  },
  data() {
    return {
      createData: {
        user1: '',
        user2: ''
      },
      rules: {
        user1: { validator: this.validateUser },
        user2: { validator: this.validateUser }
      }
    }
  },
  methods: {
    clearFormValid() {
      this.$refs.ruleForm.clearValidate()
    },
    handleSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          TinyModal.message('提交成功')
        }
      })
    },
    validateUser(rule, value, callback) {
      TinyModal.message('开始校验')
      /**
       * 模拟异步校验
       * 如果validate-debounce为false，在连续输入的情况下，这里会创建很多校验请求
       */
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (value && value.length > 30) {
            TinyModal.message('校验成功')
            resolve()
          } else {
            TinyModal.message('校验失败')
            reject(new Error('The length must be greater than 30 characters.'))
          }
        }, 300)
      })
        .then((res) => {
          callback()
        })
        .catch((e) => {
          callback(e)
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
