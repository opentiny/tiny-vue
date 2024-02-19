<template>
  <tiny-ip-address v-model="value" disabled></tiny-ip-address>
</template>

<script setup>
import { ref } from 'vue'
import { IpAddress as TinyIpAddress } from '@opentiny/vue'

const value = ref('192.168.0.1')
</script>
