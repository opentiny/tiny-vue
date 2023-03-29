<template>
  <tiny-ip-address v-model="valueForIPv4" @focus="focusForIPv4"></tiny-ip-address>
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
    focusForIPv4: () => {
      Modal.message({ message: 'IpAddress IPv4 focus事件', status: 'info' })
    }
  }
}
</script>
