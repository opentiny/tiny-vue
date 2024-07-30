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

<script>
import { Select, Option, Input } from '@opentiny/vue'

export default {
  components: {
    TinySelect: Select,
    TinyOption: Option,
    TinyInput: Input
  },
  data() {
    return {
      options1: [
        { value: '选项1', label: '北京' },
        { value: '选项2', label: '上海' },
        { value: '选项3', label: '天津' },
        { value: '选项4', label: '重庆' },
        { value: '选项5', label: '深圳' }
      ],
      options2: [],
      value1: '选项1',
      value2: 'Alabama',
      inputVal: '',
      loading: false,
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
  },
  methods: {
    filter(value) {
      const select = this.$refs.selectRef

      if (value) {
        select.state.cachedOptions.forEach((item) => {
          item.state.visible = item.label.includes(value)
        })
      } else {
        select.state.cachedOptions.forEach((item) => {
          item.state.visible = true
        })
      }
    },
    remoteMethod(query) {
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
