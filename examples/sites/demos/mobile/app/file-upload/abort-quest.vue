<template>
  <div class="content">
    <tiny-file-upload ref="uploadRef" :action="action">
      <template #trigger>
        <div>
          <tiny-icon-upload></tiny-icon-upload>
        </div>
      </template>
    </tiny-file-upload>
    <br />
    <tiny-button @click="cancelUpload">取消上传</tiny-button>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyFileUpload, TinyButton } from '@opentiny/vue-mobile'
import { iconUpload } from '@opentiny/vue-icon'

const action = ref('')
const uploadRef = ref()
const TinyIconUpload = iconUpload()

function cancelUpload() {
  uploadRef.value.abort()
}
</script>
