<template>
  <div class="flex">
    <span class="flex mr-5 text-color-none items-center text-xs">失败可重试:</span>
    <div class="flex-1">
      <div class="flex justify-between mb-2">
        <div class="inline-block h-5 leading-5 text-xs">安装进度</div>
      </div>
      <tiny-progress class="progress" type="line" :percentage="percentage" status="exception"></tiny-progress>
      <div class="flex items-center mt-2">
        <icon-operationfaild-l class="fill-color-error"></icon-operationfaild-l>
        <div class="inline-block ml-2 h-5 leading-5 text-xs">
          安装失败，请<i class="ml-1 align-middle cursor-pointer not-italic text-color-brand" @click="clickHandler"
            >重试</i
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Progress } from '@opentiny/vue'
import { IconOperationfaildL } from '@opentiny/vue-icon'

export default {
  components: {
    TinyProgress: Progress,
    IconOperationfaildL: IconOperationfaildL()
  },
  data() {
    return {
      percentage: 0,
      process: null
    }
  },
  mounted() {
    this.getTimer()
  },
  methods: {
    clickHandler() {
      this.percentage = 0
      location.reload()
    },
    getTimer() {
      this.process = setInterval(() => {
        this.percentage = this.percentage + 5

        if (this.percentage === 50) {
          clearTimeout(this.process)
        }
      }, 300)
    }
  }
}
</script>
