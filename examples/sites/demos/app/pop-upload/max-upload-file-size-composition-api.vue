<template>
  <tiny-pop-upload :action="action" :max-upload-file-size="10000"></tiny-pop-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { PopUpload as TinyPopUpload } from '@opentiny/vue'

const action = ref('http://localhost:3000/api/upload')
</script>
