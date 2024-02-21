<template>
  <div class="button-wrap">
    <h3>按钮不可用</h3>
    <tiny-button type="primary" disabled>主要按钮不可用</tiny-button>
    <tiny-button type="secondary" disabled>次要按钮不可用</tiny-button>
    <tiny-button type="text" disabled>文字按钮不可用</tiny-button>
    <tiny-button type="danger" disabled>危险按钮不可用</tiny-button>
    <tiny-button type="icon" :icon="IconMail" disabled></tiny-button>
    <tiny-button type="icon" :icon="IconMail" text="图标按钮" disabled></tiny-button>
  </div>
</template>

<script>
import { Button } from '@opentiny/vue'
import { iconMail } from '@opentiny/vue-icon'

export default {
  components: {
    TinyButton: Button
  },
  data() {
    return {
      IconMail: iconMail()
    }
  }
}
</script>

<style scoped>
body {
  overflow: hidden;
}
.button-wrap {
  padding: 0 10px;
  overflow-y: scroll;
  height: 100%;
}
.button-wrap .tiny-mobile-button {
  margin-right: 16px;
  margin-bottom: 16px;
}
</style>
