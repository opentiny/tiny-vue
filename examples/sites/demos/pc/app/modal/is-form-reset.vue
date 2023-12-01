<template>
  <div class="content">
    <tiny-button @click="visible = !visible" :reset-time="0">关闭是否重置表单</tiny-button>

    <tiny-modal v-model="visible" type="confirm" show-footer :is-form-reset="false">
      <tiny-form :model="createData" label-width="100px">
        <tiny-form-item label="用户名" prop="username">
          <tiny-input v-model="createData.username"></tiny-input>
        </tiny-form-item>
        <tiny-form-item label="密码" prop="password">
          <tiny-input v-model="createData.password" show-password></tiny-input>
        </tiny-form-item>
      </tiny-form>
    </tiny-modal>
  </div>
</template>

<script>
import { Button, Modal, Notify, Form, FormItem, Input } from '@opentiny/vue'

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
      visible: false,
      createData: {
        username: '',
        password: ''
      }
    }
  }
}
</script>
