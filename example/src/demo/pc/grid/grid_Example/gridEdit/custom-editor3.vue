<template>
  <div>
    <tiny-grid :data="tableData" :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }">
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column field="name" title="插槽自定义列编辑" :editor="{}">
        <template #edit="data">
          <tiny-autocomplete v-model="data.row.name" :fetch-suggestions="querySearch" placeholder="请输入内容"></tiny-autocomplete>
        </template>
      </tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建时间"></tiny-grid-column>
      <tiny-grid-column field="employees" title="人数"></tiny-grid-column>
      <tiny-grid-column field="introduction" title="公司简介"></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script>
import { Grid, GridColumn, Autocomplete } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinyAutocomplete: Autocomplete
  },
  data() {
    return {
      tableData: [
        {
          id: '1',
          name: 'GFD科技公司',
          userId: 421000103624183,
          area: '华东区',
          province: '福建省',
          city: '福州',
          contact: '许生',
          telephone: '1234567890',
          address: '福州',
          ipaddress: '127.0.0.1',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 800,
          created_date: '2014-04-30 00:56:00',
          boole: false,
          assets: '1000000',
          rate: 0.9
        },
        {
          id: '2',
          name: 'WWW科技公司',
          userId: 421000103624183,
          area: '华南区',
          province: '广东省',
          city: '深圳',
          contact: '朱生',
          telephone: '1234567890',
          address: '深圳福田区',
          ipaddress: '127.0.0.1',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 300,
          created_date: '2016-07-08 12:36:22',
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
          ipaddress: '127.0.0.1',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 1300,
          created_date: '2014-02-14 14:14:14',
          boole: false,
          assets: '1500000',
          rate: 0.6
        },
        {
          id: '4',
          name: 'TGB科技公司',
          userId: 655783272594485,
          area: '华东区',
          province: '福建省',
          city: '龙岩',
          contact: '周生',
          telephone: '1234567890',
          address: '龙岩',
          ipaddress: '127.0.0.1',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 360,
          created_date: '2013-01-13 13:13:13',
          boole: true,
          assets: '1200000',
          rate: 0.5
        },
        {
          id: '5',
          name: 'YHN科技公司',
          userId: 655783272594485,
          area: '华南区',
          province: '广东省',
          city: '韶关',
          contact: '郑生',
          telephone: '1234567890',
          address: '韶关',
          ipaddress: '127.0.0.1',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 810,
          created_date: '2012-12-12 12:12:12',
          boole: true,
          assets: '1500000',
          rate: 0.6
        }
      ],
      restaurants: [
        {
          value: 'GFD科技公司',
          address: '福州'
        },
        {
          value: 'WWWW科技公司',
          address: '深圳福田区'
        },
        {
          value: 'RFV有限责任公司',
          address: '中山市'
        },
        {
          value: 'TGB公司',
          address: '梅州'
        },
        {
          value: 'YHN科技公司',
          address: '韶关'
        },
        {
          value: '康康物业公司',
          address: '广州天河区'
        }
      ]
    }
  },
  methods: {
    querySearch(queryString, cb) {
      let list = this.restaurants

      let results = queryString ? list.filter((queryString) => (item) => item.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0) : list

      // 调用 callback 返回建议列表的数据
      cb(results)
    }
  }
}
</script>
