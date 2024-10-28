<template>
  <tiny-file-upload :action="action" :limit="limit" @exceed="handleExceed" multiple is-hidden>
    <tiny-button> 点击上传 </tiny-button>
  </tiny-file-upload>
</template>

<script>
import { FileUpload, Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyFileUpload: FileUpload,
    TinyButton: Button
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      limit: 1
    }
  },
  methods: {
    handleExceed() {
      Modal.message(`文件个数不能超过${this.limit}个`)
    }
  }
}
</script>
