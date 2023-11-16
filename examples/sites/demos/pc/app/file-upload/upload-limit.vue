<template>
  <tiny-file-upload :action="action" :before-upload="beforeAvatarUpload">
    <tiny-button type="primary">点击上传</tiny-button>
  </tiny-file-upload>
</template>

<script lang="jsx">
import { FileUpload, Button, Modal as TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyFileUpload: FileUpload,
    TinyButton: Button
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload'
    }
  },
  methods: {
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      const allow = isJPG && isLt2M

      !allow && TinyModal.alert('自定义提示：该文件不合规范，文件类型或大小超出限制')

      return allow
    }
  }
}
</script>
