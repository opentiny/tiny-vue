<template>
  <tiny-grid
    :tooltip-config="{
      placement: 'top',
      visibleArrow: true,
      enterable: true,
      effect: 'light'
    }"
    :data="tableData"
  >
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column type="selection" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称" show-tip></tiny-grid-column>
    <tiny-grid-column field="address" title="地址" show-overflow="title"></tiny-grid-column>
    <tiny-grid-column field="created_date" title="创建日期" show-overflow="tooltip"></tiny-grid-column>
    <tiny-grid-column field="city" title="城市文字" show-overflow="ellipsis"></tiny-grid-column>
  </tiny-grid>
</template>

<script>
import { Grid, GridColumn } from '@opentiny/vue'

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
          name: 'GFD科技公司 GFD科技公司 GFD科技公司 GFD科技公司 GFD科技公司',
          city: '福州 福州 福州 福州 福州 福州 福州 福州 福州 福州',
          address: '中国广东省深圳龙岗区阳光普照公寓',
          created_date: '2014-04-30 00:56:00 2014-04-30 00:56:00 2014-04-30 00:56:00 2014-04-30 00:56:00'
        },
        {
          id: '2',
          name: 'WWW科技公司',
          city: '深圳',
          address: '深圳福田区',
          created_date: '2016-07-08 12:36:22'
        },
        {
          id: '3',
          name: 'RFV有限责任公司',
          city: '中山',
          address: '深圳福田区',
          created_date: '2014-02-14 14:14:14'
        },
        {
          id: '4',
          name: 'TGB科技公司',
          city: '龙岩',
          address: '深圳福田区',
          created_date: '2013-01-13 13:13:13'
        },
        {
          id: '5',
          name: 'YHN科技公司',
          city: '韶关',
          address: '深圳福田区',
          created_date: '2012-12-12 12:12:12'
        },
        {
          id: '6',
          name: 'WSX科技公司',
          city: '黄冈',
          address: '深圳福田区',
          created_date: '2011-11-11 11:11:11'
        },
        {
          id: '7',
          name: 'KBG物业公司',
          city: '赤壁',
          address: '深圳福田区',
          created_date: '2016-04-30 23:56:00'
        },
        {
          id: '8',
          name: 'SZ市福德宝网络技术公司',
          city: '厦门',
          address: '深圳福田区',
          created_date: '2016-06-03 13:53:25'
        }
      ]
    }
  }
}
</script>
