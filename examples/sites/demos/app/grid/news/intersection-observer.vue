<template>
  <div>
    <tiny-button @click="boxVisibility = true"> 弹出Dialog{{ boxVisibility }} </tiny-button>
    <tiny-dialog-box
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
      title="消息"
      width="60%"
      draggable
    >
      <tiny-transfer class="transfer-panel-slot">
        <template #left-panel>
          <div class="panel-title">列表1</div>
          <div style="height: 240px">
            <tiny-grid :data="leftTableData" height="auto" auto-resize @visible-change="onVisibleChange">
              <tiny-grid-column type="index" width="20"></tiny-grid-column>
              <tiny-grid-column type="selection" width="20"></tiny-grid-column>
              <tiny-grid-column field="name" title="名称"></tiny-grid-column>
              <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
              <tiny-grid-column field="address" title="地址"></tiny-grid-column>
              <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
            </tiny-grid>
          </div>
        </template>
        <template #right-panel>
          <div class="panel-title">列表2</div>
          <div style="height: 240px">
            <tiny-grid :data="rightTableData" height="auto" auto-resize @visible-change="onVisibleChange">
              <tiny-grid-column type="index" width="20"></tiny-grid-column>
              <tiny-grid-column type="selection" width="20"></tiny-grid-column>
              <tiny-grid-column field="name" title="名称"></tiny-grid-column>
              <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
              <tiny-grid-column field="address" title="地址"></tiny-grid-column>
              <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
            </tiny-grid>
          </div>
        </template>
        <template #button-panel>
          <tiny-button type="primary" :icon="IconChevronLeft"></tiny-button>
          <tiny-button type="primary" :icon="IconChevronRight"></tiny-button>
        </template>
      </tiny-transfer>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility = false"> 确定 </tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script>
import { Button, DialogBox, Grid, GridColumn, Transfer } from '@opentiny/vue'
import { IconChevronLeft, IconChevronRight } from '@opentiny/vue-icon'

const tableData = [
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
  },
  {
    id: '7',
    name: '深圳科技有限公司',
    area: '华南区',
    address: '深圳市龙岗区',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  }
]

export default {
  components: {
    TinyButton: Button,
    TinyDialogBox: DialogBox,
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinyTransfer: Transfer
  },
  data() {
    return {
      boxVisibility: false,
      IconChevronRight: IconChevronRight(),
      IconChevronLeft: IconChevronLeft(),
      leftTableData: tableData,
      rightTableData: JSON.parse(JSON.stringify(tableData))
    }
  },
  methods: {
    onVisibleChange({ $table, visible }) {
      console.log('onVisibleChange', $table, visible)
    }
  }
}
</script>

<style>
.transfer-panel-slot .tiny-transfer-panel {
  width: 500px;
  min-height: 300px;
}
.transfer-panel-slot .tiny-transfer__buttons {
  flex: 1;
}
</style>
