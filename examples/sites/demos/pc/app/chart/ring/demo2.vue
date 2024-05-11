<template>
  <div>
    <tiny-ring :options="options"></tiny-ring>
  </div>
</template>

<script lang="jsx">
import { ChartRing } from '@opentiny/vue'

export default {
  components: {
    TinyRing: ChartRing
  },
  data() {
    return {
      options: {
        type: 'multi-circle',
        position: {
          center: ['50%', '45%']
        },
        title: {
          text: '345',
          subtext: '总数量\n(用户数)',
          top: '40%',
          itemGap: 12,
          textStyle: {
            fontSize: 42
          }
        },
        legend: {
          show: true,
          offset: 30,
          position: {
            left: 'center',
            bottom: 70
          }
        },
        data: [
          {
            name: 'VPC',
            value: 100,
            children: [
              { name: 'VPC_1', value: 20 },
              { name: 'VPC_2', value: 80 }
            ]
          },
          {
            name: 'IM',
            value: 100,
            children: [
              { name: 'IM_1', value: 30 },
              { name: 'IM_2', value: 50 }
            ]
          },
          {
            name: 'EIP',
            value: 100,
            children: [
              { name: 'EIP_1', value: 10 },
              { name: 'EIP_2', value: 40 }
            ]
          }
        ]
      }
    }
  }
}
</script>
