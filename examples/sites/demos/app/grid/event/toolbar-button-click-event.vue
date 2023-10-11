<template>
  <div>
    <tiny-grid
      ref="basicGrid"
      :data="tableData"
      @toolbar-button-click="toolbarButtonClickEvent"
      :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }"
    >
      <template #toolbar>
        <tiny-grid-toolbar :buttons="toolbarButtons"></tiny-grid-toolbar>
      </template>
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column type="selection" width="50"></tiny-grid-column>
      <tiny-grid-column
        field="name"
        show-overflow
        title="名称"
        :editor="{ component: 'input', autoselect: true }"
      ></tiny-grid-column>
      <tiny-grid-column field="area" title="区域" :editor="{ component: 'input' }"></tiny-grid-column>
      <tiny-grid-column field="address" title="地址" :editor="{ component: 'input' }"></tiny-grid-column>
      <tiny-grid-column
        field="introduction"
        title="公司简介"
        :editor="{ component: 'input', autoselect: true }"
        show-overflow
      ></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script lang="jsx">
import { Grid, GridColumn, GridToolbar, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinyGridToolbar: GridToolbar
  },
  data() {
    return {
      toolbarButtons: [
        {
          code: 'insert',
          name: '新增'
        },
        {
          code: 'delete',
          name: '删除'
        },
        {
          code: 'getDelete',
          name: '获取删除的数据'
        },
        {
          code: 'cancel',
          name: '取消选中'
        },
        {
          code: 'save',
          name: '保存'
        }
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
    toolbarButtonClickEvent({ code, $grid }) {
      const data = $grid.getSelectRecords()
      const updateData = $grid.getUpdateRecords()
      const insertData = $grid.getInsertRecords()
      const removeData = $grid.getRemoveRecords()

      switch (code) {
        case 'insert':
          this.$refs.basicGrid.insert({})
          break
        case 'cancel': {
          $grid.clearSelection()
          break
        }
        case 'delete': {
          if (data.length === 0) {
            Modal.alert('请至少选中一条记录')
          }
          $grid.removeSelecteds()
          break
        }
        case 'getDelete': {
          const removeRecords = $grid.getRemoveRecords() // 获取删除的数据
          Modal.alert('获取删除的数据' + JSON.stringify(removeRecords))
          break
        }
        case 'save': {
          if (!updateData.length && !insertData.length && !removeData.length) {
            Modal.alert('没有修改记录')
          } else {
            Modal.message({
              message: '点击保存触发, 新增的数据',
              status: 'info'
            })
          }

          // 手动清除表格所有条件
          $grid.clearAll()
          break
        }
        case 'getRecordset': {
          const records = $grid.getRecordset()
          Modal.alert('增删改记录集合：' + JSON.stringify(records))
          break
        }
      }
    }
  }
}
</script>
