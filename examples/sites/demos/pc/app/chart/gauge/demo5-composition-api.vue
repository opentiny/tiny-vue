<template>
  <div>
    <tiny-gauge :data="chartData" :settings="chartSettings" background-color="#000"></tiny-gauge>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { ChartGauge as TinyGauge } from '@opentiny/vue'

const chartData = reactive({
  columns: ['type', 'value'],
  rows: [
    { type: 'speeding', value: 60 },
    { type: 'rotatingSpeed', value: 10 },
    { type: 'oilGauge', value: 1 }
  ]
})
const chartSettings = reactive({
  dataName: {
    speeding: 'km/h',
    rotatingSpeed: 'x1000 r/min',
    oilGauge: 'gas'
  },
  seriesMap: {
    speeding: {
      min: 0,
      max: 300,
      splitNumber: 12,
      radius: '52%',
      axisLine: {
        lineStyle: {
          color: [
            [0.09, 'lime'],
            [0.82, '#1e90ff'],
            [1, '#ff4500']
          ],
          width: 3,
          shadowColor: '#fefefe',
          shadowBlur: 12
        }
      },
      axisLabel: {
        textStyle: {
          fontWeight: 'bolder',
          color: '#fff',
          shadowColor: '#fefefe',
          shadowBlur: 12
        }
      },
      axisTick: {
        length: 15,
        lineStyle: {
          color: 'auto',
          shadowColor: '#fefefe',
          shadowBlur: 12
        }
      },
      splitLine: {
        length: 5,
        lineStyle: {
          width: 4,
          color: '#fff',
          shadowColor: '#fefefe',
          shadowBlur: 12
        }
      },
      pointer: {
        shadowColor: '#fefefe',
        shadowBlur: 5
      },
      title: {
        textStyle: {
          fontSize: 26,
          fontStyle: 'italic',
          fontWeight: 'bolder',
          color: '#fff',
          shadowColor: '#fefefe',
          shadowBlur: 12
        }
      },
      detail: {
        backgroundColor: 'rgba(30,144,255,0.8)',
        borderWidth: 1,
        borderColor: '#fefefe',
        shadowColor: '#fefefe',
        shadowBlur: 5,
        offsetCenter: [0, '60%'],
        textStyle: {
          fontWeight: 'bolder',
          color: '#fff',
          fontSize: 20
        }
      }
    },
    rotatingSpeed: {
      center: ['12%', '55%'],
      radius: '40%',
      min: 0,
      max: 100,
      endAngle: 50,
      splitNumber: 5,
      axisLine: {
        lineStyle: {
          color: [
            [0.29, 'lime'],
            [0.86, '#1fa0ff'],
            [1, '#fe4502']
          ],
          width: 3,
          shadowColor: '#fefefe',
          shadowBlur: 12
        }
      },
      axisLabel: {
        textStyle: {
          fontWeight: 'bolder',
          color: '#fff',
          shadowColor: '#fefefe',
          shadowBlur: 12
        }
      },
      axisTick: {
        length: 12,
        lineStyle: {
          color: 'auto',
          shadowColor: '#fefefe',
          shadowBlur: 12
        }
      },
      splitLine: {
        length: 12,
        lineStyle: {
          width: 3,
          color: '#fff',
          shadowColor: '#fefefe',
          shadowBlur: 12
        }
      },
      pointer: {
        width: 5,
        shadowColor: '#fefefe',
        shadowBlur: 5
      },
      title: {
        offsetCenter: ['50%', '20%'],
        textStyle: {
          fontStyle: 'italic',
          color: '#fcfcfc',
          fontWeight: 'bolder',
          shadowColor: '#fefefe',
          shadowBlur: 12
        }
      },
      detail: {
        borderColor: '#fcfcfc',
        shadowColor: '#fefefe',
        width: 20,
        shadowBlur: 5,
        height: 20,
        offsetCenter: [40, '45%'],
        textStyle: {
          fontWeight: 'bolder',
          color: '#419cf5',
          fontSize: 20
        }
      }
    },
    oilGauge: {
      center: ['80%', '52%'],
      min: 0,
      max: 3,
      radius: '60%',
      startAngle: 135,
      endAngle: 45,
      splitNumber: 3,
      axisLine: {
        lineStyle: {
          color: [
            [0.2, 'lime'],
            [0.8, '#1e90ff'],
            [1, '#ff4500']
          ],
          width: 3,
          shadowColor: '#fefefe',
          shadowBlur: 12
        }
      },
      axisTick: {
        length: 12,
        lineStyle: {
          color: 'auto',
          shadowColor: '#fefefe',
          shadowBlur: 12
        }
      },
      axisLabel: {
        textStyle: {
          fontWeight: 'bolder',
          color: '#fff',
          shadowColor: '#fefefe',
          shadowBlur: 12
        },
        formatter(value) {
          switch (String(value)) {
            case '0':
              return `${value}E`
            case '1':
              return `${value}Gas`
            case '2':
              return `${value}F`
            case '3':
              return `${value}H`
          }
        }
      },
      splitLine: {
        length: 14,
        lineStyle: {
          width: 6,
          color: '#fefefe',
          shadowColor: '#fefefe',
          shadowBlur: 12
        }
      },
      pointer: {
        width: 3,
        shadowColor: '#fefefe',
        shadowBlur: 5
      },
      title: {
        offsetCenter: ['50%', '20%'],
        textStyle: {
          fontStyle: 'italic',
          color: '#ffaebd',
          fontWeight: 'bolder',
          fontSize: 20,
          shadowColor: '#fefefe',
          shadowBlur: 12
        }
      },
      detail: {
        textStyle: {
          fontWeight: 'bolder',
          color: '#419cf5'
        }
      }
    }
  }
})
</script>
