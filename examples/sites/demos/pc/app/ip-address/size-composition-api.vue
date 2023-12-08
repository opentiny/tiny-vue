<template>
  <div>
    <tiny-ip-address size="medium" v-model="value"></tiny-ip-address>
    <tiny-ip-address size="small" v-model="value"></tiny-ip-address>
    <tiny-ip-address v-model="value"></tiny-ip-address>
    <tiny-ip-address size="mini" v-model="value"></tiny-ip-address>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { IpAddress as TinyIpAddress } from '@opentiny/vue'

const value = ref('192.168.0.1')
</script>

<style scoped>
.tiny-ip-address {
  display: block;
  margin-bottom: 20px;
}
</style>
