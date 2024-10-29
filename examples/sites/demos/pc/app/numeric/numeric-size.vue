<template>
  <div>
    <tiny-numeric v-model="value" size="medium"></tiny-numeric>
    <br /><br />
    <tiny-numeric v-model="value"></tiny-numeric>
    <br /><br />
    <tiny-numeric v-model="value" size="small"></tiny-numeric>
    <br /><br />
    <tiny-numeric v-model="value" size="mini"></tiny-numeric>
  </div>
</template>

<script lang="ts">
import { TinyNumeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric
  },
  data() {
    return {
      value: 1
    }
  }
}
</script>
