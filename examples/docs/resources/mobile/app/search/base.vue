<template>
  <div class="mobile-search-demo">
    <div class="title-demo">
      <h2>SearchBar</h2>
      <div>搜索栏</div>
    </div>
    <div class="title">primary</div>
    <tiny-search v-model="value" @search="handleSearch"></tiny-search>
    <div :class="[{ 'is-show': value }, 'searchbar-result']">
      {{ value }}
    </div>

    <div class="title">gray</div>
    <tiny-search placeholder="搜索placeholder" themeType="gray" @search="handleSearch"></tiny-search>
  </div>
</template>

<script lang="jsx">
import { Search } from '@opentiny/vue'

export default {
  components: {
    TinySearch: Search
  },
  data() {
    return {
      value: '',
      dataList: [
        {
          id: 1,
          content: '实时搜索文本1'
        },
        {
          id: 2,
          content: '实时搜索文本2'
        },
        {
          id: 3,
          content: '实时搜索文本3'
        },
        {
          id: 4,
          content: '实时搜索文本4'
        }
      ]
    }
  },
  methods: {
    handleChange(obj, val) {
      this.value = val
    },
    handleSearch(obj, val) {
      alert(val)
    }
  }
}
</script>

<style scoped>
.mobile-search-demo {
  height: 100%;
  background: #f4f4f4;
}
.mobile-search-demo .title-demo {
  padding: 40px;
}
.searchbar-result {
  display: none;
}
.searchbar-result.is-show {
  display: block;
}

.title {
  font-size: 20px;
  margin: 20px 0;
}
</style>
