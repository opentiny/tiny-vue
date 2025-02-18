<template>
  <div>
    <h4 class="title">当前处于活动的行索引号（rowIndex）：{{ activedRow }}</h4>
    <tiny-grid
      ref="theGrid"
      :data="tableData"
      seq-serial
      show-overflow="tooltip"
      :edit-config="{ trigger: 'manual', mode: 'cell', autoClear: false }"
    >
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column field="name" title="名称" :editor="{ component: 'input', autoselect: true }"></tiny-grid-column>
      <tiny-grid-column field="area" title="区域" :editor="{ component: 'select', options }"></tiny-grid-column>
      <tiny-grid-column
        field="address"
        title="地址"
        :editor="{ component: 'input', autoselect: true }"
      ></tiny-grid-column>
      <tiny-grid-column
        field="introduction"
        title="公司简介"
        :editor="{ component: 'input', autoselect: true }"
        show-overflow="ellipsis"
      ></tiny-grid-column>
      <tiny-grid-column title="操作" width="200" align="center">
        <template #default="data">
          <template v-if="$refs.theGrid && $refs.theGrid.hasActiveRow(data.row)">
            <tiny-button size="mini" @click="saveRowEvent(data.row)"> 保存 </tiny-button>
            <tiny-button size="mini" @click="cancelRowEvent(data.row)"> 取消 </tiny-button>
          </template>
          <template v-else>
            <tiny-button size="mini" @click="editRowEvent(data.row)"> 编辑 </tiny-button>
          </template>
        </template>
      </tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script>
import { TinyGrid, TinyGridColumn, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyButton,
    TinyGrid,
    TinyGridColumn
  },
  data() {
    return {
      activedRow: '',
      options: [
        { label: '华北区', value: '华北区' },
        { label: '华东区', value: '华东区' },
        { label: '华南区', value: '华南区' }
      ],
      tableData: [
        {
          id: '1',
          name: 'GFD 科技 YX 公司',
          area: '华东区',
          address: '福州',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '2',
          name: 'WWWW 科技 YX 公司',
          area: '华南区',
          address: '深圳福田区',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '3',
          name: 'RFV 有限责任公司',
          area: '华南区',
          address: '中山市',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '4',
          name: 'TGBYX 公司',
          area: '华北区',
          address: '梅州',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '5',
          name: 'YHN 科技 YX 公司',
          area: '华南区',
          address: '韶关',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '6',
          name: '康康物业 YX 公司',
          area: '华北区',
          address: '广州天河区',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        }
      ]
    }
  },
  methods: {
    editRowEvent(row) {
      if (row.name === 'RFV 有限责任公司') {
        // 只激活区域单元格编辑
        this.$refs.theGrid.setActiveCell(row, 'area').then(() => {
          this.getActiveRow()
        })
      } else {
        // mode: 'cell' 时默认激活第一个单元格
        this.$refs.theGrid.setActiveRow(row).then(() => {
          this.getActiveRow()
        })
      }
    },
    saveRowEvent() {
      this.$refs.theGrid.clearActived().then(() => {
        this.getActiveRow()
      })
    },
    cancelRowEvent(row) {
      const grid = this.$refs.theGrid
      grid
        .clearActived()
        .then(() => grid.revertData(row))
        .then(this.getActiveRow)
    },
    getActiveRow() {
      const activedRow = this.$refs.theGrid.getActiveRow()

      this.activedRow = activedRow ? activedRow.rowIndex : ''
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 16px;
  padding: 15px;
  font-weight: bolder;
  color: #444;
}
</style>
