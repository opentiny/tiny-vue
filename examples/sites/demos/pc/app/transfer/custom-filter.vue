<template>
  <tiny-transfer
    v-model="value"
    :data="data"
    filterable
    :filter-method="filterMethod"
    filter-placeholder="请输入城市拼音"
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
      const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都']
      const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu']

      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        })
      })

      return data
    }

    return {
      data: generateData(),
      value: [1, 4]
    }
  },
  methods: {
    filterMethod(query, item) {
      return item.pinyin.includes(query)
    }
  }
}
</script>
