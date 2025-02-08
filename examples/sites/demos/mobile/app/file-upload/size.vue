<template>
  <tiny-file-upload ref="uploadRef" :action="action" :header-show="false" size="medium">
    <template #trigger>
      <tiny-button size="medium">上传</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyFileUpload, TinyButton } from '@opentiny/vue-mobile'

const action = ref('http://localhost:3000/api/upload')
</script>
