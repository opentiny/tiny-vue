<template>
  <div class="demo-input">
    <tiny-input
      type="textarea"
      v-model="textarea"
      :autosize="{ minRows: 2, maxRows: 5 }"
      :hover-expand="true"
    ></tiny-input>
  </div>
</template>

<script>
import { TinyInput } from '@opentiny/vue'

export default {
  components: {
    TinyInput
  },
  data() {
    return {
      textarea: ''
    }
  }
}
</script>

<style scoped>
.demo-input .tiny-textarea {
  width: 400px;
}
</style>
