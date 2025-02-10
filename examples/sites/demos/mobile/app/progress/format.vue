<template>
  <div>
    <div class="content">
      <div class="page__hd">
        <h1 class="page__title">Progress</h1>
        <p class="page__desc">进度条</p>
      </div>
      <div class="pad">
        <tiny-progress class="progress" :percentage="50" :stroke-width="2" :format="formatText"></tiny-progress>
      </div>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyProgress } from '@opentiny/vue-mobile'

const percentage = ref(20)

function formatText() {
  return `自定义内容 ${percentage.value}%`
}
</script>

<style scoped>
.page__hd {
  padding: 40px;
}
.pad {
  padding: 15px;
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
