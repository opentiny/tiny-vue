<template>
  <div class="button-wrap">
    <p>主要按钮</p>
    <tiny-button type="primary">主要按钮</tiny-button>
    <p>次要按钮</p>
    <tiny-button type="secondary">次要按钮</tiny-button>
    <p>危险按钮型</p>
    <tiny-button type="danger">危险按钮</tiny-button>
    <p>文字按钮</p>
    <tiny-button type="text">文字按钮</tiny-button>
    <p>纯图标类型</p>
    <tiny-button type="icon" :icon="IconMail"></tiny-button>
    <p>图标文字类型</p>
    <tiny-button type="icon" :icon="IconMail" text="图标按钮"></tiny-button>
  </div>
</template>

<script lang="jsx">
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
