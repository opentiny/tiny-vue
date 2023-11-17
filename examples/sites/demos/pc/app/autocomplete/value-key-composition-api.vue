<template>
  <div class="demo-autocomplete">
    <tiny-autocomplete
      v-model="value"
      value-key="name"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
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
  const restaurant = queryString ? restaurants.value.filter(createFilter(queryString)) : restaurants.value

  // 调用 callback 返回建议列表的数据
  cb(restaurant)
}

function createFilter(queryString) {
  return (restaurant) => restaurant.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0
}

function loadAll() {
  return [
    {
      name: 'GFD科技YX公司',
      address: '福州'
    },
    {
      name: 'WWWW科技YX公司',
      address: '深圳福田区'
    },
    {
      name: 'RFV有限责任公司',
      address: '中山市'
    },
    {
      name: 'TGBYX公司',
      address: '梅州'
    },
    {
      name: 'YHN科技YX公司',
      address: '韶关'
    },
    {
      name: '康康物业YX公司',
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
