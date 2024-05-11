<template>
  <tiny-file-upload
    ref="upload"
    :action="action"
    :file-list="fileList"
    list-type="saas"
    @download-file="handleDownloadFile"
  ></tiny-file-upload>
</template>

<script>
import { FileUpload, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyFileUpload: FileUpload
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      fileList: [
        {
          docId: 'M1T2A1N548572512085860351',
          path: 'edm/one/',
          docVersion: 'V1',
          name: 'test1.png',
          docSize: 100 * 1024,
          size: 100 * 1024,
          serverName: 'ShenZhen'
        },
        {
          docId: 'M1T2A1N548572512085860352',
          path: 'edm/one/',
          docVersion: 'V1',
          name: 'test1.png',
          docSize: 100 * 1024,
          size: 100 * 1024,
          serverName: 'ShenZhen'
        }
      ]
    }
  },
  methods: {
    handleDownloadFile(file) {
      // 模拟下载成功场景
      if (file.docId === 'M1T2A1N548572512085860351') {
        file.showDownloadBar = true

        // 更新downloadPercentage，vue2下写法
        // this.$set(file, 'downloadPercentage', 0)
        // 更新downloadPercentage，vue3下写法
        file.downloadPercentage = 0

        const timer = setInterval(() => {
          if (file.downloadPercentage >= 100) {
            clearInterval(timer)
            // 下载完成后可以隐藏进度条，因为进度条有过渡动画，所以可以延迟1s再隐藏
            setTimeout(() => {
              file.showDownloadBar = false
            }, 1000)

            Modal.message({ message: '下载成功', status: 'success' })
            return
          }
          file.downloadPercentage += 10
        }, 300)
      } else {
        // 模拟下载失败场景
        file.showDownloadBar = true

        // 更新downloadPercentage，vue2下写法
        // this.$set(file, 'downloadPercentage', 0)
        // 更新downloadPercentage，vue3下写法
        file.downloadPercentage = 0

        const timer = setInterval(() => {
          if (file.downloadPercentage >= 50) {
            clearInterval(timer)
            // file.showDownloadBar = false
            // 更新downloadStatus，vue2下写法
            // this.$set(file, 'downloadStatus', 'exception')
            // 更新downloadStatus，vue3下写法
            file.downloadStatus = 'exception'

            Modal.message({ message: '下载失败', status: 'error' })
            return
          }
          file.downloadPercentage += 10
        }, 300)
      }
    }
  }
}
</script>
