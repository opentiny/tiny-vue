<template>
  <tiny-file-upload ref="uploadRef" :action="action" :file-list="fileList" disabled>
    <template #trigger>
      <tiny-button type="primary" disabled>选取文件</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyFileUpload, TinyButton } from '@opentiny/vue-mobile'

const action = ref('http://localhost:3000/api/upload')
const fileList = ref([
  {
    name: 'test1',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`
  }
])
</script>
