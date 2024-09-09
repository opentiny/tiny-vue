<template>
  <div>
    <tiny-ring :options="options"></tiny-ring>
  </div>
</template>

<script lang="jsx">
import { HuichartsRing } from '@opentiny/vue'

export default {
  components: {
    TinyRing: HuichartsRing
  },
  data() {
    return {
      options: {
        title: {
          text: '{a|数量监测}\n{e|平台监测站}{d|}\n{b|373}{c|个}',
          top: '40%',
          textStyle: {
            rich: {
              a: {
                color: '#999',
                fonrSize: 20,
                padding: [0, 0, 10, 0]
              },
              e: {
                color: '#999',
                fontSize: 16,
                padding: [0, 10, 0, 0]
              },
              b: {
                fontSize: 36,
                fontWeight: 'bold',
                padding: [10, 0, 0, 20]
              },
              c: {
                fontSize: 24,
                color: '#bbbbbb',
                padding: [10, 10, 0, 0]
              },
              d: {
                width: 12,
                height: 12,
                backgroundColor: {
                  image: './image/charts/pie/ic_jiantou_hong.svg'
                }
              }
            }
          }
        },
        label: {
          show: false
        },
        data: [
          { value: 100, name: 'VPC' },
          { value: 90, name: 'IM' },
          { value: 49, name: 'EIP' },
          { value: 14, name: 'SG' }
        ]
      }
    }
  }
}
</script>
