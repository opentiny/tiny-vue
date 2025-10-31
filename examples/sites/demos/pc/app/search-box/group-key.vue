<template>
  <div class="demo">
    <tiny-search-box v-model="tags" :items="items" />
  </div>
</template>

<script>
import TinySearchBox from "@opentiny/vue-search-box";
import { data } from './group-key-data'

export default {
  components: {
    TinySearchBox
  },
  data() {
    return {
      tags: [],
      items: data
    }
  }
}
</script>
