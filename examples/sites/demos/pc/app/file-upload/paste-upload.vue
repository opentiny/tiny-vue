<template>
  <tiny-file-upload drag action="#" accept=".png,.jpeg,.jpg" paste-upload :auto-upload="false" :max-name-length="3">
    <icon-fileupload class="tiny-svg-size icon-fileupload"></icon-fileupload>
  </tiny-file-upload>
</template>

<script>
import { TinyFileUpload } from '@opentiny/vue'
import { iconFileupload } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload,
    IconFileupload: iconFileupload()
  }
}
</script>
