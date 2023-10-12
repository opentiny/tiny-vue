<template>
  <tiny-transfer class="transfer-panel-slot">
    <template #left-panel>
      <div class="panel-title">列表1</div>
      <tiny-grid :data="leftTableData">
        <tiny-grid-column type="index" width="60"></tiny-grid-column>
        <tiny-grid-column type="selection" width="60"></tiny-grid-column>
        <tiny-grid-column field="name" title="名称"></tiny-grid-column>
        <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
        <tiny-grid-column field="address" title="地址"></tiny-grid-column>
        <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
      </tiny-grid>
    </template>
    <template #right-panel>
      <div class="panel-title">列表2</div>
      <tiny-grid :data="rightTableData">
        <tiny-grid-column type="index" width="60"></tiny-grid-column>
        <tiny-grid-column type="selection" width="60"></tiny-grid-column>
        <tiny-grid-column field="name" title="名称"></tiny-grid-column>
        <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
        <tiny-grid-column field="address" title="地址"></tiny-grid-column>
        <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
      </tiny-grid>
    </template>
    <template #button-panel>
      <tiny-button type="primary" :icon="IconChevronLeft"></tiny-button>
      <tiny-button type="primary" :icon="IconChevronRight"></tiny-button>
    </template>
  </tiny-transfer>
</template>

<script lang="jsx">
import { Transfer, Grid, GridColumn, Button } from '@opentiny/vue'
import { IconChevronLeft, IconChevronRight } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTransfer: Transfer,
    TinyGrid: Grid,
    TinyButton: Button,
    TinyGridColumn: GridColumn
  },
  data() {
    return {
      IconChevronRight: IconChevronRight(),
      IconChevronLeft: IconChevronLeft(),
      leftTableData: [
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
        },
        {
          id: '7',
          name: '深圳科技YX公司',
          area: '华南区',
          address: '深圳市龙岗区',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        }
      ],
      rightTableData: []
    }
  }
}
</script>

<style>
.transfer-panel-slot .tiny-transfer-panel {
  width: 500px;
  min-height: 300px;
}
</style>
