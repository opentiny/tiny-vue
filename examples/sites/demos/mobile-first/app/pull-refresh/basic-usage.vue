<template>
  <tiny-pull-refresh
    style="height: 100%; overflow: auto"
    v-model="isLoading"
    @refresh="onRefresh"
    success-text="刷新成功"
    animation-duration="500"
    success-duration="2000"
    :disabled="false"
  >
    <h3 v-for="index in 30" :key="index">hello pull-refresh</h3>
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
      isLoading: false
    }
  },
  methods: {
    onRefresh() {
      console.log('refresh')
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
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
