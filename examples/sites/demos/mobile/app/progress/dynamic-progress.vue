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

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyProgress, TinyButton } from '@opentiny/vue-mobile'

// import { setInterval, clearInterval } from 'timers'

const percentage = ref(0)
const action = ref('上传')
const timeId = ref(null)

function run() {
  const that = this
  if (timeId.value) {
    clearInterval(timeId.value)
    action.value = '上传'
    timeId.value = null
  } else {
    action.value = '暂停'
    timeId.value = setInterval(() => {
      if (that.percentage < 100) {
        that.percentage += 10
      } else {
        that.percentage = 0
      }
    }, 500)
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
