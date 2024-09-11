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

<script setup>
import { ref } from 'vue'
import { FileUpload as TinyFileUpload, DialogBox as TinyDialogBox } from '@opentiny/vue'
import { iconAddPicture } from '@opentiny/vue-icon'

const action = ref('http://localhost:3000/api/upload')
const dialogVisible1 = ref(false)
const dialogImageUrl1 = ref('')
const fileList = ref([
  {
    name: 'fruit',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/fruit.jpg`,
    status: 'success'
  },
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
])

const TinyIconAddPicture = iconAddPicture()

function previewPicture(file) {
  dialogImageUrl1.value = file.url
  dialogVisible1.value = true
}
</script>
