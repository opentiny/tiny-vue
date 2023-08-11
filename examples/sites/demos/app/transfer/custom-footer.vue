<template>
  <tiny-transfer v-model="value" :data="data">
    <template #left-footer>
      <tiny-button class="transfer-footer" size="mini">操作</tiny-button>
    </template>
    <template #right-footer>
      <tiny-button class="transfer-footer" size="mini">操作</tiny-button>
    </template>
  </tiny-transfer>
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
  }
}
</script>

<style scoped>
.transfer-footer {
  margin-left: 20px;
}
</style>
