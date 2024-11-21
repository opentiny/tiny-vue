<template>
  <tiny-pop-upload :action="action" :headers="headers" with-credentials></tiny-pop-upload>
</template>

<script lang="jsx">
import { TinyPopUpload } from '@opentiny/vue'

export default {
  components: {
    TinyPopUpload
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
