<template>
  <ClientOnly>
    <tiny-search-box v-model="tags" :items="dataSource" />
    size="small"
    <tiny-search-box v-model="tags" :items="dataSource" size="small" />
  </ClientOnly>
</template>

<script>
import TinySearchBox from '@opentiny/vue-search-box-saas'
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
