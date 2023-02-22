<template>
  <div>
    <tiny-edoc upload-flag="one" :direct-download="true" btn-text="文件上传"></tiny-edoc>
  </div>
</template>

<script>
import { Edoc } from '@opentiny/vue'

export default {
  components: {
    TinyEdoc: Edoc
  }
}
</script>
