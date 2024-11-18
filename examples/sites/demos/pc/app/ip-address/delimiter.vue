<template>
  <tiny-ip-address v-model="value" :delimiter="IconBoat" style="margin-bottom: 8px;"></tiny-ip-address><br>
  <tiny-ip-address v-model="value">
    <template #default>
      <i>-</i>
    </template>
  </tiny-ip-address>
</template>

<script>
import { TinyIpAddress } from '@opentiny/vue'
import { IconBoat } from '@opentiny/vue-icon'

export default {
  components: {
    TinyIpAddress
  },
  data() {
    return {
      value: '192.168.0.1',
      IconBoat: IconBoat()
    }
  }
}
</script>
