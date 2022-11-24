<template>
  <div>
    <tiny-ip-address size="medium" v-model="value"></tiny-ip-address><br />
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
      value: '192.168.0.1'
    }
  }
}
</script>
