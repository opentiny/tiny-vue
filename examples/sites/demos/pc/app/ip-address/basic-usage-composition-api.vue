<template>
  <tiny-ip-address v-model="value1" style="margin-bottom: 8px;"></tiny-ip-address><br>
  <tiny-ip-address type="IPv6" v-model="value2"></tiny-ip-address>
</template>

<script setup>
import { ref } from 'vue'
import { IpAddress as TinyIpAddress } from '@opentiny/vue'

const value1 = ref('192.168.0.1')
const value2 = ref('fe80::204:61ff:fe9d:f156')
</script>
