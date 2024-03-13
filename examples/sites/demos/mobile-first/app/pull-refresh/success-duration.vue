<template>
  <tiny-pull-refresh
    ref="refresh"
    v-model="isLoading"
    @refresh="onRefresh"
    success-duration="3000"
    success-text="下拉加载完成"
  >
    <h3 v-for="index in 5" :key="index">hello pull-refresh</h3>
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
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    }
  }
}
</script>
