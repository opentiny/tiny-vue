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

<script setup lang="jsx">
import { ref } from 'vue'
import { PopUpload as TinyPopUpload, Alert as TinyAlert, Link as TinyLink } from '@opentiny/vue'

const action = ref('http://localhost:3000/api/upload')
const limit = ref(500)
const fileSize = ref(512000)
const fileType = ref(['.png', '.jpg'])
</script>

<style scoped>
.tips-item {
  margin: 0;
}
</style>
