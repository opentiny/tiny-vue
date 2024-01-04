<template>
  <tiny-pop-upload :action="action" upload-name="inputName" :data="requestData"></tiny-pop-upload>
</template>

<script lang="jsx">
import { PopUpload } from '@opentiny/vue'

export default {
  components: {
    TinyPopUpload: PopUpload
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      requestData: {
        id: 123
      }
    }
  }
}
</script>
