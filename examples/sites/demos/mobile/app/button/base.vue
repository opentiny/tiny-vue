<template>
  <div class="button-wrap">
    <p>按钮类型</p>
    <tiny-button type="primary" reset-time="500">主要按钮</tiny-button>
    <tiny-button type="secondary">次要按钮</tiny-button>
    <tiny-button type="danger">危险按钮</tiny-button>
    <tiny-button type="text">文字按钮</tiny-button>
    <tiny-button type="icon" :icon="IconMail"></tiny-button>
    <tiny-button type="icon" :icon="IconMail" text="图标按钮"></tiny-button>
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
