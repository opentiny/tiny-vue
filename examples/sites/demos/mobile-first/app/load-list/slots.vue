<template>
  <div class="h-96 overflow-auto">
    <tiny-load-list
      offset="100"
      :loading="loading"
      :finished="finished"
      :error="error"
      @update:loading="(e) => (loading = e)"
      @update:error="(e) => (error = e)"
      @load="onLoad"
    >
      <!-- loading 插槽 -->
      <template #loading>
        <div v-loading="loading" class="w-full h-28"></div>
      </template>
      <!-- finished 插槽 -->
      <template #finished>
        <div class="w-full h-28 bg-color-bg-2 flex justify-center items-center">没有更多数据了</div>
      </template>
      <!-- error 插槽 -->
      <template #error>
        <div class="w-full h-28 bg-color-error text-white flex justify-center items-center">请求失败，点击重新加载</div>
      </template>
      <!-- default 插槽 -->
      <template #default>
        <div
          v-for="item in list"
          :key="item"
          class="mx-4 my-2.5 h-8 leading-8 text-center bg-color-bg-2 hover:bg-color-bg-3 select-none"
        >
          {{ item }}
        </div>
      </template>
    </tiny-load-list>
  </div>
</template>

<script>
import { LoadList, Loading } from '@opentiny/vue'

let index = 0
const fetchSomething = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (index === 0) {
        reject(index++)
      } else {
        const list = []
        for (let i = 0; i < 10; i++) {
          list.push(index++)
        }
        resolve(list)
      }
    }, 1000)
  })
}

export default {
  components: {
    TinyLoadList: LoadList
  },
  directives: {
    loading: Loading.directive
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      error: false
    }
  },
  methods: {
    onLoad() {
      fetchSomething()
        .then((list) => {
          this.list.push(...list)

          // 加载状态结束
          this.loading = false

          // 数据全部加载完成
          if (this.list.length >= 30) {
            this.finished = true
          }
        })
        .catch(() => {
          // 加载状态结束
          this.loading = false

          // 设置出错状态
          this.error = true
        })
    }
  }
}
</script>
