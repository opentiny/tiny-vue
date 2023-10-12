<template>
  <tiny-ip-address v-model="value" :delimiter="IconBoat" style="margin-bottom: 8px;"></tiny-ip-address><br>
  <tiny-ip-address v-model="value">
    <template #default>
      <i>-</i>
    </template>
  </tiny-ip-address>
</template>

<script setup>
import { ref } from 'vue'
import { IpAddress as TinyIpAddress } from '@opentiny/vue'
import { iconBoat } from '@opentiny/vue-icon'

const value = ref('192.168.0.1')
const IconBoat = iconBoat()
</script>
