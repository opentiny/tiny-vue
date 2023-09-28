<template>
  <div class="content">
    <tiny-file-upload ref="uploadRef" drag :action="action" :auto-upload="false" multiple>
      <tiny-icon-fileupload class="tiny-svg-size tiny-icon-fileupload"></tiny-icon-fileupload>
      <div class="tiny-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </tiny-file-upload>
    <br />
    <tiny-button style="margin-left: 10px" type="success" @click="submitUpload">上传到服务器</tiny-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FileUpload as TinyFileUpload, Button as TinyButton } from '@opentiny/vue'
import { iconFileupload } from '@opentiny/vue-icon'

const action = ref('http://localhost:3000/api/upload')
const uploadRef = ref()

const TinyIconFileupload = iconFileupload()

function submitUpload() {
  uploadRef.value.submit()
}
</script>
