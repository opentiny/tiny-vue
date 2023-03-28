<template>
  <div class="demo-autocomplete">
    <tiny-autocomplete value-key="name" v-model="state1" :fetch-suggestions="querySearch" placeholder="请输入内容">
      <template #default="{ slotScope }">
        <div>{{ slotScope.name }}</div>
        <span style="font-size: 12px; color: #a29b91">{{ slotScope.address }}</span>
      </template>
    </tiny-autocomplete>
  </div>
</template>

<script lang="jsx">
import { Autocomplete } from '@opentiny/vue'

export default {
  components: {
    TinyAutocomplete: Autocomplete
  },
  data() {
    return {
      restaurants: [],
      state1: '',
      state2: ''
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
    this.restaurants = this.loadAll()
  }
}
</script>

<style scoped>
.demo-autocomplete .tiny-autocomplete {
  width: 270px;
}
</style>
