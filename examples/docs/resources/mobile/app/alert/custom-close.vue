<template>
  <div class="alert-wrap">
    <tiny-alert>默认关闭按钮</tiny-alert>
    <tiny-alert :closable="false">
      不可关闭
    </tiny-alert>
    <tiny-alert close-text="关闭">
      自定义关闭按钮为文本
    </tiny-alert>
    <tiny-alert type="warning" description="type 为 warning"></tiny-alert>
  </div>
</template>

<script lang="jsx">
import { Alert } from '@opentiny/vue'

export default {
  components: {
    TinyAlert: Alert
  },
  methods: {
    close() {
      console.log('已关闭！')
    }
  }
}
</script>

<style>
.alert-wrap .tiny-mobile-alert {
  margin-bottom: 8px;
}
</style>
