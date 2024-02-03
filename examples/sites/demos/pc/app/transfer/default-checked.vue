<template>
  <tiny-transfer
    ref="transferRef"
    v-model="value"
    :data="data"
    :left-default-checked="[0, 2, 6]"
    :right-default-checked="[1, 4]"
  ></tiny-transfer>
</template>

<script lang="jsx">
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
      value: [1, 4, 7]
    }
  },
  mounted() {
    console.log(this.$refs.transferRef.state)
  }
}
</script>
