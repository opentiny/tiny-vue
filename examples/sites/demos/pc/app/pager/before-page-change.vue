<template>
  <tiny-pager
    is-before-page-change
    mode="number"
    :total="200"
    :current-page="currentPage"
    @update:current-page="currentPage = $event"
    @before-page-change="onBeforePageChange"
  >
  </tiny-pager>
</template>

<script>
import { Pager, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyPager: Pager
  },
  data() {
    return {
      currentPage: 5
    }
  },
  methods: {
    onBeforePageChange(param) {
      const { callback, rollback } = param
      Modal.confirm('您确定要放弃当前页的修改吗？').then((res) => {
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
