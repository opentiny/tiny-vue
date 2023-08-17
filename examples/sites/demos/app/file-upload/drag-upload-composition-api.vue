<template>
  <tiny-file-upload drag :action="action" multiple accept=".png,.jpeg,.jpg" @drop-error="dropErrorHandler">
    <tiny-icon-fileupload class="tiny-svg-size icon-fileupload"></tiny-icon-fileupload>
    <div class="tiny-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  </tiny-file-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { FileUpload as TinyFileUpload } from '@opentiny/vue'
import { iconFileupload } from '@opentiny/vue-icon'
import { message } from '@opentiny/vue-modal'

const action = ref('http://localhost:3000/api/upload')

const TinyIconFileupload = iconFileupload()

function dropErrorHandler(files) {
  message(`有${files.length}个文件拖拽失败`)
}
</script>
