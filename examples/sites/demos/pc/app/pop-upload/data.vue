<template>
  <tiny-pop-upload :action="action" :data="requestData"></tiny-pop-upload>
</template>

<script lang="jsx">
import { PopUpload } from '@opentiny/vue'

export default {
  components: {
    TinyPopUpload: PopUpload
  },
  data() {
    return {
      requestData: {
        id: 123
      },
      action: 'http://localhost:3000/api/upload'
    }
  }
}
</script>
