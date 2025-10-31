<template>
  <div class="demo">
    <tiny-search-box :items="items" v-model="tags" :potential-options="potentialOptions" />
  </div>
</template>

<script>
import TinySearchBox from "@opentiny/vue-search-box";
import { dataSource } from './data-source'

export default {
  components: {
    TinySearchBox
  },
  data() {
    return {
      items: dataSource,
      tags: [],
      potentialOptions: {
        getMatchList: async (keyword) => {
          let result = []
          if (keyword === '名称1') {
            return result
          }
          result = await this.asyncObtain(keyword)
          return result
        }
      }
    }
  },
  methods: {
    asyncObtain(keyword) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([
            {
              label: '名称',
              field: 'testName',
              value: keyword
            },
            {
              label: '可用区',
              field: 'testRegion',
              value: keyword,
              type: 'checkbox'
            }
          ])
        }, 3000)
      })
    }
  }
}
</script>
