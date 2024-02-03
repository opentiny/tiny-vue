<template>
  <tiny-pop-upload size="medium" :action="action" disabled></tiny-pop-upload>
</template>

<script lang="jsx">
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
