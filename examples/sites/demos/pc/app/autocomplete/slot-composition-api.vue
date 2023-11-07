<template>
  <div class="demo-autocomplete">
    <tiny-autocomplete class="pend-slot" v-model="value" placeholder="请输入内容" :fetch-suggestions="querySearch">
      <template #prepend>前置内容</template>
      <template #append>后置内容</template>
    </tiny-autocomplete>
    <tiny-autocomplete class="fix-slot" v-model="value" placeholder="请输入内容" :fetch-suggestions="querySearch">
      <template #prefix>
        <tiny-icon-edit />
      </template>
      <template #suffix>
        <tiny-icon-association />
      </template>
    </tiny-autocomplete>
    <tiny-autocomplete class="default-slot" v-model="value" :fetch-suggestions="querySearch">
      <template #default="{ slotScope }">
        <div>{{ slotScope.value }}</div>
        <span class="default-slot-buttom">{{ slotScope.address }}</span>
      </template>
    </tiny-autocomplete>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Autocomplete as TinyAutocomplete } from '@opentiny/vue'
import { iconEdit, iconAssociation } from '@opentiny/vue-icon'

const restaurants = ref([])
const value = ref('')
const TinyIconEdit = iconEdit()
const TinyIconAssociation = iconAssociation()

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
.pend-slot, .fix-slot {
  margin-right: 12px;
}

.default-slot-buttom {
  font-size: 12px;
  color: #a29b91
}
</style>
