<template>
  <div>
    <tiny-search v-model="value" placeholder="请输入关键词" show-button></tiny-search>
    {{ value }}
  </div>
</template>

<script>
import { Search } from '@opentiny/vue'

export default {
  components: {
    TinySearch: Search
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>
