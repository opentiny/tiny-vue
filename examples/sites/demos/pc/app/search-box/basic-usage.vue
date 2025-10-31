<template>
  <div class="demo">
    <tiny-search-box v-model="tags" :items="dataSource" />
    <div class="mt10">当前搜索值为：{{ tags }}</div>
  </div>
</template>
<script>
import { dataSource } from "./data-source";
import TinySearchBox from "@opentiny/vue-search-box";

export default {
  components: {
    TinySearchBox,
  },
  data() {
    return {
      tags: [],
      dataSource,
    };
  },
};
</script>
