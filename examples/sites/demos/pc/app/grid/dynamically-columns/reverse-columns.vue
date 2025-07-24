<template>
  <div>
    <div>
      <tiny-button @click="change"> 反转列顺序 </tiny-button>
    </div>
    <br />
    <tiny-grid :data="tableData">
      <tiny-grid-column v-for="col in cols" :key="col.field" v-bind="col"></tiny-grid-column>
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
  methods: {
    change() {
      this.cols.reverse()
    }
  },
  data() {
    return {
      cols: [
        {
          field: 'introduction',
          title: '公司简介'
        },
        {
          field: 'address',
          title: '地址'
        }
      ],
      tableData: [
        {
          id: '1',
          name: 'GFD 科技有限公司',
          area: '华东区',
          address: '福州',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '2',
          name: 'WWWW 科技有限公司',
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
        }
      ]
    }
  }
}
</script>
