<template>
  <div class="demo-form">
    <tiny-form ref="form" :model="createData" @validate="validate">
      <tiny-form-item label="姓名" prop="name" :rules="{ required: true, messages: '必填', trigger: 'blur' }">
        <tiny-input v-model="createData.name"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="昵称">
        <tiny-input v-model="createData.nickname"></tiny-input>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button @click="submit" type="primary">提交</tiny-button>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script>
import { Form, FormItem, Input, Button, Modal as TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyForm: Form,
    TinyFormItem: FormItem,
    TinyInput: Input,
    TinyButton: Button
  },
  data() {
    return {
      createData: {
        name: '',
        nickname: ''
      }
    }
  },
  methods: {
    validate() {
      TinyModal.message({ message: '校验事件触发了', status: 'info' })
    },
    submit() {
      this.$refs.form.validate(() => {
        // empty
      })
    }
  }
}
</script>

<style scoped>
.demo-form {
  width: 380px;
}
</style>
