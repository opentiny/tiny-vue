<template>
  <div class="demo-input">
    <p>resize 可拖动调整大小</p>
    <tiny-input type="textarea" v-model="value1" resize="none" placeholder="resize = none (default)"></tiny-input>
    <tiny-input type="textarea" v-model="value2" resize="vertical" placeholder="resize = vertical"></tiny-input>
    <tiny-input type="textarea" v-model="value3" resize="both" placeholder="resize = both" width="300px"></tiny-input>
    <tiny-input type="textarea" v-model="value4" resize="horizontal" placeholder="resize = horizontal"></tiny-input>

    <p>autosize 自适应大小</p>
    <tiny-input type="textarea" v-model="value5" placeholder="autosize = true" autosize></tiny-input>
    <tiny-input
      type="textarea"
      v-model="value6"
      placeholder="autosize = { minRows: 2, maxRows: 3 }"
      :autosize="{ minRows: 2, maxRows: 3 }"
    ></tiny-input>
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
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: ''
    }
  }
}
</script>

<style scoped>
.demo-input {
  height: 100%;
  padding: 20px 16px;
  background: #f5f5f5;
  overflow-y: scroll;
  box-sizing: border-box;
}

.demo-input .tiny-mobile-textarea {
  margin-bottom: 8px;
}
</style>
