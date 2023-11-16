<template>
  <div style="margin-bottom: 12px">
    <span>右侧插入排序策略：</span>
    <tiny-radio v-for="order in ['original', 'push', 'unshift']" v-model="targetOrder" :label="order">
      {{ order }}
    </tiny-radio>
  </div>
  <tiny-transfer v-model="value" :data="data" :target-order="targetOrder"></tiny-transfer>
</template>

<script lang="jsx">
import { Transfer, Radio } from '@opentiny/vue'

export default {
  components: {
    TinyTransfer: Transfer,
    TinyRadio: Radio
  },
  data() {
    const generateData = () => {
      const data = []

      for (let i = 0; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        })
      }

      return data
    }

    return {
      data: generateData(),
      value: [1, 4],
      targetOrder: 'original'
    }
  }
}
</script>
