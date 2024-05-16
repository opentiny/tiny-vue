<template>
  <div>
    <div>场景1：远程搜索(单选)</div>
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
      loading-text="Loading..."
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

<script>
import { BaseSelect, Option, Button } from '@opentiny/vue'

export default {
  components: {
    TinyBaseSelect: BaseSelect,
    TinyOption: Option,
    TinyButton: Button
  },
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: false,
      loading5: false,
      value1: '',
      value2: [],
      value3: '',
      value4: [],
      value5: [],
      value6: '',
      options1: [],
      options2: [],
      options3: [],
      options4: [],
      options5: [],
      options6: [],
      list: [],
      trim: false
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
    },
    remoteMethod4(query) {
      if (query !== undefined) {
        this.loading4 = true
        setTimeout(() => {
          this.loading4 = false
          this.options4 = this.list.filter((item) => {
            return item.label.toLowerCase().includes(query.toLowerCase())
          })
        }, 200)
      } else {
        this.options4 = []
      }
    },
    remoteMethod5(query) {
      if (query !== undefined) {
        this.loading5 = true
        setTimeout(() => {
          this.loading5 = false
          this.options5 = this.list.filter((item) => {
            return item.label.toLowerCase().includes(query.toLowerCase())
          })
        }, 200)
      } else {
        this.options5 = []
      }
    },
    remoteMethod6(query) {
      if (query !== undefined) {
        setTimeout(() => {
          this.options6 = this.list.filter((item) => {
            return item.label.toLowerCase().includes(query.toLowerCase())
          })
        }, 200)
      } else {
        this.options6 = []
      }
    },
    changeVal() {
      this.value6 = '        Wyoming'
    },
    resetVal() {
      this.value6 = ''
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
</style>
