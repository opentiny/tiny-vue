<template>
  <tiny-file-upload
    action="/"
    name="fileName"
    show-file-list
    :file-list="fileList"
    list-type="thumb"
    :open-download-file="true"
    :thumb-option="options"
  >
    <tiny-button type="primary"> 点击上传 </tiny-button>
  </tiny-file-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { FileUpload as TinyFileUpload, Button as TinyButton } from '@opentiny/vue'
import { iconEditorListNum } from '@opentiny/vue-icon'

const options = ref({
  width: 300,
  showDownload: true,
  showDel: true,
  showTooltip: false,
  popperClass: 'my-thumb-name',
  downloadFile: (file) => {
    console.log('file', file)
  },
  icon: iconEditorListNum()
})
const fileList = ref([
  {
    name: 'test1',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/fruit.jpg`
  },
  {
    name: 'test2',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/book.jpg`
  }
])
</script>
