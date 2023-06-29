<template>
  <div>
    <tiny-heatmap v-if="chartSettings.mapOrigin" :data="chartData" :settings="chartSettings"></tiny-heatmap>
  </div>
</template>

<script lang="jsx">
import { ChartHeatmap } from '@opentiny/vue'
import mapChina from '../mapChina'

export default {
  components: {
    TinyHeatmap: ChartHeatmap
  },
  data() {
    return {
      chartData: {
        columns: ['lat', 'lng', '人数'],
        rows: [
          { lat: 115.892151, lng: 28.676493, 人数: 1000 },
          { lat: 117.000923, lng: 36.675807, 人数: 400 },
          { lat: 113.665412, lng: 34.757975, 人数: 800 },
          { lat: 114.298572, lng: 30.584355, 人数: 200 },
          { lat: 112.982279, lng: 28.19409, 人数: 100 },
          { lat: 113.280637, lng: 23.125178, 人数: 300 },
          { lat: 110.33119, lng: 20.031971, 人数: 800 },
          { lat: 104.065735, lng: 30.659462, 人数: 700 },
          { lat: 108.948024, lng: 34.263161, 人数: 300 },
          { lat: 103.823557, lng: 36.058039, 人数: 500 }
        ]
      },
      // 地图热力图
      chartSettings: {
        mapOrigin: mapChina, // 用户自己的地图数据
        type: 'map',
        geo: {
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#323c48',
              borderColor: '#111'
            },
            emphasis: {
              areaColor: '#2a333d'
            }
          }
        }
      }
    }
  }
}
</script>
