<template>
  <tiny-pop-upload :action="action" :headers="headers"></tiny-pop-upload>
</template>

<script>
import { PopUpload } from '@opentiny/vue'

export default {
  components: {
    TinyPopUpload: PopUpload
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      headers: {
        'Accept-Language': 'en,zh',
        Authorization: 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=='
      }
    }
  }
}
</script>
