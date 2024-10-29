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

<script>
import { TinyPager, TinySwitch } from '@opentiny/vue'

export default {
  components: {
    TinyPager,
    TinySwitch
  },
  data() {
    return {
      totalLoading: true
    }
  }
}
</script>
