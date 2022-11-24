<template>
  <tiny-file-upload ref="upload" :action="action" :file-list="fileList" :auto-upload="false" :before-remove="beforeRemove">
    <template #trigger>
      <icon-upload></icon-upload>
    </template>
  </tiny-file-upload>
</template>

<script>
import { FileUpload } from '@opentiny/vue'
import { iconUpload } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload: FileUpload,
    IconUpload: iconUpload()
  },
  data() {
    return {
      action: '',
      fileList: [
        {
          name: 'test1',
          url: 'static/images/ld.png'
        }
      ]
    }
  },
  methods: {
    beforeRemove(file, fileList) {
      return new Promise((resolve, reject) => {
        if (window.confirm(`确定移除 ${file.name}？`)) {
          resolve()
        } else {
          reject(new Error())
        }
      })
    }
  }
}
</script>
