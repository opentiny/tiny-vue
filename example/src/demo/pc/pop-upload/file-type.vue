<template>
  <tiny-pop-upload
    :action="action"
    accept="image/*"
    :upload-file-type="['.png', '.jpg']"
  ></tiny-pop-upload>
</template>

<script>
import { PopUpload } from '@opentiny/vue'

export default {
  components: {
    TinyPopUpload: PopUpload
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload'
    }
  }
}
</script>
