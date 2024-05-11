<template>
  <div>
    <tiny-chart-sankey :options="options"></tiny-chart-sankey>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartSankey as TinyChartSankey } from '@opentiny/vue'

const options = ref({
  padding: [70, 70, 70, 70],
  widthSpace: [10, 30],
  tipHtml: (params, ticket, callback) => {
    if (params.data.value !== 0 && params.data.valueBfb !== '0%') {
      let htmlString = ''
      let value = params.data.value || params.value
      htmlString +=
        '<span style="display:inline-block;margin-right:5px;border-radius:50%;height:10px;">' +
        params.name +
        '</span>' +
        '<br/>' +
        '<span style="display:inline-block;margin-right:5px;border-radius:50%;height: 10px;">' +
        'value' +
        ' : ' +
        value +
        '</span>'
      return htmlString
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
