<template>
  <div class="content">
    <tiny-button @click="messageClick" :reset-time="0"> message 提示框 </tiny-button>
  </div>
</template>

<script>
import { Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    messageClick() {
      this.$message('message 提示框')
    }
  }
}
</script>
