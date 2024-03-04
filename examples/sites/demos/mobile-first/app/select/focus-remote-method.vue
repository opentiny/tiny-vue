<template>
  <div>
    <p>聚焦时触发搜索，配置属性 :remote-config="{ autoSearch: true }"</p>
    <tiny-select
      v-model="value3"
      ref="select"
      filterable
      remote
      :remote-config="{ autoSearch: true }"
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod3"
      :loading="loading"
      loading-text="Loading..."
      title="标题"
    >
      <tiny-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>

    <p>失焦清空查询数据，显示下拉图标，配置属性 :remote-config="{ clearData: true, showIcon: true }"</p>
    <tiny-select
      v-model="value2"
      ref="select"
      filterable
      remote
      :remote-config="{ clearData: true, showIcon: true }"
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod2"
      :loading="loading"
      loading-text="Loading..."
      title="标题"
    >
      <tiny-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>

    <p>
      聚焦时触发搜索，失焦清空查询数据，显示下拉图标，配置属性 :remote-config="{ autoSearch: true, clearData: true,
      showIcon: true }"
    </p>
    <tiny-select
      v-model="value4"
      ref="select"
      filterable
      remote
      :remote-config="{ autoSearch: true, clearData: true, showIcon: true }"
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod4"
      :loading="loading"
      loading-text="Loading..."
    >
      <tiny-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
  </div>
</template>

<script>
import { Select, Option } from '@opentiny/vue'

export default {
  components: {
    TinySelect: Select,
    TinyOption: Option
  },
  data() {
    return {
      loading: false,
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      options1: [],
      options2: [],
      options3: [],
      options4: [],
      list: [],
      states: [
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
    }
  },
  mounted() {
    this.list = this.states.map((item) => {
      return { value: item, label: item }
    })
  },
  methods: {
    remoteMethod1(query) {
      if (query !== undefined) {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options1 = this.list.filter((item) => {
            return item.label.toLowerCase().includes(query.toLowerCase())
          })
        }, 200)
      } else {
        this.options1 = []
      }
    },
    remoteMethod2(query) {
      if (query !== undefined) {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options2 = this.list.filter((item) => {
            return item.label.toLowerCase().includes(query.toLowerCase())
          })
        }, 200)
      } else {
        this.options2 = []
      }
    },
    remoteMethod3(query) {
      if (query !== undefined) {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options3 = this.list.filter((item) => {
            return item.label.toLowerCase().includes(query.toLowerCase())
          })
        }, 200)
      } else {
        this.options3 = []
      }
    },
    remoteMethod4(query) {
      if (query !== undefined) {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options4 = this.list.filter((item) => {
            return item.label.toLowerCase().includes(query.toLowerCase())
          })
        }, 200)
      } else {
        this.options4 = []
      }
    }
  }
}
</script>
