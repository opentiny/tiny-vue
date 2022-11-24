<template>
  <div>
    <tiny-file-upload
      :action="action"
      :before-remove="beforeRemove"
      :before-upload="beforeAvatarUpload"
      multiple
      :limit="3"
      :file-list="fileList"
    >
      <template #trigger>
        <icon-upload></icon-upload>
      </template>
    </tiny-file-upload>
  </div>
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
      action: 'http://localhost:3000/api/upload',
      fileList: [
        {
          name: 'test1',
          url: 'static/images/ld.png'
        },
        {
          name: 'test2',
          url: 'static/images/ry.png'
        }
      ]
    }
  },
  methods: {
    beforeRemove(file, fileList) {
      console.log('触发删除文件前回调事件')
      return true
    },
    beforeAvatarUpload(file) {
      console.log('触发上传前回调事件')
      return true
    }
  }
}
</script>
