<template>
  <div class="demo-autocomplete">
    <tiny-autocomplete class="pend-slot" v-model="value" :fetch-suggestions="querySearch">
      <template #prepend>前置内容</template>
      <template #append>后置内容</template>
    </tiny-autocomplete>
    <tiny-autocomplete class="fix-slot" v-model="value" :fetch-suggestions="querySearch">
      <template #prefix>
        <tiny-icon-edit />
      </template>
      <template #suffix>
        <tiny-icon-association />
      </template>
    </tiny-autocomplete>
    <tiny-autocomplete class="default-slot" v-model="value" :fetch-suggestions="querySearch">
      <template #default="{ slotScope }">
        <div>{{ slotScope.value }}</div>
        <span class="default-slot-buttom">{{ slotScope.address }}</span>
      </template>
    </tiny-autocomplete>
  </div>
</template>

<script>
import { Autocomplete } from '@opentiny/vue'
import { IconEdit, IconAssociation } from '@opentiny/vue-icon'

export default {
  components: {
    TinyAutocomplete: Autocomplete,
    TinyIconEdit: IconEdit(),
    TinyIconAssociation: IconAssociation()
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
          value: 'GFD科技YX公司',
          address: '福州'
        },
        {
          value: 'WWWW科技YX公司',
          address: '深圳福田区'
        },
        {
          value: 'RFV有限责任公司',
          address: '中山市'
        },
        {
          value: 'TGBYX公司',
          address: '梅州'
        },
        {
          value: 'YHN科技YX公司',
          address: '韶关'
        },
        {
          value: '康康物业YX公司',
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
.pend-slot, .fix-slot {
  margin-right: 12px;
}

.default-slot-buttom {
  font-size: 12px;
  color: #a29b91
}
</style>
