<template>
  <tiny-file-upload :action="action" :limit="limit" @exceed="handleExceed" multiple is-hidden>
    <tiny-button> 点击上传 </tiny-button>
  </tiny-file-upload>
</template>

<script>
import { TinyFileUpload, TinyButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyFileUpload,
    TinyButton
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      limit: 1
    }
  },
  methods: {
    handleExceed() {
      TinyModal.message(`文件个数不能超过${this.limit}个`)
    }
  }
}
</script>
