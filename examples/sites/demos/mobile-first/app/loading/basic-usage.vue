<template>
  <div>
    <tiny-button @click="closeLoading">close Loading</tiny-button>
    <div id="tiny-loading1" style="width: 100%; height: 120px"></div>
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
      target: document.getElementById('tiny-loading1'),
      tiny_mode: 'mobile-first'
    })
  },
  methods: {
    closeLoading() {
      this.loadingInstance.close()
    }
  }
}
</script>
