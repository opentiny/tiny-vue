<template>
  <div class="demo-input">
    <p>resize</p>
    <tiny-input type="textarea" v-model="input" resize="vertical" placeholder="resize = vertical (default)"></tiny-input>
    <tiny-input type="textarea" v-model="input" resize="none" placeholder="resize = none"></tiny-input>
    <tiny-input type="textarea" v-model="input" resize="both" placeholder="resize = both"  width="300px"></tiny-input>
    <tiny-input type="textarea" v-model="input" resize="horizontal" placeholder="resize = horizontal"></tiny-input>

    <p>autosize</p>
    <tiny-input type="textarea" v-model="textarea" placeholder="autosize" autosize></tiny-input>
    <tiny-input type="textarea" v-model="textarea" placeholder="autosize = { minRows: 2, maxRows: 3 }" :autosize="{ minRows: 2, maxRows: 3 }"></tiny-input>
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
      input: '',
      textarea: ''
    }
  }
}
</script>

<style scoped>
.demo-input {
  height: 100%;
  padding: 20px 16px;
  background: #f5f5f5;
}

.demo-input .tiny-mobile-textarea {
  margin-bottom: 8px;
}
</style>
