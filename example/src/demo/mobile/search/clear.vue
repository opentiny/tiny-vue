<template>
  <div class="mobile-search-demo">
    <div class="title-demo">
      <h2>SearchBar</h2>
      <div>搜索栏</div>
    </div>
    <tiny-search
      placeholder="搜索"
      @change="handleChange"
      default-value="mmmm"
      @clear="clear"
    ></tiny-search>
    <div :class="[{ 'is-show': value }, 'searchbar-result']">
      <tiny-list
        v-for="item of dataList"
        :key="item.id"
        :content="item.content"
      ></tiny-list>
    </div>
  </div>
</template>

<script>
import { Search, List } from '@opentiny/vue'

export default {
  components: {
    TinySearch: Search,
    TinyList: List
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
    clear() {
      console.log('清除按钮事件')
    },
    handleChange(obj, val) {
      this.value = val
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
</style>
