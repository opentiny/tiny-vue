<template>
  <div>
    <tiny-user-head
      v-model="labelText"
      class="head-item"
      type="label"
      background-color="#b8d9f9"
      color="#fff"
    ></tiny-user-head>
    <tiny-user-head class="head-item" type="icon" background-color="#2e86de" color="#fff"></tiny-user-head>
  </div>
</template>

<script>
import { TinyUserHead } from '@opentiny/vue'

export default {
  components: {
    TinyUserHead
  },
  data() {
    return {
      labelText: 'Ai'
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-user-head {
  margin-right: 10px;
}
</style>
