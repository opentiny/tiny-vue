<template>
  <div>
    <tiny-wordcloud :options="options"></tiny-wordcloud>
  </div>
</template>

<script lang="jsx">
import { ChartWordcloud } from '@opentiny/vue'

export default {
  components: {
    TinyWordcloud: ChartWordcloud
  },
  data() {
    return {
      options: {
        data: [
          {
            name: 'visualMap',
            value: 22199
          },
          {
            name: 'continuous',
            value: 10288
          },
          {
            name: 'contoller',
            value: 620
          },
          {
            name: 'series',
            value: 274470
          },
          {
            name: 'gauge',
            value: 12311
          },
          {
            name: 'detail',
            value: 1206
          },
          {
            name: 'piecewise',
            value: 4885
          },
          {
            name: 'textStyle',
            value: 32294
          },
          {
            name: 'markPoint',
            value: 18574
          },
          {
            name: 'pie',
            value: 38929
          },
          {
            name: 'roseType',
            value: 969
          },
          {
            name: 'label',
            value: 37517
          },
          {
            name: 'emphasis',
            value: 12053
          },
          {
            name: 'yAxis',
            value: 57299
          },
          {
            name: 'name',
            value: 15418
          },
          {
            name: 'type',
            value: 22905
          },
          {
            name: 'gridIndex',
            value: 5146
          },
          {
            name: 'normal',
            value: 49487
          },
          {
            name: 'itemStyle',
            value: 33837
          },
          {
            name: 'min',
            value: 4500
          },
          {
            name: 'silent',
            value: 5744
          },
          {
            name: 'animation',
            value: 4840
          },
          {
            name: 'offsetCenter',
            value: 232
          },
          {
            name: 'inverse',
            value: 3706
          },
          {
            name: 'borderColor',
            value: 4812
          },
          {
            name: 'markLine',
            value: 16578
          },
          {
            name: 'line',
            value: 76970
          },
          {
            name: 'radiusAxis',
            value: 6704
          },
          {
            name: 'radar',
            value: 15964
          },
          {
            name: 'data',
            value: 60679
          },
          {
            name: 'dataZoom',
            value: 24347
          },
          {
            name: 'tooltip',
            value: 43420
          },
          {
            name: 'toolbox',
            value: 25222
          },
          {
            name: 'geo',
            value: 16904
          },
          {
            name: 'parallelAxis',
            value: 4029
          }
        ]
      }
    }
  }
}
</script>
