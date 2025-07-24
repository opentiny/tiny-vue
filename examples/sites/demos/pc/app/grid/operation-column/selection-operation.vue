<template>
  <tiny-grid :data="tableData" @toolbar-button-click="toolbarButtonClickEvent">
    <template #toolbar>
      <tiny-grid-toolbar :buttons="toolbarButtons"></tiny-grid-toolbar>
    </template>

    <tiny-grid-column type="selection" width="40"></tiny-grid-column>
    <tiny-grid-column field="name" title="名称"></tiny-grid-column>
    <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
    <tiny-grid-column field="address" title="地址"></tiny-grid-column>
    <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
  </tiny-grid>
</template>

<script>
import { TinyGrid, TinyGridColumn, TinyGridToolbar } from '@opentiny/vue'

export default {
  components: {
    TinyGrid,
    TinyGridColumn,
    TinyGridToolbar
  },
  data() {
    return {
      toolbarButtons: [
        {
          code: 'clearSelection',
          name: '取消多选行'
        },
        {
          code: 'setAllSelection',
          name: '选中所有行'
        },
        {
          code: 'setSelection',
          name: '选中指定行'
        },
        {
          code: 'toggleAllSelection',
          name: '切换所有行选中状态'
        },
        {
          code: 'toggleRowSelection',
          name: '切换指定行选中状态'
        }
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
    toolbarButtonClickEvent({ code, $grid }) {
      switch (code) {
        case 'clearSelection': {
          $grid.clearSelection()
          break
        }
        case 'setAllSelection': {
          $grid.setAllSelection(true)
          break
        }
        case 'setSelection': {
          $grid.setSelection(this.tableData[4], true)
          break
        }
        case 'toggleAllSelection': {
          $grid.toggleAllSelection()
          break
        }
        case 'toggleRowSelection': {
          $grid.toggleRowSelection(this.tableData[1])
          break
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
:deep(.tiny-grid) {
  &-header__column,
  &-body__column {
    &.col__selection,
    &.col__radio {
      padding: 0 8px 0 16px;
      & + th,
      + td {
        padding-left: 0;
      }
    }
  }
}
</style>
