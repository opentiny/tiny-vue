<template>
  <div>
    <div class="page__hd">
      <h1 class="page__title">Refresh</h1>
      <p class="page__desc">刷新</p>
    </div>
    <div class="page__content">
      <tiny-pull-refresh
        animation-duration="500"
        v-model="value"
        :has-more="hasMore"
        @pullDown="handlerPullDownRefresh"
        @pullUp="handlerPullUpLoad"
      >
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
      data: [...Array(30)].map((i, index) => {
        return { label: `${index + 1} list data` }
      }),
      value: true,
      hasMore: true
    }
  },
  methods: {
    handlerPullUpLoad() {
      console.log('pullUp action')

      let self = this
      setTimeout(() => {
        const length = self.data.length
        for (let i = 1; i <= 10; i++) {
          self.data.push({ label: `${i + length} list data` })
        }
        self.value = false
      }, 3000)
    },
    handlerPullDownRefresh() {
      console.log('pullDown action')
      let self = this
      setTimeout(() => {
        self.value = false
      }, 3000)
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
  height: 350px;
}
</style>
