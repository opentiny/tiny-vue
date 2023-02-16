<template>
  <div class="content">
    <tiny-button @click="value1 = !value1" :reset-time="0">点击确定按钮触发事件</tiny-button>

    <tiny-modal v-model="value1" type="confirm" show-footer @confirm="confirmClick" :is-form-reset="false">
      <template #default>
        <tiny-form :model="createData" label-width="100px">
          <tiny-form-item label="用户名" prop="username">
            <tiny-input v-model="createData.username"></tiny-input>
          </tiny-form-item>
          <tiny-form-item label="密码" prop="password">
            <tiny-input v-model="createData.password" prop="password" show-password></tiny-input>
          </tiny-form-item>
        </tiny-form>
      </template>
    </tiny-modal>
  </div>
</template>

<script>
import { Button, Modal, Form, FormItem, Input } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyModal: Modal,
    TinyForm: Form,
    TinyFormItem: FormItem,
    TinyInput: Input
  },
  data() {
    return {
      value1: false,
      createData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    confirmClick() {
      Modal.message({ message: '点击确定按钮时触发事件' })
    }
  }
}
</script>
