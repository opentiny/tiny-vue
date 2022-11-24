<template>
  <tiny-ip-address
    v-model="valueForIPv4"
    @change="changeForIPv4"
  ></tiny-ip-address>
</template>

<script>
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
    changeForIPv4: () => {
      Modal.message({ message: 'IpAddress IPv4 change事件', status: 'info' })
    }
  }
}
</script>
