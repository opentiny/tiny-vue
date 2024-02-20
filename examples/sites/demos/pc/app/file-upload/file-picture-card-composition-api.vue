<template>
  <div class="content">
    <tiny-file-upload
      :action="action"
      ref="pictureUploadRef"
      class="upload-demo picture-demo"
      list-type="picture-card"
      :auto-upload="false"
    >
      <template #default>
        <tiny-icon-plus class="tiny-svg-size" />
      </template>
      <template #file="{ file }">
        <div>
          <img class="tiny-upload-list__item-thumbnail" :src="file.url" alt="" />
          <span class="tiny-upload-list__item-actions">
            <span class="tiny-upload-list__item-preview" @click="previewPicture(file)">
              <tiny-icon-view class="tiny-svg-size" />
            </span>
            <span v-if="!disabled" class="tiny-upload-list__item-delete" @click="downloadPicture(file)">
              <tiny-icon-download class="tiny-svg-size" />
            </span>
            <span v-if="!disabled" class="tiny-upload-list__item-delete" @click="removePicture(file)">
              <tiny-icon-del class="tiny-svg-size" />
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

<script setup>
import { ref } from 'vue'
import { FileUpload as TinyFileUpload, DialogBox as TinyDialogBox } from '@opentiny/vue'
import { iconPlus, iconView, iconDownload, iconDel } from '@opentiny/vue-icon'

const action = ref('http://localhost:3000/api/upload')
const dialogVisible = ref(false)
const dialogImageUrl = ref('')
const disabled = ref(false)
const pictureUploadRef = ref()

const TinyIconPlus = iconPlus()
const TinyIconView = iconView()
const TinyIconDownload = iconDownload()
const TinyIconDel = iconDel()

function previewPicture(file) {
  dialogImageUrl.value = file.url
  dialogVisible.value = true
}

function downloadPicture(file) {
  pictureUploadRef.value.downloadFile(file)
}

function removePicture(file) {
  pictureUploadRef.value.handleRemove(file)
}
</script>
