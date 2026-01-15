<template>
  <div class="demo">
    <tiny-search-box v-model="tags" :show-help="true" :items="dataSource" @help="handleHelp" />
  </div>
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
  },
  methods: {
    handleHelp() {
      console.log('Help Event')
    }
  }
}
</script>
