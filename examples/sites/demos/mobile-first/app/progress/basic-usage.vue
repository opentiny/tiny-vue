<template>
  <div>
    <div class="content">
      <tiny-progress :percentage="50"></tiny-progress>
    </div>
  </div>
</template>

<script>
import { TinyProgress } from '@opentiny/vue'

export default {
  components: {
    TinyProgress
  },
  data() {
    return {
      percentage: 20
    }
  }
}
</script>
