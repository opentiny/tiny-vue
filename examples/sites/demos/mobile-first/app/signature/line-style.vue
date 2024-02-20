<template>
  <div class="h-72">
    <tiny-signature :line-width="8" :pen-color="penColor"></tiny-signature>
  </div>
</template>

<script>
import { Signature } from '@opentiny/vue'

export default {
  components: {
    TinySignature: Signature
  },
  data() {
    return {
      penColor: '#2070f380'
    }
  }
}
</script>
