<template>
  <tiny-file-upload
    :action="action"
    :before-upload="beforeAvatarUpload"
    :limit="limit"
  >
    <template #trigger>
      <icon-upload></icon-upload>
    </template>
  </tiny-file-upload>
</template>

<script>
import { FileUpload } from '@opentiny/vue'
import { iconUpload } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload: FileUpload,
    IconUpload: iconUpload()
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      limit: 1
    }
  },
  methods: {
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      const allow = isJPG && isLt2M
      !allow && alert('自定义提示：该文件不合规范，文件类型或大小超出限制')
      return allow
    }
  }
}
</script>
