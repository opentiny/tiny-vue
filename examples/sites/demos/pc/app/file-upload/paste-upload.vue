<template>
  <tiny-file-upload drag action="#" accept=".png,.jpeg,.jpg" paste-upload :auto-upload="false" :max-name-length="3">
    <icon-fileupload class="tiny-svg-size icon-fileupload"></icon-fileupload>
  </tiny-file-upload>
</template>

<script lang="jsx">
import { FileUpload } from '@opentiny/vue'
import { iconFileupload } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload: FileUpload,
    IconFileupload: iconFileupload()
  }
}
</script>
