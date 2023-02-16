<template>
  <tiny-pop-upload
    :action="action"
    upload-name="file"
    with-credentials
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
      action: ''
    }
  }
}
</script>
