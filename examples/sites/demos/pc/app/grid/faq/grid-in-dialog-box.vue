<template>
  <div>
    <tiny-button @click="boxVisibility = true">弹出Dialog{{ boxVisibility }}</tiny-button>
    <tiny-dialog-box v-model:visible="boxVisibility" title="消息" width="30%">
      <tiny-grid
        :data="tableData"
        seq-serial
        ref="grid"
        :auto-resize="true"
        :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }"
      >
        <tiny-grid-column type="index" width="60"></tiny-grid-column>
        <tiny-grid-column
          field="name"
          title="名称"
          show-icon
          :editor="{
            component: 'input',
            autoselect: true,
            blurOutside
          }"
        ></tiny-grid-column>
        <tiny-grid-column
          field="area"
          title="区域"
          :editor="{
            component: 'select',
            options,
            blurOutside
          }"
        ></tiny-grid-column>
        <tiny-grid-column
          field="address"
          title="地址"
          :editor="{
            component: 'input',
            autoselect: true,
            blurOutside
          }"
        ></tiny-grid-column>
        <tiny-grid-column
          field="introduction"
          title="公司简介"
          :editor="{
            component: 'input',
            autoselect: true,
            blurOutside
          }"
          show-overflow="ellipsis"
        ></tiny-grid-column>
      </tiny-grid>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility = false">确 定</tiny-button>
        <tiny-button @click="boxVisibility = false">取 消</tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script lang="jsx">
import { Button, DialogBox, Grid, GridColumn } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyDialogBox: DialogBox,
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  data() {
    return {
      boxVisibility: false,
      options: [
        { label: '华北区', value: '华北区' },
        { label: '华东区', value: '华东区' },
        { label: '华南区', value: '华南区' }
      ],
      tableData: [
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
        }
      ]
    }
  },
  methods: {
    blurOutside(e) {
      const getEventTargetNode = this.$refs.grid.getEventTargetNode
      return e.cell.contains(e.event.target) || getEventTargetNode(e.event, document.body, 'tiny-popper').flag
    }
  }
}
</script>
