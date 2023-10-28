<template>
  <div><tiny-ip-address size="medium" v-model="value"></tiny-ip-address><br /></div>
</template>

<script setup>
import { ref } from 'vue'
import { IpAddress as TinyIpAddress } from '@opentiny/vue'

const value = ref('192.168.0.1')
</script>
