<template>
  <div>
    <p>场景1：配置式配置映射字段</p>
    <tiny-select v-model="value1" multiple :options="options" value-field="val" text-field="text"> </tiny-select>
    <p>场景2：嵌套表格配置映射字段</p>
    <tiny-select
      v-model="value2"
      multiple
      value-field="id"
      text-field="city"
      render-type="grid"
      :grid-op="gridOp"
    ></tiny-select>
  </div>
</template>

<script>
import { Select } from '@opentiny/vue'

export default {
  components: {
    TinySelect: Select
  },
  data() {
    return {
      value1: ['选项1', '选项2'],
      value2: ['001', '002'],
      gridOp: {
        data: [
          { id: '001', area: '华南区', province: '广东省', city: '广州市' },
          { id: '002', area: '华南区', province: '广东省', city: '深圳市' },
          { id: '003', area: '华南区', province: '广东省', city: '珠海市' },
          { id: '004', area: '华南区', province: '广东省', city: '佛山市' },
          { id: '005', area: '华南区', province: '广东省', city: '中山市' }
        ],
        columns: [
          { type: 'selection', title: '' },
          { field: 'area', title: '区域', width: 90 },
          { field: 'province', title: '省份', width: 60 },
          { field: 'city', title: '城市', width: 60 }
        ]
      },
      options: [
        { val: '选项1', text: '黄金糕' },
        { val: '选项2', text: '双皮奶' },
        { val: '选项3', text: '蚵仔煎' },
        { val: '选项4', text: '龙须面' },
        { val: '选项5', text: '北京烤鸭' },
        { val: '选项6', text: '螺蛳粉' },
        { val: '选项7', text: '小龙虾' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
}
</style>
