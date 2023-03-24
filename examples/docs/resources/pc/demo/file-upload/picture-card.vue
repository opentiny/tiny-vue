<template>
  <div class="content">
    <tiny-file-upload
      class="upload-demo picture-demo"
      :action="action"
      list-type="picture-card"
      :file-list="fileList"
      @preview="previewPicture"
    >
      <icon-plus class="tiny-svg-size" />
    </tiny-file-upload>
    <tiny-dialog-box v-model:visible="dialogVisible1" width="50%">
      <img style="width: 100%" :src="dialogImageUrl1" alt="Preview Image" />
    </tiny-dialog-box>
  </div>
</template>

<script lang="jsx">
import { FileUpload, DialogBox } from '@opentiny/vue'
import { IconPlus } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload: FileUpload,
    TinyDialogBox: DialogBox,
    IconPlus: IconPlus()
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      dialogVisible1: false,
      dialogImageUrl1: '',
      fileList: [
        {
          name: 'fruit',
          url: 'static/images/fruit.jpg'
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
