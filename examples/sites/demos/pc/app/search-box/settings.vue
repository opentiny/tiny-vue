<template>
  <div class="demo">
    <tiny-search-box v-model="tags" :default-field="defaultField" :items="dataSource" />
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
      defaultField: 'testRegion',
      dataSource
    }
  }
}
</script>
