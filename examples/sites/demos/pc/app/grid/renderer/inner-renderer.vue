<template>
  <div>
    <tiny-grid :data="tableData">
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column
        field="createdDate"
        title="内置列渲染date"
        format-text="date"
        :format-config="{ dateFormat: 'MM/dd/yyyy' }"
      ></tiny-grid-column>
      <tiny-grid-column
        field="assets"
        title="内置列渲染money"
        :format-config="moneyConfig"
        format-text="money"
      ></tiny-grid-column>
      <tiny-grid-column
        field="introduction"
        title="内置列渲染ellipsis"
        format-text="ellipsis"
        :format-config="{ len: 8 }"
      ></tiny-grid-column>
      <tiny-grid-column
        field="rate"
        title="内置列渲染rate"
        :format-config="rateConfig"
        format-text="rate"
      ></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script lang="jsx">
import { Grid, GridColumn } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  data() {
    return {
      rateConfig: {
        // 保留小数点后几位
        fraction: 1,
        // 以总数算出百分比
        total: 1,
        // 三段分界区域数值
        section: [30, 60, 90]
        // 自定义渲染方法
        // rateMethod($table,value, format)=> '100%''
      },
      moneyConfig: {
        // 保留小数点后几位
        fraction: 1,
        // 货币符号
        flag: '￥{0}'
      },
      tableData: [
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
          ipaddress: '192.168.111.111',
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
          ipaddress: '192.168.111.1',
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
          ipaddress: '192.168.111.120',
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
          ipaddress: '192.168.11.111',
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
          ipaddress: '192.168.101.111',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 810,
          createdDate: '2012-12-12 12:12:12',
          boole: true,
          assets: '1500000',
          rate: 0.6
        }
      ]
    }
  }
}
</script>
