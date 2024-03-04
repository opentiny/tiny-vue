<template>
  <div>
    <div class="single">
      <tiny-file-upload
        file-title="单张图片上传"
        :file-list="fileList1"
        class="upload-demo picture-demo"
        :action="action"
        list-type="picture-card"
      >
        <icon-plus class="tiny-svg-size" />
      </tiny-file-upload>
      <tiny-dialog-box v-model="dialogVisible1">
        <img width="100%" :src="dialogImageUrl1" alt="" />
      </tiny-dialog-box>
    </div>
    <div class="multi">
      <tiny-file-upload
        file-title="多张图片上传"
        :file-list="fileList2"
        :multiple="true"
        class="upload-demo picture-demo"
        :action="action"
        list-type="picture-card"
      >
        <icon-plus class="tiny-svg-size" />
      </tiny-file-upload>
      <tiny-dialog-box v-model="dialogVisible1">
        <img width="100%" :src="dialogImageUrl1" alt="" />
      </tiny-dialog-box>
    </div>
  </div>
</template>

<script lang="jsx">
import { FileUpload, DialogBox } from '@opentiny/vue'
import { iconPlus } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload: FileUpload,
    TinyDialogBox: DialogBox,
    IconPlus: iconPlus()
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      dialogVisible1: false,
      dialogImageUrl1: '',
      fileList1: [
        {
          name: 'test1',
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`
        },
        {
          name: 'test2',
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ry.png`
        },
        {
          name: 'test1',
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`
        },
        {
          name: 'test2',
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ry.png`
        },
        {
          name: 'test1',
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`
        },
        {
          name: 'test2',
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ry.png`
        }
      ],
      fileList2: [
        {
          name: 'test1',
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`
        },
        {
          name: 'test2',
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ry.png`
        }
      ]
    }
  }
}
</script>

<style scoped>
.multi {
  margin-top: 50px;
}
</style>
