<template>
  <div>
    <tiny-link @click="handleClick">默认链接</tiny-link>
    <tiny-link value="默认链接2"></tiny-link>
  </div>
</template>

<script>
import { TinyLink } from '@opentiny/vue'

export default {
  components: {
    TinyLink
  },
  methods: {
    handleClick() {
      console.log('clicked')
    }
  }
}
</script>

<style scoped>
.tiny-link {
  margin-right: 48px;
}
</style>
