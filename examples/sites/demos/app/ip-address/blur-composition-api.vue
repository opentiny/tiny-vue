<template>
  <tiny-ip-address v-model="valueForIPv4" @blur="blurForIPv4"></tiny-ip-address>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { IpAddress as TinyIpAddress, Modal } from '@opentiny/vue'

const valueForIPv4 = ref('192.168.0.1')

function blurForIPv4() {
  Modal.message({ message: 'IpAddress IPv4 blur事件', status: 'info' })
}
</script>
