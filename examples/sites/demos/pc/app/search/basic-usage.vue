<template>
  <div>
    <tiny-search v-model="value" placeholder="请输入关键词" :maxlength="10"></tiny-search>
    <div class="mt10">当前搜索值为：{{ value }}</div>
  </div>
</template>

<script lang="jsx">
import { TinySearch } from '@opentiny/vue'

export default {
  components: {
    TinySearch
  },
  data() {
    return {
      value: '默认值'
    }
  }
}
</script>
