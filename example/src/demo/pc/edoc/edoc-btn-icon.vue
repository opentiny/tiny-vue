<template>
  <div>
    <tiny-edoc upload-flag="one" :direct-download="true" :btn-icon="IconFileupload"></tiny-edoc>
  </div>
</template>

<script>
import { Edoc } from '@opentiny/vue'
import { IconFileupload } from '@opentiny/vue-icon'

export default {
  components: {
    TinyEdoc: Edoc
  },
  data() {
    return {
      IconFileupload: IconFileupload()
    }
  }
}
</script>
