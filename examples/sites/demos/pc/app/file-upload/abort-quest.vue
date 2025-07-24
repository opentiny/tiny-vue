<template>
  <div class="content">
    <tiny-file-upload ref="upload" :action="action">
      <tiny-button size="small"> 点击上传 </tiny-button>
    </tiny-file-upload>
    <br />
    <tiny-button @click="cancelUpload" type="primary"> 取消上传 </tiny-button>
  </div>
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
      action: 'http://localhost:3000/api/upload'
    }
  },
  methods: {
    cancelUpload() {
      TinyModal.message({ message: '手动取消上传', status: 'info' })
      this.$refs.upload.abort()
    }
  }
}
</script>
