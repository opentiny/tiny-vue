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

<script>
import { Select, Option } from '@opentiny/vue'

export default {
  components: {
    TinySelect: Select,
    TinyOption: Option
  },
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      value1: '',
      value2: [],
      value3: '',
      options1: [],
      options2: [],
      options3: [],
      list: []
    }
  },
  mounted() {
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
    this.list = states.map((item) => {
      return { value: item, label: item }
    })

    this.$refs.selectRef.state.previousQuery = undefined
  },
  methods: {
    remoteMethod1(query) {
      if (query !== undefined) {
        this.loading1 = true
        setTimeout(() => {
          this.loading1 = false
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
        this.loading2 = true
        setTimeout(() => {
          this.loading2 = false
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
        this.loading3 = true
        setTimeout(() => {
          this.loading3 = false
          this.options3 = this.list.filter((item) => {
            return item.label.toLowerCase().includes(query.toLowerCase())
          })
        }, 300)
      } else {
        this.options3 = []
      }
    }
  }
}
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
