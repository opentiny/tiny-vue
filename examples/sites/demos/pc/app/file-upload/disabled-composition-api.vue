<template>
  <tiny-file-upload action="#" disabled>
    <template #trigger>
      <tiny-button type="primary">点击上传</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { FileUpload as TinyFileUpload, Button as TinyButton } from '@opentiny/vue'
</script>
