<template>
  <div>
    <tiny-button @click="btnClick1">方法调用</tiny-button>
    <tiny-button @click="btnClick2">组件形式使用</tiny-button>

    <tiny-modal
      v-model="showModal"
      type="confirm"
      show-footer
      :confirm-btn-props="confirmBtnProps2"
      :cancel-btn-props="cancelBtnProps2"
    >
      <div>自定义确定按钮和取消按钮Props</div>
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
      confirmBtnProps1: { disabled: true, text: 'OK' },
      cancelBtnProps1: { plain: true, text: '返回' },

      confirmBtnProps2: { autoFocus: true },
      cancelBtnProps2: { type: 'warning' }
    }
  },
  methods: {
    btnClick1() {
      Modal.confirm({
        message: '自定义确定按钮和取消按钮props',
        confirmBtnProps: this.confirmBtnProps1,
        cancelBtnProps: this.cancelBtnProps1
      })
    },
    btnClick2() {
      this.showModal = true
    }
  }
}
</script>
