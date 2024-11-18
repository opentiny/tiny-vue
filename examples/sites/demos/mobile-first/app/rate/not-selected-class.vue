<template>
  <tiny-rate v-model="rate" :void-icon-class="iconclass2"></tiny-rate>
</template>

<script>
import { TinyRate } from '@opentiny/vue'

export default {
  components: {
    TinyRate
  },
  data() {
    return {
      rate: 2,
      iconclass2: 'icon-starActive'
    }
  }
}
</script>
