<template>
  <tiny-input v-model="text" placeholder="请输入内容" custom-class="p-8"></tiny-input>
</template>

<script>
import { Input } from '@opentiny/vue'

export default {
  components: {
    TinyInput: Input
  },
  data() {
    return {
      text: ''
    }
  }
}
</script>
