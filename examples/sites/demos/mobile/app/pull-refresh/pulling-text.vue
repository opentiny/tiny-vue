<template>
  <div>
    <div class="page__hd">
      <h1 class="page__title">Refresh</h1>
      <p class="page__desc">刷新</p>
    </div>
    <div class="page__content">
      <tiny-pull-refresh
        pull-down-loading-text="刷新中"
        pull-up-loading-text="加载中"
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

<script setup>
import { ref } from 'vue'
import { TinyPullRefresh } from '@opentiny/vue-mobile'

const data = ref([...Array(30)].map((i, index) => {
  return { label: `${index} list data` }
}))
const value = ref(true)
const hasMore = ref(true)

function handlerPullUpLoad() {
  setTimeout(() => {
    value.value = false
    hasMore.value = false
  }, 3000)
}

function handlerPullDownRefresh() {
  setTimeout(() => {
    value.value = false
  }, 3000)
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
