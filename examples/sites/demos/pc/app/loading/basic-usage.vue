<template>
  <div>
    <tiny-button @click="closeLoading">close Loading</tiny-button>
    <div id="tiny-basic-loading1"></div>
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

<style scoped>
#tiny-basic-loading1 {
  width: 100%;
  height: 120px;
  border: 1px solid beige;
  margin-top: 10px;
}
</style>
