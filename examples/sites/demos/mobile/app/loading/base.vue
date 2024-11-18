<template>
  <div class="demo-loading">
    <tiny-button type="secondary" @click="closeLoading">关闭 Loading</tiny-button>
    <div id="loading-box"></div>
  </div>
</template>

<script>
import { TinyLoading, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyButton
  },
  data() {
    return {
      loadingInstance: null
    }
  },
  mounted() {
    this.loadingInstance = TinyLoading.service({
      tiny_mode: 'mobile',
      target: document.getElementById('loading-box')
    })
  },
  methods: {
    closeLoading() {
      this.loadingInstance.close()
    }
  }
}
</script>

<style scoped>
#loading-box {
  height: 200px;
  margin-top: 16px;
}
</style>
