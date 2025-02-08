<template>
  <div class="demo-date-panel-wrap">
    <div class="value">{{ value }}</div>
    <tiny-date-panel v-model="value" :shortcuts="shortcuts"></tiny-date-panel>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyDatePanel } from '@opentiny/vue'

const value = ref()
const shortcuts = [
  {
    text: '今天',
    onClick(picker) {
      const date = new Date()
      picker.$emit('pick', date)
    }
  },
  {
    text: '昨天',
    onClick(picker) {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      picker.$emit('pick', date)
    }
  },
  {
    text: '一周前',
    onClick(picker) {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      picker.$emit('pick', date)
    }
  }
]
</script>

<style scoped lang="less">
.demo-date-panel-wrap {
  width: 560px;

  & > * {
    margin-top: 12px;
  }
}
</style>
