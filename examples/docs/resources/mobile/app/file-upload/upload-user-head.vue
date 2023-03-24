<template>
  <tiny-file-upload class="upload-demo" :action="action" @sucess="handleAvatarSuccess" :show-file-list="false" :header-show="false">
    <img v-if="imageUrl" :src="imageUrl" class="upload-avatar-demo" />
    <icon-plus class="tiny-svg-size" />
  </tiny-file-upload>
</template>

<script lang="jsx">
import { FileUpload } from '@opentiny/vue'
import { iconPlus } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload: FileUpload,
    IconPlus: iconPlus()
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

<style>
.upload-demo .tiny-mobile-file-upload__wrap .tiny-upload {
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background: #fafafa;
  border: 1px dashed #d9d9d9;
  border-radius: 2px;
  position: relative;
  overflow: hidden;
}
</style>
