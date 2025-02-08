<template>
  <tiny-file-upload :action="action" accept=".doc,.docx" :file-list="fileList">
    <template #trigger>
      <tiny-icon-upload></tiny-icon-upload>
    </template>
  </tiny-file-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyFileUpload } from '@opentiny/vue-mobile'
import { iconUpload } from '@opentiny/vue-icon'

const action = ref('')
// 此处可写自定义服务
const fileList = ref([])
const TinyIconUpload = iconUpload()
</script>
