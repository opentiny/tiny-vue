<template>
  <tiny-ip-address v-model="value" :delimiter="IconBoat"></tiny-ip-address>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { IpAddress as TinyIpAddress } from '@opentiny/vue'
import { iconBoat } from '@opentiny/vue-icon'

const value = ref('192.168.0.1')
const IconBoat = iconBoat()
</script>
