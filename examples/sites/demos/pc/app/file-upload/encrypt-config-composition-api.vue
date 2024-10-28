<template>
  <div>
    <div class="mb10">{{ encryptConfig }}</div>
    <tiny-file-upload :action="action" :data="data" :encrypt-config="encryptConfig">
      <tiny-button>点击上传</tiny-button>
    </tiny-file-upload>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { FileUpload as TinyFileUpload, Button as TinyButton } from '@opentiny/vue'

const action = ref('http://localhost:3000/api/upload')
const encryptConfig = reactive({
  enabled: true,
  encrypt: true,
  watermark: '水印示例1'
})

const data = computed(() => {
  return {
    encrypt: encryptConfig.encrypt,
    watermark: encryptConfig.watermark
  }
})
</script>
