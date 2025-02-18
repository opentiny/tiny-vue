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
    <div class="title">改变current-page触发事件：</div>
    <tiny-button @click="currentPage = 1">改变current-page</tiny-button>
    <tiny-pager
      :total="100"
      :current-page="currentPage"
      mode="number"
      change-compat
      @current-change="dataChangeTrigger"
    ></tiny-pager>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyPager, TinyModal, TinyButton } from '@opentiny/vue'

const currentPage = ref(10)

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

function handleCurrentChange(val) {
  TinyModal.message({
    message: `current-change 事件，当前页：${val}`,
    status: 'info'
  })
}

function handleSizeChange(val) {
  TinyModal.message({
    message: `size-change 事件，每页条目数：${val}`,
    status: 'info'
  })
}

function prevClick(val) {
  TinyModal.message({
    message: `prev-click 事件，当前页：${val}`,
    status: 'info'
  })
}

function nextClick(val) {
  TinyModal.message({
    message: `next-click 事件，当前页：${val}`,
    status: 'info'
  })
}
const fetchData = debounce(() => {
  TinyModal.message({
    message: '模拟后台拉取数据',
    status: 'info'
  })
})

const dataChangeTrigger = () => {
  TinyModal.message({
    message: 'current-change 事件触发',
    status: 'info'
  })
}
</script>

<style scoped>
.title {
  margin-top: 20px;
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: bold;
}
.tiny-button {
  margin-top: 12px;
}
</style>
