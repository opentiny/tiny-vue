<template>
  <div class="file-upload-wrap">
    <tiny-file-upload ref="upload" :file-list="fileList"> </tiny-file-upload>
    <tiny-file-upload ref="upload" :file-list="fileList" list-type="picture-card">
      <icon-plus />
    </tiny-file-upload>
    <tiny-file-upload ref="upload" :file-list="fileList" :file-icon-list="iconList"> </tiny-file-upload>
  </div>
</template>

<script>
import { FileUpload } from '@opentiny/vue'
import { iconPlus } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload: FileUpload,
    IconPlus: iconPlus()
  },
  data() {
    return {
      fileList: [],
      action: 'http://localhost:3000/api/upload',
      iconList: [
        {
          url: 'images/1.jpg',
          type: 'txt'
        },
        {
          url: 'images/2.jpg',
          type: 'xlsx'
        }
      ]
    }
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit()
    },
    cancelUpload() {
      this.$refs.upload.clearFiles()
    }
  }
}
</script>
<style>
.file-upload-wrap .tiny-mobile-file-upload .tiny-upload--picture-card {
  text-align: center;
}
</style>
