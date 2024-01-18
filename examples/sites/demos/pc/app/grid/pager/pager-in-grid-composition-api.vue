<template>
  <div>
    <tiny-grid
      ref="basicGridRef"
      seq-serial
      :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }"
      :data="tableData"
    >
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column type="selection" width="50"></tiny-grid-column>
      <tiny-grid-column
        field="name"
        show-overflow
        title="名称"
        :editor="{ component: 'input', autoselect: true }"
      ></tiny-grid-column>
      <tiny-grid-column field="area" title="区域" :editor="{ component: 'input' }"></tiny-grid-column>
      <tiny-grid-column field="address" title="地址" :editor="{ component: 'input' }"></tiny-grid-column>
      <tiny-grid-column
        field="introduction"
        title="公司简介"
        :editor="{ component: 'input', autoselect: true }"
        show-overflow
      ></tiny-grid-column>
    </tiny-grid>
    <tiny-pager
      :current-page="custPager.currentPage"
      :page-size="custPager.pageSize"
      :total="custPager.total"
      :page-sizes="[5, 10, 20, 50]"
      @current-change="currentChange"
      @size-change="sizeChange"
      layout="total, prev, pager, next, jumper, sizes"
    ></tiny-pager>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn, Pager as TinyPager } from '@opentiny/vue'

