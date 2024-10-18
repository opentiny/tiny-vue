<template>
  <div class="h-96 overflow-auto">
    <tiny-load-list
      offset="100"
      :loading="loading"
      :error="error"
      :error-text="errorText"
      @update:loading="(e) => (loading = e)"
      @update:error="(e) => (error = e)"
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

const fetchSomething = () => Promise.reject('请求失败，点击重新加载')

export default {
  components: {
    TinyLoadList: LoadList
  },
  data() {
    return {
      list: [],
      loading: false,
      error: false,
      errorText: ''
    }
  },
  methods: {
    onLoad() {
      fetchSomething().catch((e) => {
        // 加载状态结束
        this.loading = false

        // 设置出错状态
        this.error = true
        this.errorText = e
      })
    }
  }
}
</script>
