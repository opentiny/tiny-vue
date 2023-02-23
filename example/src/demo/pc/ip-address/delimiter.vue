<template>
  <tiny-ip-address v-model="value" :delimiter="IconBoat"></tiny-ip-address>
</template>

<script>
import { IpAddress } from '@opentiny/vue'
import { IconBoat } from '@opentiny/vue-icon'

export default {
  components: {
    TinyIpAddress: IpAddress
  },
  data() {
    return {
      value: '192.168.0.1',
      IconBoat: IconBoat()
    }
  }
}
</script>
