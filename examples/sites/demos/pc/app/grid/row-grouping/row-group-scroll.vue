<template>
  <tiny-grid
    height="320px"
    class="grid-grouping"
    column-min-width="180px"
    :row-group="rowGroup"
    :optimization="optimization"
    :data="data"
  >
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column type="selection" width="60"></tiny-grid-column>

    <tiny-grid-column field="city" title="城市" :filter="cityFilter" sortable></tiny-grid-column>
    <tiny-grid-column field="area" title="区域" :filter="cityFilter" sortable></tiny-grid-column>
    <tiny-grid-column field="province" title="省份" sortable></tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称" sortable></tiny-grid-column>
    <tiny-grid-column field="telephone" title="联系电话" sortable></tiny-grid-column>

    <tiny-grid-column field="city" title="城市 1" sortable></tiny-grid-column>
    <tiny-grid-column field="area" title="区域 1" sortable></tiny-grid-column>
    <tiny-grid-column field="province" title="省份 1" sortable></tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称 1" sortable></tiny-grid-column>
    <tiny-grid-column field="telephone" title="联系电话 1" sortable></tiny-grid-column>

    <tiny-grid-column field="city" title="城市 2" sortable></tiny-grid-column>
    <tiny-grid-column field="area" title="区域 2" sortable></tiny-grid-column>
    <tiny-grid-column field="province" title="省份 2" sortable></tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称 2" sortable></tiny-grid-column>
    <tiny-grid-column field="telephone" title="联系电话 2" sortable></tiny-grid-column>

    <tiny-grid-column field="city" title="城市 3" sortable></tiny-grid-column>
    <tiny-grid-column field="area" title="区域 3" sortable></tiny-grid-column>
    <tiny-grid-column field="province" title="省份 3" sortable></tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称 3" sortable></tiny-grid-column>
    <tiny-grid-column field="telephone" title="联系电话 3" sortable></tiny-grid-column>

    <tiny-grid-column field="city" title="城市 4" sortable></tiny-grid-column>
    <tiny-grid-column field="area" title="区域 4" sortable></tiny-grid-column>
    <tiny-grid-column field="province" title="省份 4" sortable></tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称 4" sortable></tiny-grid-column>
    <tiny-grid-column field="telephone" title="联系电话 4" sortable></tiny-grid-column>

    <tiny-grid-column field="city" title="城市 5" sortable></tiny-grid-column>
    <tiny-grid-column field="area" title="区域 5" sortable></tiny-grid-column>
    <tiny-grid-column field="province" title="省份 5" sortable></tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称 5" sortable></tiny-grid-column>
    <tiny-grid-column field="telephone" title="联系电话 5" sortable></tiny-grid-column>
  </tiny-grid>
</template>

<script>
import { TinyGrid, TinyGridColumn } from '@opentiny/vue'

const codePointA = 'A'.codePointAt(0)
const areas = ['华东区', '华南区', '华中区', '西南区']
const provinces = ['福建省', '广东省', '湖北省', '广西省', '云南省']
const citys = ['福州', '深圳', '中山', '龙岩', '韶关', '黄冈', '赤壁', '厦门', '南宁', '北海', '桂林', '昆明']
const getChar = () => String.fromCodePoint(codePointA + Math.floor(Math.random() * 26))
const getName = () => `${getChar()}${getChar()}${getChar()}科技有限公司`
const getArea = () => areas[Math.floor(Math.random() * 4)]
const getProvince = () => provinces[Math.floor(Math.random() * 5)]
const getCity = () => citys[Math.floor(Math.random() * 12)]
const getTelephone = (i) => '188' + String(i).padStart(8, '0')
const row = { id: '', name: '', area: '', province: '', city: '', telephone: '' }
const total = 10000
const rows = Array(total)
  .fill(0)
  .map((item, i) => {
    const r = JSON.parse(JSON.stringify(row))
    r.id = i + 1
    r.name = getName()
    r.area = getArea()
    r.province = getProvince()
    r.city = getCity()
    r.telephone = getTelephone(i)
    return r
  })

export default {
  components: {
    TinyGrid,
    TinyGridColumn
  },
  data() {
    return {
      rowGroup: { field: 'area' },
      optimization: {
        scrollX: { gt: 15, rSize: 14, vSize: 10 },
        scrollY: { gt: 15, rSize: 20 }
      },
      data: rows,
      cityFilter: {
        multi: true,
        enumable: true,
        defaultFilter: false,
        inputFilter: false
      }
    }
  }
}
</script>

<style>
.grid-grouping .tiny-badge {
  display: inline-block;
  min-width: 20px;
  height: 20px;
  line-height: 20px;
  padding: 0 4px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  vertical-align: baseline;
  white-space: nowrap;
  text-align: center;
  background-color: #f5222d;
  border-radius: 50%;
}
</style>
