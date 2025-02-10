<template>
  <div class="content">
    <tiny-file-upload ref="uploadRef" :action="action" :file-list="fileList">
      <template #trigger>
        <tiny-icon-upload></tiny-icon-upload>
      </template>
    </tiny-file-upload>
    <br />
    <tiny-button @click="cancelUpload" type="primary">点击清空上传列表</tiny-button>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyFileUpload, TinyButton } from '@opentiny/vue-mobile'
import { iconUpload } from '@opentiny/vue-icon'

const action = ref('http://localhost:3000/api/upload')
const fileList = ref([
  {
    name: 'test1',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`
  },
  {
    name: 'test2',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ry.png`
  }
])
const uploadRef = ref()
const TinyIconUpload = iconUpload()

function cancelUpload() {
  uploadRef.value.clearFiles()
}
</script>
