<template>
  <div>
    <button @click="closeLoading">close Loading</button>
    <div id="tiny-basic-loading1" style="width: 100%; height: 120px"></div>
  </div>
</template>

<script lang="jsx">
import { Loading } from '@opentiny/vue'

export default {
  data() {
    return {
      loadingInstance: null
    }
  },
  mounted() {
    this.loadingInstance = Loading.service({
      target: document.getElementById('tiny-basic-loading1')
    })
  },
  methods: {
    closeLoading() {
      this.loadingInstance.close()
    }
  }
}
</script>
