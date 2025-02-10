<template>
  <tiny-file-upload ref="uploadRef" :action="action" :with-credentials="true" :file-list="fileList">
    <template #trigger>
      <tiny-button type="primary">选取文件</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyFileUpload, TinyButton } from '@opentiny/vue-mobile'

const fileList = ref([])
const action = ref('')
</script>
