<template>
  <tiny-file-upload :action="action" :limit="limit" @exceed="handleExceed" multiple is-hidden>
    <tiny-button type="primary">
      点击上传
    </tiny-button>
  </tiny-file-upload>
</template>

<script lang="jsx">
import { FileUpload, Button } from '@opentiny/vue'
import { message } from '@opentiny/vue-modal'

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
      message(`文件个数不能超过${this.limit}个`)
    }
  }
}
</script>
