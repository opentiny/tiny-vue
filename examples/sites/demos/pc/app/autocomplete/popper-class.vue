<template>
  <div class="autocomplete-demo">
    <tiny-autocomplete
      v-model="value"
      value-key="name"
      :fetch-suggestions="querySearch"
      popper-class="my-autocomplete"
      :popper-append-to-body="false"
      placeholder="请输入内容"
    >
      <template #default="{ slotScope }">
        <div class="name">{{ slotScope.name }}</div>
        <span class="addr">{{ slotScope.address }}</span>
      </template>
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
      value: '',
      popperAppendToBody: true
    }
  },
  mounted() {
    this.restaurants = this.loadAll()
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
          name: 'GFDDDDDDD 科技 YX 公司',
          address: '福州'
        },
        {
          name: 'WWWWWWWWWW 科技 YX 公司',
          address: '深圳福田区'
        },
        {
          name: 'RFVVVVVV 有限责任公司',
          address: '中山市'
        },
        {
          name: 'TGBGBBBBBBBBYX 公司',
          address: '梅州'
        },
        {
          name: 'YHNNNNNNN 科技 YX 公司',
          address: '韶关'
        },
        {
          name: '康康物业 YX 公司',
          address: '广州天河区'
        }
      ]
    }
  }
}
</script>

<style>
.my-autocomplete li .name {
  text-overflow: ellipsis;
  overflow: hidden;
}

.my-autocomplete li .addr {
  display: block;
  font-size: 12px;
  line-height: 18px;
  color: #c2c2c2;
}
</style>
