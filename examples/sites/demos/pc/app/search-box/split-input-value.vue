<template>
  <div class="demo">
    <tiny-search-box v-model="tags" :items="items" :split-input-value="'|'" />
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
      tags: []
    }
  }
}
</script>
