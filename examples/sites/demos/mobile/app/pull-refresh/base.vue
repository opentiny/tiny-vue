<template>
  <div>
    <div class="page__hd">
      <h1 class="page__title">Refresh</h1>
      <p class="page__desc">下拉刷新</p>
    </div>
    <tiny-pull-refresh
      :pullDown="pullDownRefresh"
      success-text="刷新成功"
      animation-duration="500"
      success-duration="500"
    >
      <h3>hello pull-refresh</h3>
    </tiny-pull-refresh>
  </div>
</template>

<script lang="jsx">
import { PullRefresh } from '@opentiny/vue'

export default {
  components: {
    TinyPullRefresh: PullRefresh
  },
  data() {
    return {
      pullDownRefresh: {
        handler: () => this.handlerPullDownRefresh()
      }
    }
  },
  methods: {
    handlerPullDownRefresh() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
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
</style>
