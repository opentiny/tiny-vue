<template>
  <div>
    <tiny-button @click="handleClick" style="max-width: unset">设置v-loading.body的值为true</tiny-button>
    <div id="boxnine" v-loading.body="isBody"></div>
  </div>
</template>

<script lang="jsx">
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
  },
  mounted() {
    Loading.service({
      lock: true,
      text: '同 v——loading 指令中的 body 修饰符',
      target: document.getElementById('boxnine'),
      background: 'rgba(0, 0, 0, 0.8)'
    })
  },
  methods: {
    handleClick() {
      this.isBody = true
      setTimeout(() => {
        this.isBody = false
      }, 20000)
    }
  }
}
</script>

<style scoped>
#boxnine {
  height: 120px;
}
</style>
