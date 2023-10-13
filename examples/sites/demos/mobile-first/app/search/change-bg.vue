<template>
  <div>
    <tiny-search v-model="value" placeholder="请输入关键词" change-bg-color></tiny-search>
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
