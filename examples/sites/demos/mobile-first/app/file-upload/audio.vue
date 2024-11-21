<template>
  <tiny-file-upload :action="action" list-type="picture-single" source-type="audio" :file-list="fileList">
  </tiny-file-upload>
</template>

<script>
import { TinyFileUpload } from '@opentiny/vue'

export default {
  components: {
    TinyFileUpload
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      fileList: [
        {
          name: 'audio-test.3gp',
          url: 'https://hicdev.huawei.com/mirrors/resource/audio-test.3gp'
        }
      ]
    }
  }
}
</script>
