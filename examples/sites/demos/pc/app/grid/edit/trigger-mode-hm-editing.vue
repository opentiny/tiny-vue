<template>
  <div>
    <h4 class="title">当前处于活动的行索引号（rowIndex）：{{ activedRow }}</h4>
    <tiny-grid
      ref="theGrid"
      :data="tableData"
      seq-serial
      :edit-config="{ trigger: 'manual', mode: 'row', autoClear: false }"
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

<script lang="jsx">
import { Grid, GridColumn, Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
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
          name: 'GFD科技YX公司',
          area: '华东区',
          address: '福州',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '2',
          name: 'WWWW科技YX公司',
          area: '华南区',
          address: '深圳福田区',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '3',
          name: 'RFV有限责任公司',
          area: '华南区',
          address: '中山市',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '4',
          name: 'TGBYX公司',
          area: '华北区',
          address: '梅州',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '5',
          name: 'YHN科技YX公司',
          area: '华南区',
          address: '韶关',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '6',
          name: '康康物业YX公司',
          area: '华北区',
          address: '广州天河区',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        }
      ]
    }
  },
  methods: {
    editRowEvent(row) {
      this.$refs.theGrid.setActiveRow(row).then(() => {
        this.getActiveRow()
      })
    },
    saveRowEvent() {
      this.$refs.theGrid.clearActived().then(() => {
        this.getActiveRow()
      })
    },
    cancelRowEvent() {
      this.$refs.theGrid.clearActived().then(() => {
        this.getActiveRow()
      })
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
