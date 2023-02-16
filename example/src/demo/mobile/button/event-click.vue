<template>
  <div class="button-wrap">
    <tiny-button @click="click">默认按钮</tiny-button>
  </div>
</template>

<script>
import { Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    click() {
      console.log('click event!!!')
    }
  }
}
</script>

<style scoped>
.button-wrap {
  padding: 0 10px;
}
.button-wrap .tiny-mobile-button:not(:nth-child(3n)) {
  margin-right: 16px;
  margin-bottom: 16px;
}
</style>
