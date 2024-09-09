<template>
  <div>
    <tiny-link @click="handleClick">默认链接</tiny-link>
    <tiny-link value="默认链接2"></tiny-link>
  </div>
</template>

<script>
import { Link } from '@opentiny/vue'

export default {
  components: {
    TinyLink: Link
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
  margin-right: 8px;
}
</style>
