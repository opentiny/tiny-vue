<template>
  <div class="demo-autocomplete">
    <div>
      <div class="title">medium:</div>
      <tiny-autocomplete
        size="medium"
        v-model="value"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
      ></tiny-autocomplete>
    </div>
    <div>
      <div class="title">default:</div>
      <tiny-autocomplete v-model="value" :fetch-suggestions="querySearch" placeholder="请输入内容"></tiny-autocomplete>
    </div>
    <div>
      <div class="title">small:</div>
      <tiny-autocomplete
        size="small"
        v-model="value"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
      ></tiny-autocomplete>
    </div>
    <div>
      <div class="title">small:</div>
      <tiny-autocomplete
        size="mini"
        v-model="value"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
      ></tiny-autocomplete>
    </div>
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
      value: ''
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
          value: 'GFD 科技 YX 公司',
          address: '福州'
        },
        {
          value: 'WWWW 科技 YX 公司',
          address: '深圳福田区'
        },
        {
          value: 'RFV 有限责任公司',
          address: '中山市'
        },
        {
          value: 'TGBYX 公司',
          address: '梅州'
        },
        {
          value: 'YHN 科技 YX 公司',
          address: '韶关'
        },
        {
          value: '康康物业 YX 公司',
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
.demo-autocomplete .tiny-autocomplete {
  width: 270px;
}
.demo-autocomplete > div {
  margin-top: 12px;
}
.demo-autocomplete > div > .title {
  line-height: 26px;
}
</style>
