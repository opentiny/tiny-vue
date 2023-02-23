<template>
  <div>
    <tiny-grid :data="tableData" height="200" @scroll="ScrollEvent">
      <tiny-grid-column type="index" title="序号" width="100"></tiny-grid-column>
      <tiny-grid-column field="name" title="名称"></tiny-grid-column>
      <tiny-grid-column field="area" title="区域"></tiny-grid-column>
      <tiny-grid-column field="address" title="地址"></tiny-grid-column>
      <tiny-grid-column field="introduction" show-overflow title="公司简介"></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script>
import { Grid, GridColumn, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  data() {
    return {
      tableData: [
        {
          id: '1',
          name: 'GFD科技YX公司',
          area: '华东区',
          address: '福州',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '2',
          name: 'WWW科技YX公司',
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
          name: 'TGB科技YX公司',
          area: '华东区',
          address: '龙岩',
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
          name: 'WSX科技YX公司',
          area: '华中区',
          address: '黄冈',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '7',
          name: 'KBG物业YX公司',
          area: '华中区',
          address: '赤壁',
          introduction:
            '公司治理结构严格按现代企业制度设计，管理机构设置合理，制度完善，各部门分工明确、协作顺畅。拥有中、高级职称或大学本科以上学历的人员占职工总人数的80%以上，具有雄厚的资金实力和高度专业化的项目开发管理能力，是一支具有强烈的社会责任感和引领房地产业科技创新的地产新军。'
        },
        {
          id: '8',
          name: '深圳市福德宝网络技术YX公司',
          address: '厦门岛内',
          area: '华东区',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '9',
          name: 'UJM有限责任公司',
          area: '华南区',
          address: '南宁',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '10',
          name: 'IKA有限责任公司',
          area: '华南区',
          address: '北海',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '11',
          name: 'TIG管理YX公司',
          area: '华南区',
          address: '桂林',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '12',
          name: 'GGT科技YX公司',
          area: '西南区',
          address: '昆明',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '13',
          name: 'YYSYX公司',
          area: '西南区',
          address: '西双版纳',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '14',
          name: 'VBN有限责任公司',
          area: '西南区',
          address: '大理',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '15',
          name: '深圳万众科技YX公司',
          area: '华中区',
          address: '武汉',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        }
      ]
    }
  },
  methods: {
    ScrollEvent() {
      Modal.message({ message: '表格滚动事件', status: 'info' })
    }
  }
}
</script>

<style scoped>
.customizedBox .type__input {
  display: inline;
}
.tiny-grid .customizedBox .tiny-grid-input__wrapper .tiny-grid-input {
  width: 100px;
}
</style>
