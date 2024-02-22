<template>
  <div>
    <tiny-button @click="closeLoading">close Loading</tiny-button>
    <div id="tiny-loading1" style="width: 100%; height: 120px"></div>
  </div>
</template>

<script>
import { Loading, Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  data() {
    return {
      loadingInstance: null
    }
  },
  mounted() {
    this.loadingInstance = Loading.service({
      target: document.getElementById('tiny-loading1')
    })
  },
  methods: {
    closeLoading() {
      this.loadingInstance.close()
    }
  }
}
</script>
