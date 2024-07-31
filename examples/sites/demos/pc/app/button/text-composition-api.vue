<template>
  <div>
    <div class="title">纯图标按钮：</div>
    <tiny-button type="text" :icon="TinyIconMail"> </tiny-button>
    <tiny-button type="text" :icon="TinyIconMail" disabled> </tiny-button>

    <div class="title">纯文本按钮：</div>
    <tiny-button type="text" text="文本按钮"> </tiny-button>
    <tiny-button type="text" text="文本按钮" disabled></tiny-button>

    <div class="title">图标加文字按钮：</div>
    <tiny-button type="text" :icon="TinyIconMail" text="图标加文字"> </tiny-button>
    <tiny-button type="text" :icon="TinyIconMail" text="图标加文字" disabled> </tiny-button>
  </div>
</template>

<script setup>
import { iconMail } from '@opentiny/vue-icon'
import { Button as TinyButton } from '@opentiny/vue'

const TinyIconMail = iconMail()
</script>

<style scoped>
.title {
  margin-top: 16px;
  padding: 10px 0 10px 0;
  font-size: 16px;
  font-weight: bold;
}
.tiny-button {
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 24px;
}
</style>
