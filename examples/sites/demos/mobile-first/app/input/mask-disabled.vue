<template>
  <div class="w-40">
    <tiny-input v-model="input" mask disabled></tiny-input>
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
      input: '文字过长时会显示点点点，并且鼠标悬浮出现tip'
    }
  }
}
</script>
