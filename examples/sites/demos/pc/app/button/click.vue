<template>
  <tiny-button @click="click">默认按钮</tiny-button>
</template>

<script>
import { TinyButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyButton
  },
  methods: {
    click() {
      TinyModal.message({ message: 'click', status: 'info' })
    }
  }
}
</script>
