<template>
  <div class="flex">
    <span class="flex mr-5 text-color-none items-center text-xs">成功:</span>
    <div class="flex-1">
      <div class="flex justify-between mb-2">
        <div class="inline-block h-5 leading-5 text-xs">安装进度</div>
      </div>
      <tiny-progress class="progress" type="line" :percentage="percentage" status="success"></tiny-progress>
      <div class="flex items-center mt-2">
        <icon-successful class="fill-color-success"></icon-successful>
        <div class="inline-block ml-2 h-5 leading-5 text-color-success text-xs">安装成功</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Progress } from '@opentiny/vue'
import { IconSuccessful } from '@opentiny/vue-icon'

export default {
  components: {
    TinyProgress: Progress,
    IconSuccessful: IconSuccessful()
  },
  data() {
    return {
      percentage: 100
    }
  }
}
</script>
