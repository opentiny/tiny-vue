<template>
  <div>
    <tiny-edoc upload-flag="one"></tiny-edoc>
  </div>
</template>

<script>
import { Edoc } from '@opentiny/vue'

export default {
  components: {
    TinyEdoc: Edoc
  },
  data() {
    return {}
  }
}
</script>
