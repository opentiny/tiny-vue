<template>
  <tiny-transfer ref="transfer" v-model="value" :data="data">
    <template #default="optionData">
      <div>
        <span :text="JSON.stringify(optionData.option)">{{ optionData.option.key }} - {{ optionData.option.label }} - customized</span>
      </div>
    </template>
  </tiny-transfer>
</template>

<script>
import { Transfer } from '@opentiny/vue'

export default {
  components: {
    TinyTransfer: Transfer
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
      value: [1, 4]
    }
  }
}
</script>
