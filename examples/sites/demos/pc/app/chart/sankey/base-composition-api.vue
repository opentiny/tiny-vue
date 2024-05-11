<template>
  <div>
    <tiny-chart-sankey :options="options"></tiny-chart-sankey>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartSankey as TinyChartSankey } from '@opentiny/vue'

const options = ref({
  // 页面节点是否可被拖动,布尔值,默认值为true
  draggable: false,

  // widthSpace, 自定义节点矩形宽度及每列间距, 默认[10, 30]
  widthSpace: [10, 30],

  // value: 传递的数据值,与连接带的高度大小正相关
  sortType: 'unset', // 设置数据的排序方式 ascend decline
  emptyStatus: 'node', // 空节点的展示状态 churnBar
  label: {
    show: true,
    textArrange: 'horizontal', // 设置名称和数值的排列方向 vertical
    overHide: false,
    rich: {
      name: {
        fontSize: 12
      },
      value: {
        fontSize: 12
      }
    }
  },
  data: {
    nodes: [
      { name: '首页', value: 100000 },
      { name: '列表页a', value: 20000 },
      { name: '列表页b', value: 80000 },
      { name: '内容页a-1', value: 10000 },
      { name: '内容页a-2', value: 10000 },
      { name: '内容页b-1', value: 60000 },
      { name: '内容页b-2', value: 20000 }
    ],
    links: [
      { source: '首页', target: '列表页a', value: 0.5 },
      { source: '首页', target: '列表页b', value: 0.5 },
      { source: '列表页a', target: '内容页a-1', value: 0.1 },
      { source: '列表页a', target: '内容页a-2', value: 0.4 },
      { source: '列表页b', target: '内容页b-1', value: 0.2 },
      { source: '列表页b', target: '内容页b-2', value: 0.3 }
    ]
  }
})
</script>