const custPager = ref({
  currentPage: 1,
  pageSize: 5,
  total: 0
})
const tableData = ref([])
const mockData = ref([
  {
    id: '1',
    name: 'GFD科技YX公司',
    userId: 421000103624183,
    area: '华东区',
    province: '福建省',
    city: '福州',
    contact: '许生',
    telephone: '1234567890',
    address: '福州',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 800,
    createdDate: '2014-04-30 00:56:00',
    boole: false,
    assets: '1000000',
    rate: 0.9
  },
  {
    id: '2',
    name: 'WWW科技YX公司',
    userId: 421000103624183,
    area: '华南区',
    province: '广东省',
    city: '深圳',
    contact: '朱生',
    telephone: '1234567890',
    address: '深圳福田区',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 300,
    createdDate: '2016-07-08 12:36:22',
    boole: true,
    assets: '1500000',
    rate: 0.7
  },
  {
    id: '3',
    name: 'RFV有限责任公司',
    userId: 441047913162396,
    area: '华南区',
    province: '广东省',
    city: '中山',
    contact: '秦生',
    telephone: '1234567890',
    address: '中山市',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 1300,
    createdDate: '2014-02-14 14:14:14',
    boole: false,
    assets: '1500000',
    rate: 0.6
  },
  {
    id: '4',
    name: 'TGB科技YX公司',
    userId: 702973890055088,
    area: '华东区',
    province: '福建省',
    city: '龙岩',
    contact: '周生',
    telephone: '1234567890',
    address: '龙岩',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 360,
    createdDate: '2013-01-13 13:13:13',
    boole: true,
    assets: '1200000',
    rate: 0.5
  },
  {
    id: '5',
    name: 'YHN科技YX公司',
    userId: 702973890055088,
    area: '华南区',
    province: '广东省',
    city: '韶关',
    contact: '郑生',
    telephone: '1234567890',
    address: '韶关',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 810,
    createdDate: '2012-12-12 12:12:12',
    boole: true,
    assets: '1500000',
    rate: 0.6
  },
  {
    id: '6',
    name: 'WSX科技YX公司',
    userId: 441047913162396,
    area: '华中区',
    province: '湖北省',
    city: '黄冈',
    contact: '陈生',
    telephone: '1234567890',
    address: '黄冈',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 800,
    createdDate: '2011-11-11 11:11:11',
    boole: true,
    assets: '1500000',
    rate: 0.6
  },
  {
    id: '7',
    name: 'KBG物业YX公司',
    userId: 421000103624183,
    area: '华中区',
    province: '湖北省',
    city: '赤壁',
    contact: '王二',
    telephone: '1234567890',
    address: '赤壁',
    introduction:
      '公司治理结构严格按现代企业制度设计，管理机构设置合理，制度完善，各部门分工明确、协作顺畅。拥有中、高级职称或大学本科以上学历的人员占职工总人数的80%以上，具有雄厚的资金实力和高度专业化的项目开发管理能力，是一支具有强烈的社会责任感和引领房地产业科技创新的地产新军。',
    employees: 400,
    createdDate: '2016-04-30 23:56:00',
    boole: false,
    assets: '2000000',
    rate: 0.7
  },
  {
    id: '8',
    name: '深圳市福德宝网络技术YX公司',
    userId: 421000103624183,
    address: '厦门岛内',
    area: '华东区',
    assets: '2000000',
    boole: true,
    city: '厦门',
    contact: '李四',
    createdDate: '2016-06-03 13:53:25',
    employees: 540,
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    province: '福建省',
    rate: 0.6,
    telephone: '1234567890'
  },
  {
    id: '9',
    name: 'UJM有限责任公司',
    userId: 421000103624183,
    area: '华南区',
    province: '广西省',
    city: '南宁',
    contact: '段生',
    telephone: '1234567890',
    address: '南宁',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 750,
    createdDate: '2014-04-21 11:56:00',
    boole: true,
    assets: '1500000',
    rate: 0.6
  },
  {
    id: '10',
    name: 'IKA有限责任公司',
    userId: 421000103624183,
    area: '华南区',
    province: '广西省',
    city: '北海',
    contact: '谭生',
    telephone: '1234567890',
    address: '北海',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 400,
    createdDate: '2014-09-30 00:56:00',
    boole: false,
    assets: '110000',
    rate: 0.11
  },
  {
    id: '11',
    name: 'TIG管理YX公司',
    userId: 421000103624183,
    area: '华南区',
    province: '广西省',
    city: '桂林',
    contact: '陈生',
    telephone: '1234567890',
    address: '桂林',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 900,
    createdDate: '2014-11-30 00:56:00',
    boole: true,
    assets: '120000',
    rate: 0.13
  },
  {
    id: '12',
    name: 'GGT科技YX公司',
    userId: 441047913162396,
    area: '西南区',
    province: '云南省',
    city: '昆明',
    contact: '周生',
    telephone: '1234567890',
    address: '昆明',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 500,
    createdDate: '2014-03-20 02:50:00',
    boole: false,
    assets: '100000',
    rate: 0.1
  },
  {
    id: '13',
    name: 'YYSYX公司',
    userId: 441047913162396,
    area: '西南区',
    province: '云南省',
    city: '西双版纳',
    contact: '廖生',
    telephone: '1234567890',
    address: '西双版纳',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 985,
    createdDate: '2015-07-28 11:37:00',
    boole: true,
    assets: '120000',
    rate: 0.12
  },
  {
    id: '14',
    name: 'VBN有限责任公司',
    userId: 421000103624183,
    area: '西南区',
    province: '云南省',
    city: '大理',
    contact: '欧生',
    telephone: '1234567890',
    address: '大理',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 598,
    createdDate: '2014-04-30 00:56:00',
    boole: false,
    assets: '220000',
    rate: 0.22
  },
  {
    id: '15',
    name: '深圳万众科技YX公司',
    userId: 441047913162396,
    area: '华中区',
    province: '湖北省',
    city: '武汉',
    contact: '阮生',
    telephone: '1234567890',
    address: '武汉',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 725,
    createdDate: '2014-04-30 00:56:00',
    boole: true,
    assets: '2500000',
    rate: 0.8
  },
  {
    id: '16',
    name: '深圳云创信息技术YX公司',
    userId: 421000103624183,
    area: '华中区',
    province: '湖北省',
    city: '十堰',
    contact: '邓生',
    telephone: '1234567890',
    address: '十堰',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 632,
    createdDate: '2014-07-30 02:44:00',
    boole: true,
    assets: '3000000',
    rate: 0.85
  },
  {
    id: '17',
    name: '深圳明乐餐饮管理YX公司',
    userId: 441047913162396,
    area: '华中区',
    province: '湖北省',
    city: '潜江',
    contact: '罗生',
    telephone: '1234567890',
    address: '潜江',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 246,
    createdDate: '2013-04-30 00:56:00',
    boole: false,
    assets: '2000000',
    rate: 0.7
  },
  {
    id: '18',
    name: '珠海忆兰居科技YX公司',
    userId: 441047913162396,
    area: '华南区',
    province: '广东省',
    city: '珠海',
    contact: '黄生',
    telephone: '1234567890',
    address: '珠海香洲区',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 592,
    createdDate: '2014-05-30 01:00:00',
    boole: false,
    assets: '1800000',
    rate: 0.66
  },
  {
    id: '19',
    name: '珠海万家医疗科技YX公司',
    userId: 441047913162396,
    area: '华南区',
    province: '广东省',
    city: '广州',
    contact: '刘生',
    telephone: '1234567890',
    address: '广州天河区',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 851,
    createdDate: '2014-04-29 08:56:00',
    boole: false,
    assets: '100000',
    rate: 0.1
  },
  {
    id: '20',
    name: '东莞亿聚礼品YX公司',
    userId: 421000103624183,
    area: '华中区',
    province: '湖北省',
    city: '襄阳',
    contact: '范生',
    telephone: '1234567890',
    address: '襄阳',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 394,
    createdDate: '2014-04-28 10:56:00',
    boole: true,
    assets: '400000',
    rate: 0.4
  }
])

fetchData()

function currentChange(current) {
  custPager.value.currentPage = current
  fetchData()
}

function sizeChange(size) {
  custPager.value.pageSize = size
  fetchData()
}

function fetchData() {
  getData({ page: custPager.value }).then(({ result, page }) => {
    tableData.value = result
    custPager.value.total = page.totalRows
  })
}

function getData({ page }) {
  return new Promise((resolve) => {
    // 此处为用户自定义的服务端分页，排序，过滤服务

    setTimeout(() => {
      const startIndex = (page.currentPage - 1) * page.pageSize
      const allData = mockData.value
      const data = {
        result: allData.slice(startIndex, startIndex + page.pageSize),
        page: Object.assign({}, page, { totalRows: allData.length })
      }

      resolve({ result: data.result, page: data.page })
    }, 500)
  })
}
</script>
