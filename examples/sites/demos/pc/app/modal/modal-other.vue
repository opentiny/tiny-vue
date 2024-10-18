<template>
  <div>
    <h2>函数式调用</h2>
    <div class="content">
      <tiny-button @click="btnClick">弹窗esc关闭</tiny-button>
    </div>
    <h2>标签式调用</h2>
    <div class="content">
      <tiny-button @click="openModal">弹窗esc关闭,保留表单数据</tiny-button>
      <tiny-modal
        v-model="show"
        type="confirm"
        title="自定义弹窗标题"
        message="窗口内容"
        show-header
        show-footer
        v-bind="options"
      >
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
      show: false,
      options: {
        escClosable: true,
        zIndex: 9999,
        isFormReset: false
      },
      createData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    btnClick() {
      Modal.confirm({
        message: '窗口内容',
        title: '自定义弹窗标题',
        showHeader: true,
        showFooter: true,
        ...this.options
      })
    },
    openModal() {
      this.show = true
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 16px;
  font-weight: bold;
  margin: 20px 0 12px;
}
.content {
  margin: 8px;
}
</style>
