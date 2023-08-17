<template>
  <tiny-ip-address type="IPv6" v-model="value"></tiny-ip-address>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { IpAddress as TinyIpAddress } from '@opentiny/vue'

const value = ref('3FFE:FFFF:7654:FEDA:1245')
</script>
