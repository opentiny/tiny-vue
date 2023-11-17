<template>
  <div id="tiny-demo-loading-custom-class"></div>
</template>

<script>
import { Loading } from '@opentiny/vue'

export default {
  mounted() {
    Loading.service({
      text: '自定义loading类名',
      customClass: 'new-loading',
      target: document.getElementById('tiny-demo-loading-custom-class'),
      background: 'rgba(0, 0, 0, 0.8)'
    })
  }
}
</script>

<style>
.new-loading .tiny-loading__spinner .tiny-loading__text {
  color: green;
}
#tiny-demo-loading-custom-class {
  height: 120px;
}
</style>
