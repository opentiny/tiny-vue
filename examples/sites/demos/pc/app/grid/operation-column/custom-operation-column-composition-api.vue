<template>
  <tiny-grid :data="tableData">
    <tiny-grid-column type="selection" width="40"></tiny-grid-column>
    <tiny-grid-column field="name" title="名称"></tiny-grid-column>
    <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
    <tiny-grid-column field="address" title="地址"></tiny-grid-column>
    <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
    <tiny-grid-column title="操作" width="100">
      <template #default="data">
        <div class="demo-custom-column">
          <tiny-icon-search class="tiny-svg-size" @click="clickHandler(data.row)"></tiny-icon-search>
          <tiny-icon-edit class="tiny-svg-size" @click="clickHandler(data.row)"></tiny-icon-edit>
        </div>
      </template>
    </tiny-grid-column>
  </tiny-grid>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyGrid, TinyGridColumn, TinyModal } from '@opentiny/vue'
import { iconEdit, iconSearch } from '@opentiny/vue-icon'

const tableData = ref([
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
])

const TinyIconEdit = iconEdit()
const TinyIconSearch = iconSearch()

function clickHandler(row) {
  TinyModal.message({ message: JSON.stringify(row), status: 'success' })
}
</script>

<style scoped>
.demo-custom-column {
  font-size: 0;
}
.demo-custom-column svg {
  font-size: 16px;
  fill: var(--ti-common-color-line-active);
}
.demo-custom-column svg:hover {
  fill: #40a9ff;
  cursor: pointer;
}
.demo-custom-column svg:not(:last-child) {
  margin-right: 8px;
}

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
