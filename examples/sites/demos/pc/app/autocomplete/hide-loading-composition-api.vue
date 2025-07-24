<template>
  <div class="demo-autocomplete">
    <div class="loading-icon">
      <div>默认有加载图标：</div>
      <tiny-autocomplete v-model="value" placeholder="请输入内容" :fetch-suggestions="querySearch"></tiny-autocomplete>
    </div>
    <div class="loading-icon_hide">
      <div>隐藏加载图标：</div>
      <tiny-autocomplete
        v-model="value"
        hide-loading
        placeholder="请输入内容"
        :fetch-suggestions="querySearch"
      ></tiny-autocomplete>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { TinyAutocomplete } from '@opentiny/vue'

const list = ref([])
const value = ref('')

onMounted(() => {
  list.value = loadAll()
})

async function querySearch(queryString, cb) {
  let res = queryString ? list.value.filter(createFilter(queryString)) : list.value

  // 为了演示加载图标的效果，增加 1s 的延时
  await new Promise((resolve) => setTimeout(resolve, 1000))
  // 返回建议列表的数据
  cb(res)
}

function createFilter(queryString) {
  return (listItem) => listItem.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
}

function loadAll() {
  return [
    {
      value: 'GFD 科技公司',
      address: '福州'
    },
    {
      value: 'WWWW 科技公司',
      address: '深圳福田区'
    },
    {
      value: 'RFV 有限责任公司',
      address: '中山市'
    },
    {
      value: 'TGB 公司',
      address: '梅州'
    },
    {
      value: 'YHN 科技公司',
      address: '韶关'
    },
    {
      value: '康康物业公司',
      address: '广州天河区'
    }
  ]
}
</script>

<style scoped>
.demo-autocomplete .tiny-autocomplete {
  display: flex;
  width: 270px;
}

.demo-autocomplete > * > :not(:last-child) {
  margin-bottom: 12px;
}

.loading-icon {
  margin-bottom: 12px;
}
</style>
