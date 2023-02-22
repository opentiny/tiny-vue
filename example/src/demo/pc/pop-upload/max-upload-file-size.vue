<template>
  <tiny-pop-upload :action="action" :max-upload-file-size="30000"></tiny-pop-upload>
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
