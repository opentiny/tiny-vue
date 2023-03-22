<template>
  <tiny-pull-refresh :pullDown="pullDownRefresh" :pullUp="pullUpLoad">
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
      pullDownRefresh: {
        pullingDownText: '你敢在下拉一点么？',
        handler: () => this.handlerPullDownRefresh()
      },
      pullUpLoad: {
        pullingUpText: '你敢在上拉一点么？',
        handler: () => this.handlerPullUpLoad()
      },
    }
  },
  methods: {
    handlerPullDownRefresh() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    },
    handlerPullUpLoad() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    }
  }
}
</script>
