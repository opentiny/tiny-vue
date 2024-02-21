<template>
  <tiny-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <template #normal>
      <span>normal...</span>
    </template>
    <template #pulling>
      <span>pulling...</span>
    </template>
    <template #loosing>
      <span>loosing...</span>
    </template>
    <template #loading>
      <span>loading...</span>
    </template>
    <template #success>
      <span>success...</span>
    </template>
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
