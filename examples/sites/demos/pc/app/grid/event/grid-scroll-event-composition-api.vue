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

<script setup>
import { ref } from 'vue'
import { TinyGrid, TinyGridColumn, TinyModal } from '@opentiny/vue'

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
    name: 'WWW 科技 YX 公司',
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
    name: 'TGB 科技 YX 公司',
    area: '华东区',
    address: '龙岩',
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
    name: 'WSX 科技 YX 公司',
    area: '华中区',
    address: '黄冈',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '7',
    name: 'KBG 物业 YX 公司',
    area: '华中区',
    address: '赤壁',
    introduction:
      '公司治理结构严格按现代企业制度设计，管理机构设置合理，制度完善，各部门分工明确、协作顺畅。拥有中、高级职称或大学本科以上学历的人员占职工总人数的 80% 以上，具有雄厚的资金实力和高度专业化的项目开发管理能力，是一支具有强烈的社会责任感和引领房地产业科技创新的地产新军。'
  },
  {
    id: '8',
    name: '深圳市福德宝网络技术 YX 公司',
    address: '厦门岛内',
    area: '华东区',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '9',
    name: 'UJM 有限责任公司',
    area: '华南区',
    address: '南宁',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '10',
    name: 'IKA 有限责任公司',
    area: '华南区',
    address: '北海',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '11',
    name: 'TIG 管理 YX 公司',
    area: '华南区',
    address: '桂林',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '12',
    name: 'GGT 科技 YX 公司',
    area: '西南区',
    address: '昆明',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '13',
    name: 'YYSYX 公司',
    area: '西南区',
    address: '西双版纳',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '14',
    name: 'VBN 有限责任公司',
    area: '西南区',
    address: '大理',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '15',
    name: '深圳万众科技 YX 公司',
    area: '华中区',
    address: '武汉',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  }
])

function ScrollEvent() {
  TinyModal.message({ message: '提示：触发了表格滚动事件', status: 'info' })
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
