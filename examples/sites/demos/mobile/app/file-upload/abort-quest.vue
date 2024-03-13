<template>
  <div class="content">
    <tiny-file-upload ref="upload" :action="action">
      <template #trigger>
        <div>
          <icon-upload></icon-upload>
        </div>
      </template>
    </tiny-file-upload>
    <br />
    <tiny-button @click="cancelUpload">取消上传</tiny-button>
  </div>
</template>

<script lang="jsx">
import { FileUpload, Button } from '@opentiny/vue'
import { iconUpload } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload: FileUpload,
    TinyButton: Button,
    IconUpload: iconUpload()
  },
  data() {
    return {
      action: '' // 此处可写自定义服务
    }
  },
  methods: {
    cancelUpload() {
      this.$refs.upload.abort()
    }
  }
}
</script>
