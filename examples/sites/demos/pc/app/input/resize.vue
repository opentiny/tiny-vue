<template>
  <div class="demo-input">
    <p>resize</p>
    <tiny-input type="textarea" v-model="input" placeholder="default"></tiny-input>
    <tiny-input type="textarea" v-model="input" resize="none" placeholder="resize = none"></tiny-input>
    <tiny-input type="textarea" v-model="input" resize="both" placeholder="resize = both"></tiny-input>
    <tiny-input type="textarea" v-model="input" resize="horizontal" placeholder="resize = horizontal"></tiny-input>
    <tiny-input type="textarea" v-model="input" resize="vertical" placeholder="resize = vertical"></tiny-input>
    <p>autosize</p>
    <tiny-input
      type="textarea"
      v-model="textarea"
      placeholder="autosize = { minRows: 2, maxRows: 3 }"
      :autosize="{ minRows: 2, maxRows: 3 }"
    ></tiny-input>
    <tiny-input type="textarea" v-model="textarea" placeholder="autosize" autosize></tiny-input>
    <p>hover-expand</p>
    <tiny-input
      class="expand"
      type="textarea"
      v-model="hoverText"
      placeholder="hover-expand autosize = { minRows: 6, maxRows: 10 }"
      :autosize="{ minRows: 6, maxRows: 10 }"
      hover-expand
    ></tiny-input>
    <tiny-input
      class="expand"
      type="textarea"
      v-model="hoverText"
      placeholder="autosize  hover-expand"
      autosize
      hover-expand
    ></tiny-input>
    <tiny-input
      type="textarea"
      v-model="displayOnlyText"
      placeholder="autosize  hover-expand display-only"
      autosize
      hover-expand
      display-only
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
      input: '',
      textarea: '',
      hoverText: '',
      displayOnlyText: 'value 的内容'
    }
  }
}
</script>

<style lang="less" scoped>
.demo-input {
  .tiny-textarea {
    width: 400px;
    margin: 5px;
  }
  .expand {
    width: 200px;
  }
}
</style>
