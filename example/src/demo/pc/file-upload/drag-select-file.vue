<template>
  <div class="content">
    <tiny-file-upload
      ref="upload"
      drag
      :action="action"
      :auto-upload="false"
      multiple
    >
      <icon-fileupload class="tiny-svg-size icon-fileupload"></icon-fileupload>
      <div class="tiny-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </tiny-file-upload>
    <br />
    <tiny-button style="margin-left: 10px" type="success" @click="submitUpload"
      >上传到服务器</tiny-button
    >
  </div>
</template>

<script>
import { FileUpload, Button } from '@opentiny/vue'
import { iconFileupload } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload: FileUpload,
    IconFileupload: iconFileupload(),
    TinyButton: Button
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload'
    }
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit()
    }
  }
}
</script>
