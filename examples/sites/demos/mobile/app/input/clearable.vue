<template>
  <div class="demo-input">
    <tiny-input v-model="input" clearable></tiny-input>
  </div>
</template>

<script>
import { Input } from '@opentiny/vue'

export default {
  components: {
    TinyInput: Input
  },
  data() {
    return {
      input: '可一键清空'
    }
  }
}
</script>

<style scoped>
.demo-input {
  padding: 20px 16px;
  height: 100%;
  background: #f5f5f5;
}
</style>
