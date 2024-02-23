<template>
  <tiny-file-upload :action="action" list-type="picture-card" :file-list="fileList" @re-upload="handleReUpload">
  </tiny-file-upload>
</template>

<script>
import { FileUpload, Button } from '@opentiny/vue'

export default {
  components: {
    TinyFileUpload: FileUpload,
    TinyButton: Button
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      fileList: [
        {
          name: 'test3',
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`,
          status: 'fail'
        }
      ]
    }
  },
  methods: {
    handleReUpload() {
      console.log(...arguments)
    }
  }
}
</script>
