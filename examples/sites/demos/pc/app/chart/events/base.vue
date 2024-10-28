<template>
  <tiny-pie :options="options" :events="chartEvents" judge-width> </tiny-pie>
</template>

<script lang="jsx">
import { HuichartsPie, Modal as TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyPie: HuichartsPie
  },
  data() {
    return {
      options: {
        type: 'pie',
        data: [
          { name: '1/1', value: 1393 },
          { name: '1/2', value: 3530 },
          { name: '1/3', value: 2923 },
          { name: '1/4', value: 1723 },
          { name: '1/5', value: 3792 },
          { name: '1/6', value: 4593 }
        ]
      },
      chartEvents: {
        click: (data) => {
          TinyModal.alert(`被点击日期：${data.name}`)
        }
      }
    }
  }
}
</script>
