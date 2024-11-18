<template>
  <tiny-ip-address v-model="value" disabled></tiny-ip-address>
</template>

<script>
import { TinyIpAddress } from '@opentiny/vue'

export default {
  components: {
    TinyIpAddress
  },
  data() {
    return {
      value: '192.168.0.1'
    }
  }
}
</script>
