<template>
  <tiny-file-upload ref="uploadRef" :file-list="fileList" :http-request="httpRequest" :before-upload="beforeUpload">
    <template #trigger>
      <tiny-icon-upload></tiny-icon-upload>
    </template>
  </tiny-file-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyFileUpload } from '@opentiny/vue-mobile'
import { iconUpload } from '@opentiny/vue-icon'

const httpRequest = ref(
  () =>
    new Promise((resolve) => {
      // 此处服务为 自定义上传服务
    })
)
const fileList = ref([
  {
    name: 'test1',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`
  }
])
const TinyIconUpload = iconUpload()

function beforeUpload(file) {
  console.log('查看请求头示例请打开浏览器开发者工具 network 的 upload 请求')
  return true
}
</script>
