<template>
  <div>
    <tiny-button @click="handleClick" v-loading.lock.fullscreen="fullscreenLoading" style="max-width: unset">
      指令方式加载全屏Loading
    </tiny-button>
    <tiny-button @click="handleClick2" style="max-width: unset"> 静态方法加载全屏Loading </tiny-button>
  </div>
</template>

<script>
import { Button, Loading } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  directives: {
    loading: Loading.directive
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
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
        tiny_mode: 'mobile-first'
      })
      setTimeout(() => {
        loading.close()
      }, 2500)
    }
  }
}
</script>
