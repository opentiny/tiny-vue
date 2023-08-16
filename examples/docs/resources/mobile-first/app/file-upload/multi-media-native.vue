<template>
  <tiny-file-upload
    :action="action"
    list-type="picture-card"
    source-type="audio/video/picture"
    :file-list="fileList"
    :hwh5="hwh5"
    @trigger-click="handleTriggerClick"
    @play="handlePlay"
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
      hwh5: {
        HWH5: () => window.HWH5 || {}
      },
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
    handleTriggerClick($event, sourceType, type) {
      /**
       * $event事件对象
       * sourceType表示选取资源类型（picture、video、audio）图片、视频、音频
       * sourceType为picture时：type: 1 从相册选择; type: 2 拍摄
       * sourceType为video时：type: 1 从相册选择; type: 3 录像
       * sourceType为audio时（type类型包括start、pause、continue、end、cancel）：
       *  type: start 开始录音;
       *  type: pause 中止录音;
       *  type: continue 继续录音;
       *  type: end 结束录音;
       *  type: cancel 取消录音
       */
      console.log('handleTriggerClick', $event, sourceType, type)
    },
    handlePlay(file, sourceType) {
      /**
       * file为文件对象
       * sourceType表示选取资源类型（video、audio）视频、音频
       */
      console.log('handlePlay', file, sourceType)
    }
  }
}
</script>
