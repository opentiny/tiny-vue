<template>
  <tiny-file-upload
    :action="action"
    list-type="picture-card"
    source-type="video/audio/picture"
    :file-list="fileList"
    @trigger-click="handleTriggerClick"
  >
  </tiny-file-upload>
</template>

<script>
import { FileUpload } from '@opentiny/vue'

export default {
  components: {
    TinyFileUpload: FileUpload
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      fileList: [
        {
          name: 'video-test.mp4',
          url: 'http://hicdev.huawei.com/mirrors/academy/Intro%20to%20Vue.js/1%29%20The%20Vue%20Instance.mp4'
        },
        {
          name: 'audio-test.3gp',
          type: 'audio',
          url: 'https://hicdev.huawei.com/mirrors/resource/audio-test.3gp'
        }
      ]
    }
  },
  methods: {
    handleTriggerClick() {
      console.log('handleTriggerClick', ...arguments)
    }
  }
}
</script>
