<template>
  <tiny-pager
    is-before-page-change
    @before-page-change="onBeforePageChange"
    :current-page="currentPage"
    @update:current-page="currentPage = $event"
    :page-size="100"
    layout="total, sizes, prev, pager, next, jumper"
    :total="1000"
  >
  </tiny-pager>
</template>

<script>
import { TinyPager, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyPager
  },
  data() {
    return {
      currentPage: 5
    }
  },
  methods: {
    onBeforePageChange(param) {
      const { callback, rollback } = param
      TinyModal.confirm('您确定要放弃当前页的修改吗？').then((res) => {
        if (res === 'confirm') {
          callback && callback()
        } else {
          rollback && rollback()
        }
      })
    }
  }
}
</script>
