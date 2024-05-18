<template>
  <div>
    <div>场景1：远程搜索单选</div>
    <br />
    <tiny-base-select
      v-model="value1"
      filterable
      remote
      :remote-method="remoteMethod1"
      :loading="loading1"
      loading-text="Loading..."
    >
      <tiny-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-base-select>
    <br />
    <br />
    <div>场景2：远程搜索多选 + 保留搜索关键字</div>
    <br />
    <tiny-base-select
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
    </tiny-base-select>
    <br />
    <br />
    <div>场景3：获焦时触发远程搜索</div>
    <br />
    <tiny-base-select
      v-model="value3"
      filterable
      remote
      :remote-config="{ autoSearch: true }"
      :remote-method="remoteMethod3"
      :loading="loading3"
      loading-text="Loading..."
    >
      <tiny-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-base-select>
    <br />
    <br />
    <div>场景4：失焦清空查询数据，显示下拉图标</div>
    <br />
    <tiny-base-select
      v-model="value4"
      multiple
      filterable
      remote
      :remote-config="{ clearData: true, showIcon: true }"
      reserve-keyword
      :remote-method="remoteMethod4"
    >
      <tiny-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-base-select>
    <br />
    <br />
    <div>场景5：聚焦时触发搜索，失焦清空查询数据，显示下拉图标</div>
    <br />
    <tiny-base-select
      v-model="value5"
      multiple
      filterable
      remote
      :remote-config="{ autoSearch: true, clearData: true, showIcon: true }"
      reserve-keyword
      :remote-method="remoteMethod5"
      :loading="loading5"
      loading-text="loading..."
    >
      <tiny-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-base-select>

    <br />
    <br />
    <div>场景6：远程搜索配置 trim 属性去除绑定值空格</div>
    <br />
    <tiny-button @click="trim = !trim">trim 为：{{ trim }}</tiny-button>
    <tiny-button @click="changeVal">改变成有空格的值</tiny-button>
    <tiny-button @click="resetVal">重置绑定值</tiny-button>
    <br />
    <br />
    <tiny-base-select
      v-model="value6"
      filterable
      remote
      :remote-config="{ autoSearch: true, clearData: true, showIcon: true }"
      reserve-keyword
      :remote-method="remoteMethod6"
      :loading="loading5"
      loading-text="Loading..."
      :trim="trim"
    >
      <tiny-option v-for="item in options6" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-base-select>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { BaseSelect as TinyBaseSelect, Option as TinyOption, Button as TinyButton } from '@opentiny/vue'

const loading1 = ref(false)
const loading2 = ref(false)
const loading3 = ref(false)
const loading4 = ref(false)
const loading5 = ref(false)
const value1 = ref('')
const value2 = ref([])
const value3 = ref('')
const value4 = ref([])
const value5 = ref([])
const value6 = ref('')
const options1 = ref([])
const options2 = ref([])
const options3 = ref([])
const options4 = ref([])
const options5 = ref([])
const options6 = ref([])
const list = ref([])
const trim = ref(false)

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

const remoteMethod4 = (query) => {
  if (query !== undefined) {
    loading4.value = true
    setTimeout(() => {
      loading4.value = false
      options4.value = list.value.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase())
      })
    }, 300)
  } else {
    options4.value = []
  }
}

const remoteMethod5 = (query) => {
  if (query !== undefined) {
    loading5.value = true
    setTimeout(() => {
      loading5.value = false
      options5.value = list.value.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase())
      })
    }, 300)
  } else {
    options5.value = []
  }
}

const remoteMethod6 = (query) => {
  if (query !== undefined) {
    setTimeout(() => {
      options6.value = list.value.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase())
      })
    }, 300)
  } else {
    options6.value = []
  }
}

const changeVal = () => {
  value6.value = '        Wyoming'
}

const resetVal = () => {
  value6.value = ''
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
})
</script>

<style lang="less" scoped>
.tiny-base-select {
  width: 280px;
}
</style>
