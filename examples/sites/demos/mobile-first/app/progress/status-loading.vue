<template>
  <div class="flex">
    <span class="flex mr-5 text-color-none items-center text-xs">上传中:</span>
    <div class="flex-1">
      <div class="flex justify-between mb-2">
        <div class="inline-block h-5 leading-5 text-xs">安装进度</div>
        <div class="flex text-color-brand mr-10 cursor-pointer text-xs">
          <div class="inline-block h-5 mr-2" @click="clickHandler1">暂停</div>
          <div class="inline-block h-5" @click="clickHandler2">取消</div>
        </div>
      </div>
      <tiny-progress class="progress" type="line" :percentage="percentage"></tiny-progress>
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
      percentage: 0,
      process: null
    }
  },
  mounted() {
    this.getTimer()
  },
  methods: {
    clickHandler1() {
      clearTimeout(this.process)
    },
    clickHandler2() {
      clearTimeout(this.process)
      this.percentage = 0
    },
    getTimer() {
      this.process = setInterval(() => {
        this.percentage = this.percentage + 5

        if (this.percentage === 100) {
          clearTimeout(this.process)
        }
      }, 300)
    }
  }
}
</script>
