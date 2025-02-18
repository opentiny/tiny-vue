<template>
  <div class="demo-autocomplete">
    <tiny-autocomplete
      class="inline-input"
      value-key="name"
      v-model="state1"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
    >
    </tiny-autocomplete>
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
      state1: '',
      timeout: null
    }
  },
  methods: {
    querySearch(queryString, cb) {
      let restaurants = this.restaurants
      let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants

      // 调用 callback 返回建议列表的数据
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 3000 * Math.random())
    },
    createFilter(queryString) {
      return (restaurant) => restaurant.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    },
    loadAll() {
      return [
        {
          name: 'GFD 科技 YX 公司',
          address: '福州'
        },
        {
          name: 'WWWW 科技 YX 公司',
          address: '深圳福田区'
        },
        {
          name: 'RFV 有限责任公司',
          address: '中山市'
        },
        {
          name: 'TGBYX 公司',
          address: '梅州'
        },
        {
          name: 'YHN 科技 YX 公司',
          address: '韶关'
        },
        {
          name: '康康物业 YX 公司',
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
</style>
