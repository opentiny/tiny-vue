<template>
  <tiny-ip-address v-model="value"></tiny-ip-address>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { IpAddress as TinyIpAddress } from '@opentiny/vue'

const value = ref('192.168.0.1')
</script>
