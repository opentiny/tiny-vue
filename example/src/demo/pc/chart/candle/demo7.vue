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
      // 设置 dataRoom 控件
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
            日期: '2004-02-03',
            open: 10499.48,
            close: 10505.18,
            lowest: 10414.15,
            highest: 10571.48,
            vol: 183810000
          },
          {
            日期: '2004-02-04',
            open: 10503.11,
            close: 10470.74,
            lowest: 10394.81,
            highest: 10567.85,
            vol: 227760000
          },
          {
            日期: '2004-02-05',
            open: 10469.33,
            close: 10495.55,
            lowest: 10399.92,
            highest: 10566.37,
            vol: 187810000
          },
          {
            日期: '2004-02-06',
            open: 10494.89,
            close: 10593.03,
            lowest: 10433.74,
            highest: 10634.81,
            vol: 182880000
          },
          {
            日期: '2004-02-09',
            open: 10592.41,
            close: 10579.03,
            lowest: 10433.72,
            highest: 10634.81,
            vol: 160720000
          },
          {
            日期: '2004-02-10',
            open: 10578.74,
            close: 10613.85,
            lowest: 10511.18,
            highest: 10667.03,
            vol: 160590000
          },
          {
            日期: '2004-02-11',
            open: 10605.48,
            close: 10737.72,
            lowest: 10561.55,
            highest: 10779.41,
            vol: 277850000
          },
          {
            日期: '2004-02-12',
            open: 10735.18,
            close: 10694.07,
            lowest: 10636.44,
            highest: 10775.03,
            vol: 197560000
          },
          {
            日期: '2004-02-13',
            open: 10696.22,
            close: 10627.85,
            lowest: 10578.66,
            highest: 10755.47,
            vol: 208340000
          },
          {
            日期: '2004-02-17',
            open: 10628.88,
            close: 10714.88,
            lowest: 10628.88,
            highest: 10762.07,
            vol: 169730000
          },
          {
            日期: '2004-02-18',
            open: 10706.68,
            close: 10671.99,
            lowest: 10623.62,
            highest: 10764.36,
            vol: 164370000
          },
          {
            日期: '2004-02-19',
            open: 10674.59,
            close: 10664.73,
            lowest: 10626.44,
            highest: 10794.95,
            vol: 219890000
          },
          {
            日期: '2004-02-20',
            open: 10666.29,
            close: 10619.03,
            lowest: 10559.11,
            highest: 10722.77,
            vol: 220560000
          },
          {
            日期: '2004-02-23',
            open: 10619.55,
            close: 10609.62,
            lowest: 10508.89,
            highest: 10711.84,
            vol: 229950000
          },
          {
            日期: '2004-02-24',
            open: 10609.55,
            close: 10566.37,
            lowest: 10479.33,
            highest: 10681.41,
            vol: 225670000
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
        showDataZoom: true,
        start: 20,
        end: 100
      }
    }
  }
}
</script>
