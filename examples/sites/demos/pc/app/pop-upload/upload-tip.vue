<template>
  <tiny-pop-upload
    :action="action"
    accept="image/*"
    :limit="limit"
    :upload-file-type="fileType"
    :max-upload-file-size="fileSize"
    upload-button-text="添加文件"
  >
    <template #uploadTip>
      <tiny-alert type="info">
        <template #description>
          <p class="tips-item">1.上传数据应不超过{{ limit }}条，超过数量不允许上传；</p>
          <p class="tips-item">2.相同数据不会重复发</p>
          <p class="tips-item">
            3.上传文件限{{ fileType.join(',') }}格式，文件不超过{{ fileSize / 1024 }}KB，点击<tiny-link
              >下载模板</tiny-link
            >
          </p>
        </template>
      </tiny-alert>
    </template>
  </tiny-pop-upload>
</template>

<script lang="jsx">
import { PopUpload, Alert, Link } from '@opentiny/vue'

export default {
  components: {
    TinyPopUpload: PopUpload,
    TinyAlert: Alert,
    TinyLink: Link
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      limit: 500,
      fileSize: 512000,
      fileType: ['.png', '.jpg']
    }
  }
}
</script>

<style scoped>
.tips-item {
  margin: 0;
}
</style>
