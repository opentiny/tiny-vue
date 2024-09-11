<template>
  <div class="h-96 overflow-auto">
    <tiny-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <tiny-load-list
        offset="100"
        :loading="loading"
        :finished="finished"
        @update:loading="(e) => (loading = e)"
        @load="onLoad"
      >
        <div
          v-for="item in list"
          :key="item"
          class="mx-4 my-2.5 h-8 leading-8 text-center bg-color-bg-2 hover:bg-color-bg-3 select-none"
        >
          {{ item }}
        </div>
      </tiny-load-list>
    </tiny-pull-refresh>
  </div>
</template>

<script>
import { LoadList, PullRefresh } from '@opentiny/vue'

export default {
  components: {
    TinyLoadList: LoadList,
    TinyPullRefresh: PullRefresh
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  methods: {
    onLoad() {
      // 异步更新数据，setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        // 下拉刷新状态清理
        if (this.refreshing) {
          this.list = []
          this.refreshing = false
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 30) {
          this.finished = true
        }
      }, 1000)
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false

      // 重新加载数据，将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    }
  }
}
</script>
