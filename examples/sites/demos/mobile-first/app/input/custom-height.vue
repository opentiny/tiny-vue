<template>
  <tiny-input type="textarea" :height="100" v-model="input" placeholder="resize 为默认"></tiny-input>
</template>

<script>
import { Input } from '@opentiny/vue'

export default {
  components: {
    TinyInput: Input
  },
  data() {
    return {
      input: ''
    }
  }
}
</script>
