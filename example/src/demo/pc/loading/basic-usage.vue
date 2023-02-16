<template>
  <div>
    <button @click="closeLoading">close Loading</button>
    <div id="tiny-loading1" style="width: 100%; height: 120px"></div>
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
