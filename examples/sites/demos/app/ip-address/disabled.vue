<template>
  <tiny-ip-address v-model="value" disabled></tiny-ip-address>
</template>

<script lang="jsx">
import { IpAddress } from '@opentiny/vue'

export default {
  components: {
    TinyIpAddress: IpAddress
  },
  data() {
    return {
      value: '192.168.0.1'
    }
  }
}
</script>
