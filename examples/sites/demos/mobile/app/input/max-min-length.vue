<template>
  <div class="demo-input">
    <tiny-input v-model="input" counter :maxlength="10" :minlength="5"></tiny-input>
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
      input: '测试长度'
    }
  }
}
</script>

<style scoped>
.demo-input {
  padding-top: 20px;
  height: 100%;
  background: #f5f5f5;
}
</style>
