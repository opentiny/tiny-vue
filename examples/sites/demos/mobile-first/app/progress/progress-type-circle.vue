<template>
  <tiny-progress type="circle" :percentage="50" status="exception" width="180"></tiny-progress>
</template>

<script>
import { Progress } from '@opentiny/vue'

export default {
  components: {
    TinyProgress: Progress
  }
}
</script>
