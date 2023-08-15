<template>
  <div>
    <tiny-file-upload
      :action="action"
      list-type="picture-single"
      :file-list="fileList1"
      @download-file="handleDownloadFile"
    >
    </tiny-file-upload>
    <br />
    <br />
    <tiny-file-upload
      :action="action"
      list-type="picture-card"
      :file-list="fileList2"
      @download-file="handleDownloadFile"
    >
    </tiny-file-upload>
  </div>
</template>

<script>
import { FileUpload, Button } from '@opentiny/vue'

export default {
  components: {
    TinyFileUpload: FileUpload,
    TinyButton: Button
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      fileList1: [
        {
          name: 'Snipaste_2022-12-02_18-05-51.png',
          url: 'webnova/static/images/ld.png'
        }
      ],
      fileList2: [
        {
          name: 'test1.png',
          url: 'webnova/static/images/ld.png',
          status: 'uploading',
          percentage: '50'
        },
        {
          name: 'test2',
          url: 'webnova/static/images/ry.png'
        },
        {
          name: 'test3',
          url: 'webnova/static/images/ld.png',
          status: 'fail'
        }
      ]
    }
  },
  methods: {
    handleDownloadFile() {
      console.log(...arguments)
    }
  }
}
</script>
