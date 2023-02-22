<template>
  <div>
    <tiny-candle :data="chartData" :settings="chartSettings"></tiny-candle>
  </div>
</template>

<script>
import { ChartCandle } from '@opentiny/vue'

export default {
  components: {
    TinyCandle: ChartCandle
  },
  data() {
    return {
      // 修改指标名和图例文字
      chartData: {
        columns: ['日期', 'open', 'close', 'lowest', 'highest', 'vol'],
        rows: [
          {
            日期: '2004-01-05',
            open: 10411.85,
            close: 10544.07,
            lowest: 10411.85,
            highest: 10575.92,
            vol: 221290000
          },
          {
            日期: '2004-02-25',
            open: 10566.59,
            close: 10601.62,
            lowest: 10509.42,
            highest: 10660.73,
            vol: 192420000
          },
          {
            日期: '2004-02-26',
            open: 10598.14,
            close: 10580.14,
            lowest: 10493.71,
            highest: 10652.96,
            vol: 223230000
          },
          {
            日期: '2004-02-27',
            open: 10581.55,
            close: 10583.92,
            lowest: 10519.03,
            highest: 10689.55,
            vol: 200050000
          }
        ]
      },
      chartSettings: {
        showMA: true,
        showVol: true,
        labelMap: {
          MA5: 'ma5'
        },
        legendName: {
          日K: 'day k'
        },
        showDataZoom: true
      }
    }
  }
}
</script>
