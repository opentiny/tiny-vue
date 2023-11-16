<template>
  <div class="demo-autocomplete">
    <tiny-autocomplete
      v-model="value"
      highlight-first-item
      placeholder="请输入内容"
      :fetch-suggestions="querySearch"
    ></tiny-autocomplete>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Autocomplete as TinyAutocomplete } from '@opentiny/vue'

const restaurants = ref([])
const value = ref('')

onMounted(() => {
  restaurants.value = loadAll()
})

function querySearch(queryString, cb) {
  let results = queryString ? restaurants.value.filter(createFilter(queryString)) : restaurants.value

  // 调用 callback 返回建议列表的数据
  cb(results)
}

function createFilter(queryString) {
  return (restaurant) => restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
}

function loadAll() {
  return [
    {
      value: 'GGG科技YX公司',
      address: '深圳'
    },
    {
      value: 'GFD科技YX公司',
      address: '福州'
    },
    {
      value: 'WWWW科技YX公司',
      address: '深圳福田区'
    },
    {
      value: 'RFV有限责任公司',
      address: '中山市'
    },
    {
      value: 'TGBYX公司',
      address: '梅州'
    },
    {
      value: 'YHN科技YX公司',
      address: '韶关'
    },
    {
      value: '康康物业YX公司',
      address: '广州天河区'
    }
  ]
}
</script>

<style scoped>
.demo-autocomplete .tiny-autocomplete {
  width: 270px;
}
</style>
