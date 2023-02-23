<template>
  <div class="demo-autocomplete">
    <tiny-autocomplete v-model="value" value-key="name" :fetch-suggestions="querySearchFn" placeholder="请输入内容"></tiny-autocomplete>
  </div>
</template>

<script>
import { Autocomplete } from '@opentiny/vue'

export default {
  components: {
    TinyAutocomplete: Autocomplete
  },
  data() {
    return {
      filterData: [],
      value: ''
    }
  },
  methods: {
    querySearchFn(queryString, cb) {
      let filterData = this.filterData
      let results = queryString ? filterData.filter(this.createFilter(queryString)) : filterData

      // 调用 callback 返回过滤的列表数据
      cb(results)
    },
    createFilter(queryString) {
      return (restaurant) => restaurant.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    },
    loadAll() {
      return [
        {
          name: 'GFD科技YX公司',
          address: '福州'
        },
        {
          name: 'WWWW科技YX公司',
          address: '深圳福田区'
        },
        {
          name: 'RFV有限责任公司',
          address: '中山市'
        },
        {
          name: 'TGBYX公司',
          address: '梅州'
        },
        {
          name: 'YHN科技YX公司',
          address: '韶关'
        },
        {
          name: '康康物业YX公司',
          address: '广州天河区'
        }
      ]
    }
  },
  mounted() {
    this.filterData = this.loadAll()
  }
}
</script>

<style scoped>
.demo-autocomplete .tiny-autocomplete {
  width: 270px;
}
</style>
