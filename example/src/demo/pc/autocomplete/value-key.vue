<template>
  <div class="demo-autocomplete">
    <tiny-autocomplete v-model="value" value-key="name" :fetch-suggestions="querySearch" placeholder="请输入内容"></tiny-autocomplete>
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
      list: [],
      value: ''
    }
  },
  methods: {
    querySearch(queryString, cb) {
      let list = this.list
      let res = queryString ? list.filter(this.createFilter(queryString)) : list

      // 返回建议列表的数据
      cb(res)
    },
    createFilter(queryString) {
      return (listItem) => listItem.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    },
    loadAll() {
      return [
        {
          name: 'GFD科技公司',
          address: '福州'
        },
        {
          name: 'WWWW科技公司',
          address: '深圳福田区'
        },
        {
          name: 'RFV有限责任公司',
          address: '中山市'
        },
        {
          name: 'TGB公司',
          address: '梅州'
        },
        {
          name: 'YHN科技公司',
          address: '韶关'
        },
        {
          name: '康康物业公司',
          address: '广州天河区'
        }
      ]
    }
  },
  mounted() {
    this.list = this.loadAll()
  }
}
</script>

<style scoped>
.demo-autocomplete .tiny-autocomplete {
  width: 270px;
}
</style>
