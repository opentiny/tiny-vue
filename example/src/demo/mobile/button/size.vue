<template>
  <div class="button-wrap">
    <tiny-button>默认尺寸</tiny-button>
    <tiny-button type="primary" size="large">large</tiny-button>
    <tiny-button type="success" size="medium">medium</tiny-button>
    <tiny-button type="info" size="small">small</tiny-button>
    <tiny-button type="warning" size="mini">mini</tiny-button>
  </div>
</template>

<script>
import { Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.button-wrap {
  padding: 0 10px;
}
.button-wrap .tiny-mobile-button {
  margin-right: 16px;
  margin-bottom: 16px;
}
</style>
