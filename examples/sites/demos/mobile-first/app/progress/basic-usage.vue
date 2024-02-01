<template>
  <div>
    <div class="content">
      <tiny-progress :percentage="50"></tiny-progress>
    </div>
  </div>
</template>

<script>
import { Progress } from '@opentiny/vue'

export default {
  components: {
    TinyProgress: Progress
  },
  data() {
    return {
      percentage: 20
    }
  }
}
</script>
