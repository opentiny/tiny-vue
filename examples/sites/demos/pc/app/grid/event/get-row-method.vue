<template>
  <div>
    <tiny-button @click="getCurrentRow()">当前行</tiny-button>
    <tiny-button @click="getRowIndex">当前行号</tiny-button>
    <tiny-button @click="getRadioRow">Radio 单选选中行</tiny-button>
    <tiny-button @click="getRowById">rowId 获取当前行</tiny-button>
    <tiny-button @click="getRowNode">tr 元素获取行信息</tiny-button>
    <br /><br />
    <tiny-grid ref="theGrid" :data="tableData" highlight-current-row>
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column type="radio" width="60"></tiny-grid-column>
      <tiny-grid-column field="name" title="名称"></tiny-grid-column>
      <tiny-grid-column field="area" title="区域"></tiny-grid-column>
      <tiny-grid-column field="address" title="地址"></tiny-grid-column>
      <tiny-grid-column field="introduction" title="公司简介" show-overflow="ellipsis"></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script lang="jsx">
import { TinyGrid, TinyGridColumn, TinyButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyButton,
    TinyGrid,
    TinyGridColumn
  },
  data() {
    return {
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
    getCurrentRow(hideMessage) {
      const data = this.$refs.theGrid.getCurrentRow()

      !hideMessage && TinyModal.alert(`当前行数据是：${JSON.stringify(data)}`)

      return data
    },
    getRadioRow() {
      const data = this.$refs.theGrid.getRadioRow()

      TinyModal.alert(`单选选中行数据是：${JSON.stringify(data)}`)
    },
    getRowIndex() {
      const row = this.getCurrentRow(true)
      const data = this.$refs.theGrid.getRowIndex(row)

      TinyModal.alert(`当前选中行号是：${JSON.stringify(data)}`)
    },
    getRowById() {
      const row = this.getCurrentRow(true) || {}
      const data = this.$refs.theGrid.getRowById(row._RID)

      TinyModal.alert(`根据 rowId 获取的当前行：${JSON.stringify(data)}`)
    },
    getRowNode() {
      const tr = this.$el.querySelector('.tiny-grid-body__row')
      const data = this.$refs.theGrid.getRowNode(tr)

      TinyModal.alert(`根据 tr 元素获取对应的 row 信息：${JSON.stringify(data)}`)
    }
  }
}
</script>
