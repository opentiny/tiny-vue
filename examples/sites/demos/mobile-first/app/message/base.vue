<template>
  <div class="content">
    <tiny-button @click="messageClick" :reset-time="0"> message 提示框 </tiny-button>
  </div>
</template>

<script>
import { TinyButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyButton
  },
  methods: {
    messageClick() {
      TinyModal.message('message 提示框')
    }
  }
}
</script>
