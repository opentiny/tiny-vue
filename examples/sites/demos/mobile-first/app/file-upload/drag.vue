<template>
  <tiny-file-upload :action="action" list-type="drag-single"> </tiny-file-upload>
</template>

<script>
import { TinyFileUpload } from '@opentiny/vue'

export default {
  components: {
    TinyFileUpload
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload'
    }
  }
}
</script>
