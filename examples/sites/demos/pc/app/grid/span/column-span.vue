<template>
  <tiny-grid height="200px" border :span-method="colspanMethod" :data="tableData">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column type="selection" width="60"></tiny-grid-column>
    <tiny-grid-column field="area" title="区域"></tiny-grid-column>
    <tiny-grid-column field="province" title="省份"></tiny-grid-column>
    <tiny-grid-column field="city" title="城市"></tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称"></tiny-grid-column>
    <tiny-grid-column field="telephone" title="联系电话"></tiny-grid-column>
  </tiny-grid>
</template>

<script lang="jsx">
import { TinyGrid, TinyGridColumn } from '@opentiny/vue'

export default {
  components: {
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
          province: '福建省',
          city: '福州',
          telephone: '1234567890'
        },
        {
          id: '2',
          name: 'WWW 科技 YX 公司',
          area: '华南区',
          province: '广东省',
          city: '深圳',
          telephone: '1234567890'
        },
        {
          id: '3',
          name: 'RFV 有限责任公司',
          area: '华南区',
          province: '广东省',
          city: '中山',
          telephone: '1234567890'
        },
        {
          id: '4',
          name: 'TGB 科技 YX 公司',
          area: '华东区',
          province: '福建省',
          city: '龙岩',
          telephone: '1234567890'
        },
        {
          id: '5',
          name: 'YHN 科技 YX 公司',
          area: '华南区',
          province: '广东省',
          city: '韶关',
          telephone: '1234567890'
        },
        {
          id: '6',
          name: 'WSX 科技 YX 公司',
          area: '华中区',
          province: '湖北省',
          city: '黄冈',
          telephone: '1234567890'
        },
        {
          id: '7',
          name: 'KBG 物业 YX 公司',
          area: '华中区',
          province: '湖北省',
          city: '赤壁',
          telephone: '1234567890'
        },
        {
          id: '8',
          name: '深圳市福德宝网络技术 YX 公司',
          address: '厦门岛内',
          area: '华东区',
          city: '厦门',
          telephone: '1234567890'
        },
        {
          id: '9',
          name: 'UJM 有限责任公司',
          area: '华南区',
          province: '广西省',
          city: '南宁',
          telephone: '1234567890'
        },
        {
          id: '10',
          name: 'IKA 有限责任公司',
          area: '华南区',
          province: '广西省',
          city: '北海',
          telephone: '1234567890'
        },
        {
          id: '11',
          name: 'TIG 管理 YX 公司',
          area: '华南区',
          province: '广西省',
          city: '桂林',
          telephone: '1234567890'
        },
        {
          id: '12',
          name: 'GGT 科技 YX 公司',
          area: '西南区',
          province: '云南省',
          city: '昆明',
          telephone: '1234567890'
        }
      ]
    }
  },
  methods: {
    colspanMethod({ rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 2) {
          return {
            rowspan: 1,
            colspan: 2
          }
        } else if (columnIndex === 3) {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
  }
}
</script>
