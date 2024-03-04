<template>
  <tiny-file-upload ref="upload" :file-list="fileList" :http-request="httpRequest" :before-upload="beforeUpload">
    <template #trigger>
      <icon-upload></icon-upload>
    </template>
  </tiny-file-upload>
</template>

<script lang="jsx">
import { FileUpload } from '@opentiny/vue'
import { iconUpload } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload: FileUpload,
    IconUpload: iconUpload()
  },
  data() {
    return {
      httpRequest: () =>
        new Promise((resolve) => {
          // 此处服务为 自定义上传服务
        }),
      fileList: [
        {
          name: 'test1',
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`
        }
      ]
    }
  },
  methods: {
    beforeUpload(file) {
      console.log('查看请求头示例请打开浏览器开发者工具 network 的 upload 请求')
      return true
    }
  }
}
</script>
