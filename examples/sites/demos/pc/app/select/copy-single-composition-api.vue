<template>
  <div>
    <p>场景1：单选无需配置可复制</p>
    <br />
    <tiny-select v-model="value1" :options="options1"> </tiny-select>
    <br /><br />
    <p>场景2：单选可搜索配置 allow-copy 可复制</p>
    <br />
    <tiny-select ref="selectRef" v-model="value1" :options="options1" filterable :filter-method="filter" allow-copy>
    </tiny-select>
    <br /><br />

    <p>场景3：单选远程搜索配置 allow-copy 可复制</p>
    <br />
    <tiny-select
      v-model="value2"
      filterable
      remote
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
      loading-text="Loading..."
      allow-copy
    >
      <tiny-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br /><br />
    <p class="font-style">粘贴至此处：</p>
    <br />
    <tiny-input v-model="inputVal" type="text" class="custom"></tiny-input>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Select as TinySelect, Option as TinyOption, Input as TinyInput } from '@opentiny/vue'

const options1 = ref([
  { value: '选项1', label: '北京' },
  { value: '选项2', label: '上海' },
  { value: '选项3', label: '天津' },
  { value: '选项4', label: '重庆' },
  { value: '选项5', label: '深圳' }
])
const options2 = ref([])
const value1 = ref('选项1')
const value2 = ref('Alabama')
const inputVal = ref('')
const selectRef = ref(null)
const loading = ref(false)
const list = ref([])

const filter = (value) => {
  const select = selectRef.value

  if (value) {
    select.state.cachedOptions.forEach((item) => {
      item.state.visible = item.label.includes(value)
    })
  } else {
    select.state.cachedOptions.forEach((item) => {
      item.state.visible = true
    })
  }
}

const remoteMethod = (query) => {
  if (query !== undefined) {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      options2.value = list.value.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase())
      })
    }, 200)
  } else {
    options2.value = []
  }
}

onMounted(() => {
  const states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ]

  list.value = states.map((item) => {
    return { value: item, label: item }
  })
})
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}

p {
  font-size: 14px;
  line-height: 1.5;
}
</style>
