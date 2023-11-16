<template>
  <div class="autocomplete-demo">
    <tiny-autocomplete
      v-model="value"
      value-key="name"
      :fetch-suggestions="querySearch"
      popper-class="my-autocomplete"
      :popper-append-to-body="false"
      placeholder="请输入内容"
    >
      <template #default="{ slotScope }">
        <div class="name">{{ slotScope.name }}</div>
        <span class="addr">{{ slotScope.address }}</span>
      </template>
    </tiny-autocomplete>
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
  return (restaurant) => restaurant.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0
}

function loadAll() {
  return [
    {
      name: 'GFDDDDDDD科技YX公司',
      address: '福州'
    },
    {
      name: 'WWWWWWWWWW科技YX公司',
      address: '深圳福田区'
    },
    {
      name: 'RFVVVVVV有限责任公司',
      address: '中山市'
    },
    {
      name: 'TGBGBBBBBBBBYX公司',
      address: '梅州'
    },
    {
      name: 'YHNNNNNNN科技YX公司',
      address: '韶关'
    },
    {
      name: '康康物业YX公司',
      address: '广州天河区'
    }
  ]
}
</script>

<style>
.my-autocomplete li {
  line-height: normal !important;
  padding: 7px !important;
}

.my-autocomplete li .name {
  text-overflow: ellipsis;
  overflow: hidden;
}

.my-autocomplete li .addr {
  font-size: 12px;
  color: #a29b91;
}
</style>
