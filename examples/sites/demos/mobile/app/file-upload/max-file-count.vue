<template>
  <tiny-file-upload :action="action" :limit="limit">
    <template #trigger>
      <tiny-icon-upload></tiny-icon-upload>
    </template>
  </tiny-file-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyFileUpload } from '@opentiny/vue-mobile'
import { iconUpload } from '@opentiny/vue-icon'

const action = ref('http://localhost:3000/api/upload')
const limit = ref(1)
const TinyIconUpload = iconUpload()
</script>
