<template>
  <div>
    <tiny-ip-address v-model="value1" style="margin-bottom: 8px"></tiny-ip-address><br />
    <tiny-ip-address type="IPv6" v-model="value2"></tiny-ip-address>
  </div>
</template>

<script>
import { IpAddress } from '@opentiny/vue'

export default {
  components: {
    TinyIpAddress: IpAddress
  },
  data() {
    return {
      value1: '192.168.0.1',
      value2: 'fe80::204:61ff:fe9d:f156'
    }
  }
}
</script>
