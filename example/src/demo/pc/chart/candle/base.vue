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
            日期: '2004-01-06',
            open: 10543.85,
            close: 10538.66,
            lowest: 10454.37,
            highest: 10584.07,
            vol: 191460000
          },
          {
            日期: '2004-01-07',
            open: 10535.46,
            close: 10529.03,
            lowest: 10432.12,
            highest: 10587.55,
            vol: 225490000
          },
          {
            日期: '2004-01-08',
            open: 10530.07,
            close: 10592.44,
            lowest: 10480.59,
            highest: 10651.99,
            vol: 237770000
          },
          {
            日期: '2004-01-09',
            open: 10589.25,
            close: 10458.89,
            lowest: 10420.52,
            highest: 10603.48,
            vol: 223250000
          },
          {
            日期: '2004-01-12',
            open: 10461.55,
            close: 10485.18,
            lowest: 10389.85,
            highest: 10543.03,
            vol: 197960000
          },
          {
            日期: '2004-01-13',
            open: 10485.18,
            close: 10427.18,
            lowest: 10341.19,
            highest: 10539.25,
            vol: 197310000
          },
          {
            日期: '2004-01-14',
            open: 10428.67,
            close: 10538.37,
            lowest: 10426.89,
            highest: 10573.85,
            vol: 186280000
          },
          {
            日期: '2004-01-15',
            open: 10534.52,
            close: 10553.85,
            lowest: 10454.52,
            highest: 10639.03,
            vol: 260090000
          },
          {
            日期: '2004-01-16',
            open: 10556.37,
            close: 10600.51,
            lowest: 10503.71,
            highest: 10666.88,
            vol: 254170000
          },
          {
            日期: '2004-01-20',
            open: 10601.42,
            close: 10528.66,
            lowest: 10447.92,
            highest: 10676.96,
            vol: 224300000
          },
          {
            日期: '2004-01-21',
            open: 10522.77,
            close: 10623.62,
            lowest: 10453.11,
            highest: 10665.72,
            vol: 214920000
          },
          {
            日期: '2004-01-22',
            open: 10624.22,
            close: 10623.18,
            lowest: 10545.03,
            highest: 10717.41,
            vol: 219720000
          },
          {
            日期: '2004-01-23',
            open: 10625.25,
            close: 10568.29,
            lowest: 10490.14,
            highest: 10691.77,
            vol: 234260000
          },
          {
            日期: '2004-01-26',
            open: 10568.12,
            close: 10702.51,
            lowest: 10510.44,
            highest: 10725.18,
            vol: 186170000
          },
          {
            日期: '2004-01-27',
            open: 10701.11,
            close: 10609.92,
            lowest: 10579.33,
            highest: 10748.81,
            vol: 206560000
          },
          {
            日期: '2004-01-28',
            open: 10610.07,
            close: 10468.37,
            lowest: 10412.44,
            highest: 10703.25,
            vol: 247660000
          },
          {
            日期: '2004-01-29',
            open: 10467.41,
            close: 10510.29,
            lowest: 10369.92,
            highest: 10611.56,
            vol: 273970000
          },
          {
            日期: '2004-01-30',
            open: 10510.22,
            close: 10488.07,
            lowest: 10385.56,
            highest: 10551.03,
            vol: 208990000
          },
          {
            日期: '2004-02-02',
            open: 10487.78,
            close: 10499.18,
            lowest: 10395.55,
            highest: 10614.44,
            vol: 224800000
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
      chartSettings: {}
    }
  }
}
</script>
