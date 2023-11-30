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
import { Pager as TinyPager, Switch as TinySwitch } from '@opentiny/vue'

const totalLoading = ref(true)
</script>
