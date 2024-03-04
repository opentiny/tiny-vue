<template>
  <div style="height: 330px">
    <tiny-button @click="boxVisibility = true"> 弹出Dialog{{ boxVisibility }} </tiny-button>
    <tiny-dialog-box
      :modal-append-to-body="false"
      :visible="boxVisibility"
      v-if="boxVisibility"
      @update:visible="boxVisibility = $event"
      title="消息"
      width="30%"
      :before-close="beforeClose"
    >
      <span>dialog-box内容</span>
      <template #footer>
        <tiny-button type="primary" @click="handleConfirm(beforeClose)"> 确定 </tiny-button>
        <tiny-button @click="handleCancel(beforeClose)">取消</tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script>
import { Button, DialogBox } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyDialogBox: DialogBox
  },
  data() {
    return {
      boxVisibility: false
    }
  },
  methods: {
    beforeClose(type) {
      // 点击取消按钮和关闭按钮不关闭弹窗
      return !~['cancel', 'close'].indexOf(type)
    },
    handleConfirm(beforeClose) {
      return beforeClose('confirm') && (this.boxVisibility = false)
    },
    handleCancel(beforeClose) {
      return beforeClose('cancel') && (this.boxVisibility = false)
    }
  }
}
</script>
