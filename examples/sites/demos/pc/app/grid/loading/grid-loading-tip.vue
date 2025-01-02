<template>
  <div>
    <tiny-button @click="init">重试</tiny-button>
    <br /><br />
    <tiny-grid :data="tableData" :loading="loading">
      <tiny-grid-column type="index" width="5%"></tiny-grid-column>
      <tiny-grid-column field="name" title="名称" sortable></tiny-grid-column>
      <tiny-grid-column field="city" title="城市" sortable></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script lang="jsx">
import { TinyGrid, TinyGridColumn, TinyButton } from '@opentiny/vue'

const tableData = [
  {
    id: '1',
    name: 'GFD 科技 YX 公司',
    city: '福州'
  },
  {
    id: '2',
    name: 'WWW 科技 YX 公司',
    city: '深圳'
  },
  {
    id: '3',
    name: 'RFV 有限责任公司',
    city: '中山'
  },
  {
    id: '4',
    name: 'TGB 科技 YX 公司',
    city: '龙岩'
  },
  {
    id: '5',
    name: 'YHN 科技 YX 公司',
    city: '韶关'
  }
]

export default {
  components: {
    TinyGrid,
    TinyGridColumn,
    TinyButton
  },
  data() {
    return {
      tableData,
      loading: true
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.loading = true
      setTimeout(() => {
        this.tableData = tableData.slice()
        this.loading = false
      }, 2000)
    }
  }
}
</script>
