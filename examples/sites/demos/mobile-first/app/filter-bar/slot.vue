<template>
  <tiny-filter-bar v-model="active" :data="data" @click="click">
    <template #icon>
      <div style="cursor: pointer" @click="filterClickHandler">
        <icon-unfilter></icon-unfilter>
      </div>
    </template>
  </tiny-filter-bar>
</template>

<script>
import { FilterBar, Modal } from '@opentiny/vue'
import { IconUnfilter } from '@opentiny/vue-icon'

export default {
  components: {
    IconUnfilter: IconUnfilter(),
    TinyFilterBar: FilterBar
  },
  data() {
    return {
      active: 0,
      data: ['类目一', '类目二', '类目三']
    }
  },
  methods: {
    click(index) {
      Modal.message(`当前点击第 ${index + 1} 项，值为 【${this.data[index]}】`)
    },
    filterClickHandler() {
      Modal.message(`插槽内点击过滤图标事件`)
    }
  }
}
</script>
