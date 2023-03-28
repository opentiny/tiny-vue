<template>
  <tiny-ip-address type="IPv6" v-model="value"></tiny-ip-address>
</template>

<script lang="jsx">
import { IpAddress } from '@opentiny/vue'

export default {
  components: {
    TinyIpAddress: IpAddress
  },
  data() {
    return {
      value: '3FFE:FFFF:7654:FEDA:1245'
    }
  }
}
</script>
