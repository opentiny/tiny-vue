<template>
  <div>
    <tiny-button style="margin-bottom: 20px" @click="clearQuery">重置查询</tiny-button>
    <tiny-transfer
      ref="transferRef"
      v-model="value"
      :data="data"
      filterable
      :filter-method="filterMethod"
      filter-placeholder="请输入城市拼音"
    ></tiny-transfer>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Transfer as TinyTransfer, Button as TinyButton } from '@opentiny/vue'

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

const data = ref(generateData())
const value = ref([1, 4])
const transferRef = ref()

function filterMethod(query, item) {
  return item.pinyin.includes(query)
}
function clearQuery() {
  transferRef.value.clearQuery('left')
  transferRef.value.clearQuery('right')
}
</script>
