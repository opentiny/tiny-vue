<template>
  <tiny-file-upload :action="action" list-type="picture-single" :file-list="fileList"> </tiny-file-upload>
</template>

<script>
import { TinyFileUpload } from '@opentiny/vue'

export default {
  components: {
    TinyFileUpload
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      fileList: [
        {
          name: 'Snipaste_2022-12-02_18-05-51.png',
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`
        }
      ]
    }
  }
}
</script>
