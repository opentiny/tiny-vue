<template>
  <div>
    <tiny-button @click="changeFlag">{{ flag ? '隐藏' : '显示' }}最后一列</tiny-button>
    <tiny-grid
      ref="grid"
      column-width="200"
      :data="tableData"
      :resizable="true"
      :optimization="{ scrollX: { gt: 15, rSize: 20 } }"
      @after-refresh-column="handleAfterRefresh"
    >
      <tiny-grid-column field="name" :title="(h) => h('div', '名称')"></tiny-grid-column>
      <tiny-grid-column field="englishName" title="英文名"></tiny-grid-column>
      <tiny-grid-column field="established" title="成立时间" sortable></tiny-grid-column>
      <tiny-grid-column field="listed" title="是否上市"></tiny-grid-column>
      <tiny-grid-column field="ranking" title="国内排名" sortable></tiny-grid-column>
      <tiny-grid-column field="registeredCapital" title="注册资本" sortable></tiny-grid-column>
      <tiny-grid-column field="businessScope" title="业务范围"></tiny-grid-column>
      <tiny-grid-column field="employees" title="员工数" sortable></tiny-grid-column>
      <tiny-grid-column field="address" title="地址"></tiny-grid-column>
      <tiny-grid-column field="englishName" title="英文名"></tiny-grid-column>
      <tiny-grid-column field="established" title="成立时间" sortable></tiny-grid-column>
      <tiny-grid-column field="listed" title="是否上市"></tiny-grid-column>
      <tiny-grid-column field="ranking" title="国内排名" sortable></tiny-grid-column>
      <tiny-grid-column field="registeredCapital" title="注册资本" sortable></tiny-grid-column>
      <tiny-grid-column field="businessScope" title="业务范围"></tiny-grid-column>
      <tiny-grid-column field="employees" title="员工数" sortable></tiny-grid-column>
      <tiny-grid-column field="address" title="地址"></tiny-grid-column>
      <tiny-grid-column field="englishName" title="英文名"></tiny-grid-column>
      <tiny-grid-column field="established" title="成立时间" sortable></tiny-grid-column>
      <tiny-grid-column field="listed" title="是否上市1"></tiny-grid-column>
      <tiny-grid-column field="ranking" title="国内排名1" sortable></tiny-grid-column>
      <tiny-grid-column field="registeredCapital" title="注册资本1" sortable></tiny-grid-column>
      <tiny-grid-column field="businessScope" title="业务范围1"></tiny-grid-column>
      <tiny-grid-column field="employees" title="员工数1" sortable></tiny-grid-column>
      <tiny-grid-column field="address" title="地址1"></tiny-grid-column>
      <tiny-grid-column field="englishName" title="英文名2"></tiny-grid-column>
      <tiny-grid-column field="established" title="成立时间2" sortable></tiny-grid-column>
      <tiny-grid-column field="listed" title="是否上市2"></tiny-grid-column>
      <tiny-grid-column field="ranking" title="国内排名2" sortable></tiny-grid-column>
      <tiny-grid-column field="registeredCapital" title="注册资本2" sortable></tiny-grid-column>
      <tiny-grid-column field="businessScope" title="业务范围2"></tiny-grid-column>
      <tiny-grid-column field="employees" title="员工数2" sortable></tiny-grid-column>
      <tiny-grid-column field="address" title="地址2"></tiny-grid-column>
      <tiny-grid-column v-if="flag" field="introduction" title="公司简介（最后一列）" show-overflow></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script>
import { Grid, GridColumn, Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  data() {
    return {
      flag: false,
      tableData: [
        {
          id: '1',
          name: 'GFD科技有限公司',
          address: '福州',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 800,
          englishName: 'GFD',
          established: '2005',
          listed: '是',
          ranking: '23',
          registeredCapital: '2000万',
          businessScope: '食品'
        }
      ]
    }
  },
  methods: {
    changeFlag() {
      this.flag = !this.flag
    },
    handleAfterRefresh() {
      const fullColumn = this.$refs.grid.getTableColumn().fullColumn
      console.log(fullColumn[fullColumn.length - 1])
    }
  }
}
</script>
