<template>
  <div>
    <tiny-file-upload
      :action="action"
      display-only
      list-type="picture-single"
      source-type="video"
      :file-list="fileList1"
    >
    </tiny-file-upload>
    <br />
    <br />
    <tiny-file-upload
      :action="action"
      display-only
      list-type="picture-single"
      source-type="audio"
      :file-list="fileList2"
    >
    </tiny-file-upload>
  </div>
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
      fileList1: [
        {
          name: 'video-test.mp4',
          url: 'http://hicdev.huawei.com/mirrors/academy/Intro%20to%20Vue.js/1%29%20The%20Vue%20Instance.mp4'
        }
      ],
      fileList2: [
        {
          name: 'audio-test.3gp',
          url: 'https://hicdev.huawei.com/mirrors/resource/audio-test.3gp'
        }
      ]
    }
  }
}
</script>
