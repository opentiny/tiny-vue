<template>
  <div>
    <div class="page__hd">
      <h1 class="page__title">FileUpload</h1>
      <p class="page__desc">上传组件</p>
    </div>
    <tiny-file-upload
      ref="upload"
      :action="action"
      :data="requestData"
      file-title="头部标题"
      :upload-icon="true"
      name="name"
    >
      <icon-upload #trigger></icon-upload>
    </tiny-file-upload>
  </div>
</template>

<script lang="jsx">
import { FileUpload } from '@opentiny/vue'
import { iconUpload } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload: FileUpload,
    IconUpload: iconUpload()
  },
  data() {
    return {
      requestData: {
        id: 123
      },
      action: ''
    }
  }
}
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
