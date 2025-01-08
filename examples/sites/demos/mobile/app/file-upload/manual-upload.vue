<template>
  <tiny-file-upload ref="upload" :action="action" :file-list="fileList" :auto-upload="false" :header-show="false">
    <template #trigger>
      <tiny-button type="primary">选取文件</tiny-button>
    </template>
    <tiny-button style="margin-left: 10px" type="success" @click="submitUpload">上传到服务器</tiny-button>
  </tiny-file-upload>
</template>

<script lang="jsx">
import { TinyFileUpload, TinyButton } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyFileUpload,
    TinyButton
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      fileList: []
    }
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit()
    }
  }
}
</script>
