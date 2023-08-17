<template>
  <div>
    <tiny-button @click="btnClick1">方法调用</tiny-button>
    <tiny-button @click="btnClick2">组件形式使用</tiny-button>

    <tiny-modal
      v-model="showModal"
      type="confirm"
      show-footer
      :confirm-content="confirmContent2"
      :cancel-content="cancelContent2"
    >
      <div>设置确定按钮和取消按钮文本</div>
    </tiny-modal>
  </div>
</template>

<script>
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyModal: Modal
  },

  data() {
    return {
      showModal: false,
      confirmContent1: '好的',
      cancelContent1: '返回',

      confirmContent2: '确定',
      cancelContent2: '再想想'
    }
  },
  methods: {
    btnClick1() {
      Modal.confirm({
        message: '自定义确定按钮和取消按钮文本',
        confirmContent: this.confirmContent1,
        cancelContent: this.cancelContent1
      })
    },
    btnClick2() {
      this.showModal = true
    }
  }
}
</script>
