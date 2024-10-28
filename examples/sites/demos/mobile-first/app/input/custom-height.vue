<template>
  <tiny-input type="textarea" :height="100" v-model="input" placeholder="resize 为默认"></tiny-input>
</template>

<script>
import { TinyInput } from '@opentiny/vue'

export default {
  components: {
    TinyInput
  },
  data() {
    return {
      input: ''
    }
  }
}
</script>
