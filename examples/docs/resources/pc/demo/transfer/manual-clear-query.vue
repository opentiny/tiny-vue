<template>
  <div>
    <tiny-button style="margin-bottom: 20px" @click="clearQuery">重置查询</tiny-button>
    <tiny-transfer ref="transfer" v-model="value" :data="data" filterable></tiny-transfer>
  </div>
</template>

<script lang="jsx">
import { Transfer, Button } from '@opentiny/vue'

export default {
  components: {
    TinyTransfer: Transfer,
    TinyButton: Button
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
  },
  methods: {
    clearQuery() {
      this.$refs.transfer.clearQuery('left')
      this.$refs.transfer.clearQuery('right')
    }
  }
}
</script>
