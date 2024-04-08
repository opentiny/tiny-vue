<template>
  <div class="demo-input">
    <tiny-input v-model="input1" counter :maxlength="10"></tiny-input>

    <tiny-input v-model="input2" type="textarea" show-word-limit :maxlength="20"></tiny-input>
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
      input1: 'counter 示例',
      input2: 'show-word-limit 示例'
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

.demo-input [class^='tiny'] {
  margin-bottom: 8px;
}
</style>
