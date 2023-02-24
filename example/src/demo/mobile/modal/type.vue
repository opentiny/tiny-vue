<template>
  <div class="content">
    <tiny-button @click="alertClick" :reset-time="0">alert 弹框</tiny-button>
    <tiny-button @click="messageClick" :reset-time="0">message 提示框</tiny-button>
    <tiny-button @click="confirmClick" :reset-time="0">confirm 确认提示框</tiny-button>
  </div>
</template>

<script>
import { Button, Modal, Notify } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    alertClick() {
      Modal.alert({ message: 'alert 弹框', title: '弹框', mode: 'mobile' })
    },
    messageClick() {
      Modal.message({ message: 'message 提示框', title: '弹框', mode: 'mobile' })
    },
    confirmClick() {
      Modal.confirm({ message: '您确定要删除吗？', title: '确定框', mode: 'mobile' }).then((res) => {
        Notify({
          type: 'info',
          title: '触发回调事件',
          message: `点击${res}按钮`
        })
      })
    }
  }
}
</script>
