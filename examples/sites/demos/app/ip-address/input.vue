<template>
  <tiny-ip-address v-model="valueForIPv4" @input="inputForIPv4"></tiny-ip-address>
</template>

<script lang="jsx">
import { IpAddress, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyIpAddress: IpAddress
  },
  data() {
    return {
      valueForIPv4: '192.168.0.1'
    }
  },
  methods: {
    inputForIPv4: () => {
      Modal.message({ message: 'IpAddress IPv4 input事件', status: 'info' })
    }
  }
}
</script>
