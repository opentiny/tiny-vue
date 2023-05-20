<template>
  <div class="tiny-demo">
    <tiny-radio v-model="value" label="alert" text="alert"></tiny-radio>
    <tiny-radio v-model="value" label="confirm" text="confirm"></tiny-radio>
    <tiny-radio v-model="value" label="message" text="message"></tiny-radio>
    <div style="height: 16px"></div>
    <tiny-button @click="handleClick">点击打开 Modal 弹窗</tiny-button>
  </div>
</template>
<script lang="jsx">
import { Radio, Modal, Button } from '@opentiny/vue'

export default {
  components: {
    TinyRadio: Radio,
    TinyButton: Button
  },
  data() {
    return {
      value: 'alert'
    }
  },
  methods: {
    beforeClose(type) {
      if (this.value === 'alert') {
        /* alert 弹窗有这些关闭类型 close,confirm,esc,mask
           这里允许 confirm 关闭 */
        return !~['close', 'esc', 'mask'].indexOf(type)
      }

      if (this.value === 'confirm') {
        /* confirm 弹窗有这些关闭类型 close,confirm,cancel,esc,mask
           这里允许 confirm 或 cancel 关闭 */
        return !~['close', 'esc', 'mask'].indexOf(type)
      }

      if (this.value === 'message') {
        /* message 弹窗只有一种关闭类型 show
           这里允许 show 关闭 */
        return type === 'show'
      }
    },
    handleClick() {
      let method

      switch (this.value) {
        case 'message':
          method = Modal.message
          break
        case 'confirm':
          method = Modal.confirm
          break
        case 'alert':
          method = Modal.alert
          break
      }

      method({
        status: 'info',
        title: '普通提示框',
        escClosable: true,
        maskClosable: true,
        beforeClose: this.beforeClose,
        message: (h) => [<div>文本信息，文本信息，文本信息</div>]
      })
    }
  }
}
</script>
