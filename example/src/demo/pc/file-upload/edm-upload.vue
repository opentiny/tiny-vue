<template>
  <tiny-file-upload style="display: inline-block" ref="upload" :multiple="true" :edm="edm">
    <template #trigger>
      <tiny-button type="primary">点击上传</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script>
import { FileUpload, Button } from '@opentiny/vue'
import { sha256 } from 'js-sha256'

export default {
  components: {
    TinyFileUpload: FileUpload,
    TinyButton: Button
  },
  data() {
    return {
      edm: {
        upload: {
          plugin: sha256,
          token: () =>
            new Promise((resolve) => {
              // resolve 集成EDM sdk 或获取的下载token ，示例格式如下（示例数据不可用）：
              //  resolve({
              //   config:{fileWhiteList:".doc,.docx,.xls"},
              //   edmToken:"security:2B263FA5CF0940A77008C809:041F85244E7BCB01781462D5F0BD68934D51DF3F2192ACB36640A7DC8AFD8378B238B0881B5F2FDF",
              //   traceId:"0b1246cf-a1c5-418c-bd3b-543039407951"
              // })
              resolve()
            })
        }
      }
    }
  }
}
</script>
