<template>
  <div>
    <div class="title">当前所在页改变：</div>
    <tiny-pager :total="100" mode="number" @current-change="handleCurrentChange"> </tiny-pager>
    <div class="title">每页展示条目数改变：</div>
    <tiny-pager :total="100" mode="number" @size-change="handleSizeChange"> </tiny-pager>
    <div class="title">上一页、下一页：</div>
    <tiny-pager :total="100" mode="number" @prev-click="prevClick" @next-click="nextClick"> </tiny-pager>
    <div class="title">每页条目数和当前页同时改变：</div>
    <tiny-pager :total="100" :current-page="10" mode="number" @current-change="fetchData" @size-change="fetchData">
    </tiny-pager>
  </div>
</template>

<script>
import { Pager, Modal } from '@opentiny/vue'

function debounce(fn, delay = 50) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

export default {
  components: {
    TinyPager: Pager
  },
  methods: {
    handleCurrentChange(val) {
      Modal.message({
        message: `current-change 事件，当前页: ${val}`
      })
    },
    handleSizeChange(val) {
      Modal.message({
        message: `current-change 事件，当前页: ${val}`
      })
    },
    prevClick(val) {
      Modal.message({
        message: `prev-click 事件，当前页: ${val}`
      })
    },
    nextClick(val) {
      Modal.message({
        message: `next-click 事件，当前页: ${val}`
      })
    },
    fetchData: debounce(() => {
      Modal.message({
        message: '模拟后台拉取数据'
      })
    })
  }
}
</script>

<style scoped>
.title {
  margin-top: 20px;
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: bold;
}
</style>
