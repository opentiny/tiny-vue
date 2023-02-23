<template>
  <tiny-file-upload class="upload-demo" :action="action" @sucess="handleAvatarSuccess" :show-file-list="false">
    <img v-if="imageUrl" :src="imageUrl" class="upload-avatar-demo" />
    <icon-plus class="tiny-svg-size" />
  </tiny-file-upload>
</template>

<script>
import { FileUpload } from '@opentiny/vue'
import { IconPlus } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload: FileUpload,
    IconPlus: IconPlus()
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      imageUrl: ''
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    }
  }
}
</script>

<style scoped>
.upload-demo .tiny-upload {
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
