<template>
  <div>
    <div class="content">
      <div class="page__hd">
        <h1 class="page__title">Progress</h1>
        <p class="page__desc">进度条</p>
      </div>
      <div class="pad">
        <tiny-progress
          class="progress"
          :percentage="50"
          :stroke-width="2"
        ></tiny-progress>
      </div>
    </div>
  </div>
</template>

<script>
import { Progress } from '@opentiny/vue'

export default {
  components: {
    TinyProgress: Progress
  },
  data() {
    return {
      percentage: 20
    }
  }
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
