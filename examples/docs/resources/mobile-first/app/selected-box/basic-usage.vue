<template>
  <div date-tag="tiny-demo" style="height: 300px">
    <tiny-button @click="click1">提交增加数据项</tiny-button>
    <tiny-button @click="click2">提交减少数据项</tiny-button>
    <tiny-selected-box ref="bar" :select="select" :config="config" @change="handleChange"></tiny-selected-box>
  </div>
</template>

<script>
import { SelectedBox, Button } from '@opentiny/vue'
import Sortable from 'sortablejs'

export default {
  components: {
    TinySelectedBox: SelectedBox,
    TinyButton: Button
  },
  data() {
    return {
      select: [
        { id: 1, name: '施皓茂', dept: '业务应用资源中心' },
        { id: 2, name: '周澈', dept: '业务应用资源中心' }
      ],
      config: {
        pkField: 'id',
        showField: ['name', 'dept'],
        plugin: Sortable
      }
    }
  },
  methods: {
    handleChange({ flag, selection }) {
      /**
       * flag 为 true 就表示在全量数据集中只选中了 selection 数组项
       * flag 为 false 就表示在全量数据集中未选中 selection 数组项
       */
      console.log(flag, selection)
    },
    click1() {
      const item = { id: 3, name: '三丰', dept: '业务应用资源中心' }
      this.$refs.bar.submitSelection(item, 'add')
    },
    click2() {
      const item = { id: 3, name: '三丰', dept: '业务应用资源中心' }
      this.$refs.bar.submitSelection(item, 'remove')
    }
  }
}
</script>
