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
      value: 'fe80::204:61ff:fe9d:f156'
    }
  }
}
</script>
