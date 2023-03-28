<template>
  <tiny-pop-upload
    dialog-title="自定义弹框标题"
    cancel-button-text="自定义取消按钮"
    submit-button-text="自定义提交按钮文本"
    upload-button-text="自定义按钮文本"
  ></tiny-pop-upload>
</template>

<script lang="jsx">
import { PopUpload } from '@opentiny/vue'

export default {
  components: {
    TinyPopUpload: PopUpload
  },
  data() {
    return {}
  }
}
</script>
