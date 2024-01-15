<template>
  <div>
    <tiny-button @click="init">重试</tiny-button>
    <br /><br />
    <tiny-grid :data="tableData" :loading-component="loadingComponent()" :loading="loading">
      <tiny-grid-column type="index" width="5%"></tiny-grid-column>
      <tiny-grid-column field="name" title="名称" sortable></tiny-grid-column>
      <tiny-grid-column field="city" title="城市" sortable></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script lang="jsx">
import { Grid, GridColumn, Button } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinyButton: Button
  },
  data() {
    return {
      tableData: [],
      loading: true
    }
  },
  created() {
    this.init()
  },
  methods: {
    loadingComponent() {
      return (
        <div class="custom-loading">
          <span>正在加载中。。。</span>
        </div>
      )
    },
    init() {
      this.tableData = []
      this.loading = true
      setTimeout(() => {
        this.tableData = [
          {
            id: '1',
            name: 'GFD科技YX公司',
            city: '福州'
          },
          {
            id: '2',
            name: 'WWW科技YX公司',
            city: '深圳'
          },
          {
            id: '3',
            name: 'RFV有限责任公司',
            city: '中山'
          },
          {
            id: '4',
            name: 'TGB科技YX公司',
            city: '龙岩'
          },
          {
            id: '5',
            name: 'YHN科技YX公司',
            city: '韶关'
          }
        ]
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style scoped>
.custom-loading {
  position: absolute;
  font-size: 20px;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
}
.custom-loading[visible='false'] {
  display: none;
}
</style>
