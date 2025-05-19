<template>
  <div>
    <tiny-search class="demo-search" v-model="value1" size="medium" placeholder="medium" clearable></tiny-search>
    <tiny-search class="demo-search" v-model="value2" placeholder="small" clearable></tiny-search>
    <tiny-search class="demo-search" v-model="value3" size="mini" placeholder="mini" clearable></tiny-search>
  </div>
</template>

<script>
import { TinySearch } from '@opentiny/vue'

export default {
  components: {
    TinySearch
  },
  data() {
    return {
      value1: '',
      value2: '',
      value3: ''
    }
  }
}
</script>

<style scoped>
.demo-search {
  margin-bottom: 10px;
}
</style>
