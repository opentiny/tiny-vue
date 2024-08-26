<template>
  <tiny-grid ref="gridRef" :data="tableData">
    <tiny-grid-column type="selection" width="80">
      <template #dropdown>
        <tiny-dropdown class="ml-12" title="" @item-click="itemClick">
          <template #dropdown>
            <tiny-dropdown-menu placement="top">
              <tiny-dropdown-item :item-data="{ name: 'selectCurPage' }"> 选择本页数据 </tiny-dropdown-item>
              <tiny-dropdown-item :item-data="{ name: 'selectAllPage' }"> 选择全部数据 </tiny-dropdown-item>
              <tiny-dropdown-item :item-data="{ name: 'clearCurPage' }"> 取消选择 </tiny-dropdown-item>
            </tiny-dropdown-menu>
          </template>
        </tiny-dropdown>
      </template>
    </tiny-grid-column>
    <tiny-grid-column field="name" title="名称"></tiny-grid-column>
    <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
    <tiny-grid-column field="address" title="地址"></tiny-grid-column>
    <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
  </tiny-grid>
</template>

<script setup>
import { ref } from 'vue'
import {
  Grid as TinyGrid,
  GridColumn as TinyGridColumn,
  Dropdown as TinyDropdown,
  DropdownMenu as TinyDropdownMenu,
  DropdownItem as TinyDropdownItem
} from '@opentiny/vue'

const tableData = ref([
  {
    id: '1',
    name: 'GFD科技有限公司',
    area: '华东区',
    address: '福州',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '2',
    name: 'WWWW科技有限公司',
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
    name: 'TGB有限公司',
    area: '华北区',
    address: '梅州',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '5',
    name: 'YHN科技有限公司',
    area: '华南区',
    address: '韶关',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '6',
    name: '康康物业有限公司',
    area: '华北区',
    address: '广州天河区',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  }
])
const gridRef = ref()

function itemClick({ itemData }) {
  if (itemData.name === 'selectCurPage') {
    gridRef.value.setAllSelection(true)
  }

  if (itemData.name === 'clearCurPage') {
    gridRef.value.setAllSelection(false)
  }
}
</script>

<style scoped>
.ml-12 {
  left: 12px;
}
</style>
