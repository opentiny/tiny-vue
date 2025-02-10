<template>
  <tiny-file-upload
    ref="uploadRef"
    :action="action"
    :file-list="fileList"
    :auto-upload="false"
    :before-remove="beforeRemove"
    success-statistics
  >
    <template #trigger>
      <tiny-icon-upload></tiny-icon-upload>
    </template>
  </tiny-file-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyFileUpload, TinyModal } from '@opentiny/vue-mobile'
import { iconUpload } from '@opentiny/vue-icon'

const action = ref('')
const fileList = ref([
  {
    name: 'test1',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`
  }
])
const TinyIconUpload = iconUpload()

function beforeRemove(file) {
  return new Promise((resolve, reject) => {
    TinyModal.confirm(`确定移除 ${file.name}？`).then((res) => {
      res === 'confirm' ? resolve() : reject(new Error('取消移除'))
    })
  })
}
</script>
