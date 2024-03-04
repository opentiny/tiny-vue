<template>
  <tiny-filter-bar :model-value="active" :data="data" @click="click"></tiny-filter-bar>
</template>

<script>
import { FilterBar, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyFilterBar: FilterBar
  },
  data() {
    return {
      active: 0,
      data: ['类目一', '类目二', '类目三', '类目四', '类目五']
    }
  },
  methods: {
    click(index) {
      Modal.message(`当前点击第 ${index + 1} 项，值为 【${this.data[index]}】`)
    }
  }
}
</script>
