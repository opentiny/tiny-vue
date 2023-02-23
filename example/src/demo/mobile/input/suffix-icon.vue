<template>
  <div class="input-wrap">
    <tiny-input v-model="input" placeholder="请输入内容" :suffix-icon="IconDialog"></tiny-input>
  </div>
</template>

<script>
import { Input } from '@opentiny/vue'
import { iconDialog } from '@opentiny/vue-icon'

export default {
  components: {
    TinyInput: Input
  },
  data() {
    return {
      input: '',
      IconDialog: iconDialog()
    }
  }
}
</script>
<style>
.input-wrap {
  padding-top: 20px;
  height: 100%;
  background: #f4f4f4;
}
</style>
