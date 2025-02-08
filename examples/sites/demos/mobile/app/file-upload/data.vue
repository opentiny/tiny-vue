<template>
  <div>
    <div class="page__hd">
      <h1 class="page__title">FileUpload</h1>
      <p class="page__desc">上传组件</p>
    </div>
    <tiny-file-upload
      ref="uploadRef"
      :action="action"
      :data="requestData"
      file-title="头部标题"
      :upload-icon="true"
      name="name"
    >
      <tiny-icon-upload #trigger></tiny-icon-upload>
    </tiny-file-upload>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyFileUpload } from '@opentiny/vue-mobile'
import { iconUpload } from '@opentiny/vue-icon'

const requestData = ref({
  id: 123
})
const action = ref('')
const TinyIconUpload = iconUpload()
</script>

<style scoped>
.page__hd {
  padding: 40px;
}
.page__title {
  font-weight: 400;
  font-size: 21px;
  text-align: left;
}
.page__desc {
  margin-top: 5px;
  color: #888;
  font-size: 14px;
  text-align: left;
}
</style>
