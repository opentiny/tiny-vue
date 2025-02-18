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
import { TinyAutocomplete } from '@opentiny/vue'

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
      value: 'GGG 科技 YX 公司',
      address: '深圳'
    },
    {
      value: 'GFD 科技 YX 公司',
      address: '福州'
    },
    {
      value: 'WWWW 科技 YX 公司',
      address: '深圳福田区'
    },
    {
      value: 'RFV 有限责任公司',
      address: '中山市'
    },
    {
      value: 'TGBYX 公司',
      address: '梅州'
    },
    {
      value: 'YHN 科技 YX 公司',
      address: '韶关'
    },
    {
      value: '康康物业 YX 公司',
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
