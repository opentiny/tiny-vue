<template>
  <div class="content">
    <tiny-file-upload
      class="upload-demo picture-demo"
      :action="action"
      list-type="picture-card"
      :file-list="fileList"
      @preview="previewPicture"
    >
      <tiny-icon-add-picture class="tiny-svg-size" />
    </tiny-file-upload>
    <tiny-dialog-box v-model:visible="dialogVisible1" width="50%">
      <img style="width: 100%" :src="dialogImageUrl1" alt="Preview Image" />
    </tiny-dialog-box>
  </div>
</template>

<script>
import { FileUpload, DialogBox } from '@opentiny/vue'
import { iconAddPicture } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload: FileUpload,
    TinyDialogBox: DialogBox,
    TinyIconAddPicture: iconAddPicture()
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      dialogVisible1: false,
      dialogImageUrl1: '',
      fileList: [
        {
          name: 'fruit',
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/fruit.jpg`,
          status: 'uploading',
          percentage: 50
        },
        {
          name: 'fruit',
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/fruit.jpg`,
          status: 'success'
        },
        {
          name: 'fruit',
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/fruit.jpg`,
          status: 'fail'
        }
      ]
    }
  },
  methods: {
    previewPicture(file) {
      this.dialogImageUrl1 = file.url
      this.dialogVisible1 = true
    }
  }
}
</script>
