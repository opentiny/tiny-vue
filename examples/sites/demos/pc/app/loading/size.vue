<template>
  <div class="tiny-deom-size-loading">
    <div id="tiny-size-loading1"></div>
    <div id="tiny-size-loading2"></div>
    <div id="tiny-size-loading3"></div>
  </div>
</template>

<script>
import { Loading } from '@opentiny/vue'

export default {
  data() {
    return {
      loadingInstance: null
    }
  },
  mounted() {
    this.loadingInstance = Loading.service({
      target: document.getElementById('tiny-size-loading1'),
      size: 'small'
    })
    this.loadingInstance = Loading.service({
      target: document.getElementById('tiny-size-loading2'),
      size: 'medium'
    })
    this.loadingInstance = Loading.service({
      target: document.getElementById('tiny-size-loading3'),
      size: 'large'
    })
  }
}
</script>

<style>
.tiny-deom-size-loading {
  display: flex;
}

.tiny-deom-size-loading > * {
  width: 100px;
  height: 100px;
}
</style>