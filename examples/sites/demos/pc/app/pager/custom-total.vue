<template>
  <div>
    <tiny-pager
      :current-page="currentPage"
      @update:current-page="currentPage = $event"
      :page-size="100"
      layout="total, sizes, prev, pager, next"
      :total="5000000"
      :custom-total="true"
    >
    </tiny-pager>
    <tiny-pager
      :current-page="currentPage"
      @update:current-page="currentPage = $event"
      :page-size="100"
      layout="total, sizes, prev, pager, next"
      :total="5000000"
      custom-total="条数超出百万"
    >
    </tiny-pager>
  </div>
</template>

<script>
import { Pager } from '@opentiny/vue'

export default {
  components: {
    TinyPager: Pager
  },
  data() {
    return {
      currentPage: 5
    }
  }
}
</script>
