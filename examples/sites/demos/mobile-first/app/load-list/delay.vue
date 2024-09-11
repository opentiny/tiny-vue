<template>
  <div class="h-96 overflow-auto">
    <tiny-load-list
      offset="100"
      delay="200"
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
  </div>
</template>

<script>
import { LoadList } from '@opentiny/vue'

export default {
  components: {
    TinyLoadList: LoadList
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad() {
      // 异步更新数据，setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
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
    }
  }
}
</script>
