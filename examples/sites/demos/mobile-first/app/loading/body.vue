<template>
  <div>
    <tiny-button @click="isBody = !isBody" style="max-width: unset">
      设置v-loading.body的值为 {{ !isBody }}
    </tiny-button>
    <div id="boxnine" v-loading.body="isBody"></div>
  </div>
</template>

<script>
import { Loading, Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  directives: {
    loading: Loading.directive
  },
  data() {
    return {
      isBody: false
    }
  }
}
</script>

<style scoped>
#boxnine {
  height: 120px;
}
</style>
