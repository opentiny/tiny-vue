<template>
  <tiny-rate v-model="rate" :void-icon-class="iconclass2"></tiny-rate>
</template>

<script>
import { Rate } from '@opentiny/vue'

export default {
  components: {
    TinyRate: Rate
  },
  data() {
    return {
      rate: 2,
      iconclass2: 'icon-starDisable'
    }
  }
}
</script>
