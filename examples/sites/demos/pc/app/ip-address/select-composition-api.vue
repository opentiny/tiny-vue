<template>
  <tiny-ip-address v-model="valueForIPv4" @select="selectForIPv4"></tiny-ip-address>
</template>

<script setup>
import { ref } from 'vue'
import { IpAddress as TinyIpAddress, Modal } from '@opentiny/vue'

const valueForIPv4 = ref('192.168.0.1')

function selectForIPv4() {
  Modal.message({ message: 'IpAddress IPv4 select事件', status: 'info' })
}
</script>
