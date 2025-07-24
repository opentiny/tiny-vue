<template>
  <div class="display-only">
    <tiny-autocomplete
      v-model="value"
      display-only
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
    ></tiny-autocomplete>
  </div>
</template>

<script>
import { TinyAutocomplete } from '@opentiny/vue'

export default {
  components: {
    TinyAutocomplete
  },
  data() {
    return {
      restaurants: [],
      value: 'Autocomplete 自动完成'
    }
  },
  methods: {
    querySearch(queryString, cb) {
      let restaurants = this.restaurants
      let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter(queryString) {
      return (restaurant) => restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    },
    loadAll() {
      return [
        {
          value: 'GFD 科技有限公司',
          address: '福州'
        },
        {
          value: 'WWWW 科技有限公司',
          address: '深圳福田区'
        },
        {
          value: 'RFV 有限责任公司',
          address: '中山市'
        },
        {
          value: 'TGB 有限公司',
          address: '梅州'
        },
        {
          value: 'YHN 科技有限公司',
          address: '韶关'
        },
        {
          value: '康康物业有限公司',
          address: '广州天河区'
        }
      ]
    }
  },
  mounted() {
    this.restaurants = this.loadAll()
  }
}
</script>

<style scoped>
.display-only .tiny-autocomplete {
  width: 270px;
}
</style>
