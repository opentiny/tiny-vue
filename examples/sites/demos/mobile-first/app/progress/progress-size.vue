<template>
  <div>
    <tiny-progress size="small" :percentage="100"></tiny-progress>
    <br />
    <tiny-progress size="medium" :percentage="80"></tiny-progress>
    <br />
    <tiny-progress size="large" :percentage="50"></tiny-progress>
    <div class="mt-10 h-48 flex items-center justify-around">
      <tiny-progress size="small" :percentage="100" type="circle" info="small"></tiny-progress>
      <tiny-progress size="medium" :percentage="80" type="circle" info="medium"></tiny-progress>
      <tiny-progress size="large" :percentage="50" type="circle" info="large"></tiny-progress>
    </div>
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
