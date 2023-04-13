<template>
  <div>
    <div class="page__hd">
      <h1 class="page__title">Refresh</h1>
      <p class="page__desc">刷新</p>
    </div>
    <div class="page__content">
      <tiny-pull-refresh :pullUp="pullUpLoad" :hasMore="hasMore" success-text="刷新成功" animation-duration="500" success-duration="500">
        <div :key="item.name" v-for="item in data">{{ item.label }}</div>
      </tiny-pull-refresh>
    </div>
  </div>
</template>

<script>
import { PullRefresh } from '@opentiny/vue'

export default {
  components: {
    TinyPullRefresh: PullRefresh
  },
  data() {
    return {
      data: [{ label: 'hello pull-refresh' }],
      pullUpLoad: {
        handler: () => this.handlerPullUpLoad()
      },
      hasMore: true
    }
  },
  methods: {
    handlerPullUpLoad() {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (this.data.length === 5) {
            this.hasMore = false
          } else {
            this.data.unshift({ label: 'hello pull-refresh up' })
            resolve(this.data)
          }
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
.page__content {
  height: 250px;
}
</style>
