<template>
  <tiny-rate v-model="rate" disabled :disabled-void-icon-class="readiconclass1"></tiny-rate>
</template>

<script>
import { Rate } from '@opentiny/vue'

export default {
  components: {
    TinyRate: Rate
  },
  data() {
    return {
      rate: 3,
      readiconclass1: 'icon-starDisable'
    }
  }
}
</script>
