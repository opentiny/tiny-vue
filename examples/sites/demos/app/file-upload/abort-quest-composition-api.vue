<template>
  <div class="content">
    <tiny-file-upload ref="uploadRef" :action="action">
      <tiny-button size="small" type="primary"> 点击上传 </tiny-button>
    </tiny-file-upload>
    <br />
    <tiny-button @click="cancelUpload"> 取消上传 </tiny-button>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { FileUpload as TinyFileUpload, Button as TinyButton } from '@opentiny/vue'
import { message } from '@opentiny/vue-modal'

const action = ref('http://localhost:3000/api/upload')
const uploadRef = ref()

function cancelUpload() {
  message('手动取消上传')
  uploadRef.value.abort()
}
</script>
