<template>
  <tiny-pull-refresh :pullUp="pullUpLoad" :pullDown="pullDownRefresh" success-text="运气真好！！！" failed-text="哦哦，出错了!">
    <h3>hello pull-refresh</h3>
  </tiny-pull-refresh>
</template>

<script>
import { PullRefresh } from '@opentiny/vue'

export default {
  components: {
    TinyPullRefresh: PullRefresh
  },
  data() {
    return {
      pullUpLoad: {
        handler: () => this.handlerPullUpLoad()
      },
      pullDownRefresh: {
        handler: () => this.handlerPullDownRefresh()
      }
    }
  },
  methods: {
    handlerPullUpLoad() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error())
        }, 1000)
      })
    },
    handlerPullDownRefresh() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    }
  }
}
</script>
