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
      TinyModal.confirm('您确定要继续变更操作吗？').then((res) => {
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
