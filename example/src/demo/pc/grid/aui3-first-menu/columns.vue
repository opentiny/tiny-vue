<template>
  <div>
    <button @click="clickBtn" style="margin-bottom: 10px">点击</button>
    <tiny-grid :columns="columnsData" :data="tableData" ref="theGrid"> </tiny-grid>
  </div>
</template>

<script>
import { Grid } from '@opentiny/vue'
import { message } from '@opentiny/vue-modal'

export default {
  components: {
    TinyGrid: Grid
  },
  data() {
    return {
      tableData: [
        {
          id: '1',
          name: 'GFD科技公司',
          area: '华东区',
          address: '福州',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '2',
          name: 'WWWW科技公司',
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
          name: 'TGB公司',
          area: '华北区',
          address: '梅州',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '5',
          name: 'YHN科技公司',
          area: '华南区',
          address: '韶关',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '6',
          name: '康康物业公司',
          area: '华北区',
          address: '广州天河区',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        }
      ],
      columnsData: [
        { type: 'index', width: 50 },
        {
          field: 'name',
          title: '名称'
        },
        {
          field: 'area',
          title: '所属区域'
        },
        {
          field: 'address',
          title: '地址'
        },
        {
          field: 'introduction',
          title: '公司简介'
        }
      ]
    }
  },
  methods: {
    clickBtn() {
      message(
        '通过传入列名 this.$refs.theGrid.getColumnByField() 获取该列信息,通过传入索引 this.$refs.theGrid.getColumns() 获取该列信息,通过传入列信息 this.$refs.theGrid.getColumns() 获取该列索引'
      )
    }
  }
}
</script>
