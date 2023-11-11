<template>
  <div>
    <tiny-button @click="handleClick" v-loading.lock.fullscreen="fullscreenLoading">
      指令方式加载全屏Loading
    </tiny-button>
    <tiny-button @click="handleClick2">静态方法加载全屏Loading</tiny-button>
  </div>
</template>

<script>
import { Button, Loading } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  directives: {
    Loading: Loading.directive
  },
  data() {
    return {
      fullscreenLoading: false
    }
  },
  methods: {
    handleClick() {
      this.fullscreenLoading = true
      setTimeout(() => {
        this.fullscreenLoading = false
      }, 2500)
    },
    handleClick2() {
      const loading =  Loading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.8)'
      })
      setTimeout(() => {
        loading.close()
      }, 2500)
    }
  }
}
</script>
