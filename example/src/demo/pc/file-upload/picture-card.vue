<template>
  <div class="content">
    <tiny-file-upload
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
</template>

<script>
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
      dialogImageUrl1: ''
    }
  }
}
</script>
