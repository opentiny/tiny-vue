<template>
  <div class="demo">
    <tiny-search-box v-model="tags" :items="dataSource" />
  </div>
</template>
<script>
import { dataSource } from './data-source'
import TinySearchBox from '@opentiny/vue-search-box-saas'

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
