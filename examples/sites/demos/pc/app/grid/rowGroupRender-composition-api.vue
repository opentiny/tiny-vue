<template>
  <tiny-grid class="row-group-render" height="200px" setting :row-group="renderOp" :data="data">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column type="selection" width="60"></tiny-grid-column>
    <tiny-grid-column field="area" title="区域" sortable></tiny-grid-column>
    <tiny-grid-column field="province" title="省份" sortable></tiny-grid-column>
    <tiny-grid-column field="city" title="城市" sortable></tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称" sortable></tiny-grid-column>
    <tiny-grid-column field="telephone" title="联系电话" sortable></tiny-grid-column>
  </tiny-grid>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn } from '@opentiny/vue'

const data = ref([
  {
    id: '1',
    name: 'GFD科技YX公司',
    area: '华东区',
    province: '福建省',
    city: '福州',
    telephone: '1234567890'
  },
  {
    id: '2',
    name: 'WWW科技YX公司',
    area: '华南区',
    province: '广东省',
    city: '深圳',
    telephone: '1234567890'
  },
  {
    id: '3',
    name: 'RFV有限责任公司',
    area: '华南区',
    province: '广东省',
    city: '中山',
    telephone: '1234567890'
  },
  {
    id: '4',
    name: 'TGB科技YX公司',
    area: '华东区',
    province: '福建省',
    city: '龙岩',
    telephone: '1234567890'
  },
  {
    id: '5',
    name: 'YHN科技YX公司',
    area: '华南区',
    province: '广东省',
    city: '韶关',
    telephone: '1234567890'
  },
  {
    id: '6',
    name: 'WSX科技YX公司',
    area: '华中区',
    province: '湖北省',
    city: '黄冈',
    telephone: '1234567890'
  },
  {
    id: '7',
    name: 'KBG物业YX公司',
    area: '华中区',
    province: '湖北省',
    city: '赤壁',
    telephone: '1234567890'
  },
  {
    id: '8',
    name: '深圳市福德宝网络技术YX公司',
    address: '厦门岛内',
    area: '华东区',
    city: '厦门',
    telephone: '1234567890'
  },
  {
    id: '9',
    name: 'UJM有限责任公司',
    area: '华南区',
    province: '广西省',
    city: '南宁',
    telephone: '1234567890'
  },
  {
    id: '10',
    name: 'IKA有限责任公司',
    area: '华南区',
    province: '广西省',
    city: '北海',
    telephone: '1234567890'
  },
  {
    id: '11',
    name: 'TIG管理YX公司',
    area: '华南区',
    province: '广西省',
    city: '桂林',
    telephone: '1234567890'
  },
  {
    id: '12',
    name: 'GGT科技YX公司',
    area: '西南区',
    province: '云南省',
    city: '昆明',
    telephone: '1234567890'
  }
])
const renderOp = ref({
  field: 'area',
  render: renderGroup,
  closeable: true
})

function renderGroup(h, { value, header, children }) {
  return (
    <span>
      {header}:{value}
      <a>{'当前分组行数为' + children.length}</a>
    </span>
  )
}
</script>

<style>
.row-group-render .tiny-grid-body__column .tiny-grid-cell-group span a {
  color: #3eaf7c;
}
</style>
