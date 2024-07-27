<template>
  <div>
    <tiny-chart-tree :options="options"></tiny-chart-tree>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartTree as TinyChartTree } from '@opentiny/vue'

const options = ref({
  // 图表类型（线型树图）
  type: 'RingTreeChart',

  // padding控制图表距离容器的上、右、下、左padding值
  padding: [20, 80, 20, 80],

  // 图元的大小，默认值10
  symbolSize: 10,

  // 初始树图的展开层级，最小值为1，默认值1
  initialTreeDepth: 2,

  // data数据采用树状结构
  // name：节点的名称
  // value：节点的数值
  // children： 子节点
  data: [
    {
      name: '节点',
      data: [
        {
          name: 'flares',
          children: [
            {
              name: 'datas',
              children: [
                {
                  name: 'converters',
                  children: [
                    { name: 'Converters', value: 721 },
                    { name: 'DelimitedTextConverter', value: 4291 }
                  ]
                },
                {
                  name: 'DataUtil',
                  value: 3321
                }
              ]
            },
            {
              name: 'display',
              children: [
                { name: 'DirtySprite', value: 8831 },
                { name: 'LineSprite', value: 1731 },
                { name: 'RectSprite', value: 3621 }
              ]
            },
            {
              name: 'flex',
              children: [{ name: 'FlareVis', value: 4111 }]
            },
            {
              name: 'query',
              children: [
                { name: 'AggregateExpression', value: 1611 },
                { name: 'And', value: 1021 },
                { name: 'Arithmetic', value: 3891 },
                { name: 'Average', value: 891 },
                { name: 'BinaryExpression', value: 2891 },
                {
                  name: 'methods',
                  children: [
                    { name: 'add', value: 591 },
                    { name: 'and', value: 331 },
                    { name: 'average', value: 28 },
                    { name: 'count', value: 271 },
                    { name: 'distinct', value: 291 }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})
</script>
