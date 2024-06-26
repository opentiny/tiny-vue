<template>
  <div>
    <tiny-button @click="change" type="primary" class="mb-16"> 反转列顺序 </tiny-button>
    <tiny-grid :data="tableData">
      <tiny-grid-column v-for="col in cols" :key="col.field" v-bind="col"></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script>
import { Grid, GridColumn, Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
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
        }
      ]
    }
  }
}
</script>

<style scoped>
.mb-16 {
  margin-bottom: 16px;
}
</style>
