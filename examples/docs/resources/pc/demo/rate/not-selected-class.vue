<template>
  <tiny-rate v-model="rate" :void-icon-class="iconclass2"></tiny-rate>
</template>

<script lang="jsx">
import { Rate } from '@opentiny/vue'

export default {
  components: {
    TinyRate: Rate
  },
  data() {
    return {
      rate: 2,
      iconclass2: 'icon-starActive'
    }
  }
}
</script>
