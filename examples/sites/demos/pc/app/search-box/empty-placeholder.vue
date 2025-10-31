<template>
  <div class="demo">
    <tiny-search-box :items="dataSource" v-model="tags" empty-placeholder="默认自动识别，识别不出按照关键字搜索" />
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
      tags: [],
      dataSource
    }
  }
}
</script>
