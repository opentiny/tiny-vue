<template>
  <tiny-file-upload class="upload-demo" :action="action" @success="handleAvatarSuccess" :show-file-list="false">
    <img v-if="imageUrl" :src="imageUrl" class="upload-avatar-demo" />
    <tiny-icon-plus class="tiny-svg-size" />
  </tiny-file-upload>
</template>

<script setup>
import { ref } from 'vue'
import { FileUpload as TinyFileUpload } from '@opentiny/vue'
import { iconPlus } from '@opentiny/vue-icon'

const action = ref('http://localhost:3000/api/upload')
const imageUrl = ref('')

const TinyIconPlus = iconPlus()

function handleAvatarSuccess(res, file) {
  imageUrl.value = URL.createObjectURL(file.raw)
}
</script>

<style scoped>
.upload-demo :deep(.tiny-upload) {
  width: 87px;
  height: 87px;
  line-height: 87px;
  text-align: center;
  background: #fafafa;
  border: 1px dashed #d9d9d9;
  border-radius: 2px;
  position: relative;
  overflow: hidden;
}

.upload-demo .tiny-upload .tiny-svg {
  font-size: 16px;
  fill: #bfbfbf;
}
</style>
