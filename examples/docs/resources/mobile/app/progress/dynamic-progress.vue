<template>
  <div>
    <div class="content">
      <div class="page__hd">
        <h1 class="page__title">Progress</h1>
        <p class="page__desc">进度条</p>
      </div>
      <tiny-progress class="progress" :percentage="percentage"></tiny-progress>
      <tiny-button type="primary" @click="run">{{ action }}</tiny-button>
    </div>
  </div>
</template>

<script lang="jsx">
import { Progress, Button } from '@opentiny/vue'
// import { setInterval, clearInterval } from 'timers'

export default {
  components: {
    TinyProgress: Progress,
    TinyButton: Button
  },
  data() {
    return {
      percentage: 0,
      action: '上传',
      timeId: null
    }
  },
  methods: {
    run() {
      const that = this
      if (this.timeId) {
        clearInterval(this.timeId)
        this.action = '上传'
        this.timeId = null
      } else {
        this.action = '暂停'
        this.timeId = setInterval(() => {
          if (that.percentage < 100) {
            that.percentage += 10
          } else {
            that.percentage = 0
          }
        }, 500)
      }
    }
  }
}
</script>

<style scoped>
.page__hd {
  padding: 40px;
}
.page__title {
  font-weight: 400;
  font-size: 21px;
  text-align: left;
}
.page__desc {
  margin-top: 5px;
  color: #888;
  font-size: 14px;
  text-align: left;
}
.progress {
  margin-bottom: 20px;
}
.circle-progress {
  margin-right: 20px;
}
</style>
