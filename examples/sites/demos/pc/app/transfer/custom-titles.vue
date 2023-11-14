<template>
  <tiny-transfer
    v-model="value"
    :data="data"
    :titles="['所有数据列表', '已选数据列表']"
    :format="{
      noChecked: '未勾选 / 共${total}',
      hasChecked: '已选择${checked} / 共${total}'
    }"
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
      value: [1, 4]
    }
  }
}
</script>
