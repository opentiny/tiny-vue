<template>
  <div class="content">
    <tiny-file-upload
      :action="action"
      ref="pictureUpload"
      class="upload-demo picture-demo"
      list-type="picture-card"
      :auto-upload="false"
    >
      <template #default>
        <icon-plus class="tiny-svg-size" />
      </template>
      <template #file="{ file }">
        <div>
          <img class="tiny-upload-list__item-thumbnail" :src="file.url" alt="" />
          <span class="tiny-upload-list__item-actions">
            <span class="tiny-upload-list__item-preview" @click="previewPicture(file)">
              <icon-view class="tiny-svg-size" />
            </span>
            <span v-if="!disabled" class="tiny-upload-list__item-delete" @click="downloadPicture(file)">
              <icon-download class="tiny-svg-size" />
            </span>
            <span v-if="!disabled" class="tiny-upload-list__item-delete" @click="removePicture(file)">
              <icon-del class="tiny-svg-size" />
            </span>
          </span>
        </div>
      </template>
    </tiny-file-upload>
    <tiny-dialog-box v-model:visible="dialogVisible" width="50%">
      <img style="width: 100%" :src="dialogImageUrl" alt="Preview Image" />
    </tiny-dialog-box>
  </div>
</template>

<script lang="jsx">
import { FileUpload, DialogBox } from '@opentiny/vue'
import { IconPlus, IconView, IconDownload, IconDel } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload: FileUpload,
    TinyDialogBox: DialogBox,
    IconPlus: IconPlus(),
    IconView: IconView(),
    IconDownload: IconDownload(),
    IconDel: IconDel()
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      dialogVisible: false,
      dialogImageUrl: '',
      disabled: false
    }
  },
  methods: {
    previewPicture(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    downloadPicture(file) {
      this.$refs.pictureUpload.downloadFile(file)
    },
    removePicture(file) {
      this.$refs.pictureUpload.handleRemove(file)
    }
  }
}
</script>
