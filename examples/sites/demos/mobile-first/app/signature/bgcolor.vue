<template>
  <div class="h-72">
    <tiny-signature :background-color="backgroundColor"></tiny-signature>
  </div>
</template>

<script>
import { TinySignature } from '@opentiny/vue'

export default {
  components: {
    TinySignature
  },
  data() {
    return {
      backgroundColor: '#2070f380'
    }
  }
}
</script>
