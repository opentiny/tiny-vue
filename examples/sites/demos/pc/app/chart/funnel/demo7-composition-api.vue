<template>
  <div>
    <tiny-chart-funnel :options="options"></tiny-chart-funnel>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { HuichartsFunnel as TinyChartFunnel } from '@opentiny/vue'

const options = ref({
  tipHtml: (params, ticket, callback) => {
    let htmlString =
      'div' +
      '<span style="display:inline-block;min-width:50px;">名称: </span>' +
      '<span style="font-weight:bold">' +
      params.name +
      '</span>' +
      '</div>'
    htmlString +=
      'div' +
      '<span style="display:inline-block;min-width:50px;">百分比: </span>' +
      '<span style="font-weight:bold">' +
      params.value +
      '</span>' +
      '</div>'
    return htmlString
  },
  data: [
    { value: 100, name: 'Show' },
    { value: 75, name: 'Click' },
    { value: 50, name: 'Visit' },
    { value: 25, name: 'Order' }
  ]
})
</script>
