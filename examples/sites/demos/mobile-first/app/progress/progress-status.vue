<template>
  <div>
    <tiny-progress class="progress" :percentage="100" status="success"></tiny-progress>
    <br />
    <tiny-progress class="progress" :percentage="80" status="warning"></tiny-progress>
    <br />
    <tiny-progress class="progress" :percentage="50" status="exception"></tiny-progress>
  </div>
</template>

<script>
import { Progress } from '@opentiny/vue'

export default {
  components: {
    TinyProgress: Progress
  }
}
</script>
