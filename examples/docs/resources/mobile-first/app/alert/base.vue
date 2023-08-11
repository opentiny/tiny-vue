<template>
  <div>
    <tiny-alert description="type 为默认值 info"></tiny-alert>
    <tiny-alert type="error" description="type 为 error"></tiny-alert>
    <tiny-alert type="success" description="type 为 success"></tiny-alert>
    <tiny-alert type="warning" description="type 为 warning"></tiny-alert>
    <tiny-alert
      type="warning"
      single-line
      scrolling
      description="single-line 开启单行，scrolling 开启滚动，通过属性 close-text 自定义关闭按钮文本，通过 center 属性可使文字显示居中,通过 type 设置不同的类型。可选值：success、warning、info、error，默认值：info "
    ></tiny-alert>
  </div>
</template>

<script>
import { Alert } from '@opentiny/vue'

export default {
  components: {
    TinyAlert: Alert
  }
}
</script>
