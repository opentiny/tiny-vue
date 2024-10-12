<template>
  <div>
    <tiny-radio v-model="viewType" label="mf">表格视图</tiny-radio>
    <tiny-radio v-model="viewType" label="card">卡片视图</tiny-radio>
    <div style="height: 380px">
      <tiny-grid
        height="auto"
        auto-resize
        :optimization="{ scrollX: { gt: 10 }, scrollY: { gt: 10 } }"
        :fetch-data="fetchData"
        :pager="pagerConfig"
        :view-type="viewType"
        :card-config="cardConfig"
      >
        <tiny-grid-column type="index" width="60"></tiny-grid-column>
        <tiny-grid-column field="name" title="名称"></tiny-grid-column>
        <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
        <tiny-grid-column field="address" title="地址"></tiny-grid-column>
        <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
      </tiny-grid>
    </div>
  </div>
</template>

<script>
import { Grid, GridColumn, Pager, Radio } from '@opentiny/vue'

const total = 300
const mockData = () => {
  const names = ['科技有限公司', '有限责任公司', '物业有限公司', '有限公司']
  const areas = ['华东区', '华南区', '华北区']
  const addresses = ['福州', '深圳福田区', '中山市', '梅州', '韶关', '广州天河区']
  const random = (arr) => arr[Math.floor(arr.length * Math.random())]
  const randomPrefix = () => String.fromCodePoint(65 + Math.floor(26 * Math.random()))
  const item = {
    id: '',
    name: '',
    area: '',
    address: '',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  }
  const datas = []

  for (let i = 1; i <= total; i++) {
    let tmp = JSON.parse(JSON.stringify(item))

    tmp.id = String(i)
    tmp.name = randomPrefix() + randomPrefix() + randomPrefix() + random(names)
    tmp.area = random(areas)
    tmp.address = random(addresses)

    datas.push(tmp)
  }

  return datas
}

const tableDatas = mockData()

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinyRadio: Radio
  },
  data() {
    return {
      viewType: 'mf',
      cardConfig: {
        primaryField: 'name',
        contentFields: ['area', 'abc', 'address', 'introduction']
      },
      pagerConfig: {
        component: Pager,
        attrs: {
          currentPage: 1,
          pageSize: 60,
          pageSizes: [5, 10, 60],
          total: 0,
          layout: 'total, sizes, prev, pager, next, jumper'
        }
      },
      fetchData: {
        api: this.getData
      }
    }
  },
  methods: {
    getData({ page: { currentPage, pageSize } }) {
      let offset = (currentPage - 1) * pageSize

      return new Promise((resolve) => {
        setTimeout(() => {
          let result = tableDatas.slice(offset, offset + pageSize)

          resolve({ result, page: { total } })
        }, 500)
      })
    }
  }
}
</script>
