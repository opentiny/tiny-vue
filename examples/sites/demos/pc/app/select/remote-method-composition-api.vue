<template>
  <div>
    <p>场景1：远程搜索单选</p>
    <tiny-select
      v-model="value1"
      filterable
      remote
      :remote-method="remoteMethod1"
      :loading="loading1"
      loading-text="Loading..."
    >
      <tiny-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <p>场景2：远程搜索多选 + 保留搜索关键字</p>
    <tiny-select
      v-model="value2"
      filterable
      multiple
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod2"
      :loading="loading2"
      loading-text="Loading..."
    >
      <tiny-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <p>场景3：获焦时触发远程搜索</p>
    <tiny-select
      v-model="value3"
      ref="selectRef"
      filterable
      remote
      :remote-method="remoteMethod3"
      :loading="loading3"
      loading-text="Loading..."
    >
      <tiny-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Select as TinySelect, Option as TinyOption } from '@opentiny/vue'

const loading1 = ref(false)
const loading2 = ref(false)
const loading3 = ref(false)
const value1 = ref('')
const value2 = ref([])
const value3 = ref('')
const options1 = ref([])
const options2 = ref([])
const options3 = ref([])
const list = ref([])
const selectRef = ref(null)

const remoteMethod1 = (query) => {
  if (query !== undefined) {
    loading1.value = true
    setTimeout(() => {
      loading1.value = false
      options1.value = list.value.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase())
      })
    }, 200)
  } else {
    options1.value = []
  }
}

const remoteMethod2 = (query) => {
  if (query !== undefined) {
    loading2.value = true
    setTimeout(() => {
      loading2.value = false
      options2.value = list.value.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase())
      })
    }, 200)
  } else {
    options2.value = []
  }
}

const remoteMethod3 = (query) => {
  if (query !== undefined) {
    loading3.value = true
    setTimeout(() => {
      loading3.value = false
      options3.value = list.value.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase())
      })
    }, 300)
  } else {
    options3.value = []
  }
}

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

onMounted(() => {
  list.value = states.map((item) => {
    return { value: item, label: item }
  })

  selectRef.value.state.previousQuery = undefined
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
