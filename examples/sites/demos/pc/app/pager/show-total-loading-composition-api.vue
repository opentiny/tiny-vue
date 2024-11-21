<template>
  <div>
    加载中：<tiny-switch v-model="totalLoading"></tiny-switch>
    <tiny-pager
      :page-size="10"
      layout="total, sizes, prev, pager, next"
      :total="100"
      :show-total-loading="totalLoading"
    >
    </tiny-pager>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyPager, TinySwitch } from '@opentiny/vue'

const totalLoading = ref(true)
</script>
